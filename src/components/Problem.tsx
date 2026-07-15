function MonolithArt() {
  return (
    <svg
      viewBox="0 0 520 720"
      className="h-full w-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="halftone-lines"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <rect width="4" height="1.35" fill="#111" />
        </pattern>
        <linearGradient id="sky-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f4f4" />
          <stop offset="55%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#d6d6d6" />
        </linearGradient>
        <clipPath id="scene-clip">
          <rect width="520" height="720" />
        </clipPath>
      </defs>

      <g clipPath="url(#scene-clip)">
        <rect width="520" height="720" fill="url(#sky-fade)" />

        {Array.from({ length: 90 }).map((_, i) => (
          <line
            key={`sky-${i}`}
            x1="0"
            y1={i * 8}
            x2="520"
            y2={i * 8}
            stroke="#cfcfcf"
            strokeWidth="0.8"
            opacity={0.55}
          />
        ))}

        <path
          d="M0 520 Q130 470 260 510 T520 490 L520 720 L0 720 Z"
          fill="#bdbdbd"
          opacity="0.55"
        />
        <path
          d="M0 560 Q160 520 300 555 T520 540 L520 720 L0 720 Z"
          fill="#a8a8a8"
          opacity="0.5"
        />

        <ellipse
          cx="250"
          cy="620"
          rx="70"
          ry="16"
          fill="#000"
          opacity="0.18"
        />

        <g transform="translate(190 140)">
          <rect width="120" height="470" fill="#0a0a0a" />
          <rect
            width="120"
            height="470"
            fill="url(#halftone-lines)"
            opacity="0.55"
          />
          <path d="M120 0 L148 28 L148 498 L120 470 Z" fill="#1a1a1a" />
          <path
            d="M120 0 L148 28 L148 498 L120 470 Z"
            fill="url(#halftone-lines)"
            opacity="0.35"
          />
          <path d="M0 0 L28 28 L148 28 L120 0 Z" fill="#2a2a2a" />
          <line
            x1="2"
            y1="8"
            x2="2"
            y2="460"
            stroke="#fff"
            strokeWidth="1.2"
            opacity="0.18"
          />
        </g>

        {Array.from({ length: 40 }).map((_, i) => (
          <circle
            key={`dust-${i}`}
            cx={(i * 73) % 520}
            cy={580 + ((i * 37) % 120)}
            r={0.8 + (i % 3) * 0.4}
            fill="#888"
            opacity="0.35"
          />
        ))}
      </g>
    </svg>
  );
}

export default function Problem() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white text-black"
    >
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
        <div className="relative min-h-[420px] bg-[#ececec] sm:min-h-[520px] lg:min-h-[720px]">
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 28%, 93% 28%, 93% 48%, 100% 48%, 100% 100%, 0 100%)",
            }}
          >
            <MonolithArt />
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20 xl:px-20">
          <h2
            id="about-heading"
            className="max-w-[16ch] text-[clamp(1.85rem,4.4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-neutral-950"
          >
            Your biggest competitor is the version of you that hasn&apos;t
            adopted AI yet.
          </h2>

          <div className="mt-8 flex items-center gap-2.5 border-t border-dashed border-neutral-300 pt-8 sm:mt-10 sm:pt-10">
            <span
              className="size-2.5 shrink-0 bg-[#3b6ef5] sm:size-3"
              aria-hidden="true"
            />
            <p className="font-[family-name:var(--font-geist-mono)] text-[14px] font-medium tracking-[-0.01em] text-[#3b6ef5] sm:text-[16px]">
              Not just AI-powered. AI-fluent.
            </p>
          </div>
        </div>
      </div>

      {/* What we do — adoption vs implementation */}
      <div
        id="services"
        className="border-t border-neutral-200 bg-[#fafafa]"
      >
        <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 md:px-14 lg:px-16 lg:py-20 xl:px-20">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2.5">
              <span
                className="size-2.5 shrink-0 bg-[#3b6ef5] sm:size-3"
                aria-hidden="true"
              />
              <p className="font-[family-name:var(--font-geist-mono)] text-[13px] font-medium tracking-[-0.01em] text-[#3b6ef5] sm:text-[14px]">
                What we do.
              </p>
            </div>
            <h3 className="text-[clamp(1.5rem,3.2vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-neutral-950">
              AI adoption and AI implementation—two jobs, one outcome
            </h3>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-neutral-500 sm:text-[16px] sm:leading-[1.65]">
              Most teams treat them as the same thing. They aren&apos;t. We
              work both sides so AI doesn&apos;t just get installed—it gets
              used, governed, and improved.
            </p>
          </div>

          <div className="mt-10 grid gap-0 border border-neutral-200 bg-white sm:mt-12 md:grid-cols-2">
            <article className="border-b border-neutral-200 p-7 sm:p-8 md:border-b-0 md:border-r md:p-10">
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                AI Adoption
              </p>
              <h4 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                Getting your organisation ready
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-500 sm:text-[15px] sm:leading-[1.7]">
                Adoption is about people, process, and confidence. We help
                teams understand where AI fits, build fluency across roles,
                and create the habits and ownership needed to use AI every
                day—not once in a pilot.
              </p>
              <ul className="mt-5 space-y-2 font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.02em] text-neutral-600 sm:text-[13px]">
                <li className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  Skills, change, and operating cadence
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  Clear ownership and decision rights
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  Governance before sprawl sets in
                </li>
              </ul>
            </article>

            <article className="p-7 sm:p-8 md:p-10">
              <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-[#3b6ef5]">
                AI Implementation
              </p>
              <h4 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                Putting working systems in place
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-500 sm:text-[15px] sm:leading-[1.7]">
                Implementation is the technical delivery. We integrate,
                configure, and ship AI systems into real workflows—so
                models, tools, and data actually run in production and can
                be extended as the business evolves.
              </p>
              <ul className="mt-5 space-y-2 font-[family-name:var(--font-geist-mono)] text-[12px] tracking-[0.02em] text-neutral-600 sm:text-[13px]">
                <li className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  Integration into existing stacks
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  Production-ready rollout and support
                </li>
                <li className="flex gap-2">
                  <span className="text-[#3b6ef5]" aria-hidden="true">
                    —
                  </span>
                  Designed to run, govern, and extend
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
