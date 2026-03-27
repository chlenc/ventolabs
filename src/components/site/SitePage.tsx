import { Button } from "@/components/site/Button";
import { ContactForm } from "@/components/site/ContactForm";
import { getRelatedServiceCards, getServicePath, RenderedPage } from "@/lib/routes";
import { getServiceContent, localizedPath, Locale, ServiceSlug, siteContent } from "@/lib/site";

function resolveHref(locale: Locale, href: string) {
  if (href.startsWith("/") && !href.startsWith("//")) {
    return localizedPath(locale, href);
  }

  return href;
}

function getServiceKicker(locale: Locale, type: "business" | "individual") {
  if (locale === "ru") {
    return type === "business" ? "B2B услуга" : "Индивидуальная услуга";
  }

  if (locale === "es") {
    return type === "business" ? "Servicio empresarial" : "Servicio individual";
  }

  return type === "business" ? "Business service" : "Individual service";
}

function getStoryLabels(locale: Locale) {
  if (locale === "ru") {
    return {
      challenge: "Задача",
      solution: "Решение",
      result: "Результат",
    };
  }

  if (locale === "es") {
    return {
      challenge: "Reto",
      solution: "Solucion",
      result: "Resultado",
    };
  }

  return {
    challenge: "Challenge",
    solution: "Solution",
    result: "Result",
  };
}

function getServiceFinalCta(locale: Locale) {
  if (locale === "ru") {
    return {
      title: "Обсудим, подойдет ли этот сценарий вашему бизнесу",
      description: "Разберем задачу, ограничения и предложим понятный формат старта.",
    };
  }

  if (locale === "es") {
    return {
      title: "Veamos si este escenario encaja en tu caso",
      description: "Revisamos la necesidad, las restricciones y proponemos el siguiente paso adecuado.",
    };
  }

  return {
    title: "See if this service fits your situation",
    description: "We will review the need, the constraints and the right way to start.",
  };
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function CtaRow({
  locale,
  primary,
  secondary,
}: {
  locale: Locale;
  primary: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };
  secondary?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };
}) {
  return (
    <div className="button-row">
      <Button
        href={resolveHref(locale, primary.href)}
        label={primary.label}
        variant={primary.variant}
      />
      {secondary ? (
        <Button
          href={resolveHref(locale, secondary.href)}
          label={secondary.label}
          variant={secondary.variant}
        />
      ) : null}
    </div>
  );
}

function ServiceCard({
  locale,
  slug,
}: {
  locale: Locale;
  slug: ServiceSlug;
}) {
  const service = getServiceContent(locale, slug);
  return (
    <article className="card service-card">
      <p className="card-kicker">{getServiceKicker(locale, service.category)}</p>
      <h3 className="card-title">{service.title}</h3>
      <p className="card-text">{service.cardSummary}</p>
      <Button
        href={localizedPath(locale, getServicePath(slug))}
        label={siteContent[locale].ui.cta.viewService}
        variant="ghost"
      />
    </article>
  );
}

function FeatureCard({
  title,
  description,
  inverse = false,
}: {
  title: string;
  description: string;
  inverse?: boolean;
}) {
  return (
    <article className={`card feature-card ${inverse ? "card--inverse" : ""}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
    </article>
  );
}

function Hero({
  locale,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  panels,
  tone = "light",
}: {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };
  secondary?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };
  panels?: Array<{ title: string; description: string }>;
  tone?: "light" | "forest";
}) {
  return (
    <section className={`hero hero--${tone}`}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <CtaRow locale={locale} primary={primary} secondary={secondary} />
        </div>
        {panels?.length ? (
          <div className="hero__panels">
            {panels.map((panel) => (
              <div className="hero__panel card" key={panel.title}>
                <h2 className="hero__panel-title">{panel.title}</h2>
                <p className="card-text">{panel.description}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function FinalCta({
  locale,
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  description: string;
  primary: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };
  secondary?: { label: string; href: string; variant?: "primary" | "secondary" | "ghost" };
}) {
  return (
    <section className="section section--forest">
      <div className="container">
        <div className="cta-banner">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
          <CtaRow locale={locale} primary={primary} secondary={secondary} />
        </div>
      </div>
    </section>
  );
}

function LinkList({
  locale,
  services,
}: {
  locale: Locale;
  services: ServiceSlug[];
}) {
  return (
    <div className="link-list">
      {services.map((slug) => (
        <a className="link-list__item" href={localizedPath(locale, getServicePath(slug))} key={slug}>
          {siteContent[locale].services[slug].title}
        </a>
      ))}
    </div>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const page = content.home;
  const storyLabels = getStoryLabels(locale);

  return (
    <>
      <Hero
        description={page.hero.description}
        eyebrow={page.hero.eyebrow}
        locale={locale}
        panels={page.hero.panels}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        title={page.hero.title}
      />

      <section className="position-strip">
        <div className="container position-strip__inner">
          {page.positioningStrip.slice(0, 3).map((item) => (
            <p className="position-strip__item" key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.problem.description}
            eyebrow={page.problem.eyebrow}
            title={page.problem.title}
          />
          <div className="card-grid card-grid--two">
            {page.problem.items.slice(0, 4).map((item) => (
              <FeatureCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader
            description={page.solutions.description}
            eyebrow={page.solutions.eyebrow}
            title={page.solutions.title}
          />
          <div className="card-grid card-grid--three">
            {page.solutions.featured.map((slug) => (
              <ServiceCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
          <div className="section-actions">
            <Button
              href={localizedPath(locale, "/services")}
              label={content.ui.cta.seeAllServices}
              variant="secondary"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.why.description}
            eyebrow={page.why.eyebrow}
            title={page.why.title}
          />
          <div className="card-grid card-grid--four">
            {page.why.items.map((item) => (
              <FeatureCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader
            description={page.process.description}
            eyebrow={page.process.eyebrow}
            title={page.process.title}
          />
          <div className="process-grid">
            {content.process.business.map((step) => (
              <article className="card process-card" key={step.title}>
                <p className="card-kicker">{step.title}</p>
                <p className="card-text">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.entryPaths.description}
            eyebrow={page.entryPaths.eyebrow}
            title={page.entryPaths.title}
          />
          <div className="card-grid card-grid--two">
            {page.entryPaths.items.map((item, index) => (
              <article className={`card entry-card ${index === 0 ? "card--inverse" : ""}`} key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
                <Button
                  href={resolveHref(locale, item.cta.href)}
                  label={item.cta.label}
                  variant={item.cta.variant}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader
            description={page.useCases.description}
            eyebrow={page.useCases.eyebrow}
            title={page.useCases.title}
          />
          <div className="card-grid card-grid--two">
            {page.useCases.items.slice(0, 4).map((item) => (
              <article className="card use-case-card" key={item.title}>
                <p className="card-kicker">{item.audience}</p>
                <h3 className="card-title">{item.title}</h3>
                <div className="stack-list">
                  <p>
                    <strong>{storyLabels.challenge}:</strong> {item.challenge}
                  </p>
                  <p>
                    <strong>{storyLabels.solution}:</strong> {item.solution}
                  </p>
                  <p>
                    <strong>{storyLabels.result}:</strong> {item.result}
                  </p>
                </div>
                <Button
                  href={localizedPath(locale, getServicePath(item.service))}
                  label={content.ui.cta.viewService}
                  variant="ghost"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.audiences.description}
            eyebrow={page.audiences.eyebrow}
            title={page.audiences.title}
          />
          <div className="card-grid card-grid--two">
            <article className="card audience-card card--inverse">
              <h3 className="card-title">{page.audiences.business.title}</h3>
              <p className="card-text">{page.audiences.business.description}</p>
              <LinkList locale={locale} services={page.audiences.business.services} />
              <Button
                href={resolveHref(locale, page.audiences.business.cta.href)}
                label={page.audiences.business.cta.label}
                variant={page.audiences.business.cta.variant}
              />
            </article>
            <article className="card audience-card">
              <h3 className="card-title">{page.audiences.individual.title}</h3>
              <p className="card-text">{page.audiences.individual.description}</p>
              <LinkList locale={locale} services={page.audiences.individual.services} />
              <Button
                href={resolveHref(locale, page.audiences.individual.cta.href)}
                label={page.audiences.individual.cta.label}
                variant={page.audiences.individual.cta.variant}
              />
            </article>
          </div>
        </div>
      </section>

      <FinalCta
        description={page.finalCta.description}
        eyebrow={page.finalCta.eyebrow}
        locale={locale}
        primary={page.finalCta.primary}
        secondary={page.finalCta.secondary}
        title={page.finalCta.title}
      />
    </>
  );
}

function ServicesPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const page = content.servicesPage;

  return (
    <>
      <Hero
        description={page.hero.description}
        eyebrow={page.hero.eyebrow}
        locale={locale}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        title={page.hero.title}
        tone="forest"
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.businessIntro.description}
            title={page.businessIntro.title}
          />
          <div className="card-grid card-grid--three">
            {content.home.audiences.business.services.map((slug) => (
              <ServiceCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader
            description={page.individualIntro.description}
            title={page.individualIntro.title}
          />
          <div className="card-grid card-grid--three">
            {content.home.audiences.individual.services.map((slug) => (
              <ServiceCard key={slug} locale={locale} slug={slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.chooser.description}
            eyebrow={page.chooser.eyebrow}
            title={page.chooser.title}
          />
          <div className="card-grid card-grid--four">
            {page.chooser.items.map((item) => (
              <FeatureCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        description={page.finalCta.description}
        locale={locale}
        primary={page.finalCta.primary}
        secondary={page.finalCta.secondary}
        title={page.finalCta.title}
      />
    </>
  );
}

function ServicePage({
  locale,
  serviceSlug,
}: {
  locale: Locale;
  serviceSlug: ServiceSlug;
}) {
  const content = siteContent[locale];
  const service = getServiceContent(locale, serviceSlug);
  const related = getRelatedServiceCards(locale, serviceSlug);
  const process =
    service.category === "business" ? content.process.business : content.process.individual;
  const finalCta = getServiceFinalCta(locale);

  return (
    <>
      <Hero
        description={service.heroDescription}
        eyebrow={getServiceKicker(locale, service.category)}
        locale={locale}
        panels={service.included.slice(0, 2).map((item, index) => ({
          title: `${index + 1}.`,
          description: item,
        }))}
        primary={{
          label: content.ui.cta.bookConsultation,
          href: "/contact",
        }}
        secondary={{
          label: content.ui.cta.exploreServices,
          href: "/services",
          variant: "secondary",
        }}
        title={service.heroTitle}
        tone={service.category === "business" ? "forest" : "light"}
      />

      <section className="section">
        <div className="container split-layout">
          <SectionHeader title={content.ui.serviceLabels.who} />
          <div className="stack-cards">
            {service.audience.slice(0, 3).map((item) => (
              <article className="card list-card" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container split-layout">
          <SectionHeader title={content.ui.serviceLabels.problem} />
          <div className="stack-cards">
            {service.problems.slice(0, 3).map((item) => (
              <article className="card list-card" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <SectionHeader title={content.ui.serviceLabels.solution} />
          <div className="stack-cards">
            {service.solution.slice(0, 3).map((item) => (
              <article className="card list-card card--inverse" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader title={content.ui.serviceLabels.included} />
          <div className="card-grid card-grid--two">
            {service.included.slice(0, 4).map((item) => (
              <article className="card list-card" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title={content.ui.serviceLabels.outcomes} />
          <div className="card-grid card-grid--three">
            {service.outcomes.slice(0, 3).map((item) => (
              <article className="card impact-card" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader title={content.ui.serviceLabels.engagement} />
          <div className="process-grid">
            {process.map((step) => (
              <article className="card process-card" key={step.title}>
                <p className="card-kicker">{step.title}</p>
                <p className="card-text">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title={content.ui.serviceLabels.related} />
          <div className="card-grid card-grid--three">
            {related.map((item) => (
              <article className="card service-card" key={item.slug}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
                <Button
                  href={localizedPath(locale, getServicePath(item.slug))}
                  label={content.ui.cta.viewService}
                  variant="ghost"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        description={finalCta.description}
        locale={locale}
        primary={{ label: content.ui.cta.bookConsultation, href: "/contact" }}
        secondary={{
          label: content.ui.cta.requestSolution,
          href: "/contact",
          variant: "secondary",
        }}
        title={finalCta.title}
      />
    </>
  );
}

function CaseStudiesPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const page = content.caseStudiesPage;
  const storyLabels = getStoryLabels(locale);

  return (
    <>
      <Hero
        description={page.hero.description}
        eyebrow={page.hero.eyebrow}
        locale={locale}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        title={page.hero.title}
        tone="forest"
      />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--two">
            {content.caseStudies.map((study) => (
              <article className="card case-study-card" key={study.title}>
                <p className="card-kicker">{study.sector}</p>
                <h3 className="card-title">{study.title}</h3>
                <div className="stack-list">
                  <p>
                    <strong>{storyLabels.challenge}:</strong> {study.challenge}
                  </p>
                  <p>
                    <strong>{storyLabels.solution}:</strong> {study.solution}
                  </p>
                  <p>
                    <strong>{storyLabels.result}:</strong> {study.result}
                  </p>
                </div>
                <div className="link-list">
                  {study.services.map((service) => (
                    <a
                      className="link-list__item"
                      href={localizedPath(locale, getServicePath(service))}
                      key={service}
                    >
                      {content.services[service].title}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader title={page.noteTitle} description={page.noteDescription} />
        </div>
      </section>

      <FinalCta
        description={page.finalCta.description}
        locale={locale}
        primary={page.finalCta.primary}
        secondary={page.finalCta.secondary}
        title={page.finalCta.title}
      />
    </>
  );
}

function HowWeWorkPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const page = content.howWeWorkPage;

  return (
    <>
      <Hero
        description={page.hero.description}
        eyebrow={page.hero.eyebrow}
        locale={locale}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        title={page.hero.title}
      />

      <section className="section">
        <div className="container">
          <SectionHeader title={page.phasesTitle} description={page.phasesDescription} />
          <div className="process-grid">
            {content.process.full.map((item) => (
              <article className="card process-card" key={item.title}>
                <p className="card-kicker">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader title={page.modelsTitle} description={page.modelsDescription} />
          <div className="card-grid card-grid--three">
            {content.process.models.map((item) => (
              <FeatureCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        description={page.finalCta.description}
        locale={locale}
        primary={page.finalCta.primary}
        secondary={page.finalCta.secondary}
        title={page.finalCta.title}
      />
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const page = content.aboutPage;

  return (
    <>
      <Hero
        description={page.hero.description}
        eyebrow={page.hero.eyebrow}
        locale={locale}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        title={page.hero.title}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.principlesDescription}
            title={page.principlesTitle}
          />
          <div className="card-grid card-grid--four">
            {content.process.principles.map((item) => (
              <FeatureCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeader description={page.beliefsDescription} title={page.beliefsTitle} />
          <div className="card-grid card-grid--three">
            {content.process.beliefs.map((item) => (
              <FeatureCard description={item.description} key={item.title} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        description={page.finalCta.description}
        locale={locale}
        primary={page.finalCta.primary}
        secondary={page.finalCta.secondary}
        title={page.finalCta.title}
      />
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const page = content.contactPage;

  return (
    <>
      <Hero
        description={page.hero.description}
        eyebrow={page.hero.eyebrow}
        locale={locale}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        title={page.hero.title}
      />

      <section className="section">
        <div className="container">
          <SectionHeader
            description={page.pathsDescription}
            title={page.pathsTitle}
          />
          <div className="card-grid card-grid--two">
            {page.paths.map((item, index) => (
              <article className={`card entry-card ${index === 0 ? "card--inverse" : ""}`} key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
                <Button
                  href={resolveHref(locale, item.cta.href)}
                  label={item.cta.label}
                  variant={item.cta.variant}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container contact-layout">
          <div>
            <SectionHeader
              description={page.detailsDescription}
              title={page.detailsTitle}
            />
            <div className="contact-details card">
              <p className="contact-details__label">{content.ui.directEmailLabel}</p>
              <a className="contact-details__value" href={`mailto:${content.company.email}`}>
                {content.company.email}
              </a>
              <p className="card-text">{content.company.location}</p>
              <p className="card-text">{content.company.responseNote}</p>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>

      <FinalCta
        description={page.finalCta.description}
        locale={locale}
        primary={page.finalCta.primary}
        secondary={page.finalCta.secondary}
        title={page.finalCta.title}
      />
    </>
  );
}

export function SitePage({ page }: { page: RenderedPage }) {
  return (
    <main className="page-main" id="main-content" lang={page.locale}>
      {page.kind === "home" ? <HomePage locale={page.locale} /> : null}
      {page.kind === "services" ? <ServicesPage locale={page.locale} /> : null}
      {page.kind === "service" ? (
        <ServicePage locale={page.locale} serviceSlug={page.service} />
      ) : null}
      {page.kind === "case-studies" ? <CaseStudiesPage locale={page.locale} /> : null}
      {page.kind === "how-we-work" ? <HowWeWorkPage locale={page.locale} /> : null}
      {page.kind === "about" ? <AboutPage locale={page.locale} /> : null}
      {page.kind === "contact" ? <ContactPage locale={page.locale} /> : null}
    </main>
  );
}
