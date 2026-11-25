import dns from "node:dns/promises";
import { Pool, type QueryResultRow } from "pg";

type SqlTag = <T extends QueryResultRow = QueryResultRow>(
  strings: TemplateStringsArray,
  ...values: unknown[]
) => Promise<T[]>;

let pool: Pool | null = null;
let sql: SqlTag | null = null;
let poolReady: Promise<Pool> | null = null;

export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL?.trim());
}

/** Neon pooler URLs sometimes include channel_binding; node-pg is happier without it. */
function normalizeDatabaseUrl(url: string) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.delete("channel_binding");
    return parsed;
  } catch {
    throw new Error("DATABASE_URL is invalid.");
  }
}

/**
 * Windows getaddrinfo (dns.lookup) can fail when the router DNS refuses Neon hosts.
 * Resolve A records via public DNS, then connect by IP with TLS servername set.
 */
async function resolveHostIpv4(hostname: string) {
  const previous = dns.getServers();
  try {
    dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
    const addresses = await dns.resolve4(hostname);
    if (!addresses.length) {
      throw new Error(`No IPv4 addresses found for ${hostname}`);
    }
    return addresses[0];
  } finally {
    dns.setServers(previous);
  }
}

function createSql(activePool: Pool): SqlTag {
  return async (strings, ...values) => {
    let text = "";
    const params: unknown[] = [];

    for (let index = 0; index < strings.length; index += 1) {
      text += strings[index];
      if (index < values.length) {
        params.push(values[index]);
        text += `$${params.length}`;
      }
    }

    const result = await activePool.query(text, params);
    return result.rows;
  };
}

async function createPool() {
  const rawUrl = process.env.DATABASE_URL?.trim();
  if (!rawUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const parsed = normalizeDatabaseUrl(rawUrl);
  const hostname = parsed.hostname;
  if (!hostname) {
    throw new Error("DATABASE_URL is missing a hostname.");
  }

  let host = hostname;
  try {
    host = await resolveHostIpv4(hostname);
  } catch (error) {
    console.warn(
      "[db] Public DNS resolve failed; falling back to system DNS.",
      error instanceof Error ? error.message : error,
    );
  }

  return new Pool({
    host,
    port: Number(parsed.port || "5432"),
    database: parsed.pathname.replace(/^\//, "") || "neondb",
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    ssl: {
      rejectUnauthorized: false,
      servername: hostname,
    },
    max: 5,
  });
}

async function getPool() {
  if (pool) return pool;
  if (!poolReady) {
    poolReady = createPool()
      .then((created) => {
        pool = created;
        return created;
      })
      .catch((error) => {
        poolReady = null;
        throw error;
      });
  }
  return poolReady;
}

export function getDb() {
  if (!isDatabaseConfigured()) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!sql) {
    const pending = getPool();
    sql = (async (strings, ...values) => {
      const activePool = await pending;
      return createSql(activePool)(strings, ...values);
    }) as SqlTag;
  }

  return sql;
}
