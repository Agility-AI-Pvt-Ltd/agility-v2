"use client";

import { useEffect, useState } from "react";

const MODES = ["Enablement", "Integration", "Products"] as const;

export default function ServicesHeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % MODES.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="services-hero-visual" aria-hidden="true">
      <div className="services-hero-grid" />
      <div className="services-hero-orbit services-hero-orbit-a" />
      <div className="services-hero-orbit services-hero-orbit-b" />

      <div className="services-hero-chip">
        <span className="services-hero-chip-dot" />
        <span>Active lane</span>
        <span key={MODES[index]} className="services-hero-chip-word">
          {MODES[index]}
        </span>
      </div>

      <svg className="services-hero-diagram" viewBox="0 0 340 200" fill="none">
        <path
          className="services-hero-path"
          d="M40 150 H120 L170 80 H300"
          stroke="rgba(59,110,245,0.4)"
          strokeWidth="1.5"
          strokeDasharray="5 6"
        />
        <path
          className="services-hero-path"
          d="M120 150 L170 80"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.25"
        />

        {[
          { x: 40, y: 150, label: "Stuck" },
          { x: 170, y: 80, label: "Agility" },
          { x: 300, y: 80, label: "Running" },
        ].map((node, i) => (
          <g key={node.label}>
            <circle
              className={
                i === 1
                  ? "services-hero-node services-hero-node-core"
                  : "services-hero-node"
              }
              cx={node.x}
              cy={node.y}
              r={i === 1 ? 8 : 5}
              fill={i === 1 ? "#3b6ef5" : "rgba(255,255,255,0.7)"}
            />
            <text
              x={node.x}
              y={node.y + 22}
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="9"
              fontFamily="var(--font-geist-mono)"
            >
              {node.label}
            </text>
          </g>
        ))}

        {MODES.map((mode, i) => (
          <rect
            key={mode}
            x={40 + i * 70}
            y={28}
            width={58}
            height="18"
            rx="2"
            fill={
              i === index ? "rgba(59,110,245,0.25)" : "rgba(255,255,255,0.04)"
            }
            stroke={
              i === index ? "#3b6ef5" : "rgba(255,255,255,0.12)"
            }
            strokeWidth="1"
            className="services-hero-lane"
          />
        ))}
        {MODES.map((mode, i) => (
          <text
            key={`${mode}-label`}
            x={69 + i * 70}
            y={40}
            textAnchor="middle"
            fill={i === index ? "#fff" : "rgba(255,255,255,0.4)"}
            fontSize="8"
            fontFamily="var(--font-geist-mono)"
          >
            {mode.slice(0, 3).toUpperCase()}
          </text>
        ))}
      </svg>
    </div>
  );
}
