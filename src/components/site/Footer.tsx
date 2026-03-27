import { Button } from "@/components/site/Button";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { Logo } from "@/components/site/Logo";
import { getFooterServiceLinks, getNavItems } from "@/lib/routes";
import { localizedPath, Locale, siteContent } from "@/lib/site";

export function Footer({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const navItems = getNavItems(locale);
  const serviceLinks = getFooterServiceLinks(locale);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__brand">
          <Logo locale={locale} tone="cream" />
          <p className="site-footer__title">{content.ui.footerTitle}</p>
          <p className="site-footer__blurb">{content.ui.footerBlurb}</p>
          <p className="site-footer__meta">
            <span>{content.ui.directEmailLabel}</span>
            <a href={`mailto:${content.company.email}`}>{content.company.email}</a>
          </p>
          <p className="site-footer__meta">{content.company.location}</p>
          <p className="site-footer__meta">{content.company.responseNote}</p>
        </div>
        <div className="site-footer__columns">
          <div className="site-footer__column">
            <h3>Navigation</h3>
            {navItems.map((item) => (
              <a href={localizedPath(locale, item.href)} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="site-footer__column">
            <h3>{content.ui.serviceLabels.business}</h3>
            {serviceLinks.business.map((item) => (
              <a href={localizedPath(locale, item.href)} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="site-footer__column">
            <h3>{content.ui.serviceLabels.individual}</h3>
            {serviceLinks.individual.map((item) => (
              <a href={localizedPath(locale, item.href)} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="site-footer__aside">
          <LanguageSwitcher locale={locale} />
          <Button
            href={localizedPath(locale, "/contact")}
            label={content.ui.cta.bookConsultation}
          />
        </div>
      </div>
    </footer>
  );
}
