"use client";

import { useEffect, useState } from "react";

const WORDS = ["sell you AI.", "another vendor.", "shelfware.", "theatre."];

export default function AboutHeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % WORDS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="about-hero-visual" aria-hidden="true">
      <div className="about-hero-grid" />
      <div className="about-hero-orbit about-hero-orbit-a" />
      <div className="about-hero-orbit about-hero-orbit-b" />
      <div className="about-hero-orbit about-hero-orbit-c" />

      <div className="about-hero-chip">
        <span className="about-hero-chip-dot" />
        <span>Not here to</span>
        <span key={WORDS[index]} className="about-hero-chip-word">
          {WORDS[index]}
        </span>
      </div>

      <svg className="about-hero-nodes" viewBox="0 0 320 220" fill="none">
        <path
          className="about-hero-path"
          d="M40 170 C90 90, 140 90, 160 110 S220 160, 280 70"
          stroke="rgba(59,110,245,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle className="about-hero-node" cx="40" cy="170" r="5" fill="#3b6ef5" />
        <circle className="about-hero-node about-hero-node-delay" cx="160" cy="110" r="5" fill="#fff" fillOpacity="0.7" />
        <circle className="about-hero-node about-hero-node-delay-2" cx="280" cy="70" r="5" fill="#3b6ef5" />
        <text x="28" y="195" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="var(--font-geist-mono)">
          Habit
        </text>
        <text x="140" y="95" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="var(--font-geist-mono)">
          System
        </text>
        <text x="250" y="55" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="var(--font-geist-mono)">
          Ownership
        </text>
      </svg>
    </div>
  );
}
