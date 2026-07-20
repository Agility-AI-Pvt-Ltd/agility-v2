type IconKind = "layers" | "connect" | "product";

export default function OfferingIcon({
  kind,
  className = "size-11",
}: {
  kind: IconKind;
  className?: string;
}) {
  if (kind === "layers") {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <path
          d="M8 30l16 9 16-9-16-9-16 9z"
          fill="#fbbf24"
          stroke="#f59e0b"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M8 22l16 9 16-9-16-9-16 9z"
          fill="#fde68a"
          stroke="#f59e0b"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M8 14l16 9 16-9-16-9-16 9z"
          fill="#fff7ed"
          stroke="#f59e0b"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (kind === "connect") {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect x="8" y="10" width="14" height="12" rx="3" fill="#dbeafe" stroke="#3b82f6" />
        <rect x="26" y="26" width="14" height="12" rx="3" fill="#dcfce7" stroke="#22c55e" />
        <path
          d="M22 16h4v8h4"
          stroke="#6366f1"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="26" r="3" fill="#6366f1" />
        <rect x="8" y="28" width="14" height="10" rx="3" fill="#fce7f3" stroke="#ec4899" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="10" y="12" width="28" height="26" rx="4" fill="#fff" stroke="#e5e7eb" />
      <rect x="10" y="12" width="28" height="8" rx="4" fill="#3b82f6" />
      <rect x="14" y="24" width="10" height="10" rx="2" fill="#22c55e" />
      <rect x="26" y="24" width="8" height="4" rx="1" fill="#e5e7eb" />
      <rect x="26" y="30" width="12" height="4" rx="1" fill="#fde68a" />
    </svg>
  );
}
