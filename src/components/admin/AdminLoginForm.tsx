"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const body = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(body.error || "Login failed.");
      }
      router.replace("/admin/chats");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md border border-white/10 bg-[#12151a] p-6 sm:p-8"
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-white/45">
        Admin
      </p>
      <h1 className="mt-3 text-[1.75rem] font-semibold tracking-[-0.02em]">
        Sign in
      </h1>
      <p className="mt-2 text-[14px] text-white/50">
        Use the admin email and password configured for this site.
      </p>

      <label className="mt-6 block">
        <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-white/45">
          Email
        </span>
        <input
          required
          type="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={loading}
          className="h-11 w-full border border-white/15 bg-black/40 px-3 text-[14px] text-white outline-none focus:border-white/40 disabled:opacity-60"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.12em] text-white/45">
          Password
        </span>
        <input
          required
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={loading}
          className="h-11 w-full border border-white/15 bg-black/40 px-3 text-[14px] text-white outline-none focus:border-white/40 disabled:opacity-60"
        />
      </label>

      {error ? (
        <p className="mt-4 text-[13px] text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex h-11 w-full items-center justify-center bg-white px-4 font-[family-name:var(--font-geist-mono)] text-[12px] font-medium uppercase tracking-[0.08em] text-black transition-colors hover:bg-white/90 disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
