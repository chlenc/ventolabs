import Link from "next/link";

import { localizedPath, Locale } from "@/lib/site";

type LogoProps = {
  locale: Locale;
  tone?: "dark" | "light" | "cream";
};

function VentoMark() {
  return (
    <svg
      aria-hidden="true"
      className="logo-mark"
      fill="none"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="6">
        <line x1="36" x2="36" y1="8" y2="28" />
        <line x1="54.5" x2="42" y1="18" y2="31" />
        <line x1="62" x2="44" y1="40" y2="36" />
        <line x1="49" x2="41" y1="60" y2="43" />
        <line x1="24" x2="31" y1="60" y2="43" />
        <line x1="10" x2="28" y1="40" y2="36" />
        <line x1="18" x2="30" y1="18" y2="31" />
      </g>
    </svg>
  );
}

export function Logo({ locale, tone = "dark" }: LogoProps) {
  return (
    <Link
      aria-label="VentoLabs"
      className={`logo logo--${tone}`}
      href={localizedPath(locale, "/")}
    >
      <span className="logo__mark-shell">
        <VentoMark />
      </span>
      <span className="logo__wordmark">VentoLabs</span>
    </Link>
  );
}
