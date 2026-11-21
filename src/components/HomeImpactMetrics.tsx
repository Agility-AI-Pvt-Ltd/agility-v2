"use client";

import { useEffect, useRef, useState } from "react";

type Metric = {
  id: string;
  end: number;
  start?: number;
  suffix: string;
  label: string;
  /** Optional fixed prefix shown before the animated number (e.g. "5-" for 5-7 hrs). */
  prefix?: string;
  format?: (value: number) => string;
};

const METRICS: Metric[] = [
  {
    id: "trained",
    end: 6300,
    suffix: "+",
    label: "professionals & officials trained",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "programmes",
    end: 60,
    suffix: "+",
    label: "programmes delivered",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "excellent",
    end: 92,
    suffix: "%+",
    label: "rated sessions excellent",
  },
  {
    id: "hours",
    start: 5,
    end: 7,
    prefix: "5-",
    suffix: " hrs",
    label: "saved per week on routine documentation",
  },
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp(
  end: number,
  active: boolean,
  start = 0,
  duration = 1600,
) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!active) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();
    const delta = end - start;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      setValue(Math.round(start + delta * easeOutCubic(progress)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, end, start, duration]);

  return value;
}

function MetricCard({
  metric,
  active,
}: {
  metric: Metric;
  active: boolean;
}) {
  const start = metric.start ?? 0;
  const display = useCountUp(metric.end, active, start);
  const formatted = metric.format
    ? metric.format(display)
    : String(display);

  return (
    <li className="flex min-h-[10.5rem] flex-col rounded-2xl border border-neutral-200 bg-white px-6 py-7 sm:min-h-[11.5rem] sm:px-7 sm:py-8">
      <p className="font-[family-name:var(--font-serif)] text-[clamp(2.1rem,4vw,2.85rem)] font-semibold leading-none tracking-[-0.03em] text-neutral-950">
        {metric.prefix ?? ""}
        {formatted}
        {metric.suffix}
      </p>
      <p className="mt-4 text-[14px] leading-relaxed text-neutral-500 sm:text-[15px]">
        {metric.label}
      </p>
    </li>
  );
}

export default function HomeImpactMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="home-impact-heading"
      className="relative z-10 border-b border-neutral-200 bg-[#f4f4f5] text-black"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-[1100px] px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="font-[family-name:var(--font-geist-mono)] text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Key metrics
            </p>
            <h2
              id="home-impact-heading"
              className="mt-3 font-[family-name:var(--font-serif)] text-[clamp(2rem,4.5vw,3rem)] leading-[1.08] tracking-[-0.03em] text-neutral-950"
            >
              Our <span className="text-neutral-500">Impact</span>
            </h2>
          </div>
          <p className="max-w-[34ch] text-[15px] leading-relaxed text-neutral-500 sm:text-[16px] lg:pb-1 lg:text-right">
            Measurable results across government, PSUs, corporates and
            institutional programmes.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} active={active} />
          ))}
        </ul>
      </div>
    </section>
  );
}
