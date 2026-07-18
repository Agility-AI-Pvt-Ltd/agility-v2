"use client";

import { useEffect, useRef } from "react";
import { openChatbot } from "@/components/Chatbot";

function hash2(x: number, y: number) {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function mountainSurface(x: number, width: number, height: number) {
  const nx = x / width;

  const peakOffset = nx - 0.5;
  const leftFace = peakOffset < 0 ? peakOffset / 0.2 : peakOffset / 0.26;
  const main =
    height * 0.58 - Math.exp(-Math.pow(leftFace, 2)) * height * 0.28;

  const shoulderL =
    height * 0.72 -
    Math.exp(-Math.pow((nx - 0.18) / 0.11, 2)) * height * 0.14;

  const shoulderR =
    height * 0.74 -
    Math.exp(-Math.pow((nx - 0.82) / 0.12, 2)) * height * 0.12;

  const farL =
    height * 0.8 -
    Math.exp(-Math.pow((nx - 0.05) / 0.06, 2)) * height * 0.06;

  const jagged =
    Math.sin(nx * Math.PI * 14) * 8 +
    Math.sin(nx * Math.PI * 31) * 4 +
    Math.sin(nx * Math.PI * 53) * 2 +
    (hash2(Math.floor(nx * 80), 7) - 0.5) * 8;

  return Math.min(main, shoulderL, shoulderR, farL) + jagged;
}

type ParticleKind = "dot" | "colon" | "hash" | "point";

type Particle = {
  x: number;
  y: number;
  depth: number;
  kind: ParticleKind;
  opacity: number;
  size: number;
  react: number;
};

function buildParticles(width: number, height: number): Particle[] {
  const particles: Particle[] = [];
  const step = Math.max(6, Math.round(Math.min(width, height) / 120));

  for (let x = step * 0.5; x < width; x += step) {
    const surface = mountainSurface(x, width, height);

    for (let y = surface; y < height - 4; y += step) {
      const depth = (y - surface) / Math.max(1, height - surface);
      const nx = x / width;
      const distFromPeak = Math.abs(nx - 0.48);

      const face = 1 - Math.min(1, Math.abs(nx - 0.4) / 0.38);
      const shadow = nx > 0.52 ? Math.min(0.55, (nx - 0.52) / 0.35) : 0;
      const ridgeBoost = Math.exp(-Math.pow((y - surface) / (step * 3.5), 2));
      const light =
        face * 0.6 + ridgeBoost * 0.8 + (1 - depth) * 0.35 - shadow * 0.45;

      const jitter = hash2(Math.floor(x / step), Math.floor(y / step));
      const density = 0.12 + Math.max(0, light) * 0.72;
      if (jitter > density) continue;

      let opacity =
        (0.22 + Math.max(0, light) * 0.7) *
        (1 - Math.min(0.45, distFromPeak * 0.5));
      opacity = Math.min(0.98, Math.max(0.08, opacity));

      const jx = (hash2(x + 1, y) - 0.5) * step * 0.28;
      const jy = (hash2(x, y + 1) - 0.5) * step * 0.28;

      let kind: ParticleKind = "dot";
      let size = Math.max(0.8, step * 0.16);

      if (light > 0.68 && depth < 0.4) {
        kind = "hash";
        size = Math.max(9, step * 1.25);
      } else if (light > 0.38 || ridgeBoost > 0.55) {
        kind = "colon";
        size = Math.max(9, step * 1.25);
      } else if (jitter > 0.35) {
        kind = "point";
        size = Math.max(0.8, step * 0.16);
      } else {
        kind = "dot";
        size = Math.max(9, step * 1.15);
      }

      particles.push({
        x: x + jx,
        y: y + jy,
        depth,
        kind,
        opacity,
        size,
        react: 0.35 + (1 - depth) * 0.65 + ridgeBoost * 0.25,
      });
    }
  }

  for (let i = 0; i < 520; i++) {
    const x = hash2(i, 11) * width;
    const y = hash2(i, 22) * height * 0.58;
    const surface = mountainSurface(x, width, height);
    if (y > surface - step * 0.5) continue;

    const near = Math.exp(-Math.pow((x / width - 0.48) / 0.28, 2));
    const band = Math.exp(-Math.pow((surface - y) / (height * 0.18), 2));
    if (hash2(i, 33) > near * band * 0.85) continue;

    particles.push({
      x,
      y,
      depth: 0.05 + hash2(i, 55) * 0.25,
      kind: hash2(i, 44) > 0.5 ? "colon" : "point",
      opacity: 0.05 + near * band * 0.28,
      size:
        hash2(i, 44) > 0.5
          ? Math.max(9, step * 1.1)
          : Math.max(0.65, step * 0.13),
      react: 0.85 + near * 0.4,
    });
  }

  return particles;
}

function PixelMountain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;

    // Cursor targets in canvas space; smoothed values for ease
    const mouse = { x: 0, y: 0, active: false };
    const smooth = { x: 0, y: 0 };
    const center = { x: 0, y: 0 };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width < 2 || height < 2) return;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      center.x = width * 0.5;
      center.y = height * 0.55;
      mouse.x = center.x;
      mouse.y = center.y;
      smooth.x = center.x;
      smooth.y = center.y;

      particles = buildParticles(width, height);
    };

    const drawFrame = () => {
      if (!running) return;

      // Ease toward cursor (or center when idle)
      const targetX = mouse.active ? mouse.x : center.x;
      const targetY = mouse.active ? mouse.y : center.y;
      const ease = reducedMotion ? 1 : 0.085;
      smooth.x += (targetX - smooth.x) * ease;
      smooth.y += (targetY - smooth.y) * ease;

      const parallaxX = (smooth.x - center.x) / Math.max(1, width * 0.5);
      const parallaxY = (smooth.y - center.y) / Math.max(1, height * 0.5);

      ctx.clearRect(0, 0, width, height);

      const glow = ctx.createRadialGradient(
        width * 0.5 + parallaxX * 18,
        height * 0.4 + parallaxY * 12,
        0,
        width * 0.5,
        height * 0.45,
        width * 0.42,
      );
      glow.addColorStop(0, "rgba(170,200,255,0.16)");
      glow.addColorStop(0.45, "rgba(70,110,170,0.05)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const radius = Math.min(width, height) * 0.22;
      const radiusSq = radius * radius * 1.35;

      const points: number[] = [];
      const dots: number[] = [];
      const colons: number[] = [];
      const hashes: number[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const depthFactor = 0.35 + (1 - p.depth) * 0.9;

        let px = p.x - parallaxX * (10 + depthFactor * 26) * p.react;
        let py = p.y - parallaxY * (8 + depthFactor * 18) * p.react;

        if (mouse.active && !reducedMotion) {
          const dx = px - smooth.x;
          const dy = py - smooth.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < radiusSq * 4) {
            const dist = Math.sqrt(distSq) || 1;
            const falloff = Math.exp(-distSq / radiusSq);
            const push = falloff * (14 + p.react * 22) * depthFactor;
            px += (dx / dist) * push;
            py += (dy / dist) * push;
          }
        }

        if (p.kind === "point") {
          points.push(px, py, p.size, p.opacity);
        } else if (p.kind === "hash") {
          hashes.push(px, py, p.size, p.opacity);
        } else if (p.kind === "colon") {
          colons.push(px, py, p.size, p.opacity);
        } else {
          dots.push(px, py, p.size, p.opacity);
        }
      }

      for (let i = 0; i < points.length; i += 4) {
        ctx.fillStyle = `rgba(255,255,255,${points[i + 3]})`;
        ctx.beginPath();
        ctx.arc(points[i], points[i + 1], points[i + 2], 0, Math.PI * 2);
        ctx.fill();
      }

      // Dots as circles — much cheaper than fillText at 60fps
      for (let i = 0; i < dots.length; i += 4) {
        ctx.fillStyle = `rgba(255,255,255,${dots[i + 3]})`;
        ctx.beginPath();
        ctx.arc(
          dots[i],
          dots[i + 1],
          Math.max(0.7, dots[i + 2] * 0.08),
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }

      if (colons.length || hashes.length) {
        const glyphSize = Math.max(
          9,
          Math.round(Math.min(width, height) / 95),
        );
        ctx.font = `${glyphSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

        for (let i = 0; i < colons.length; i += 4) {
          ctx.fillStyle = `rgba(255,255,255,${colons[i + 3]})`;
          ctx.fillText(":", colons[i], colons[i + 1]);
        }
        for (let i = 0; i < hashes.length; i += 4) {
          ctx.fillStyle = `rgba(255,255,255,${hashes[i + 3]})`;
          ctx.fillText("#", hashes[i], hashes[i + 1]);
        }
      }

      raf = requestAnimationFrame(drawFrame);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active =
        mouse.x >= -40 &&
        mouse.y >= -40 &&
        mouse.x <= rect.width + 40 &&
        mouse.y <= rect.height + 40;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    resize();
    drawFrame();

    const parent = canvas.parentElement;
    const ro = new ResizeObserver(() => {
      resize();
    });
    if (parent) ro.observe(parent);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    parent?.addEventListener("pointerleave", onPointerLeave);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      parent?.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
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
        "hero-marker pointer-events-none absolute z-10 hidden flex-col items-center gap-2 text-white/70 lg:flex",
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
    <section className="sticky top-0 z-0 flex h-svh flex-col items-center justify-center overflow-hidden bg-[#05070c]">
      <PixelMountain />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,transparent_0%,rgba(5,7,12,0.15)_40%,rgba(5,7,12,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[#05070c]/75 via-[#05070c]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#05070c] to-transparent" />

      <Marker
        label="Vision"
        icon="square"
        delay="0s"
        className="left-[6%] top-[18%] xl:left-[10%]"
      />
      <Marker
        label="Precise"
        icon="triangle"
        delay="0.8s"
        className="bottom-[24%] left-[8%] xl:left-[12%]"
      />
      <Marker
        label="Smax8"
        icon="target"
        delay="1.4s"
        className="right-[6%] top-[36%] xl:right-[12%]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 pb-10 pt-6 text-center sm:px-6 sm:pb-12 sm:pt-8">
        <div className="relative">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(5,7,12,0.72)_0%,rgba(5,7,12,0.35)_55%,transparent_75%)]"
            aria-hidden="true"
          />
          <p className="hero-reveal relative font-[family-name:var(--font-brand)] text-[clamp(3rem,12vw,7rem)] font-light uppercase leading-[0.9] tracking-[0.02em] text-white">
            Agility AI
          </p>

          <h1 className="hero-reveal hero-reveal-delay-1 relative mx-auto mt-4 max-w-[22ch] font-[family-name:var(--font-geist-mono)] text-[clamp(0.9rem,2vw,1.15rem)] font-light leading-[1.35] tracking-[-0.03em] text-white/85 sm:mt-5 sm:max-w-[34ch]">
            Your biggest competitor is the version of you that hasn&apos;t
            adopted AI yet.
          </h1>

          <p className="hero-reveal hero-reveal-delay-2 relative mx-auto mt-2.5 text-center font-[family-name:var(--font-geist-mono)] text-[clamp(0.75rem,1.5vw,0.9rem)] font-normal leading-snug tracking-[-0.03em] text-white/60 sm:mt-3 sm:whitespace-nowrap">
            Not just AI powered. AI fluent.
          </p>
        </div>

        <div className="hero-reveal hero-reveal-delay-3 mt-7 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
          <a
            href="/services"
            className="cta-cut inline-flex h-11 items-center justify-center bg-white px-7 font-[family-name:var(--font-geist-mono)] text-[13px] font-medium uppercase tracking-[0.06em] text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98] sm:h-10"
          >
            See how it works
          </a>
          <button
            type="button"
            onClick={() => openChatbot()}
            className="cta-cut inline-flex h-11 items-center justify-center border border-white/80 bg-transparent px-7 font-[family-name:var(--font-geist-mono)] text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-all duration-300 hover:bg-white hover:text-black active:scale-[0.98] sm:h-10"
          >
            Talk to us
          </button>
        </div>
      </div>

      <ScrollMouse />
    </section>
  );
}
