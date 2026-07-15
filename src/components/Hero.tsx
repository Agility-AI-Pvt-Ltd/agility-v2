function CurvedGrid() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Horizontal curved lines */}
      {Array.from({ length: 18 }).map((_, i) => {
        const y = 40 + i * 48;
        const bulge = 18 + Math.abs(i - 9) * 2.5;
        return (
          <path
            key={`h-${i}`}
            d={`M -40 ${y} Q 720 ${y + bulge} 1480 ${y}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
        );
      })}
      {/* Vertical dashed meridians */}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = 60 + i * 96;
        const curve = (i - 7) * 8;
        return (
          <path
            key={`v-${i}`}
            d={`M ${x} -20 Q ${x + curve} 450 ${x} 920`}
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
            strokeDasharray="3 10"
          />
        );
      })}
    </svg>
  );
}

function Marker({
  label,
  icon,
  className,
  delay = "0s",
}: {
  label: string;
  icon: "square" | "triangle" | "target";
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={[
        "hero-marker pointer-events-none absolute z-10 hidden flex-col items-center gap-2 text-white/80 sm:flex",
        className,
      ].join(" ")}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      {icon === "square" && (
        <span className="relative size-3.5 border border-white/70">
          <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
        </span>
      )}
      {icon === "triangle" && (
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
          <path
            d="M7 1L13 11H1L7 1Z"
            stroke="rgba(255,255,255,0.75)"
            strokeWidth="1.2"
          />
        </svg>
      )}
      {icon === "target" && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="rgba(255,255,255,0.75)" />
          <circle cx="7" cy="7" r="2.5" stroke="rgba(255,255,255,0.75)" />
          <circle cx="7" cy="7" r="0.8" fill="rgba(255,255,255,0.8)" />
        </svg>
      )}
      <span className="font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  );
}

function ScrollMouse() {
  return (
    <div
      className="hero-reveal hero-reveal-delay-4 absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center sm:bottom-8"
      aria-hidden="true"
    >
      <div className="relative flex h-9 w-5 justify-center rounded-full border border-white/55 pt-1.5">
        <span className="hero-scroll-dot size-1 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col items-center justify-center overflow-hidden bg-black sm:min-h-[calc(100svh-4rem)]">
      <CurvedGrid />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_75%)]" />

      <Marker
        label="Vision"
        icon="square"
        delay="0s"
        className="left-[8%] top-[22%] lg:left-[12%] lg:top-[20%]"
      />
      <Marker
        label="Precise"
        icon="triangle"
        delay="0.8s"
        className="bottom-[28%] left-[10%] lg:bottom-[26%] lg:left-[14%]"
      />
      <Marker
        label="Smax8"
        icon="target"
        delay="1.4s"
        className="right-[8%] top-[42%] lg:right-[14%] lg:top-[40%]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 pb-16 pt-10 text-center sm:px-6 sm:pb-20">
        <h1 className="hero-reveal font-[family-name:var(--font-cursive)] text-[clamp(5rem,16vw,9.5rem)] leading-[0.95] text-white">
          Agility AI
        </h1>

        <p className="hero-reveal hero-reveal-delay-1 mt-7 max-w-[20ch] font-[family-name:var(--font-geist-mono)] text-[clamp(1.35rem,3.8vw,2.35rem)] font-medium leading-[1.25] tracking-[0.01em] text-white sm:mt-8 sm:max-w-[24ch]">
          AI integration, adoption, and enablement
        </p>

        <p className="hero-reveal hero-reveal-delay-2 mt-6 max-w-[640px] font-[family-name:var(--font-geist-mono)] text-[14px] leading-relaxed tracking-[0.02em] text-white/55 sm:mt-7 sm:text-[17px] sm:leading-[1.7]">
          We work at the intersection of AI adoption and implementation—helping
          organisations not just deploy AI systems, but build the internal
          capability to run, govern, and extend them.
        </p>

        <div className="hero-reveal hero-reveal-delay-3 mt-9 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
          <a
            href="#get-started"
            className="cta-cut inline-flex h-12 items-center justify-center bg-white px-7 font-[family-name:var(--font-geist-mono)] text-[13px] font-medium uppercase tracking-[0.06em] text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98] sm:h-11"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="cta-cut inline-flex h-12 items-center justify-center border border-white/80 bg-transparent px-7 font-[family-name:var(--font-geist-mono)] text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-[0.98] sm:h-11"
          >
            Talk to Us
          </a>
        </div>
      </div>

      <ScrollMouse />
    </section>
  );
}
