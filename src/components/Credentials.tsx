const credentials = [
  {
    id: "dpiit",
    name: "Startup India",
    description:
      "Recognised as a Startup by DPIIT, Ministry of Commerce & Industry, Government of India, Startup India Certificate No. DIPP205863",
    mark: StartupIndiaMark,
  },
  {
    id: "irma",
    name: "IRMA ISEED",
    description:
      "Incubated at the IRMA ISEED Foundation, the technology business incubator of the Institute of Rural Management Anand (IRMA)",
    mark: IrmaMark,
  },
] as const;

function StartupIndiaMark() {
  return (
    <svg
      viewBox="0 0 128 28"
      className="h-12 w-auto text-[#6b6b6b] transition-colors duration-300 group-hover:text-[#444] sm:h-14 md:h-16"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="14"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 6.8c2.4 2 3.8 4.2 3.8 7.2S14.4 19.2 12 21.2C9.6 19.2 8.2 17 8.2 14S9.6 8.8 12 6.8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <text
        x="28"
        y="12.5"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="0.1em"
      >
        STARTUP
      </text>
      <text
        x="28"
        y="23"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="0.22em"
      >
        INDIA
      </text>
    </svg>
  );
}

function IrmaMark() {
  return (
    <svg
      viewBox="0 0 148 28"
      className="h-12 w-auto text-[#6b6b6b] transition-colors duration-300 group-hover:text-[#444] sm:h-14 md:h-16"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="4"
        width="20"
        height="20"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.4 18.2V9.8h3.4c1.9 0 3 .95 3 2.45 0 1.55-1.15 2.5-3 2.5H8.6v3.45H6.4zm2.2-5.3h1c.85 0 1.35-.4 1.35-1.05S10.4 10.8 9.6 10.8h-1v2.1z"
        fill="currentColor"
      />
      <text
        x="30"
        y="12.5"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="0.14em"
      >
        IRMA ISEED
      </text>
      <text
        x="30"
        y="23"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="8"
        fontWeight="500"
        letterSpacing="0.18em"
      >
        FOUNDATION
      </text>
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      className="size-5 shrink-0 sm:size-6"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 1.5l1.4 2.8 3.1.45-2.25 2.2.53 3.1L8 8.6l-2.78 1.45.53-3.1L3.5 4.75l3.1-.45L8 1.5zm0 1.85L7.1 5.1l-2 .3 1.45 1.4-.35 2 1.8-.95 1.8.95-.35-2 1.45-1.4-2-.3L8 3.35z" />
    </svg>
  );
}

export default function Credentials() {
  return (
    <section
      id="credentials"
      aria-label="Credentials"
      className="border-y border-[#e5e5e5] bg-white font-[family-name:var(--font-geist-mono)]"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row lg:items-stretch">
        <div className="flex shrink-0 items-center border-b border-[#e5e5e5] px-6 py-8 lg:w-[210px] lg:border-b-0 lg:border-r lg:px-8 lg:py-12 xl:w-[240px]">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-[#8a8a8a] sm:text-[14px]">
            Recognised By
          </p>
        </div>

        <ul className="flex min-w-0 flex-1 flex-col divide-y divide-[#ebebeb] sm:flex-row sm:items-center sm:justify-center sm:gap-14 sm:divide-y-0 sm:px-10 sm:py-10 md:gap-20 lg:gap-24 lg:py-14">
          {credentials.map((item) => {
            const Mark = item.mark;
            return (
              <li
                key={item.id}
                className="group flex items-center justify-center px-6 py-8 sm:px-0 sm:py-0"
                title={item.description}
              >
                <span className="sr-only">{item.description}</span>
                <Mark />
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-3 border-t border-[#e5e5e5] px-6 py-8 text-[#8a8a8a] lg:w-[230px] lg:justify-center lg:border-l lg:border-t-0 lg:px-6 lg:py-12 xl:w-[260px]">
          <BadgeIcon />
          <p className="text-[13px] font-medium uppercase tracking-[0.16em] sm:text-[14px]">
            DIPP205863
          </p>
        </div>
      </div>

      <div className="border-t border-[#ebebeb] bg-[#fafafa]">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 py-8 sm:grid-cols-2 sm:gap-12 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          {credentials.map((item) => (
            <p
              key={item.id}
              className="text-[13px] leading-relaxed tracking-[0.02em] text-[#7a7a7a] sm:text-[15px] sm:leading-[1.7]"
            >
              <span className="font-medium text-[#555]">{item.name}. </span>
              {item.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
