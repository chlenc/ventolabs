import { ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Locale, siteContent } from "@/lib/site";

export function SiteShell({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {siteContent[locale].ui.skipToContent}
      </a>
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </div>
  );
}
