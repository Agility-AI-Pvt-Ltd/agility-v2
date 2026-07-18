type OfferingVisualProps = {
  kind: "enablement" | "integration" | "products";
};

export default function OfferingVisual({ kind }: OfferingVisualProps) {
  if (kind === "enablement") {
    return (
      <div className="services-offer-viz" aria-hidden="true">
        <svg viewBox="0 0 220 120" className="h-auto w-full">
          <rect x="20" y="30" width="50" height="60" rx="4" fill="rgba(59,110,245,0.08)" stroke="#3b6ef5" strokeOpacity="0.4" />
          <rect x="85" y="20" width="50" height="70" rx="4" fill="rgba(59,110,245,0.14)" stroke="#3b6ef5" strokeOpacity="0.55" />
          <rect x="150" y="10" width="50" height="80" rx="4" fill="rgba(59,110,245,0.22)" stroke="#3b6ef5" />
          <path
            className="services-offer-path"
            d="M45 95 L110 95 L175 95"
            stroke="#3b6ef5"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
          {[45, 110, 175].map((x, i) => (
            <circle
              key={x}
              className="services-offer-node"
              style={{ animationDelay: `${i * 0.35}s` }}
              cx={x}
              cy={95}
              r="4"
              fill="#3b6ef5"
            />
          ))}
          <text x="110" y="114" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="8" fontFamily="var(--font-geist-mono)">
            FLUENCY RISES
          </text>
        </svg>
      </div>
    );
  }

  if (kind === "integration") {
    return (
      <div className="services-offer-viz" aria-hidden="true">
        <svg viewBox="0 0 220 120" className="h-auto w-full">
          <rect x="16" y="28" width="52" height="36" rx="3" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.25)" />
          <rect x="16" y="72" width="52" height="26" rx="3" fill="rgba(0,0,0,0.04)" stroke="rgba(0,0,0,0.25)" />
          <rect x="152" y="40" width="52" height="48" rx="3" fill="rgba(59,110,245,0.12)" stroke="#3b6ef5" />
          <path
            className="services-offer-path"
            d="M68 46 H110 V64 H152"
            stroke="#3b6ef5"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 5"
          />
          <path
            className="services-offer-path"
            d="M68 85 H110 V64"
            stroke="rgba(0,0,0,0.25)"
            strokeWidth="1.25"
            fill="none"
            strokeDasharray="3 4"
          />
          <circle className="services-offer-node" cx="110" cy="64" r="5" fill="#3b6ef5" />
          <text x="42" y="50" textAnchor="middle" fill="rgba(0,0,0,0.45)" fontSize="7" fontFamily="var(--font-geist-mono)">
            STACK
          </text>
          <text x="178" y="66" textAnchor="middle" fill="rgba(0,0,0,0.55)" fontSize="7" fontFamily="var(--font-geist-mono)">
            AI
          </text>
          <text x="110" y="114" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="8" fontFamily="var(--font-geist-mono)">
            WIRED IN
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div className="services-offer-viz" aria-hidden="true">
      <svg viewBox="0 0 220 120" className="h-auto w-full">
        <rect
          className="services-offer-pack"
          x="70"
          y="28"
          width="80"
          height="58"
          rx="6"
          fill="rgba(59,110,245,0.1)"
          stroke="#3b6ef5"
          strokeWidth="1.5"
        />
        <path d="M70 48 H150" stroke="rgba(59,110,245,0.35)" />
        <circle className="services-offer-node" cx="86" cy="38" r="3" fill="#3b6ef5" />
        <circle className="services-offer-node" cx="98" cy="38" r="3" fill="rgba(0,0,0,0.2)" />
        <circle className="services-offer-node" cx="110" cy="38" r="3" fill="rgba(0,0,0,0.2)" />
        <rect x="82" y="58" width="56" height="6" rx="2" fill="rgba(59,110,245,0.35)" />
        <rect x="82" y="68" width="40" height="6" rx="2" fill="rgba(0,0,0,0.1)" />
        <text x="110" y="108" textAnchor="middle" fill="rgba(0,0,0,0.4)" fontSize="8" fontFamily="var(--font-geist-mono)">
          READY MADE
        </text>
      </svg>
    </div>
  );
}
