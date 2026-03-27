import type { Metadata } from "next";

import {
  getPageSeo,
  getRelatedServices,
  individualServiceSlugs,
  isLocale,
  isServiceSlug,
  localizedPath,
  Locale,
  pagePaths,
  PageKey,
  serviceSlugs,
  ServiceSlug,
  siteContent,
} from "@/lib/site";

export type RenderedPage =
  | { kind: "home"; locale: Locale }
  | { kind: "services"; locale: Locale }
  | { kind: "service"; locale: Locale; service: ServiceSlug }
  | { kind: "case-studies"; locale: Locale }
  | { kind: "how-we-work"; locale: Locale }
  | { kind: "about"; locale: Locale }
  | { kind: "contact"; locale: Locale };

export const staticPageKeys: PageKey[] = [
  "home",
  "services",
  "case-studies",
  "how-we-work",
  "about",
  "contact",
];

export const servicePageSlugs = serviceSlugs;
export const prefixedLocales: Locale[] = ["en", "es"];

export function getPrefixedLocaleParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export function isPrefixedLocale(value: string): value is (typeof prefixedLocales)[number] {
  return prefixedLocales.includes(value as (typeof prefixedLocales)[number]);
}

export function assertLocale(value: string): Locale {
  if (!isLocale(value)) {
    throw new Error(`Invalid locale: ${value}`);
  }

  return value;
}

export function createMetadata(
  locale: Locale,
  page: PageKey,
  path: string,
  service?: ServiceSlug,
): Metadata {
  const seo = getPageSeo(locale, page, service);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages: {
        ru: localizedPath("ru", path),
        en: localizedPath("en", path),
        es: localizedPath("es", path),
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: localizedPath(locale, path),
      siteName: "VentoLabs",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

export function createPage(locale: Locale, page: PageKey): RenderedPage {
  switch (page) {
    case "home":
      return { kind: "home", locale };
    case "services":
      return { kind: "services", locale };
    case "case-studies":
      return { kind: "case-studies", locale };
    case "how-we-work":
      return { kind: "how-we-work", locale };
    case "about":
      return { kind: "about", locale };
    case "contact":
      return { kind: "contact", locale };
    default:
      return { kind: "home", locale };
  }
}

export function createServicePage(locale: Locale, service: string): RenderedPage | null {
  if (!isServiceSlug(service)) {
    return null;
  }

  return {
    kind: "service",
    locale,
    service,
  };
}

export function getServicePath(service: ServiceSlug): string {
  return `${pagePaths.services}/${service}`;
}

export function getNavItems(locale: Locale) {
  const labels = siteContent[locale].ui.nav;

  return [
    { label: labels.home, href: pagePaths.home },
    { label: labels.services, href: pagePaths.services },
    { label: labels.caseStudies, href: pagePaths["case-studies"] },
    { label: labels.howWeWork, href: pagePaths["how-we-work"] },
    { label: labels.about, href: pagePaths.about },
    { label: labels.contact, href: pagePaths.contact },
  ];
}

export function getFooterServiceLinks(locale: Locale) {
  return {
    business: serviceSlugs
      .filter((slug) => !individualServiceSlugs.includes(slug))
      .slice(0, 6)
      .map((slug) => ({
        label: siteContent[locale].services[slug].title,
        href: getServicePath(slug),
      })),
    individual: individualServiceSlugs.map((slug) => ({
      label: siteContent[locale].services[slug].title,
      href: getServicePath(slug),
    })),
  };
}

export function getRelatedServiceCards(locale: Locale, service: ServiceSlug) {
  return getRelatedServices(service).map((slug) => ({
    slug,
    title: siteContent[locale].services[slug].title,
    description: siteContent[locale].services[slug].cardSummary,
  }));
}
