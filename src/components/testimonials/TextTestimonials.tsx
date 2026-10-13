const QUOTES = [
  {
    quote:
      "The sessions were hands-on — we worked on our own documents and workflows, not a generic slide deck.",
    name: "Programme lead",
    role: "National Dairy Development Board",
  },
  {
    quote:
      "People left knowing what to do on Monday morning. That rarely happens with AI training.",
    name: "Faculty member",
    role: "Entrepreneurship Development Institute of India",
  },
  {
    quote:
      "They were clear that adoption and implementation are different problems. Finally someone said it plainly.",
    name: "Head of operations",
    role: "Public sector enterprise",
  },
] as const;

export default function TextTestimonials() {
  return (
    <ul className="grid gap-0 border border-neutral-200 md:grid-cols-3 md:divide-x md:divide-neutral-200">
      {QUOTES.map((item) => (
        <li
          key={item.role}
          className="flex flex-col border-b border-neutral-200 px-5 py-7 last:border-b-0 md:border-b-0 md:px-7 md:py-8"
        >
          <p className="flex-1 text-[15px] leading-relaxed text-neutral-700 sm:text-[16px] sm:leading-[1.65]">
            &ldquo;{item.quote}&rdquo;
          </p>
          <div className="mt-6 border-t border-dashed border-neutral-300 pt-4">
            <p className="text-[13px] font-semibold text-neutral-900">
              {item.name}
            </p>
            <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.1em] text-neutral-400">
              {item.role}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
