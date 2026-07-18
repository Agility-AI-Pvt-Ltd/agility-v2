export function DualProblemViz() {
  return (
    <div className="about-dual-viz" aria-hidden="true">
      <svg viewBox="0 0 420 260" className="h-auto w-full">
        <defs>
          <linearGradient id="about-dual-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b6ef5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b6ef5" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="about-dual-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#111" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#111" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <circle
          className="about-dual-ring"
          cx="150"
          cy="130"
          r="88"
          fill="url(#about-dual-a)"
          stroke="#3b6ef5"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        <circle
          className="about-dual-ring about-dual-ring-b"
          cx="270"
          cy="130"
          r="88"
          fill="url(#about-dual-b)"
          stroke="#111"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />

        <circle className="about-dual-pulse" cx="210" cy="130" r="18" fill="#3b6ef5" fillOpacity="0.15" />
        <circle cx="210" cy="130" r="7" fill="#3b6ef5" />

        <text
          x="100"
          y="128"
          textAnchor="middle"
          fill="#111"
          fontSize="13"
          fontFamily="var(--font-geist-mono)"
          fontWeight="600"
        >
          Adoption
        </text>
        <text
          x="100"
          y="146"
          textAnchor="middle"
          fill="rgba(0,0,0,0.45)"
          fontSize="9"
          fontFamily="var(--font-geist-mono)"
        >
          Muscle memory
        </text>

        <text
          x="320"
          y="128"
          textAnchor="middle"
          fill="#111"
          fontSize="13"
          fontFamily="var(--font-geist-mono)"
          fontWeight="600"
        >
          Implementation
        </text>
        <text
          x="320"
          y="146"
          textAnchor="middle"
          fill="rgba(0,0,0,0.45)"
          fontSize="9"
          fontFamily="var(--font-geist-mono)"
        >
          Working system
        </text>

        <text
          x="210"
          y="228"
          textAnchor="middle"
          fill="rgba(0,0,0,0.4)"
          fontSize="10"
          fontFamily="var(--font-geist-mono)"
          letterSpacing="0.12em"
        >
          SOLVED TOGETHER
        </text>
      </svg>
    </div>
  );
}

export function FoundingMixViz() {
  const nodes = [
    { label: "Rural\nmanagement", x: 70, y: 48, delay: "0s" },
    { label: "Digital\nanalytics", x: 210, y: 48, delay: "0.4s" },
    { label: "Engineering", x: 140, y: 150, delay: "0.8s" },
  ] as const;

  return (
    <div className="about-mix-viz" aria-hidden="true">
      <svg viewBox="0 0 280 200" className="h-auto w-full max-w-[280px]">
        <path
          className="about-mix-line"
          d="M70 60 L210 60 L140 150 Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.25"
        />
        {nodes.map((node) => (
          <g key={node.label} className="about-mix-node" style={{ animationDelay: node.delay }}>
            <circle cx={node.x} cy={node.y + 12} r="22" fill="rgba(59,110,245,0.15)" stroke="#3b6ef5" strokeWidth="1.25" />
            {node.label.split("\n").map((line, i) => (
              <text
                key={line}
                x={node.x}
                y={node.y + 10 + i * 11}
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="8"
                fontFamily="var(--font-geist-mono)"
              >
                {line}
              </text>
            ))}
          </g>
        ))}
        <circle className="about-mix-core" cx="140" cy="90" r="6" fill="#3b6ef5" />
      </svg>
      <p className="mt-3 text-center font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.14em] text-white/35">
        Three directions · one company
      </p>
    </div>
  );
}

export function StagesPipelineViz({ active = 3 }: { active?: number }) {
  const stages = ["Discovery", "Build / train", "Handover"];

  return (
    <div className="about-pipeline" aria-hidden="true">
      <div className="about-pipeline-track">
        <span className="about-pipeline-progress" style={{ width: `${(active / 3) * 100}%` }} />
      </div>
      <ul className="about-pipeline-steps">
        {stages.map((label, index) => (
          <li
            key={label}
            className={[
              "about-pipeline-step",
              index < active ? "about-pipeline-step-done" : "",
            ].join(" ")}
          >
            <span className="about-pipeline-dot" />
            <span className="about-pipeline-label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
