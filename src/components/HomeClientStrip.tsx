import Image from "next/image";

const CLIENTS = [
  {
    id: "nddb",
    label: "NDDB",
    image: null,
  },
  {
    id: "edii",
    label: "EDII",
    image: null,
  },
  {
    id: "fia",
    label: "FIA",
    image: null,
  },
] as const;

export default function HomeClientStrip() {
  return (
    <section
      aria-label="Organisations we work with"
      className="border-b border-neutral-200 bg-[#f6f6f6] text-black"
    >
      <div className="mx-auto max-w-[1100px] px-6 py-8 sm:px-10 sm:py-10">
        <p className="text-center font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.16em] text-neutral-400">
          Trusted by teams at
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENTS.map((client) => (
            <li key={client.id} className="flex items-center justify-center">
              {client.image ? (
                <Image
                  src={client.image}
                  alt={client.label}
                  width={160}
                  height={48}
                  className="h-10 w-auto max-w-[140px] object-contain opacity-80 sm:h-11"
                />
              ) : (
                <span className="font-[family-name:var(--font-geist-mono)] text-[13px] font-semibold uppercase tracking-[0.2em] text-neutral-300">
                  {client.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
