"use client";

import { useEffect, useRef, useState } from "react";

const TARGET = 120;
const DURATION_MS = 2200;

export default function SessionCounter() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(TARGET * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  return (
    <p
      ref={ref}
      className="mt-3 max-w-[54ch] text-[14px] leading-relaxed text-neutral-600 sm:mt-4 sm:text-[15px]"
    >
      We&apos;ve run{" "}
      <span className="font-[family-name:var(--font-geist-mono)] text-[1.25em] font-semibold tabular-nums text-neutral-950">
        {started ? count : TARGET}+
      </span>{" "}
      AI enablement sessions across industries, helping people actually adapt to
      working with AI, not just hear about it.
    </p>
  );
}
