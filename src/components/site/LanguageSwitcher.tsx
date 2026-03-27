"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { localizedPath, Locale, siteContent } from "@/lib/site";

function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "es") {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

const localeMeta = {
  ru: {
    flag: "🇷🇺",
    names: {
      ru: "Русский",
      en: "Russian",
      es: "Ruso",
    },
  },
  en: {
    flag: "🇬🇧",
    names: {
      ru: "English",
      en: "English",
      es: "Ingles",
    },
  },
  es: {
    flag: "🇪🇸",
    names: {
      ru: "Español",
      en: "Spanish",
      es: "Español",
    },
  },
} satisfies Record<Locale, { flag: string; names: Record<Locale, string> }>;

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  return <LanguageSwitcherInner key={pathname} locale={locale} pathname={pathname} />;
}

function LanguageSwitcherInner({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const basePath = stripLocale(pathname);
  const languageLabel = siteContent[locale].ui.languageLabel;
  const activeMeta = localeMeta[locale];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={languageLabel}
        className={`language-switcher__trigger ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <span aria-hidden="true" className="language-switcher__flag">
          {activeMeta.flag}
        </span>
        <span className="language-switcher__value">{siteContent[locale].ui.languages[locale]}</span>
        <span aria-hidden="true" className="language-switcher__caret" />
      </button>

      <div
        className={`language-switcher__menu ${isOpen ? "is-open" : ""}`}
        id={menuId}
        role="menu"
      >
      {(["ru", "en", "es"] as const).map((item) => {
        const href = localizedPath(item, basePath);
        const active =
          (item === "ru" && !pathname.startsWith("/en") && !pathname.startsWith("/es")) ||
          pathname === `/${item}` ||
          pathname.startsWith(`/${item}/`);

        return (
          <Link
            aria-current={active ? "page" : undefined}
            className={`language-switcher__option ${active ? "is-active" : ""}`}
            href={href}
            key={item}
            onClick={() => setIsOpen(false)}
            role="menuitem"
          >
            <span aria-hidden="true" className="language-switcher__flag">
              {localeMeta[item].flag}
            </span>
            <span className="language-switcher__option-label">{localeMeta[item].names[locale]}</span>
            <span className="language-switcher__option-code">
              {siteContent[locale].ui.languages[item]}
            </span>
          </Link>
        );
      })}
      </div>
    </div>
  );
}
