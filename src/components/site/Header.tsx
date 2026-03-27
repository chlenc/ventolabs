"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/site/Button";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { Logo } from "@/components/site/Logo";
import { getNavItems } from "@/lib/routes";
import { localizedPath, Locale, pagePaths, siteContent } from "@/lib/site";

function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "en" || parts[0] === "es") {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

function isActive(basePath: string, href: string) {
  if (href === pagePaths.home) {
    return basePath === "/";
  }

  return basePath === href || basePath.startsWith(`${href}/`);
}

export function Header({ locale }: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() || "/";
  const basePath = stripLocale(pathname);
  const navItems = useMemo(() => getNavItems(locale), [locale]);
  const ctaLabel = siteContent[locale].ui.cta.bookConsultation;
  const menuLabel = siteContent[locale].ui.mobileMenuLabel;

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Logo locale={locale} />
        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              className={`site-header__nav-link ${isActive(basePath, item.href) ? "is-active" : ""}`}
              href={localizedPath(locale, item.href)}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-header__actions">
          <LanguageSwitcher locale={locale} />
          <Button href={localizedPath(locale, "/contact")} label={ctaLabel} />
        </div>
        <button
          aria-expanded={isOpen}
          aria-label={menuLabel}
          className="site-header__menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
        <div className="mobile-nav__panel container">
          <div className="mobile-nav__list">
            {navItems.map((item) => (
              <a
                className={`mobile-nav__link ${isActive(basePath, item.href) ? "is-active" : ""}`}
                href={localizedPath(locale, item.href)}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mobile-nav__footer">
            <LanguageSwitcher locale={locale} />
            <Button href={localizedPath(locale, "/contact")} label={ctaLabel} />
          </div>
        </div>
      </div>
    </header>
  );
}
