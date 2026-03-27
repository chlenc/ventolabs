export const siteUrl = "https://ventolabs.ai";

export const locales = ["ru", "en", "es"] as const;
export type Locale = (typeof locales)[number];

export const serviceSlugs = [
  "ai-strategy-governance",
  "ai-infrastructure-data-systems",
  "industry-specific-ai-solutions",
  "ai-sales-revenue-automation",
  "ai-integration-automation",
  "ai-fintech-blockchain",
  "ai-security-risk-testing",
  "custom-ai-product-development",
  "ai-training-education",
  "personal-ai-assistants",
  "ai-content-creation-systems",
  "ai-communities-memberships",
  "ai-templates-marketplace",
  "ai-consulting-for-individuals",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];
export type ServiceCategory = "business" | "individual";
export type PageKey =
  | "home"
  | "services"
  | "case-studies"
  | "how-we-work"
  | "about"
  | "contact";

export type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type HeroPanel = {
  title: string;
  description: string;
};

export type ServiceContent = {
  category: ServiceCategory;
  title: string;
  kicker: string;
  heroTitle: string;
  heroDescription: string;
  cardSummary: string;
  audience: string[];
  problems: string[];
  solution: string[];
  included: string[];
  outcomes: string[];
};

export type CaseStudy = {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
  services: ServiceSlug[];
};

export type UseCase = {
  title: string;
  audience: string;
  challenge: string;
  solution: string;
  result: string;
  service: ServiceSlug;
};

type SectionCard = {
  title: string;
  description: string;
};

export type LocaleContent = {
  company: {
    name: string;
    email: string;
    responseNote: string;
    location: string;
  };
  ui: {
    languageLabel: string;
    languages: Record<Locale, string>;
    nav: {
      home: string;
      services: string;
      caseStudies: string;
      howWeWork: string;
      about: string;
      contact: string;
    };
    cta: {
      bookConsultation: string;
      requestSolution: string;
      exploreServices: string;
      talkToUs: string;
      requestAudit: string;
      viewService: string;
      seeAllServices: string;
      contactUs: string;
    };
    serviceLabels: {
      business: string;
      individual: string;
      related: string;
      who: string;
      problem: string;
      solution: string;
      included: string;
      outcomes: string;
      engagement: string;
    };
    footerBlurb: string;
    footerTitle: string;
    directEmailLabel: string;
    mobileMenuLabel: string;
    skipToContent: string;
    form: {
      name: string;
      email: string;
      company: string;
      inquiryType: string;
      details: string;
      placeholderDetails: string;
      submit: string;
      success: string;
      error: string;
      privacy: string;
      types: {
        businessImplementation: string;
        strategyAudit: string;
        training: string;
        individualHelp: string;
      };
    };
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
      panels: HeroPanel[];
    };
    positioningStrip: string[];
    problem: {
      eyebrow: string;
      title: string;
      description: string;
      items: SectionCard[];
    };
    solutions: {
      eyebrow: string;
      title: string;
      description: string;
      featured: ServiceSlug[];
    };
    why: {
      eyebrow: string;
      title: string;
      description: string;
      items: SectionCard[];
    };
    process: {
      eyebrow: string;
      title: string;
      description: string;
    };
    entryPaths: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<SectionCard & { cta: Cta }>;
    };
    useCases: {
      eyebrow: string;
      title: string;
      description: string;
      items: UseCase[];
    };
    audiences: {
      eyebrow: string;
      title: string;
      description: string;
      business: {
        title: string;
        description: string;
        services: ServiceSlug[];
        cta: Cta;
      };
      individual: {
        title: string;
        description: string;
        services: ServiceSlug[];
        cta: Cta;
      };
    };
    finalCta: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
  };
  servicesPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
    businessIntro: {
      title: string;
      description: string;
    };
    individualIntro: {
      title: string;
      description: string;
    };
    chooser: {
      eyebrow: string;
      title: string;
      description: string;
      items: SectionCard[];
    };
    finalCta: {
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
  };
  caseStudiesPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
    noteTitle: string;
    noteDescription: string;
    finalCta: {
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
  };
  howWeWorkPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
    phasesTitle: string;
    phasesDescription: string;
    modelsTitle: string;
    modelsDescription: string;
    finalCta: {
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
  };
  aboutPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
    principlesTitle: string;
    principlesDescription: string;
    beliefsTitle: string;
    beliefsDescription: string;
    finalCta: {
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
  };
  contactPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
    pathsTitle: string;
    pathsDescription: string;
    paths: Array<SectionCard & { cta: Cta }>;
    detailsTitle: string;
    detailsDescription: string;
    finalCta: {
      title: string;
      description: string;
      primary: Cta;
      secondary: Cta;
    };
  };
  process: {
    business: SectionCard[];
    individual: SectionCard[];
    full: SectionCard[];
    models: SectionCard[];
    principles: SectionCard[];
    beliefs: SectionCard[];
  };
  caseStudies: CaseStudy[];
  services: Record<ServiceSlug, ServiceContent>;
  seo: Record<PageKey, { title: string; description: string }>;
};

export const businessServiceSlugs: ServiceSlug[] = [
  "ai-strategy-governance",
  "ai-infrastructure-data-systems",
  "industry-specific-ai-solutions",
  "ai-sales-revenue-automation",
  "ai-integration-automation",
  "ai-fintech-blockchain",
  "ai-security-risk-testing",
  "custom-ai-product-development",
];

export const individualServiceSlugs: ServiceSlug[] = [
  "ai-training-education",
  "personal-ai-assistants",
  "ai-content-creation-systems",
  "ai-communities-memberships",
  "ai-templates-marketplace",
  "ai-consulting-for-individuals",
];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return serviceSlugs.includes(value as ServiceSlug);
}

export function localizedPath(locale: Locale, href: string): string {
  const normalized = href === "" ? "/" : href.startsWith("/") ? href : `/${href}`;
  if (locale === "ru") {
    return normalized;
  }
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export function getRelatedServices(slug: ServiceSlug): ServiceSlug[] {
  const pool = businessServiceSlugs.includes(slug)
    ? businessServiceSlugs
    : individualServiceSlugs;

  return pool.filter((item) => item !== slug).slice(0, 3);
}

export const pagePaths: Record<PageKey, string> = {
  home: "/",
  services: "/services",
  "case-studies": "/case-studies",
  "how-we-work": "/how-we-work",
  about: "/about",
  contact: "/contact",
};

const commonCompany = {
  name: "VentoLabs",
  email: "hello@ventolabs.ai",
};

const content: Record<Locale, LocaleContent> = {
  ru: {
    company: {
      ...commonCompany,
      responseNote: "Отвечаем по квалифицированным запросам в течение одного рабочего дня.",
      location: "Работаем международно, проекты запускаем удаленно.",
    },
    ui: {
      languageLabel: "Язык",
      languages: {
        ru: "RU",
        en: "EN",
        es: "ES",
      },
      nav: {
        home: "Главная",
        services: "Услуги",
        caseStudies: "Кейсы",
        howWeWork: "Как мы работаем",
        about: "О нас",
        contact: "Контакты",
      },
      cta: {
        bookConsultation: "Записаться на консультацию",
        requestSolution: "Запросить решение",
        exploreServices: "Посмотреть услуги",
        talkToUs: "Связаться с нами",
        requestAudit: "Запросить аудит",
        viewService: "Открыть услугу",
        seeAllServices: "Все услуги",
        contactUs: "Написать нам",
      },
      serviceLabels: {
        business: "B2B-услуги",
        individual: "Для специалистов и индивидуальных клиентов",
        related: "Связанные услуги",
        who: "Для кого это",
        problem: "Проблема",
        solution: "Решение",
        included: "Что входит",
        outcomes: "Бизнес-эффект",
        engagement: "Как начинается работа",
      },
      footerBlurb:
        "Практический AI-партнер для компаний, которым нужны реальные системы, понятный план внедрения и measurable operational leverage.",
      footerTitle: "AI implementation with business discipline.",
      directEmailLabel: "Почта для запросов",
      mobileMenuLabel: "Открыть навигацию",
      skipToContent: "Перейти к содержимому",
      form: {
        name: "Имя",
        email: "Email",
        company: "Компания или роль",
        inquiryType: "Тип запроса",
        details: "Что вы хотите решить",
        placeholderDetails:
          "Кратко опишите задачу, текущие ограничения, сроки и ожидаемый результат.",
        submit: "Отправить запрос",
        success:
          "Спасибо. Мы получили запрос и вернемся с ответом в ближайший рабочий день.",
        error:
          "Не удалось отправить форму. Напишите нам напрямую на hello@ventolabs.ai.",
        privacy:
          "Отправляя форму, вы соглашаетесь на обработку данных для ответа на ваш запрос.",
        types: {
          businessImplementation: "AI-внедрение для бизнеса",
          strategyAudit: "Стратегия / аудит возможностей",
          training: "Обучение и воркшоп",
          individualHelp: "Персональная AI-помощь",
        },
      },
    },
    home: {
      hero: {
        eyebrow: "AI systems for operations, revenue and scalable efficiency",
        title:
          "Внедряем AI-системы, которые сокращают ручную работу, ускоряют операции и создают управляемый рычаг роста.",
        description:
          "VentoLabs помогает бизнесу перейти от разговоров про AI к рабочим системам: стратегия, data foundation, интеграции, automation, внутренние ассистенты и кастомные AI-продукты.",
        primary: {
          label: "Записаться на консультацию",
          href: "/contact",
        },
        secondary: {
          label: "Посмотреть услуги",
          href: "/services",
          variant: "secondary",
        },
        panels: [
          {
            title: "Стратегия и governance",
            description:
              "Определяем, где AI реально влияет на экономику бизнеса, и выстраиваем понятный roadmap внедрения.",
          },
          {
            title: "Интеграции и automation",
            description:
              "Соединяем AI с вашими данными, CRM, внутренними процессами и operational workflows.",
          },
          {
            title: "Кастомные решения",
            description:
              "Собираем внутренние инструменты, AI assistants и продуктовые сценарии под вашу модель бизнеса.",
          },
        ],
      },
      positioningStrip: [
        "Business-first, а не tool-first",
        "Стартуем с аудита или сразу с build phase",
        "Встраиваем AI в реальные процессы и данные",
        "Передаем системе владельца, контроль и next-step plan",
      ],
      problem: {
        eyebrow: "Проблемы, с которыми к нам приходят",
        title: "Когда AI обсуждают много, а бизнес-эффект так и не появляется.",
        description:
          "Мы говорим с компаниями, у которых уже накопилось давление: много ручной работы, разрозненные системы, неясные приоритеты и усталость от бесконечных пилотов без результата.",
        items: [
          {
            title: "Слишком много ручных операций",
            description:
              "Команда тратит время на задачи, которые можно стандартизировать, автоматизировать или закрыть AI-assisted workflows.",
          },
          {
            title: "Разорванные системы и процессы",
            description:
              "CRM, таблицы, чаты, документы и базы знаний живут отдельно, поэтому решения принимаются медленно и на неполном контексте.",
          },
          {
            title: "Потери в revenue flow",
            description:
              "Лиды приходят, но квалификация, follow-up и handoff устроены слишком вручную, поэтому продажи теряют скорость.",
          },
          {
            title: "Слабая видимость по данным",
            description:
              "У бизнеса нет единой AI-ready основы: данные не очищены, знания не структурированы, доступы не описаны.",
          },
          {
            title: "AI confusion без исполнения",
            description:
              "Руководство понимает, что AI нужен, но не знает, с чего стартовать и как не распылить бюджет на модные инструменты.",
          },
          {
            title: "Риски без контроля",
            description:
              "Команды уже пробуют AI, но без governance, security checks и понятных правил обращения с данными.",
          },
        ],
      },
      solutions: {
        eyebrow: "Ключевые направления работы",
        title: "От стратегии до внедрения: без декоративных demo и без generic AI-шума.",
        description:
          "Мы проектируем сервисы так, чтобы клиент мог зайти либо с конкретной задачей, либо с запросом на поиск лучших AI-возможностей внутри бизнеса.",
        featured: [
          "ai-strategy-governance",
          "ai-infrastructure-data-systems",
          "ai-sales-revenue-automation",
          "ai-integration-automation",
          "ai-security-risk-testing",
          "custom-ai-product-development",
        ],
      },
      why: {
        eyebrow: "Почему VentoLabs",
        title: "Практический внедренческий партнер, а не витрина из AI-терминов.",
        description:
          "Нас интересует не красивый pitch, а то, как AI реально встроится в операционную модель, ответственность команд, контроль рисков и скорость масштабирования.",
        items: [
          {
            title: "Сначала бизнес-логика",
            description:
              "Каждый сценарий проходит через призму revenue, cost, time-to-execution и управляемости внутри команды.",
          },
          {
            title: "Решения под ваш процесс",
            description:
              "Мы не упаковываем все в один шаблон. Система, данные, роли и план внедрения собираются под реальную бизнес-модель.",
          },
          {
            title: "Интеграция, а не isolated tool",
            description:
              "AI должен жить внутри workflow, а не отдельно от CRM, документации, коммуникаций и handoff между людьми.",
          },
          {
            title: "Можно начать с аудита",
            description:
              "Если приоритеты пока не ясны, мы помогаем выбрать правильные возможности до того, как команда уйдет в лишнюю сложность.",
          },
        ],
      },
      process: {
        eyebrow: "Простой план работы",
        title: "Пять шагов от идеи до системы, которой реально пользуются.",
        description:
          "Мы держим процесс прозрачным: сначала диагностируем, затем проектируем, собираем, запускаем и дорабатываем уже на живом контуре.",
      },
      entryPaths: {
        eyebrow: "Два понятных входа",
        title: "Можно прийти с ясным запросом или с вопросом, где вообще лежит лучший AI-leverage.",
        description:
          "Оба сценария нормальны. Сайт и наши услуги специально собраны так, чтобы не forcing one path for everyone.",
        items: [
          {
            title: "Я уже понимаю, что нужно внедрить",
            description:
              "Если у вас есть конкретная потребность: AI sales workflow, internal assistant, data system, training, security testing или кастомный продукт, мы быстро переводим задачу в scope и реализацию.",
            cta: {
              label: "Запросить решение",
              href: "/contact",
            },
          },
          {
            title: "Нужно понять, где AI даст лучший результат",
            description:
              "Если приоритеты не сформированы, начинаем с диагностической сессии и AI-аудита: находим точки эффекта, ограничения и понятный следующий шаг.",
            cta: {
              label: "Запросить аудит",
              href: "/services/ai-strategy-governance",
              variant: "secondary",
            },
          },
        ],
      },
      useCases: {
        eyebrow: "Типовые use cases",
        title: "Реалистичные сценарии, которые дают бизнесу понятный результат.",
        description:
          "Мы не обещаем магию. Мы собираем AI-сценарии там, где они действительно сокращают cycle time, повышают качество исполнения или разгружают ключевых специалистов.",
        items: [
          {
            title: "AI-квалификация входящих лидов",
            audience: "B2B команды продаж",
            challenge:
              "Лиды приходят из нескольких каналов, а первичная квалификация зависит от ручного разбора.",
            solution:
              "Настраиваем scoring, enrichment, routing и sales brief generation прямо в pipeline.",
            result:
              "Команда быстрее доходит до qualified opportunities и теряет меньше времени на неподходящие запросы.",
            service: "ai-sales-revenue-automation",
          },
          {
            title: "Внутренний AI knowledge system",
            audience: "Операционные и экспертные команды",
            challenge:
              "Знание распределено по чатам, звонкам, документам и голове отдельных сотрудников.",
            solution:
              "Строим структурированную knowledge layer и AI-помощника с контролем источников и ролей.",
            result:
              "Контекст ищется быстрее, снижается зависимость от отдельных людей и ускоряется onboarding.",
            service: "ai-infrastructure-data-systems",
          },
          {
            title: "Executive AI assistant",
            audience: "Фаундеры и руководители",
            challenge:
              "Ежедневные decisions, follow-ups и подготовка к встречам съедают фокус.",
            solution:
              "Собираем персональный AI stack для подготовки, заметок, поиска контекста и приоритизации.",
            result:
              "Руководитель освобождает время для решений и держит меньше операционного шума в голове.",
            service: "personal-ai-assistants",
          },
          {
            title: "AI-powered internal workflows",
            audience: "Операции, support, delivery teams",
            challenge:
              "Повторяющиеся процессы тормозят скорость команды и приводят к пропущенным шагам.",
            solution:
              "Проектируем orchestration между AI, людьми и системами, где automation действительно уместна.",
            result:
              "Операции становятся предсказуемее, а люди фокусируются на исключениях и принятии решений.",
            service: "ai-integration-automation",
          },
          {
            title: "Контент-система для экспертного бренда",
            audience: "Founders, advisors, educators",
            challenge:
              "Контент зависит от настроения, а не от системы, поэтому публикации не выдерживают ритм.",
            solution:
              "Строим AI-assisted pipeline для briefing, scripting, repurposing, review и publishing.",
            result:
              "Выход контента становится устойчивым без потери тона и без превращения бренда в generic AI noise.",
            service: "ai-content-creation-systems",
          },
          {
            title: "Отраслевой AI-слой под конкретный рынок",
            audience: "Специализированные компании",
            challenge:
              "Обычные инструменты не знают специфики domain logic, compliance и реальных ограничений отрасли.",
            solution:
              "Проектируем AI-решение вокруг ваших данных, терминологии, рисков и decision flows.",
            result:
              "Система помогает команде в реальной domain work, а не просто генерирует красивый текст.",
            service: "industry-specific-ai-solutions",
          },
        ],
      },
      audiences: {
        eyebrow: "Два направления услуг",
        title: "Работаем и с business implementation, и с персональными AI-сценариями.",
        description:
          "Основной фокус VentoLabs - компании и команды. Но часть услуг специально собрана для специалистов, founders и индивидуальных клиентов, которым нужен практический AI setup.",
        business: {
          title: "Для бизнеса",
          description:
            "Стратегия, data foundation, sales automation, integrations, security, custom build и отраслевые AI-решения.",
          services: businessServiceSlugs,
          cta: {
            label: "Смотреть B2B-услуги",
            href: "/services",
          },
        },
        individual: {
          title: "Для специалистов и индивидуальных клиентов",
          description:
            "Обучение, персональные AI-ассистенты, content systems, memberships, templates и one-to-one consulting.",
          services: individualServiceSlugs,
          cta: {
            label: "Смотреть персональные услуги",
            href: "/services",
            variant: "secondary",
          },
        },
      },
      finalCta: {
        eyebrow: "Следующий шаг",
        title: "Нужен ясный AI-roadmap или уже готовый scope на внедрение?",
        description:
          "Расскажите, что у вас сейчас тормозит рост, перегружает команду или создает хаос в процессах. Мы предложим разумную точку входа: аудит, direct build, training или custom solution.",
        primary: {
          label: "Записаться на консультацию",
          href: "/contact",
        },
        secondary: {
          label: "Посмотреть услуги",
          href: "/services",
          variant: "secondary",
        },
      },
    },
    servicesPage: {
      hero: {
        eyebrow: "Services ecosystem",
        title: "Полная линейка услуг: от AI-стратегии до production implementation.",
        description:
          "Страница услуг собрана так, чтобы вы быстро поняли, идти ли вам в аудит, в прямое внедрение, в обучение или в кастомную AI-разработку.",
        primary: {
          label: "Запросить консультацию",
          href: "/contact",
        },
        secondary: {
          label: "Смотреть кейсы",
          href: "/case-studies",
          variant: "secondary",
        },
      },
      businessIntro: {
        title: "B2B-услуги",
        description:
          "Для компаний, которым нужно связать AI с операциями, данными, revenue engines, security и ростом продукта.",
      },
      individualIntro: {
        title: "Услуги для специалистов и частных клиентов",
        description:
          "Для тех, кто хочет быстрее встроить AI в личную работу, контент, обучение, карьеру или собственный бизнес.",
      },
      chooser: {
        eyebrow: "Как выбрать формат",
        title: "Четыре нормальные точки входа вместо одного универсального пакета.",
        description:
          "Если вы еще не решили, какой формат нужен, ориентируйтесь на стадию задачи, внутреннюю готовность и скорость, с которой нужно получить результат.",
        items: [
          {
            title: "Стратегия / аудит",
            description:
              "Когда приоритеты не ясны, нужно оценить процессы, данные, ограничения и выбрать сценарии с лучшим ROI.",
          },
          {
            title: "Прямое внедрение",
            description:
              "Когда use case уже понятен и нужен конкретный build: automation, assistant, knowledge system или AI workflow.",
          },
          {
            title: "Кастомная разработка",
            description:
              "Когда стандартного набора недостаточно и нужен внутренний инструмент или AI-powered product под вашу модель бизнеса.",
          },
          {
            title: "Training / education",
            description:
              "Когда команде или отдельному специалисту нужен не просто обзор рынка, а практический AI operating model.",
          },
        ],
      },
      finalCta: {
        title: "Не уверены, какая услуга вам подходит?",
        description:
          "Начните с короткой консультации. Поможем отделить действительно ценные AI-сценарии от лишнего шума и сразу предложим правильный формат работы.",
        primary: {
          label: "Связаться с нами",
          href: "/contact",
        },
        secondary: {
          label: "AI-стратегия и аудит",
          href: "/services/ai-strategy-governance",
          variant: "secondary",
        },
      },
    },
    caseStudiesPage: {
      hero: {
        eyebrow: "Selected work",
        title: "Примеры задач, которые мы превращаем в рабочие AI-системы.",
        description:
          "Здесь не будет сказок про мгновенный 10x. Мы показываем реалистичные кейсы: challenge, solution, operating result и почему это было полезно бизнесу.",
        primary: {
          label: "Обсудить похожую задачу",
          href: "/contact",
        },
        secondary: {
          label: "Смотреть услуги",
          href: "/services",
          variant: "secondary",
        },
      },
      noteTitle: "Как мы говорим про результат",
      noteDescription:
        "Если у клиента нет публичного разрешения на цифры, мы не придумываем метрики. Важнее показать логику задачи, ограничения и качественный бизнес-эффект после внедрения.",
      finalCta: {
        title: "Есть похожая задача внутри вашей компании?",
        description:
          "Мы можем начать с короткого discovery и быстро оценить, какой тип AI-решения подойдет именно под ваш контекст.",
        primary: {
          label: "Записаться на консультацию",
          href: "/contact",
        },
        secondary: {
          label: "Как мы работаем",
          href: "/how-we-work",
          variant: "secondary",
        },
      },
    },
    howWeWorkPage: {
      hero: {
        eyebrow: "Engagement model",
        title: "Прозрачный процесс: discovery, scope, implementation, integration, handoff.",
        description:
          "Мы делаем процесс понятным для клиента: фиксируем, что именно исследуем, что проектируем, что строим, что интегрируем и какие решения должны остаться внутри команды после запуска.",
        primary: {
          label: "Обсудить проект",
          href: "/contact",
        },
        secondary: {
          label: "Посмотреть услуги",
          href: "/services",
          variant: "secondary",
        },
      },
      phasesTitle: "Этапы работы",
      phasesDescription:
        "Даже если проект идет быстро, мы не пропускаем критические этапы: цель, риски, архитектуру, пилот, handoff и iterative optimization.",
      modelsTitle: "Форматы сотрудничества",
      modelsDescription:
        "Не каждому клиенту нужен большой transformation project. Иногда достаточно точечного аудита, иногда - прямого build sprint, а иногда - сопровождения после запуска.",
      finalCta: {
        title: "Хотите начать без лишней бюрократии, но с ясной структурой?",
        description:
          "Расскажите, на какой стадии вы сейчас: exploration, выбор use case, внедрение или optimization. Мы предложим адекватный формат старта.",
        primary: {
          label: "Записаться на консультацию",
          href: "/contact",
        },
        secondary: {
          label: "Смотреть кейсы",
          href: "/case-studies",
          variant: "secondary",
        },
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "About VentoLabs",
        title: "VentoLabs - практический AI implementation partner для компаний и специалистов.",
        description:
          "Мы не продаем AI как абстрактное будущее. Мы помогаем бизнесу и людям использовать его там, где он дает понятную управленческую и операционную ценность.",
        primary: {
          label: "Связаться с нами",
          href: "/contact",
        },
        secondary: {
          label: "Как мы работаем",
          href: "/how-we-work",
          variant: "secondary",
        },
      },
      principlesTitle: "Принципы, по которым мы работаем",
      principlesDescription:
        "Если решение не выдерживает проверку на бизнес-логику, внедряемость и ownership внутри команды, мы не считаем его хорошим проектом.",
      beliefsTitle: "Наша позиция по AI",
      beliefsDescription:
        "AI дает ценность тогда, когда связан с реальной системой принятия решений, данными, процессами и людьми, которые будут с ним жить после запуска.",
      finalCta: {
        title: "Нужен партнер, который умеет и думать, и внедрять?",
        description:
          "Если вы ищете не презентацию, а ясный путь к рабочей AI-системе, начнем с разговора о вашей задаче и ограничениях.",
        primary: {
          label: "Записаться на консультацию",
          href: "/contact",
        },
        secondary: {
          label: "Посмотреть услуги",
          href: "/services",
          variant: "secondary",
        },
      },
    },
    contactPage: {
      hero: {
        eyebrow: "Contact",
        title: "Обсудим внедрение, аудит, обучение или персональный AI-setup.",
        description:
          "Напишите, что вы хотите изменить: убрать ручную работу, ускорить продажи, построить AI foundation, обучить команду или настроить личный AI stack. Мы вернемся с next step, а не с generic sales reply.",
        primary: {
          label: "Отправить запрос",
          href: "#contact-form",
        },
        secondary: {
          label: "Написать на почту",
          href: "mailto:hello@ventolabs.ai",
          variant: "secondary",
        },
      },
      pathsTitle: "Куда лучше направить запрос",
      pathsDescription:
        "Мы разделяем бизнес-запросы и индивидуальные сценарии, чтобы отвечать точнее и быстрее.",
      paths: [
        {
          title: "Для бизнеса",
          description:
            "Подходит, если нужен audit, AI roadmap, automation, integrations, revenue workflows, security review или кастомная AI-разработка.",
          cta: {
            label: "Запросить бизнес-решение",
            href: "#contact-form",
          },
        },
        {
          title: "Для специалистов и индивидуальных клиентов",
          description:
            "Подходит для обучения, personal AI assistants, content systems, memberships, templates и one-to-one consulting.",
          cta: {
            label: "Запросить персональную помощь",
            href: "#contact-form",
            variant: "secondary",
          },
        },
      ],
      detailsTitle: "Что происходит после сообщения",
      detailsDescription:
        "Мы смотрим на задачу, отвечаем по существу, уточняем scope и предлагаем разумный формат старта: консультация, аудит, sprint или build phase.",
      finalCta: {
        title: "Предпочитаете короткий first call вместо длинной переписки?",
        description:
          "Оставьте запрос через форму или напишите напрямую на hello@ventolabs.ai. Мы предложим ближайший понятный next step.",
        primary: {
          label: "Открыть форму",
          href: "#contact-form",
        },
        secondary: {
          label: "Написать на почту",
          href: "mailto:hello@ventolabs.ai",
          variant: "secondary",
        },
      },
    },
    process: {
      business: [
        {
          title: "Discover",
          description:
            "Разбираем цели бизнеса, ограничения, existing stack, ownership и реальные точки, где AI может дать результат.",
        },
        {
          title: "Design",
          description:
            "Собираем логику решения: architecture, data flow, governance, human checkpoints и критерии качества.",
        },
        {
          title: "Build",
          description:
            "Внедряем систему поэтапно: automation, assistants, internal tools, content flows или product modules.",
        },
        {
          title: "Launch",
          description:
            "Подключаем процессы, тестируем на живом контуре, обучаем команду и фиксируем рабочий operating model.",
        },
        {
          title: "Optimize",
          description:
            "Дорабатываем после запуска: качество, reliability, coverage, prompts, data hygiene и rollout на новые команды.",
        },
      ],
      individual: [
        {
          title: "Assess",
          description:
            "Понимаем вашу роль, нагрузку, инструменты и задачи, где AI должен реально экономить время или усиливать результат.",
        },
        {
          title: "Set up",
          description:
            "Подбираем стек, настраиваем сценарии, knowledge sources, templates и personal workflow.",
        },
        {
          title: "Train",
          description:
            "Показываем, как использовать систему без лишней сложности и без зависимости от одного волшебного prompt.",
        },
        {
          title: "Refine",
          description:
            "Дотягиваем связки после первых недель использования, чтобы инструмент действительно закрепился в работе.",
        },
      ],
      full: [
        {
          title: "Discovery / audit",
          description:
            "Карта процессов, ограничений, данных, целей и рисков до начала implementation work.",
        },
        {
          title: "Scope definition",
          description:
            "Фиксируем, что именно строим, что считаем успехом и где нужны human review checkpoints.",
        },
        {
          title: "Implementation",
          description:
            "Собираем систему, логику automation, prompts, knowledge layer, interfaces и decision rules.",
        },
        {
          title: "Integration",
          description:
            "Подключаем CRM, документы, базы знаний, communication tools и внутренние workflows.",
        },
        {
          title: "Training / handoff",
          description:
            "Передаем систему команде, описываем владельцев, usage rules и next-step operating model.",
        },
        {
          title: "Optimization",
          description:
            "Оцениваем результат на живом контуре и улучшаем качество там, где это дает реальную выгоду.",
        },
      ],
      models: [
        {
          title: "Audit-first engagement",
          description:
            "Подходит, если нужно понять, где AI действительно даст value, прежде чем идти в build.",
        },
        {
          title: "Direct implementation sprint",
          description:
            "Подходит, если use case уже выбран и нужен быстрый переход в проектирование и запуск.",
        },
        {
          title: "Custom build and ongoing optimization",
          description:
            "Подходит для более сложных систем, внутренних продуктов и AI layers, которые будут развиваться со временем.",
        },
      ],
      principles: [
        {
          title: "Сначала полезность, потом технология",
          description:
            "Мы начинаем с business logic, а не с желания встроить AI куда угодно.",
        },
        {
          title: "Простая структура лучше красивого хаоса",
          description:
            "Каждый проект должен быть понятен в scope, ownership, risk profile и expected outcome.",
        },
        {
          title: "Система должна жить после релиза",
          description:
            "Мы думаем о handoff, training, reliability и дальнейшей эксплуатации заранее, а не в конце.",
        },
        {
          title: "Кастомно - только когда это оправдано",
          description:
            "Мы не усложняем архитектуру без причины и не продаем custom build там, где хватит разумного setup.",
        },
      ],
      beliefs: [
        {
          title: "AI должен усиливать решение, а не скрывать хаос",
          description:
            "Если процессы сломаны, их нужно сначала понять и собрать в рабочую систему.",
        },
        {
          title: "Governance - это часть роста, а не тормоз",
          description:
            "Без правил доступа, ролей и контроля качества AI быстро превращается в источник нового риска.",
        },
        {
          title: "Хорошее внедрение выглядит спокойно",
          description:
            "Премиальный AI-проект редко выглядит громко. Он просто делает сложную работу понятнее и быстрее.",
        },
      ],
    },
    caseStudies: [
      {
        title: "AI qualification workflow for a B2B services pipeline",
        sector: "B2B services",
        challenge:
          "Лиды поступали из нескольких каналов, а квалификация зависела от ручного разбора и нерегулярного follow-up.",
        solution:
          "Мы спроектировали lead scoring, enrichment, routing и brief generation для sales team, чтобы передавать в работу только качественные opportunities.",
        result:
          "Команда получила более быстрый response cycle, лучшую видимость по pipeline и меньше ручной рутины на раннем этапе продаж.",
        services: [
          "ai-sales-revenue-automation",
          "ai-integration-automation",
        ],
      },
      {
        title: "Internal AI knowledge assistant for an advisory team",
        sector: "Advisory / knowledge work",
        challenge:
          "Экспертиза была распределена по звонкам, документам, чатам и личному контексту сотрудников.",
        solution:
          "Мы собрали AI-ready knowledge layer, role-based access и internal assistant workflows с контролем источников.",
        result:
          "Команда стала быстрее находить нужный контекст, легче передавать знания и увереннее готовиться к клиентским задачам.",
        services: [
          "ai-infrastructure-data-systems",
          "custom-ai-product-development",
        ],
      },
      {
        title: "AI-assisted compliance workflow for a fintech operations team",
        sector: "Fintech",
        challenge:
          "Ручная проверка документов и исключений замедляла onboarding и перегружала операционную команду.",
        solution:
          "Мы описали decision flow, добавили AI-assisted triage, human review checkpoints и audit-friendly process rules.",
        result:
          "Команда сократила объем повторяющейся работы и сохранила более понятный контроль над исключениями и рисками.",
        services: [
          "ai-fintech-blockchain",
          "ai-security-risk-testing",
        ],
      },
      {
        title: "Content system for a founder-led expert brand",
        sector: "Founder / expert business",
        challenge:
          "Контент выходил нерегулярно, а производство материалов каждый раз собиралось почти с нуля.",
        solution:
          "Мы настроили AI-assisted briefing, scripting, repurposing, review и publishing workflow с обязательным human approval.",
        result:
          "Появился устойчивый контент-ритм и меньше зависимости от ручного сборочного процесса без потери качества тона.",
        services: [
          "ai-content-creation-systems",
          "personal-ai-assistants",
        ],
      },
    ],
    services: {
      "ai-strategy-governance": {
        category: "business",
        title: "AI-стратегия и governance",
        kicker: "B2B service",
        heroTitle:
          "Помогаем превратить разрозненные AI-инициативы в ясную стратегию, roadmap и систему управления.",
        heroDescription:
          "Если компания уже чувствует давление на процессы и понимает, что AI нужен, но не хочет идти в хаос, мы помогаем определить приоритеты, ownership, правила использования и безопасный путь масштабирования.",
        cardSummary:
          "Стратегия, приоритеты, governance, ownership и roadmap внедрения AI под реальные бизнес-цели.",
        audience: [
          "CEO, COO, heads of transformation и руководители функций, которым нужен понятный AI-plan.",
          "Компании с несколькими pilot initiatives, но без единой логики принятия решений.",
          "Команды, которым важно встроить AI без потери контроля, безопасности и ответственности.",
        ],
        problems: [
          "AI-проекты запускаются фрагментарно и не привязаны к бизнес-приоритетам.",
          "Команда пробует инструменты, но не понимает, где действительно лежит measurable value.",
          "Нет правил по доступам, данным, ролям, quality control и risk ownership.",
          "Руководство хочет двигаться быстрее, но боится сделать ставку на неправильный сценарий.",
        ],
        solution: [
          "Проводим AI-аудит процессов, данных, текущих инициатив и внутренних ограничений.",
          "Определяем приоритетные use cases по критериям value, feasibility, risk и time-to-impact.",
          "Собираем governance model: роли, ownership, data boundaries и правила эксплуатации.",
          "Формируем phased roadmap, чтобы бизнес мог двигаться от быстрого эффекта к системному масштабу.",
        ],
        included: [
          "Stakeholder interviews и problem framing.",
          "AI opportunity map по функциям и процессам.",
          "Приоритизация use cases и sequencing rollout.",
          "Governance recommendations и risk controls.",
          "Roadmap внедрения с понятным next step.",
        ],
        outcomes: [
          "Появляется ясность, во что вкладываться в первую очередь.",
          "Снижается риск хаотичного внедрения и shadow AI внутри команды.",
          "Руководство получает аргументированную структуру принятия решений.",
          "Следующие AI-проекты запускаются быстрее и с более понятным ownership.",
        ],
      },
      "ai-infrastructure-data-systems": {
        category: "business",
        title: "AI-инфраструктура и data systems",
        kicker: "B2B service",
        heroTitle:
          "Строим AI-ready foundation: данные, pipelines, internal knowledge systems и контекст, на котором AI действительно работает.",
        heroDescription:
          "Без качественной data layer даже хороший AI остается красивым интерфейсом без надежного контекста. Мы помогаем собрать основу, на которой можно запускать assistants, automations и internal intelligence workflows.",
        cardSummary:
          "AI-ready architecture, pipelines, knowledge systems и data foundation для reliable AI performance.",
        audience: [
          "Компании, которым нужен общий контекст для AI-проектов и внутренних ассистентов.",
          "Операционные команды, у которых знания и данные разбросаны по многим системам.",
          "Бизнесы, готовящиеся к automation, copilots или AI-powered products.",
        ],
        problems: [
          "Данные разорваны между CRM, docs, chats и внутренними таблицами.",
          "Сотрудники не могут быстро получить достоверный контекст по клиентам, сделкам и проектам.",
          "AI-инструменты отвечают поверхностно, потому что не имеют доступа к нужной knowledge layer.",
          "Нет единой архитектуры, которую можно масштабировать на новые сценарии.",
        ],
        solution: [
          "Собираем AI-ready data architecture вокруг ваших реальных decision flows.",
          "Организуем pipelines, sync logic и structured knowledge systems.",
          "Проектируем retrieval-ready layer для assistants и internal search.",
          "Выстраиваем основу, которая поддерживает дальнейшие automation и product scenarios.",
        ],
        included: [
          "Анализ источников данных и knowledge sprawl.",
          "Архитектура data flows и synchronization logic.",
          "Структура internal knowledge system и retrieval layer.",
          "Рекомендации по access rules и data hygiene.",
          "Технический blueprint для дальнейшего внедрения AI-сценариев.",
        ],
        outcomes: [
          "AI получает более надежный контекст и начинает отвечать полезнее.",
          "Команды быстрее находят информацию и меньше теряют время на context switching.",
          "Появляется foundation для assistants, automations и internal intelligence tools.",
          "Новые AI-проекты запускаются на устойчивой архитектуре, а не на временных связках.",
        ],
      },
      "industry-specific-ai-solutions": {
        category: "business",
        title: "Отраслевые AI-решения",
        kicker: "B2B service",
        heroTitle:
          "Проектируем AI-системы под специфику вашей отрасли, а не под средний шаблон рынка.",
        heroDescription:
          "Если у бизнеса есть domain-specific правила, терминология, compliance constraints и особая логика принятия решений, generic AI workflows быстро упираются в потолок. Мы собираем решения вокруг реального рынка, а не вокруг универсального demo.",
        cardSummary:
          "Tailored AI systems for domain-specific workflows, compliance logic and specialized operating models.",
        audience: [
          "Компании из отраслей с высокой domain complexity и специальной терминологией.",
          "Команды, которым не подходят generic AI workflows без учета рынка и контекста.",
          "Бизнесы, где ошибка в рекомендации, классификации или routing влияет на качество решений.",
        ],
        problems: [
          "Стандартные AI-сервисы не понимают специфику отрасли и дают поверхностные ответы.",
          "Процессы завязаны на ручную экспертизу, потому что общий automation stack не справляется.",
          "Compliance и domain constraints не позволяют использовать слишком общие модели и сценарии.",
          "Рынку нужен специализированный workflow, а не очередной чат-интерфейс без контекста.",
        ],
        solution: [
          "Изучаем domain logic, data structures и decision rules вашей отрасли.",
          "Настраиваем AI workflows под реальные документы, термины, исключения и проверки.",
          "Учитываем compliance boundaries, human review и допустимый уровень automation.",
          "Собираем систему так, чтобы она реально помогала профильной команде, а не отвлекала ее.",
        ],
        included: [
          "Domain discovery и mapping отраслевых сценариев.",
          "Проектирование AI-flows под реальные decision paths.",
          "Prompt and context design с учетом терминологии рынка.",
          "Risk review и рекомендации по контрольным точкам.",
          "Пилотный implementation plan с учетом масштаба отрасли.",
        ],
        outcomes: [
          "AI начинает работать в контексте отрасли, а не поверх него.",
          "Снижается нагрузка на профильную экспертизу в повторяющихся сценариях.",
          "Команда получает инструмент, который понимает специфику ее domain work.",
          "Решения становятся быстрее без потери качества и управляемости.",
        ],
      },
      "ai-sales-revenue-automation": {
        category: "business",
        title: "AI для продаж и revenue automation",
        kicker: "B2B service",
        heroTitle:
          "Встраиваем AI в sales engine, чтобы команда быстрее находила правильные сделки и меньше теряла pipeline в ручной работе.",
        heroDescription:
          "Мы помогаем компаниям автоматизировать lead qualification, outbound support, follow-up logic, enrichment и handoff между маркетингом, SDR и sales, не превращая pipeline в неуправляемый black box.",
        cardSummary:
          "AI-driven lead qualification, outreach support, pipeline automation and revenue workflows with human control.",
        audience: [
          "B2B sales teams, у которых много ручной работы на ранних этапах pipeline.",
          "Компании, теряющие скорость на qualification, enrichment и follow-up.",
          "Команды growth и revenue operations, которым нужен более дисциплинированный процесс.",
        ],
        problems: [
          "Лиды приходят из разных источников и обрабатываются неравномерно.",
          "Сильные продавцы тратят время на административную и исследовательскую рутину.",
          "Pipeline visibility слабая, а handoff между каналами не стандартизирован.",
          "Outreach и qualification не масштабируются без найма дополнительных людей.",
        ],
        solution: [
          "Выстраиваем AI-assisted qualification, scoring и lead routing.",
          "Автоматизируем enrichment, briefing и подготовку контекста для sales conversations.",
          "Помогаем с outbound and follow-up workflows там, где automation действительно уместна.",
          "Соединяем sales AI с CRM и текущими revenue processes, а не создаем отдельный слой хаоса.",
        ],
        included: [
          "Разбор текущего sales funnel и friction points.",
          "Проектирование qualification logic и pipeline rules.",
          "AI-assisted outreach, enrichment и summary workflows.",
          "CRM integration и handoff orchestration.",
          "Performance review framework для дальнейшей оптимизации.",
        ],
        outcomes: [
          "Команда быстрее реагирует на правильные opportunities.",
          "Снижается объем ручной prep work на ранних этапах продаж.",
          "Pipeline становится чище и понятнее для управления.",
          "Revenue team получает больше времени на разговоры, а не на рутину.",
        ],
      },
      "ai-integration-automation": {
        category: "business",
        title: "AI-интеграции и автоматизация",
        kicker: "B2B service",
        heroTitle:
          "Проектируем и внедряем AI automation across workflows, чтобы процессы стали быстрее, а не сложнее.",
        heroDescription:
          "Мы соединяем AI с бизнес-процессами, системами и людьми: от внутренних handoff flows до client-facing automations. Цель - не максимальная автоматизация любой ценой, а хороший operating design с понятным контролем.",
        cardSummary:
          "End-to-end AI integrations and workflow automation designed around real business operations.",
        audience: [
          "Компании с повторяющимися операционными задачами и перегруженными командами.",
          "Команды, где несколько систем плохо стыкуются друг с другом.",
          "Бизнесы, которым нужен AI-as-a-service слой поверх текущей операционной модели.",
        ],
        problems: [
          "Workflow строится на ручных handoff between teams и постоянных напоминаниях.",
          "Интеграции между системами неполные или слишком fragile для роста.",
          "Люди выполняют рутину, вместо того чтобы решать исключения и контролировать качество.",
          "AI пробовали точечно, но он не встроился в реальный business flow.",
        ],
        solution: [
          "Картируем workflow end to end и ищем разумные точки AI automation.",
          "Строим orchestration между CRM, docs, chat tools, internal systems и AI layers.",
          "Оставляем human checkpoints там, где важны judgment, контроль и risk management.",
          "После запуска дорабатываем reliability, coverage и operational fit на реальных данных.",
        ],
        included: [
          "Workflow audit и mapping bottlenecks.",
          "Проектирование automation architecture.",
          "Integration logic между системами и AI components.",
          "Launch support, training и handoff.",
          "План последующей optimization phase.",
        ],
        outcomes: [
          "Операции проходят быстрее и с меньшей зависимостью от ручных напоминаний.",
          "Команды переключаются с рутины на контроль качества и принятие решений.",
          "Снижается fragmentation между инструментами и workflow становится чище.",
          "AI становится частью операционной модели, а не отдельным экспериментом.",
        ],
      },
      "ai-fintech-blockchain": {
        category: "business",
        title: "AI + fintech & blockchain решения",
        kicker: "B2B service",
        heroTitle:
          "Соединяем AI с fintech и blockchain workflows там, где нужен не шум, а контроль, скорость и надежность.",
        heroDescription:
          "Для финансовых и digital asset сценариев мы проектируем AI workflows вокруг fraud signals, compliance logic, payment operations, risk review и data-intensive decision making, сохраняя auditability и управляемость.",
        cardSummary:
          "AI for fraud review, compliance operations, payment intelligence and digital asset workflows.",
        audience: [
          "Fintech, payment и digital asset команды со сложными операционными и risk-heavy процессами.",
          "Продукты, где высока цена ошибки в compliance, monitoring или anomaly handling.",
          "Компании, которым нужен AI layer поверх интенсивных финансовых данных и workflows.",
        ],
        problems: [
          "Ручные compliance and operations flows слишком медленные и дорогие.",
          "Высокий объем транзакций и событий усложняет ручной review.",
          "Нужна лучшая видимость по сигналам риска, но без потери explainability.",
          "Blockchain и digital asset operations требуют специфичного контекста и осторожной automation.",
        ],
        solution: [
          "Проектируем AI-assisted workflows для review, triage и operational decision support.",
          "Учитываем compliance boundaries, human approvals и audit needs.",
          "Подключаем data sources, alerts и rules в единую рабочую логику.",
          "Собираем систему вокруг ваших риск-процессов, а не поверх абстрактной fintech demo.",
        ],
        included: [
          "Mapping fintech and blockchain use cases.",
          "Risk-oriented workflow design и review logic.",
          "Integration с платежными, аналитическими и monitoring systems.",
          "Контроль explainability и human override.",
          "Implementation plan для безопасного запуска.",
        ],
        outcomes: [
          "Команда быстрее обрабатывает сложные операции и исключения.",
          "Повышается дисциплина в monitoring, triage и compliance support.",
          "AI усиливает финансовый workflow без потери прозрачности.",
          "Появляется основа для дальнейших product и operations improvements.",
        ],
      },
      "ai-security-risk-testing": {
        category: "business",
        title: "AI-безопасность и risk testing",
        kicker: "B2B service",
        heroTitle:
          "Проверяем AI-системы на уязвимости, утечки, misuse scenarios и слабые места до того, как это станет проблемой бизнеса.",
        heroDescription:
          "Когда компания начинает использовать AI шире, вопрос безопасности становится прикладным: данные, prompts, access rules, outputs, model misuse и операционные последствия. Мы помогаем сделать эту часть системной.",
        cardSummary:
          "Security and risk review for AI systems, prompts, access logic, data exposure and misuse scenarios.",
        audience: [
          "Компании, которые уже используют AI или готовятся масштабировать его в процессы.",
          "Команды, работающие с чувствительными данными, внутренними знаниями и customer context.",
          "Организации, которым важно заранее оценить risk profile AI workflows.",
        ],
        problems: [
          "AI уже используется, но никто не описал реальные сценарии риска и утечки.",
          "Команды не понимают, где заканчивается удобство и начинается exposure.",
          "Нет дисциплины вокруг prompts, permissions, logging и human review.",
          "Система может быть полезной функционально, но слабой с точки зрения operational security.",
        ],
        solution: [
          "Проводим structured risk review AI workflows, access paths и data flows.",
          "Ищем сценарии misuse, weak controls и опасные зависимости внутри системы.",
          "Определяем security checkpoints, permissions и governance improvements.",
          "Даем рекомендации по снижению риска без убийства полезности решения.",
        ],
        included: [
          "AI workflow risk assessment.",
          "Review prompts, context exposure и access model.",
          "Анализ сценариев misuse и operational failure.",
          "Рекомендации по safeguards и review checkpoints.",
          "Action plan по усилению security discipline.",
        ],
        outcomes: [
          "Команда понимает реальный risk profile текущих AI-систем.",
          "Снижается вероятность утечки, misuse и непрозрачных решений.",
          "AI можно масштабировать более уверенно и с лучшим контролем.",
          "Security становится частью implementation plan, а не запоздалой реакцией.",
        ],
      },
      "custom-ai-product-development": {
        category: "business",
        title: "Кастомная AI-разработка",
        kicker: "B2B service",
        heroTitle:
          "Разрабатываем кастомные AI-powered инструменты и продукты под вашу операционную модель или product thesis.",
        heroDescription:
          "Когда готовых tools недостаточно, мы помогаем спроектировать и собрать внутренний инструмент, клиентский сервис или AI-powered product module с учетом реального workflow, данных и business logic.",
        cardSummary:
          "Custom internal tools and AI-powered product development tailored to your operating model.",
        audience: [
          "Компании, которым нужен собственный AI layer, а не только связка из внешних tools.",
          "Команды продукта и операций, создающие новый internal capability или client-facing feature.",
          "Бизнесы, где AI должен стать частью core service, а не только внутренней автоматизацией.",
        ],
        problems: [
          "Готовые инструменты не закрывают нужную логику, роли и процессы.",
          "Команде нужен продуктовый сценарий с собственным интерфейсом и structured workflow.",
          "Нужен AI-powered internal tool, который учитывает конкретный контекст компании.",
          "Нельзя масштабироваться на generic stack без потери качества и управляемости.",
        ],
        solution: [
          "Помогаем сформировать product scope и logic вокруг реального use case.",
          "Проектируем архитектуру, data flows, interfaces и control model.",
          "Собираем MVP или production-ready module под ваш business context.",
          "Помогаем с rollout, handoff и дальнейшей итерацией на основе живого использования.",
        ],
        included: [
          "Discovery и product framing.",
          "UX and workflow design для AI-driven scenario.",
          "Architecture plan и build implementation.",
          "Testing, handoff и launch support.",
          "Roadmap для последующих product iterations.",
        ],
        outcomes: [
          "Компания получает систему, которая действительно соответствует ее модели работы.",
          "AI перестает быть внешним add-on и становится частью core capability.",
          "Команда быстрее проверяет и запускает новые сервисные или продуктовые гипотезы.",
          "Внутренние процессы и продуктовые функции могут расти на собственной логике, а не на ограничениях чужого tools stack.",
        ],
      },
      "ai-training-education": {
        category: "individual",
        title: "AI-обучение и education",
        kicker: "Education service",
        heroTitle:
          "Практическое AI-обучение для команд и специалистов, которым нужен не обзор рынка, а рабочая модель применения.",
        heroDescription:
          "Мы строим обучение вокруг реальных задач: как работать с AI в профессии, внутри команды, в контенте, исследованиях, продажах и ежедневной операционной работе.",
        cardSummary:
          "Практические AI-trainings, workshops и education programs без воды и hype-driven теории.",
        audience: [
          "Команды, которым нужно быстрее и увереннее внедрять AI в повседневную работу.",
          "Руководители, которые хотят выстроить common AI language внутри компании.",
          "Специалисты, которым нужен practical AI operating model под собственную роль.",
        ],
        problems: [
          "Люди слышат про AI много, но не понимают, как использовать его в своей реальной работе.",
          "Обучение часто слишком общее и не переносится в ежедневный workflow.",
          "Команда использует AI фрагментарно и без единых базовых принципов.",
          "После курса никто не понимает, какой должен быть следующий практический шаг.",
        ],
        solution: [
          "Проводим обучение вокруг реальных сценариев и конкретной роли участников.",
          "Показываем не только prompts, но и логику system design, review и operating discipline.",
          "Даем понятный набор шаблонов, workflows и подходов для ежедневной работы.",
          "Собираем программу так, чтобы после нее участники могли сразу применять AI в задачах.",
        ],
        included: [
          "Диагностика целей обучения.",
          "Практические сессии и разбор role-specific use cases.",
          "AI operating principles и workflow templates.",
          "Материалы для дальнейшей самостоятельной работы.",
          "Рекомендации по next step после обучения.",
        ],
        outcomes: [
          "Люди быстрее переходят от интереса к реальному использованию AI.",
          "Команда получает общий язык и базовую дисциплину работы с AI.",
          "Снижается количество случайных и низкокачественных практик.",
          "Обучение превращается в рабочий навык, а не в разовый вдохновляющий ивент.",
        ],
      },
      "personal-ai-assistants": {
        category: "individual",
        title: "Персональные AI-ассистенты",
        kicker: "Individual service",
        heroTitle:
          "Настраиваем персональные AI-ассистенты для daily execution, решений и интеллектуальной разгрузки.",
        heroDescription:
          "Если вы хотите, чтобы AI реально помогал в заметках, подготовке, исследовании, коммуникации, планировании и создании личной operating system, мы собираем setup под ваш контекст, а не под generic productivity tutorial.",
        cardSummary:
          "Personal AI setup for founders, executives and specialists who want more leverage in daily work.",
        audience: [
          "Founders, executives и independent specialists с высокой cognitive load.",
          "Люди, которые хотят быстрее работать с контекстом, идеями, заметками и решениями.",
          "Специалисты, которым нужен личный AI workflow под конкретную роль и стиль работы.",
        ],
        problems: [
          "Слишком много разрозненных задач, заметок, встреч и follow-ups.",
          "AI пробовали, но он не закрепился как часть повседневной системы.",
          "Нет единой логики, где хранить контекст и как возвращаться к нему быстро.",
          "Много времени уходит на подготовку, summary work и поиск нужной информации.",
        ],
        solution: [
          "Подбираем стек и AI workflows под ваши реальные рабочие привычки.",
          "Настраиваем personal knowledge flow, briefing, note capture и decision support.",
          "Собираем простую, но устойчивую систему вместо десятка разрозненных экспериментов.",
          "Помогаем закрепить AI как часть daily execution model.",
        ],
        included: [
          "Разбор роли, нагрузки и задач.",
          "Выбор инструментов и настройка personal stack.",
          "Workflow design для notes, research, planning и writing.",
          "Шаблоны и usage patterns под ваш контекст.",
          "Follow-up refinement после первых недель использования.",
        ],
        outcomes: [
          "Снижается cognitive overload и хаос в ежедневной работе.",
          "Решения, подготовка и follow-ups происходят быстрее.",
          "AI начинает работать как персональная система усиления, а не как игрушка.",
          "Появляется более спокойный и собранный rhythm of execution.",
        ],
      },
      "ai-content-creation-systems": {
        category: "individual",
        title: "AI-системы для создания контента",
        kicker: "Individual service",
        heroTitle:
          "Строим AI-assisted content systems для устойчивого выпуска материалов без потери качества тона.",
        heroDescription:
          "Мы не превращаем контент в фабрику generic output. Мы собираем production system для briefing, scripting, repurposing, review и publishing, чтобы экспертиза выходила регулярно и управляемо.",
        cardSummary:
          "Scalable AI-assisted content systems for expert brands, teams and media-driven businesses.",
        audience: [
          "Founders, experts и small teams, которым нужен устойчивый контент-ритм.",
          "Маркетинговые и editorial команды, у которых production зависит от ручной перегрузки.",
          "Бренды, которым важно масштабировать output без потери смысла и качества.",
        ],
        problems: [
          "Контент создается нерегулярно и всегда требует ручной сборки почти с нуля.",
          "AI дает слишком generic drafts и размывает voice.",
          "Нет системы для repurposing, review и multi-channel distribution.",
          "Команда хочет больше output, но не хочет превращать бренд в контентовый шум.",
        ],
        solution: [
          "Проектируем production flow вокруг вашей экспертизы, каналов и editorial rhythm.",
          "Настраиваем AI-assisted briefing, ideation, scripting и repurposing.",
          "Оставляем human review на критических этапах, где важны тон и judgment.",
          "Собираем систему, которую можно повторять без выгорания команды.",
        ],
        included: [
          "Content workflow audit.",
          "AI-assisted production design.",
          "Template library для ideation, scripting и repurposing.",
          "Review logic и publishing sequence.",
          "Optimization recommendations после первых циклов.",
        ],
        outcomes: [
          "Выход контента становится устойчивее и предсказуемее.",
          "Команда тратит меньше сил на механическую сборку материалов.",
          "AI помогает ускорять production без превращения бренда в generic output.",
          "Появляется реальная content system, а не набор случайных prompts.",
        ],
      },
      "ai-communities-memberships": {
        category: "individual",
        title: "AI-комьюнити и memberships",
        kicker: "Individual service",
        heroTitle:
          "Помогаем упаковать AI community или membership model вокруг реальной пользы, а не вокруг hype access.",
        heroDescription:
          "Если вы развиваете комьюнити, образовательную среду или membership product вокруг AI, мы помогаем собрать содержательную структуру: контент, support flows, templates, member journeys и value design.",
        cardSummary:
          "Community and membership design for AI education, support and ongoing value delivery.",
        audience: [
          "Эксперты, creators и founders, развивающие membership или AI community products.",
          "Образовательные и support-led проекты, которым нужна более сильная ценность для участников.",
          "Команды, которые хотят соединить контент, практику и AI tools в coherent offering.",
        ],
        problems: [
          "Membership строится на обещаниях доступа, но не на ясной ценности для участника.",
          "Контент, templates и support не связаны в понятный member journey.",
          "Люди быстро теряют интерес, потому что не видят системного прогресса.",
          "Операционная модель сообщества перегружает небольшую команду или основателя.",
        ],
        solution: [
          "Структурируем membership вокруг outcomes, а не вокруг расплывчатого обещания инсайтов.",
          "Проектируем member journey, cadence, content layers и support flows.",
          "Подключаем AI templates, assistants и systems как реальную ценность продукта.",
          "Помогаем сделать community operating model устойчивой для команды.",
        ],
        included: [
          "Offer design и member value map.",
          "Program structure и content cadence.",
          "AI-enabled support and resource system.",
          "Template and workflow ideas для участников.",
          "Operational recommendations для growth и retention.",
        ],
        outcomes: [
          "Участники лучше понимают, за что они платят и какой прогресс получают.",
          "Команда управляет community спокойнее и системнее.",
          "Membership становится более продуктовой и менее хаотичной.",
          "AI усиливает ценность комьюнити, а не просто добавляет модный слой сверху.",
        ],
      },
      "ai-templates-marketplace": {
        category: "individual",
        title: "Маркетплейс AI-шаблонов и automation kits",
        kicker: "Individual service",
        heroTitle:
          "Создаем и упаковываем готовые AI-templates, workflows и automation kits, которые можно запускать быстрее и чище.",
        heroDescription:
          "Это направление подходит, если вы хотите превратить экспертизу в системный набор ready-to-use materials: templates, flows, prompt packs, educational kits или lightweight digital products.",
        cardSummary:
          "Ready-to-use AI templates, workflow kits and automation assets for faster implementation.",
        audience: [
          "Эксперты и small teams, монетизирующие практическую AI-экспертизу.",
          "Проекты, которым нужен structured templates offer вместо разрозненных файлов.",
          "Люди, желающие быстрее внедрять AI через готовые рабочие assets.",
        ],
        problems: [
          "Материалы существуют, но не упакованы в clear, usable offer.",
          "Пользователи теряются в файлах и не понимают, с чего начать.",
          "Шаблоны не связаны с конкретным результатом и быстро забываются.",
          "Нет логики, как превратить полезный набор в marketable product.",
        ],
        solution: [
          "Структурируем templates вокруг конкретных задач и результатов.",
          "Помогаем собрать понятный kit: what it does, for whom and how to use it.",
          "Добавляем AI workflows, usage guidance и supporting materials.",
          "Упаковываем assets так, чтобы ими было реально удобно пользоваться и покупать.",
        ],
        included: [
          "Audit существующих материалов или product idea.",
          "Template architecture и packaging logic.",
          "Usage flow и onboarding notes.",
          "Product copy и value framing.",
          "Recommendations по дальнейшему расширению library.",
        ],
        outcomes: [
          "Шаблоны превращаются в понятный продукт, а не в архив файлов.",
          "Пользователи быстрее получают результат от готовых материалов.",
          "Экспертиза масштабируется через более clean digital offer.",
          "AI-implementation entry point становится проще для конечного пользователя.",
        ],
      },
      "ai-consulting-for-individuals": {
        category: "individual",
        title: "Персональный AI-консалтинг",
        kicker: "Individual service",
        heroTitle:
          "One-to-one AI consulting для карьеры, личного бизнеса, экспертизы и индивидуальной системы работы.",
        heroDescription:
          "Если вам нужен не общий курс, а персональное сопровождение по тому, как встроить AI в вашу роль, практику или business context, мы помогаем собрать конкретный план и рабочий setup.",
        cardSummary:
          "One-to-one AI consulting for professionals, founders and independent operators.",
        audience: [
          "Специалисты, которые хотят использовать AI сильнее в своей профессии.",
          "Founders и independent operators, которым нужен персональный roadmap и setup.",
          "Люди, которым важно быстро выйти на практическое применение AI без хаотичных экспериментов.",
        ],
        problems: [
          "Слишком много информации про AI и слишком мало ясности, что применять именно вам.",
          "Нет confidence в выборе инструментов, сценариев и рабочего подхода.",
          "AI используют фрагментарно, без системы и без оценки реальной пользы.",
          "Нужна персональная стратегия, а не очередной generic tutorial.",
        ],
        solution: [
          "Разбираем ваш контекст, цели, ограничения и тип работы.",
          "Подбираем AI use cases, stack и порядок внедрения под личную модель.",
          "Помогаем собрать practical system для daily work, content, research или business growth.",
          "Даем понятный next-step plan после консультации, чтобы результат не исчез после звонка.",
        ],
        included: [
          "Диагностика контекста и целей.",
          "Разбор инструментов и use cases под вашу роль.",
          "Персональные рекомендации по workflow и setup.",
          "План внедрения на ближайшие недели.",
          "Follow-up notes по итогам консультации.",
        ],
        outcomes: [
          "Появляется ясный и спокойный план внедрения AI в личную работу.",
          "Снижается потеря времени на инструменты, которые не подходят под контекст.",
          "AI становится рабочим усилителем, а не источником дополнительного шума.",
          "Вы быстрее переходите к реальному применению и measurable personal leverage.",
        ],
      },
    },
    seo: {
      home: {
        title: "VentoLabs | AI-внедрение и AI-консалтинг для бизнеса",
        description:
          "Premium multilingual website for AI implementation, strategy, automation, consulting and custom AI systems by VentoLabs.",
      },
      services: {
        title: "Услуги | VentoLabs",
        description:
          "AI-стратегия, automation, data systems, security, custom build, обучение и персональные AI-услуги от VentoLabs.",
      },
      "case-studies": {
        title: "Кейсы | VentoLabs",
        description:
          "Примеры задач и AI-систем, которые VentoLabs помогает проектировать и внедрять для бизнеса и экспертов.",
      },
      "how-we-work": {
        title: "Как мы работаем | VentoLabs",
        description:
          "Discovery, scope, implementation, integration, training and optimization - engagement model VentoLabs.",
      },
      about: {
        title: "О нас | VentoLabs",
        description:
          "VentoLabs - практический AI implementation partner для компаний, команд и специалистов.",
      },
      contact: {
        title: "Контакты | VentoLabs",
        description:
          "Свяжитесь с VentoLabs по вопросам AI-внедрения, аудита, обучения и персональных AI-сценариев.",
      },
    },
  },
  en: {
    company: {
      ...commonCompany,
      responseNote: "Qualified inquiries receive a response within one business day.",
      location: "Internationally available and delivery-ready for remote work.",
    },
    ui: {
      languageLabel: "Language",
      languages: {
        ru: "RU",
        en: "EN",
        es: "ES",
      },
      nav: {
        home: "Home",
        services: "Services",
        caseStudies: "Case Studies",
        howWeWork: "How We Work",
        about: "About",
        contact: "Contact",
      },
      cta: {
        bookConsultation: "Book a Consultation",
        requestSolution: "Request a Solution",
        exploreServices: "Explore Services",
        talkToUs: "Talk to Us",
        requestAudit: "Request an Audit",
        viewService: "View Service",
        seeAllServices: "All Services",
        contactUs: "Contact Us",
      },
      serviceLabels: {
        business: "Business services",
        individual: "For individuals and professionals",
        related: "Related services",
        who: "Who this is for",
        problem: "The problem",
        solution: "The solution",
        included: "What is included",
        outcomes: "Business impact",
        engagement: "How engagement works",
      },
      footerBlurb:
        "A practical AI implementation partner for companies that need real systems, clear scope, and operational leverage they can actually use.",
      footerTitle: "Implementation first. Noise last.",
      directEmailLabel: "Direct email",
      mobileMenuLabel: "Open navigation",
      skipToContent: "Skip to content",
      form: {
        name: "Name",
        email: "Email",
        company: "Company or role",
        inquiryType: "Inquiry type",
        details: "What are you trying to solve",
        placeholderDetails:
          "Outline the problem, current friction, timeline, and the outcome you want to create.",
        submit: "Send inquiry",
        success:
          "Thank you. We received your inquiry and will reply within the next business day.",
        error:
          "We could not submit the form. Please email us directly at hello@ventolabs.ai.",
        privacy:
          "By submitting this form, you agree that we may process your information to reply to your inquiry.",
        types: {
          businessImplementation: "Business AI implementation",
          strategyAudit: "Strategy / opportunity audit",
          training: "Training or workshop",
          individualHelp: "Personal AI support",
        },
      },
    },
    home: {
      hero: {
        eyebrow: "AI systems for operations, revenue and scalable efficiency",
        title:
          "We implement AI systems that reduce manual work, improve operations, and create a more scalable business engine.",
        description:
          "VentoLabs helps companies move from AI discussion to AI execution: strategy, data foundations, workflow automation, internal assistants, and custom AI products built around real business needs.",
        primary: {
          label: "Book a Consultation",
          href: "/contact",
        },
        secondary: {
          label: "Explore Services",
          href: "/services",
          variant: "secondary",
        },
        panels: [
          {
            title: "Strategy and governance",
            description:
              "We define where AI creates measurable value and what needs to be controlled before scaling it.",
          },
          {
            title: "Workflow integration",
            description:
              "We connect AI to your data, systems, and day-to-day processes instead of leaving it as a separate experiment.",
          },
          {
            title: "Custom build capability",
            description:
              "When off-the-shelf tools are not enough, we design internal tools and AI-powered product flows around your operating model.",
          },
        ],
      },
      positioningStrip: [
        "Business-first, not tool-first",
        "Start from an audit or go straight into implementation",
        "Built around real workflows, data and team ownership",
        "Clear handoff, controls and next-step planning",
      ],
      problem: {
        eyebrow: "What clients are usually dealing with",
        title: "Too much AI talk. Not enough operational change.",
        description:
          "Most companies do not need another generic AI deck. They need fewer manual tasks, better system coordination, more visibility, and a sensible path from idea to execution.",
        items: [
          {
            title: "Manual work keeps expanding",
            description:
              "Teams spend time on repetitive coordination, research, formatting, follow-up, and admin work that should not require full human effort.",
          },
          {
            title: "Systems do not talk to each other",
            description:
              "CRM, docs, spreadsheets, chats and internal knowledge are fragmented, which slows decision-making and weakens execution quality.",
          },
          {
            title: "Revenue opportunities slip",
            description:
              "Leads and conversations arrive, but qualification, prioritization and follow-up are still too dependent on manual effort.",
          },
          {
            title: "Data is not AI-ready",
            description:
              "The business wants AI outcomes, but the information layer is inconsistent, messy or disconnected from the workflows that matter.",
          },
          {
            title: "AI confusion with no execution model",
            description:
              "Leadership sees the opportunity, but not the sequence: what to build first, where to create leverage, and how to avoid scattered experiments.",
          },
          {
            title: "Risk grows faster than discipline",
            description:
              "Teams already use AI, but governance, permissions, output review, and security boundaries are still underdeveloped.",
          },
        ],
      },
      solutions: {
        eyebrow: "Core service lines",
        title: "From strategy to delivery, with the same visual and operational discipline across the whole site.",
        description:
          "Every service is designed to work as a landing page for a real conversation: what it is, why it matters, who it is for, how we execute, and what the next step should be.",
        featured: [
          "ai-strategy-governance",
          "ai-infrastructure-data-systems",
          "ai-sales-revenue-automation",
          "ai-integration-automation",
          "ai-security-risk-testing",
          "custom-ai-product-development",
        ],
      },
      why: {
        eyebrow: "Why VentoLabs",
        title: "A premium implementation partner with business discipline.",
        description:
          "We are not trying to impress you with AI noise. We focus on priority, clarity, operating fit, and execution quality.",
        items: [
          {
            title: "Business outcomes come first",
            description:
              "We evaluate AI work through growth, cost reduction, operational speed, decision quality, and execution risk.",
          },
          {
            title: "Built around your workflows",
            description:
              "The system has to fit your team, your data and your operating structure. Otherwise it will not stick.",
          },
          {
            title: "Integrated, not isolated",
            description:
              "AI should live inside CRM, knowledge, operations, and communication workflows instead of becoming another disconnected layer.",
          },
          {
            title: "You can start with clarity",
            description:
              "If the right opportunity is still unclear, we can begin with strategy, diagnostics and use-case prioritization.",
          },
        ],
      },
      process: {
        eyebrow: "A simple plan",
        title: "Discover, design, build, launch, optimize.",
        description:
          "The point is not to make the process look complicated. The point is to make it reliable, visible, and easy to move through.",
      },
      entryPaths: {
        eyebrow: "Two clean entry points",
        title: "Come in with a clear request or let us help you identify the right AI opportunity first.",
        description:
          "Both paths are valid. Some clients know exactly what they need. Others want help separating high-value opportunities from hype.",
        items: [
          {
            title: "I know what I need",
            description:
              "If you already know the use case, we can move quickly into scoping and implementation for the right service line.",
            cta: {
              label: "Request a Solution",
              href: "/contact",
            },
          },
          {
            title: "I need to find the best opportunities first",
            description:
              "If priorities are still fuzzy, we start with strategy and diagnostics to define what should be built and in what order.",
            cta: {
              label: "Request an Audit",
              href: "/services/ai-strategy-governance",
              variant: "secondary",
            },
          },
        ],
      },
      useCases: {
        eyebrow: "Use cases",
        title: "Practical scenarios that make sense in the real world.",
        description:
          "We focus on believable outcomes: cleaner operations, better visibility, more disciplined workflows, and stronger execution capacity.",
        items: [
          {
            title: "AI lead qualification",
            audience: "B2B sales teams",
            challenge:
              "Incoming demand is inconsistent and qualification still depends on manual review.",
            solution:
              "We build scoring, enrichment and routing logic directly into the revenue workflow.",
            result:
              "Sales teams spend more time on qualified conversations and less time sorting early-stage noise.",
            service: "ai-sales-revenue-automation",
          },
          {
            title: "Internal AI knowledge system",
            audience: "Operations and knowledge teams",
            challenge:
              "Critical information lives across calls, docs, chats and personal memory.",
            solution:
              "We design structured knowledge layers and retrieval workflows for internal assistants.",
            result:
              "Teams find context faster, onboard more smoothly and reduce dependence on individual gatekeepers.",
            service: "ai-infrastructure-data-systems",
          },
          {
            title: "Executive AI assistant",
            audience: "Founders and leadership",
            challenge:
              "Preparation, note handling, context switching and follow-up work keep draining leadership focus.",
            solution:
              "We configure an AI-supported executive system for preparation, retrieval and decision support.",
            result:
              "Leaders get more time for judgment, less time lost in operational noise.",
            service: "personal-ai-assistants",
          },
          {
            title: "AI-powered internal workflows",
            audience: "Operations and delivery teams",
            challenge:
              "Repeated handoffs and manual process control slow everything down.",
            solution:
              "We orchestrate the right mix of AI steps, human review and system integration.",
            result:
              "Processes become cleaner, faster and more resilient under load.",
            service: "ai-integration-automation",
          },
          {
            title: "Content production engine",
            audience: "Expert brands and founder-led teams",
            challenge:
              "Publishing depends on bursts of effort instead of a repeatable production system.",
            solution:
              "We design AI-assisted briefing, scripting, repurposing and publishing flows.",
            result:
              "Content output becomes more consistent without turning the brand into generic AI clutter.",
            service: "ai-content-creation-systems",
          },
          {
            title: "Industry-specific AI layer",
            audience: "Specialized businesses",
            challenge:
              "Generic AI tooling does not understand the market logic, compliance rules or operational nuance.",
            solution:
              "We build domain-specific AI around your terminology, constraints and real decision paths.",
            result:
              "The system becomes useful to experts instead of distracting them with shallow output.",
            service: "industry-specific-ai-solutions",
          },
        ],
      },
      audiences: {
        eyebrow: "Business and individual services",
        title: "The company works in two clear tracks.",
        description:
          "The primary focus is B2B implementation. A second set of services supports founders, professionals, and individuals who want practical AI leverage in their own work.",
        business: {
          title: "For businesses",
          description:
            "Strategy, data foundations, sales automation, integrations, security reviews, custom build and industry-specific AI.",
          services: businessServiceSlugs,
          cta: {
            label: "Explore business services",
            href: "/services",
          },
        },
        individual: {
          title: "For professionals and individuals",
          description:
            "Training, personal assistants, content systems, membership design, template offers and one-to-one consulting.",
          services: individualServiceSlugs,
          cta: {
            label: "Explore individual services",
            href: "/services",
            variant: "secondary",
          },
        },
      },
      finalCta: {
        eyebrow: "Next step",
        title: "Need a practical AI roadmap or a real implementation partner?",
        description:
          "Tell us where friction is showing up: operations, revenue, knowledge, training or executive workload. We will recommend the right starting point.",
        primary: {
          label: "Book a Consultation",
          href: "/contact",
        },
        secondary: {
          label: "Explore Services",
          href: "/services",
          variant: "secondary",
        },
      },
    },
    servicesPage: {
      hero: {
        eyebrow: "Services ecosystem",
        title: "A clear service architecture for AI strategy, implementation and capability building.",
        description:
          "The services page is designed to help buyers choose quickly between audit, direct implementation, training and custom build instead of browsing a random service catalog.",
        primary: {
          label: "Book a Consultation",
          href: "/contact",
        },
        secondary: {
          label: "Case Studies",
          href: "/case-studies",
          variant: "secondary",
        },
      },
      businessIntro: {
        title: "Business services",
        description:
          "For organizations that need AI connected to operations, revenue, data, security, and product execution.",
      },
      individualIntro: {
        title: "Services for professionals and individuals",
        description:
          "For people who want practical AI leverage in their own work, content, systems, education or personal business.",
      },
      chooser: {
        eyebrow: "How to choose",
        title: "Four sensible entry points instead of one generic package.",
        description:
          "The right format depends on clarity, internal readiness and how close you are to implementation.",
        items: [
          {
            title: "Strategy / audit",
            description:
              "Choose this when you need to identify the best AI opportunities before committing to execution.",
          },
          {
            title: "Direct implementation",
            description:
              "Choose this when the use case is already clear and speed matters more than broad exploration.",
          },
          {
            title: "Custom build",
            description:
              "Choose this when your operating model requires a tool, workflow or product capability that standard software cannot deliver.",
          },
          {
            title: "Training / education",
            description:
              "Choose this when teams or individuals need stronger practical AI capability before or alongside implementation.",
          },
        ],
      },
      finalCta: {
        title: "Not sure which service fits your situation?",
        description:
          "Start with a short conversation. We can help separate the critical opportunities from everything that is merely fashionable.",
        primary: {
          label: "Talk to Us",
          href: "/contact",
        },
        secondary: {
          label: "AI Strategy & Governance",
          href: "/services/ai-strategy-governance",
          variant: "secondary",
        },
      },
    },
    caseStudiesPage: {
      hero: {
        eyebrow: "Selected work",
        title: "Examples of the operational problems we help turn into working AI systems.",
        description:
          "We present challenge, solution and result clearly. If a client has not published metrics, we do not invent them.",
        primary: {
          label: "Discuss a Similar Project",
          href: "/contact",
        },
        secondary: {
          label: "Explore Services",
          href: "/services",
          variant: "secondary",
        },
      },
      noteTitle: "Why the case studies read this way",
      noteDescription:
        "Credibility matters more than inflated numbers. Where hard metrics are not available for public use, we focus on qualitative operating outcomes and implementation logic.",
      finalCta: {
        title: "Have a similar challenge in your business?",
        description:
          "We can begin with a fast discovery conversation and define whether the right path is strategy, implementation, or custom build.",
        primary: {
          label: "Book a Consultation",
          href: "/contact",
        },
        secondary: {
          label: "How We Work",
          href: "/how-we-work",
          variant: "secondary",
        },
      },
    },
    howWeWorkPage: {
      hero: {
        eyebrow: "Engagement model",
        title: "A structured process designed to reduce risk and keep AI work grounded in reality.",
        description:
          "We move through discovery, scope, implementation, integration, training and optimization with clear decision points instead of vague consulting language.",
        primary: {
          label: "Talk to Us",
          href: "/contact",
        },
        secondary: {
          label: "Explore Services",
          href: "/services",
          variant: "secondary",
        },
      },
      phasesTitle: "Project phases",
      phasesDescription:
        "Even fast-moving projects benefit from a clear operating sequence. That is how we protect quality while keeping momentum.",
      modelsTitle: "Ways to engage",
      modelsDescription:
        "Some clients need an audit. Others need a build sprint. Others need a deeper custom product engagement with continued optimization.",
      finalCta: {
        title: "Need clarity and momentum at the same time?",
        description:
          "Share the current stage of your initiative and we will recommend a practical way to start without overcomplicating the project.",
        primary: {
          label: "Book a Consultation",
          href: "/contact",
        },
        secondary: {
          label: "Case Studies",
          href: "/case-studies",
          variant: "secondary",
        },
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "About VentoLabs",
        title: "A practical AI systems studio focused on implementation quality and business usefulness.",
        description:
          "We work with companies and professionals who need AI to become part of a real operating model instead of another isolated tool or presentation topic.",
        primary: {
          label: "Contact Us",
          href: "/contact",
        },
        secondary: {
          label: "How We Work",
          href: "/how-we-work",
          variant: "secondary",
        },
      },
      principlesTitle: "Working principles",
      principlesDescription:
        "If the solution does not hold up under business logic, ownership, risk and day-to-day usage, it is not ready.",
      beliefsTitle: "What we believe about AI",
      beliefsDescription:
        "AI creates value when it is grounded in data, workflow, review discipline and people who can actually use it after launch.",
      finalCta: {
        title: "Looking for a partner who can think clearly and build responsibly?",
        description:
          "We can start with your problem, your constraints and the business outcomes that matter most.",
        primary: {
          label: "Book a Consultation",
          href: "/contact",
        },
        secondary: {
          label: "Explore Services",
          href: "/services",
          variant: "secondary",
        },
      },
    },
    contactPage: {
      hero: {
        eyebrow: "Contact",
        title: "Talk to us about implementation, strategy, training or a personal AI setup.",
        description:
          "Share the business friction, workflow problem or capability gap you want to address. We will reply with a practical next step, not a vague sales script.",
        primary: {
          label: "Open the Form",
          href: "#contact-form",
        },
        secondary: {
          label: "Email Us",
          href: "mailto:hello@ventolabs.ai",
          variant: "secondary",
        },
      },
      pathsTitle: "Where your inquiry fits best",
      pathsDescription:
        "We separate business implementation work from individual support so conversations can move faster and with better context.",
      paths: [
        {
          title: "For businesses",
          description:
            "Best for strategy, audits, automation, integrations, data systems, custom products, revenue workflows and security reviews.",
          cta: {
            label: "Request a Business Solution",
            href: "#contact-form",
          },
        },
        {
          title: "For individuals and professionals",
          description:
            "Best for training, personal AI assistants, content systems, memberships, template offers and one-to-one consulting.",
          cta: {
            label: "Request Personal Support",
            href: "#contact-form",
            variant: "secondary",
          },
        },
      ],
      detailsTitle: "What happens after you send the message",
      detailsDescription:
        "We review the request, clarify the goal and suggest the most sensible next step: consultation, audit, sprint or implementation phase.",
      finalCta: {
        title: "Prefer a short first conversation over a long email thread?",
        description:
          "Use the form below or write directly to hello@ventolabs.ai and we will guide the next step from there.",
        primary: {
          label: "Go to Form",
          href: "#contact-form",
        },
        secondary: {
          label: "Write Directly",
          href: "mailto:hello@ventolabs.ai",
          variant: "secondary",
        },
      },
    },
    process: {
      business: [
        {
          title: "Discover",
          description:
            "We map goals, workflows, constraints, current systems and where AI can create real leverage.",
        },
        {
          title: "Design",
          description:
            "We define architecture, data flow, governance, human checkpoints and the success criteria that matter.",
        },
        {
          title: "Build",
          description:
            "We implement the system: automation, assistants, internal tooling, content engines or product components.",
        },
        {
          title: "Launch",
          description:
            "We connect the workflow, test it in the real environment, train the team and establish usage discipline.",
        },
        {
          title: "Optimize",
          description:
            "We refine performance, reliability, coverage and operational fit once the system is in real use.",
        },
      ],
      individual: [
        {
          title: "Assess",
          description:
            "We understand your workload, role, habits and where AI should actually improve output or reduce friction.",
        },
        {
          title: "Set up",
          description:
            "We choose the right tools, configure workflows and organize a practical personal operating system.",
        },
        {
          title: "Train",
          description:
            "We show how to use the system in a way that sticks instead of relying on one clever prompt.",
        },
        {
          title: "Refine",
          description:
            "We adjust the setup after early use so it becomes a durable part of how you work.",
        },
      ],
      full: [
        {
          title: "Discovery / audit",
          description:
            "We map the goals, the friction, the systems, the data and the practical limits before build work begins.",
        },
        {
          title: "Scope definition",
          description:
            "We define exactly what gets built, what success means, and where human review needs to stay in place.",
        },
        {
          title: "Implementation",
          description:
            "We build the workflows, prompts, logic, knowledge layer, interfaces and operational controls.",
        },
        {
          title: "Integration",
          description:
            "We connect the solution to CRM, docs, communication tools, knowledge bases and the systems people already use.",
        },
        {
          title: "Training / handoff",
          description:
            "We equip the team, clarify ownership and make the operating model understandable after launch.",
        },
        {
          title: "Optimization",
          description:
            "We improve quality on the live system where refinement actually matters.",
        },
      ],
      models: [
        {
          title: "Audit-first engagement",
          description:
            "Useful when the best opportunities are still unclear and priority needs to be established before build.",
        },
        {
          title: "Direct implementation sprint",
          description:
            "Useful when the use case is already selected and the main need is strong execution speed.",
        },
        {
          title: "Custom build with ongoing optimization",
          description:
            "Useful when the solution is more strategic, more specific, or expected to evolve over time.",
        },
      ],
      principles: [
        {
          title: "Usefulness before novelty",
          description:
            "We do not add AI just because it sounds modern. It has to improve a real system.",
        },
        {
          title: "Clear structure over pretty chaos",
          description:
            "Scope, ownership, risk and operational logic need to stay understandable throughout the project.",
        },
        {
          title: "The system must survive the launch",
          description:
            "Training, handoff, reliability and next-step planning are part of the work, not an afterthought.",
        },
        {
          title: "Custom only when justified",
          description:
            "We do not sell custom complexity where a simpler setup is sufficient and more durable.",
        },
      ],
      beliefs: [
        {
          title: "AI should strengthen decisions, not hide broken processes",
          description:
            "If the workflow is unclear, the AI layer will only make the confusion harder to manage.",
        },
        {
          title: "Governance is part of growth",
          description:
            "Without controls, permissions and review discipline, scaling AI simply creates new operational risk.",
        },
        {
          title: "Good implementation feels calm",
          description:
            "A premium AI system usually does not look flashy. It makes difficult work more controlled and more effective.",
        },
      ],
    },
    caseStudies: [
      {
        title: "AI qualification workflow for a B2B services pipeline",
        sector: "B2B services",
        challenge:
          "Leads arrived from several channels while qualification and follow-up still relied on manual review.",
        solution:
          "We designed scoring, enrichment, routing and sales brief generation so only the right opportunities moved quickly through the pipeline.",
        result:
          "The team gained faster response cycles, cleaner pipeline visibility and less low-value manual work in early sales stages.",
        services: [
          "ai-sales-revenue-automation",
          "ai-integration-automation",
        ],
      },
      {
        title: "Internal AI knowledge assistant for an advisory team",
        sector: "Advisory / knowledge work",
        challenge:
          "Critical context lived across calls, documents, chats and personal memory, which slowed the whole team down.",
        solution:
          "We built an AI-ready knowledge layer, role-based access logic and retrieval workflows for internal assistant use.",
        result:
          "The team found context faster, reduced dependency on individual gatekeepers and improved preparation quality.",
        services: [
          "ai-infrastructure-data-systems",
          "custom-ai-product-development",
        ],
      },
      {
        title: "AI-assisted compliance workflow for a fintech operations team",
        sector: "Fintech",
        challenge:
          "Manual document review and exception handling were slowing onboarding and overloading operations.",
        solution:
          "We mapped the decision flow, added AI-assisted triage, human review checkpoints and audit-friendly process logic.",
        result:
          "The team reduced repetitive review work while keeping control, visibility and discipline around risk handling.",
        services: [
          "ai-fintech-blockchain",
          "ai-security-risk-testing",
        ],
      },
      {
        title: "Content system for a founder-led expert brand",
        sector: "Founder / expert business",
        challenge:
          "Publishing was inconsistent and content production had to be rebuilt almost from scratch every time.",
        solution:
          "We configured AI-assisted briefing, scripting, repurposing, review and publishing with clear human approval.",
        result:
          "The brand gained a steadier publishing rhythm without degrading into generic AI-generated content.",
        services: [
          "ai-content-creation-systems",
          "personal-ai-assistants",
        ],
      },
    ],
    services: {} as Record<ServiceSlug, ServiceContent>,
    seo: {
      home: {
        title: "VentoLabs | AI implementation and consulting for businesses",
        description:
          "VentoLabs builds AI systems for operations, revenue, workflow automation, data foundations and custom product execution.",
      },
      services: {
        title: "Services | VentoLabs",
        description:
          "Explore business and individual AI services from strategy and automation to training, custom build and personal AI support.",
      },
      "case-studies": {
        title: "Case Studies | VentoLabs",
        description:
          "Selected AI implementation case studies showing challenge, solution and believable business outcomes.",
      },
      "how-we-work": {
        title: "How We Work | VentoLabs",
        description:
          "See how VentoLabs handles discovery, scoping, implementation, integration, handoff and optimization.",
      },
      about: {
        title: "About | VentoLabs",
        description:
          "VentoLabs is a practical AI implementation partner for companies, teams and professionals.",
      },
      contact: {
        title: "Contact | VentoLabs",
        description:
          "Talk to VentoLabs about AI strategy, implementation, training, automation or a personal AI setup.",
      },
    },
  },
  es: {
    company: {
      ...commonCompany,
      responseNote: "Respondemos a solicitudes calificadas dentro de un día hábil.",
      location: "Trabajamos de forma internacional y remota.",
    },
    ui: {
      languageLabel: "Idioma",
      languages: {
        ru: "RU",
        en: "EN",
        es: "ES",
      },
      nav: {
        home: "Inicio",
        services: "Servicios",
        caseStudies: "Casos",
        howWeWork: "Cómo trabajamos",
        about: "Nosotros",
        contact: "Contacto",
      },
      cta: {
        bookConsultation: "Reservar una consulta",
        requestSolution: "Solicitar una solución",
        exploreServices: "Ver servicios",
        talkToUs: "Hablar con nosotros",
        requestAudit: "Solicitar una auditoría",
        viewService: "Ver servicio",
        seeAllServices: "Todos los servicios",
        contactUs: "Contactarnos",
      },
      serviceLabels: {
        business: "Servicios para empresas",
        individual: "Para profesionales y particulares",
        related: "Servicios relacionados",
        who: "Para quién es",
        problem: "El problema",
        solution: "La solución",
        included: "Qué incluye",
        outcomes: "Impacto esperado",
        engagement: "Cómo empieza el trabajo",
      },
      footerBlurb:
        "Un socio práctico de implementación de IA para organizaciones que necesitan sistemas reales, claridad y una ejecución sobria.",
      footerTitle: "IA útil. Estructura clara.",
      directEmailLabel: "Correo directo",
      mobileMenuLabel: "Abrir navegación",
      skipToContent: "Ir al contenido",
      form: {
        name: "Nombre",
        email: "Correo",
        company: "Empresa o rol",
        inquiryType: "Tipo de consulta",
        details: "Qué quieres resolver",
        placeholderDetails:
          "Describe brevemente el problema, las fricciones actuales, el plazo y el resultado que buscas.",
        submit: "Enviar consulta",
        success:
          "Gracias. Recibimos tu consulta y responderemos dentro del próximo día hábil.",
        error:
          "No pudimos enviar el formulario. Escríbenos directamente a hello@ventolabs.ai.",
        privacy:
          "Al enviar el formulario aceptas el tratamiento de tus datos para responder a tu consulta.",
        types: {
          businessImplementation: "Implementación de IA para empresa",
          strategyAudit: "Estrategia / auditoría de oportunidades",
          training: "Formación o workshop",
          individualHelp: "Ayuda personal con IA",
        },
      },
    },
    home: {
      hero: {
        eyebrow: "Sistemas de IA para operaciones, ingresos y eficiencia escalable",
        title:
          "Implementamos sistemas de IA que reducen trabajo manual, ordenan operaciones y crean una base más escalable para crecer.",
        description:
          "VentoLabs ayuda a empresas a pasar de hablar de IA a ejecutarla de verdad: estrategia, base de datos y conocimiento, automatización, asistentes internos y productos de IA a medida.",
        primary: {
          label: "Reservar una consulta",
          href: "/contact",
        },
        secondary: {
          label: "Ver servicios",
          href: "/services",
          variant: "secondary",
        },
        panels: [
          {
            title: "Estrategia y gobierno",
            description:
              "Definimos dónde la IA aporta valor real y qué controles hacen falta para escalarla con criterio.",
          },
          {
            title: "Integración operativa",
            description:
              "Conectamos la IA con datos, sistemas y workflows reales, no con demos aisladas.",
          },
          {
            title: "Construcción a medida",
            description:
              "Cuando el software estándar no basta, diseñamos herramientas internas y flujos de producto adaptados a tu modelo.",
          },
        ],
      },
      positioningStrip: [
        "Primero negocio, después herramienta",
        "Puedes empezar con auditoría o ir directo a implementación",
        "Diseñado sobre procesos reales, datos y ownership",
        "Entrega clara, controles y siguiente paso definido",
      ],
      problem: {
        eyebrow: "Problemas habituales",
        title: "Mucha conversación sobre IA. Muy poco cambio operativo real.",
        description:
          "La mayoría de las empresas no necesita otra presentación genérica. Necesita menos trabajo manual, mejor coordinación entre sistemas y un camino sensato desde la idea hasta la ejecución.",
        items: [
          {
            title: "Demasiado trabajo manual",
            description:
              "Los equipos siguen gastando tiempo en tareas repetitivas que podrían estandarizarse, automatizarse o resolverse con flujos asistidos por IA.",
          },
          {
            title: "Sistemas desconectados",
            description:
              "CRM, documentos, hojas, chats y conocimiento interno viven separados, y eso ralentiza decisiones y ejecución.",
          },
          {
            title: "Se pierden oportunidades de venta",
            description:
              "Entradas, leads y seguimientos siguen dependiendo en exceso de esfuerzo manual y ritmo humano irregular.",
          },
          {
            title: "La base de datos no está lista para IA",
            description:
              "El negocio quiere resultados con IA, pero la información clave sigue sucia, dispersa o mal conectada al workflow.",
          },
          {
            title: "Confusión estratégica",
            description:
              "La dirección ve el potencial, pero no sabe por dónde empezar ni cómo evitar proyectos dispersos sin impacto claro.",
          },
          {
            title: "Riesgo sin disciplina",
            description:
              "La IA ya se está usando, pero sin reglas claras sobre acceso, revisión, datos y responsabilidad operativa.",
          },
        ],
      },
      solutions: {
        eyebrow: "Servicios principales",
        title: "De estrategia a ejecución, con una lógica sobria y orientada a conversión.",
        description:
          "Cada servicio está pensado para explicar con claridad qué es, por qué importa, para quién sirve, cómo trabajamos y cuál debe ser el siguiente paso.",
        featured: [
          "ai-strategy-governance",
          "ai-infrastructure-data-systems",
          "ai-sales-revenue-automation",
          "ai-integration-automation",
          "ai-security-risk-testing",
          "custom-ai-product-development",
        ],
      },
      why: {
        eyebrow: "Por qué VentoLabs",
        title: "Un partner de implementación premium, serio y orientado al negocio.",
        description:
          "No buscamos impresionar con ruido visual ni con jerga vacía. Nos enfocamos en prioridad, claridad, disciplina y calidad de ejecución.",
        items: [
          {
            title: "Primero impacto de negocio",
            description:
              "Evaluamos el trabajo de IA por crecimiento, ahorro, velocidad operativa, calidad de decisión y control del riesgo.",
          },
          {
            title: "Diseñado para tu contexto",
            description:
              "El sistema tiene que encajar con tu equipo, tus datos y tu forma de operar. Si no, no se sostiene.",
          },
          {
            title: "IA integrada, no aislada",
            description:
              "La IA debe vivir dentro de ventas, operaciones, conocimiento y comunicación, no como una capa decorativa aparte.",
          },
          {
            title: "Puedes empezar con claridad",
            description:
              "Si aún no sabes cuál es la mejor oportunidad, podemos comenzar por diagnóstico, estrategia y priorización.",
          },
        ],
      },
      process: {
        eyebrow: "Plan de trabajo",
        title: "Descubrir, diseñar, construir, lanzar y optimizar.",
        description:
          "La idea no es complicar el proceso. La idea es hacerlo visible, ordenado y fiable.",
      },
      entryPaths: {
        eyebrow: "Dos entradas claras",
        title: "Puedes llegar con una necesidad definida o pedirnos ayuda para encontrar la mejor oportunidad.",
        description:
          "Ambos caminos son válidos. Algunos clientes ya tienen el caso de uso. Otros necesitan criterio para elegir dónde empezar.",
        items: [
          {
            title: "Ya sé lo que necesito",
            description:
              "Si el caso está claro, pasamos rápido a scope, prioridad e implementación con la línea de servicio correcta.",
            cta: {
              label: "Solicitar una solución",
              href: "/contact",
            },
          },
          {
            title: "Primero quiero identificar las mejores oportunidades",
            description:
              "Si todavía no hay claridad, empezamos con auditoría y estrategia para definir qué conviene construir y en qué secuencia.",
            cta: {
              label: "Solicitar una auditoría",
              href: "/services/ai-strategy-governance",
              variant: "secondary",
            },
          },
        ],
      },
      useCases: {
        eyebrow: "Casos de uso",
        title: "Escenarios creíbles que sí generan valor práctico.",
        description:
          "Nos enfocamos en mejoras reales: más velocidad, menos carga manual, workflows más limpios y mejor capacidad de ejecución.",
        items: [
          {
            title: "Calificación de leads con IA",
            audience: "Equipos de ventas B2B",
            challenge:
              "La demanda entra por varios canales y la calificación inicial sigue siendo demasiado manual.",
            solution:
              "Diseñamos scoring, enriquecimiento y routing dentro del propio flujo comercial.",
            result:
              "El equipo dedica más tiempo a conversaciones valiosas y menos a ordenar ruido de entrada.",
            service: "ai-sales-revenue-automation",
          },
          {
            title: "Sistema interno de conocimiento con IA",
            audience: "Operaciones y equipos expertos",
            challenge:
              "La información relevante está repartida entre llamadas, documentos, chats y memoria individual.",
            solution:
              "Creamos capas de conocimiento estructuradas y flujos de retrieval para asistentes internos.",
            result:
              "El contexto aparece más rápido y la dependencia de personas clave baja de forma realista.",
            service: "ai-infrastructure-data-systems",
          },
          {
            title: "Asistente ejecutivo con IA",
            audience: "Founders y dirección",
            challenge:
              "Preparación, notas, contexto y follow-up consumen demasiado foco de liderazgo.",
            solution:
              "Configuramos un sistema ejecutivo con IA para preparación, búsqueda de contexto y apoyo a decisiones.",
            result:
              "Más tiempo para juicio estratégico y menos desgaste en ruido operativo.",
            service: "personal-ai-assistants",
          },
          {
            title: "Workflows internos con IA",
            audience: "Operaciones y delivery",
            challenge:
              "Los handoffs repetidos y el control manual ralentizan el sistema completo.",
            solution:
              "Orquestamos IA, revisión humana e integración de sistemas donde realmente aporta.",
            result:
              "Los procesos ganan claridad, velocidad y resistencia a la carga.",
            service: "ai-integration-automation",
          },
          {
            title: "Sistema de producción de contenido",
            audience: "Marcas expertas y equipos liderados por founders",
            challenge:
              "La publicación depende de ráfagas de esfuerzo y no de una estructura repetible.",
            solution:
              "Diseñamos flujos asistidos por IA para briefing, guion, reutilización y publicación.",
            result:
              "Más consistencia sin degradar la voz de marca hacia contenido genérico.",
            service: "ai-content-creation-systems",
          },
          {
            title: "Capa de IA por industria",
            audience: "Negocios especializados",
            challenge:
              "Las herramientas generales no entienden la lógica del mercado, la regulación o la terminología del sector.",
            solution:
              "Construimos IA alrededor de tus restricciones, lenguaje y decisiones reales.",
            result:
              "La herramienta resulta útil para expertos en lugar de distraerlos con respuestas superficiales.",
            service: "industry-specific-ai-solutions",
          },
        ],
      },
      audiences: {
        eyebrow: "Dos líneas de servicio",
        title: "La empresa trabaja en dos frentes bien definidos.",
        description:
          "El foco principal es B2B. Además, ofrecemos una línea específica para founders, profesionales y personas que quieren leverage práctico con IA en su propia actividad.",
        business: {
          title: "Para empresas",
          description:
            "Estrategia, base de datos y conocimiento, automatización comercial, integraciones, seguridad, producto a medida e IA por industria.",
          services: businessServiceSlugs,
          cta: {
            label: "Ver servicios para empresas",
            href: "/services",
          },
        },
        individual: {
          title: "Para profesionales y particulares",
          description:
            "Formación, asistentes personales, sistemas de contenido, memberships, templates y consultoría one-to-one.",
          services: individualServiceSlugs,
          cta: {
            label: "Ver servicios individuales",
            href: "/services",
            variant: "secondary",
          },
        },
      },
      finalCta: {
        eyebrow: "Siguiente paso",
        title: "Necesitas una hoja de ruta clara o un partner real para implementar IA?",
        description:
          "Cuéntanos dónde está la fricción: operaciones, ingresos, conocimiento, formación o carga ejecutiva. Te proponemos una entrada sensata.",
        primary: {
          label: "Reservar una consulta",
          href: "/contact",
        },
        secondary: {
          label: "Ver servicios",
          href: "/services",
          variant: "secondary",
        },
      },
    },
    servicesPage: {
      hero: {
        eyebrow: "Ecosistema de servicios",
        title: "Una arquitectura de servicios clara para estrategia, implementación y capacidad real de IA.",
        description:
          "La página está diseñada para que el visitante entienda rápido si debe empezar por auditoría, ejecución directa, formación o desarrollo a medida.",
        primary: {
          label: "Reservar una consulta",
          href: "/contact",
        },
        secondary: {
          label: "Ver casos",
          href: "/case-studies",
          variant: "secondary",
        },
      },
      businessIntro: {
        title: "Servicios para empresas",
        description:
          "Para organizaciones que necesitan IA conectada a operaciones, ingresos, datos, seguridad y producto.",
      },
      individualIntro: {
        title: "Servicios para profesionales y particulares",
        description:
          "Para quienes quieren incorporar IA en su trabajo, contenido, formación, práctica profesional o negocio personal.",
      },
      chooser: {
        eyebrow: "Cómo elegir",
        title: "Cuatro entradas lógicas, no un catálogo confuso.",
        description:
          "El formato correcto depende de la claridad del caso, la preparación interna y la velocidad con la que necesitas avanzar.",
        items: [
          {
            title: "Estrategia / auditoría",
            description:
              "Si todavía no está claro qué construir primero, aquí se define prioridad, valor y riesgo.",
          },
          {
            title: "Implementación directa",
            description:
              "Si el caso ya está definido y lo importante es pasar a diseño, integración y ejecución.",
          },
          {
            title: "Construcción a medida",
            description:
              "Si tu modelo exige una herramienta, flujo o capability propio que el software estándar no cubre bien.",
          },
          {
            title: "Formación / education",
            description:
              "Si el equipo o la persona necesita una base práctica sólida antes o junto a la implementación.",
          },
        ],
      },
      finalCta: {
        title: "No tienes claro qué servicio encaja mejor?",
        description:
          "Podemos empezar por una conversación breve y separar oportunidades reales de todo lo accesorio.",
        primary: {
          label: "Hablar con nosotros",
          href: "/contact",
        },
        secondary: {
          label: "Estrategia y gobierno de IA",
          href: "/services/ai-strategy-governance",
          variant: "secondary",
        },
      },
    },
    caseStudiesPage: {
      hero: {
        eyebrow: "Trabajo seleccionado",
        title: "Ejemplos de problemas operativos convertidos en sistemas de IA útiles y creíbles.",
        description:
          "Presentamos reto, solución y resultado con honestidad. Si no hay métricas públicas, no las inventamos.",
        primary: {
          label: "Hablar de un proyecto similar",
          href: "/contact",
        },
        secondary: {
          label: "Ver servicios",
          href: "/services",
          variant: "secondary",
        },
      },
      noteTitle: "Por qué mostramos los casos así",
      noteDescription:
        "La credibilidad importa más que los números inflados. Cuando no existen datos públicos, mostramos lógica, contexto y resultados cualitativos con seriedad.",
      finalCta: {
        title: "Tienes un reto parecido?",
        description:
          "Podemos empezar con una conversación breve y definir si conviene estrategia, implementación o desarrollo a medida.",
        primary: {
          label: "Reservar una consulta",
          href: "/contact",
        },
        secondary: {
          label: "Cómo trabajamos",
          href: "/how-we-work",
          variant: "secondary",
        },
      },
    },
    howWeWorkPage: {
      hero: {
        eyebrow: "Modelo de trabajo",
        title: "Un proceso estructurado para reducir riesgo y llevar la IA a workflows reales.",
        description:
          "Avanzamos por discovery, scope, implementación, integración, formación y optimización con decisiones claras, no con promesas vagas.",
        primary: {
          label: "Hablar con nosotros",
          href: "/contact",
        },
        secondary: {
          label: "Ver servicios",
          href: "/services",
          variant: "secondary",
        },
      },
      phasesTitle: "Fases del proyecto",
      phasesDescription:
        "Incluso cuando hace falta velocidad, una secuencia clara protege la calidad y evita desperdicio.",
      modelsTitle: "Formas de colaboración",
      modelsDescription:
        "No todos los clientes necesitan el mismo formato. A veces basta una auditoría; otras, hace falta una implementación profunda.",
      finalCta: {
        title: "Quieres avanzar con claridad y sin sobrediseñar el proyecto?",
        description:
          "Cuéntanos en qué punto estás y te recomendaremos una forma sensata de empezar.",
        primary: {
          label: "Reservar una consulta",
          href: "/contact",
        },
        secondary: {
          label: "Ver casos",
          href: "/case-studies",
          variant: "secondary",
        },
      },
    },
    aboutPage: {
      hero: {
        eyebrow: "Sobre VentoLabs",
        title: "Un estudio práctico de sistemas de IA centrado en implementación y utilidad real.",
        description:
          "Trabajamos con empresas y profesionales que necesitan que la IA encaje en un modelo operativo real, no como un accesorio aislado.",
        primary: {
          label: "Contactarnos",
          href: "/contact",
        },
        secondary: {
          label: "Cómo trabajamos",
          href: "/how-we-work",
          variant: "secondary",
        },
      },
      principlesTitle: "Principios de trabajo",
      principlesDescription:
        "Si la solución no resiste bajo lógica de negocio, ownership, riesgo y uso diario, no está lista.",
      beliefsTitle: "Cómo entendemos la IA",
      beliefsDescription:
        "La IA crea valor cuando está conectada a datos, workflow, revisión humana y personas que podrán sostener el sistema después del lanzamiento.",
      finalCta: {
        title: "Buscas un partner que piense con rigor y ejecute con criterio?",
        description:
          "Podemos empezar por tu problema, tus límites y los resultados de negocio que más importan.",
        primary: {
          label: "Reservar una consulta",
          href: "/contact",
        },
        secondary: {
          label: "Ver servicios",
          href: "/services",
          variant: "secondary",
        },
      },
    },
    contactPage: {
      hero: {
        eyebrow: "Contacto",
        title: "Hablemos de implementación, estrategia, formación o un setup personal con IA.",
        description:
          "Cuéntanos qué fricción quieres resolver. Responderemos con un siguiente paso útil, no con un guion comercial genérico.",
        primary: {
          label: "Abrir el formulario",
          href: "#contact-form",
        },
        secondary: {
          label: "Escribir por correo",
          href: "mailto:hello@ventolabs.ai",
          variant: "secondary",
        },
      },
      pathsTitle: "Dónde encaja mejor tu consulta",
      pathsDescription:
        "Separamos implementación para empresa y soporte individual para poder responder con más foco y mejor contexto.",
      paths: [
        {
          title: "Para empresas",
          description:
            "Ideal para estrategia, auditorías, automatización, integraciones, data systems, producto a medida o revisiones de seguridad.",
          cta: {
            label: "Solicitar solución empresarial",
            href: "#contact-form",
          },
        },
        {
          title: "Para profesionales y particulares",
          description:
            "Ideal para formación, asistentes personales, sistemas de contenido, memberships, templates y consultoría one-to-one.",
          cta: {
            label: "Solicitar apoyo personal",
            href: "#contact-form",
            variant: "secondary",
          },
        },
      ],
      detailsTitle: "Qué ocurre después del mensaje",
      detailsDescription:
        "Revisamos la solicitud, aclaramos el objetivo y proponemos el siguiente paso más sensato: consulta, auditoría, sprint o fase de implementación.",
      finalCta: {
        title: "Prefieres una conversación corta en vez de una cadena larga de correos?",
        description:
          "Usa el formulario o escribe directamente a hello@ventolabs.ai y desde ahí guiamos el siguiente paso.",
        primary: {
          label: "Ir al formulario",
          href: "#contact-form",
        },
        secondary: {
          label: "Escribir directamente",
          href: "mailto:hello@ventolabs.ai",
          variant: "secondary",
        },
      },
    },
    process: {
      business: [
        {
          title: "Discover",
          description:
            "Entendemos objetivos, workflows, restricciones, sistemas actuales y dónde la IA puede crear leverage real.",
        },
        {
          title: "Design",
          description:
            "Definimos arquitectura, flujo de datos, gobierno, puntos de revisión humana y criterios de éxito.",
        },
        {
          title: "Build",
          description:
            "Implementamos automatizaciones, asistentes, herramientas internas, motores de contenido o módulos de producto.",
        },
        {
          title: "Launch",
          description:
            "Conectamos el sistema, validamos en contexto real, formamos al equipo y ordenamos el uso.",
        },
        {
          title: "Optimize",
          description:
            "Ajustamos calidad, fiabilidad, cobertura y encaje operativo sobre el sistema vivo.",
        },
      ],
      individual: [
        {
          title: "Assess",
          description:
            "Entendemos tu carga de trabajo, tu rol y dónde la IA puede mejorar resultado o reducir fricción.",
        },
        {
          title: "Set up",
          description:
            "Elegimos herramientas, configuramos workflows y organizamos un sistema personal usable.",
        },
        {
          title: "Train",
          description:
            "Mostramos cómo usar el sistema de forma sostenible, sin depender de un único prompt brillante.",
        },
        {
          title: "Refine",
          description:
            "Ajustamos el setup después del uso inicial para que se convierta en parte real del trabajo diario.",
        },
      ],
      full: [
        {
          title: "Discovery / auditoría",
          description:
            "Mapeamos objetivos, fricciones, sistemas, datos y límites prácticos antes de construir.",
        },
        {
          title: "Definición de scope",
          description:
            "Aterrizamos qué se construye, qué significa éxito y dónde debe mantenerse la revisión humana.",
        },
        {
          title: "Implementación",
          description:
            "Construimos lógica, prompts, flujos, capas de conocimiento, interfaces y controles operativos.",
        },
        {
          title: "Integración",
          description:
            "Conectamos CRM, documentación, herramientas de comunicación y sistemas ya existentes.",
        },
        {
          title: "Formación / handoff",
          description:
            "Preparamos al equipo, clarificamos ownership y dejamos el operating model entendido.",
        },
        {
          title: "Optimización",
          description:
            "Mejoramos calidad y encaje donde realmente importa: en uso real y con feedback real.",
        },
      ],
      models: [
        {
          title: "Auditoría primero",
          description:
            "Adecuado cuando aún no está claro dónde la IA va a generar más valor.",
        },
        {
          title: "Implementación directa",
          description:
            "Adecuado cuando el caso ya está decidido y lo importante es avanzar con velocidad y orden.",
        },
        {
          title: "Construcción a medida con mejora continua",
          description:
            "Adecuado cuando la solución es más estratégica, más específica o necesita evolucionar con el tiempo.",
        },
      ],
      principles: [
        {
          title: "Utilidad antes que novedad",
          description:
            "No añadimos IA porque suene moderna. Tiene que mejorar un sistema real.",
        },
        {
          title: "Estructura clara antes que caos bonito",
          description:
            "Scope, ownership, riesgo y lógica operativa deben seguir siendo comprensibles en todo momento.",
        },
        {
          title: "El sistema debe sobrevivir al lanzamiento",
          description:
            "Formación, handoff, fiabilidad y siguiente paso forman parte del trabajo, no del cierre.",
        },
        {
          title: "Custom solo cuando está justificado",
          description:
            "No vendemos complejidad a medida cuando un setup más simple será mejor y más durable.",
        },
      ],
      beliefs: [
        {
          title: "La IA debe reforzar decisiones, no ocultar procesos rotos",
          description:
            "Si el workflow es confuso, la capa de IA solo hará más difícil controlarlo.",
        },
        {
          title: "El gobierno es parte del crecimiento",
          description:
            "Sin controles, permisos y revisión, escalar IA solo multiplica riesgo operativo.",
        },
        {
          title: "La buena implementación se siente serena",
          description:
            "Un sistema premium de IA rara vez es estridente. Hace el trabajo complejo más claro y más eficaz.",
        },
      ],
    },
    caseStudies: [
      {
        title: "Workflow de calificación con IA para un pipeline B2B",
        sector: "Servicios B2B",
        challenge:
          "Los leads llegaban por varios canales y la calificación seguía dependiendo de revisión manual.",
        solution:
          "Diseñamos scoring, enriquecimiento, routing y briefs de ventas para acelerar el paso de las oportunidades correctas.",
        result:
          "El equipo ganó velocidad de respuesta, mejor visibilidad del pipeline y menos carga manual de bajo valor.",
        services: [
          "ai-sales-revenue-automation",
          "ai-integration-automation",
        ],
      },
      {
        title: "Asistente interno de conocimiento para un equipo asesor",
        sector: "Trabajo experto / advisory",
        challenge:
          "El contexto importante estaba disperso entre llamadas, documentos, chats y memoria individual.",
        solution:
          "Construimos una capa de conocimiento preparada para IA con acceso por roles y retrieval útil para asistentes internos.",
        result:
          "El equipo encontró contexto más rápido, dependió menos de personas clave y mejoró su preparación.",
        services: [
          "ai-infrastructure-data-systems",
          "custom-ai-product-development",
        ],
      },
      {
        title: "Workflow de compliance asistido por IA para fintech",
        sector: "Fintech",
        challenge:
          "La revisión manual de documentos y excepciones ralentizaba onboarding y sobrecargaba operaciones.",
        solution:
          "Mapeamos el flujo de decisión, añadimos triage asistido por IA y checkpoints humanos con lógica auditable.",
        result:
          "El equipo redujo trabajo repetitivo y mantuvo control, visibilidad y disciplina frente al riesgo.",
        services: [
          "ai-fintech-blockchain",
          "ai-security-risk-testing",
        ],
      },
      {
        title: "Sistema de contenido para una marca liderada por founder",
        sector: "Negocio experto / founder-led",
        challenge:
          "La producción de contenido era irregular y se reconstruía casi desde cero cada vez.",
        solution:
          "Configuramos un flujo asistido por IA para briefing, guion, reutilización, revisión y publicación.",
        result:
          "La marca ganó consistencia sin caer en contenido genérico ni en una operación frágil.",
        services: [
          "ai-content-creation-systems",
          "personal-ai-assistants",
        ],
      },
    ],
    services: {} as Record<ServiceSlug, ServiceContent>,
    seo: {
      home: {
        title: "VentoLabs | Implementación y consultoría de IA para empresas",
        description:
          "VentoLabs diseña sistemas de IA para operaciones, ingresos, automatización, datos y productos a medida.",
      },
      services: {
        title: "Servicios | VentoLabs",
        description:
          "Servicios de IA para empresas y particulares: estrategia, automatización, formación, seguridad, contenido y soluciones a medida.",
      },
      "case-studies": {
        title: "Casos | VentoLabs",
        description:
          "Casos seleccionados de implementación de IA con reto, solución y resultados creíbles.",
      },
      "how-we-work": {
        title: "Cómo trabajamos | VentoLabs",
        description:
          "Discovery, scope, implementación, integración, handoff y optimización en el modelo de trabajo de VentoLabs.",
      },
      about: {
        title: "Nosotros | VentoLabs",
        description:
          "VentoLabs es un partner práctico de implementación de IA para empresas, equipos y profesionales.",
      },
      contact: {
        title: "Contacto | VentoLabs",
        description:
          "Habla con VentoLabs sobre estrategia, implementación, formación, automatización o setups personales con IA.",
      },
    },
  },
};

// The Russian copy is the source of truth. English and Spanish are adapted versions
// of the same commercial structure and service architecture.
content.en.services = {
  ...content.ru.services,
  "ai-strategy-governance": {
    ...content.ru.services["ai-strategy-governance"],
    title: "AI Strategy & Governance",
    kicker: "Business service",
    heroTitle:
      "Turn scattered AI ideas into a clear strategy, rollout plan and governance model.",
    heroDescription:
      "When leadership knows AI matters but does not want chaos, we help define priorities, ownership, controls and a scalable implementation path.",
    cardSummary:
      "Strategy, prioritization, governance, ownership and rollout planning aligned with real business goals.",
  },
  "ai-infrastructure-data-systems": {
    ...content.ru.services["ai-infrastructure-data-systems"],
    title: "AI Infrastructure & Data Systems",
    kicker: "Business service",
    heroTitle:
      "Build the data, knowledge and systems foundation that makes AI actually useful.",
    heroDescription:
      "Without a strong information layer, AI stays shallow. We design the architecture, pipelines and knowledge systems needed for reliable performance.",
    cardSummary:
      "AI-ready data architecture, knowledge systems and technical foundations for stronger implementation quality.",
  },
  "industry-specific-ai-solutions": {
    ...content.ru.services["industry-specific-ai-solutions"],
    title: "Industry-Specific AI Solutions",
    kicker: "Business service",
    heroTitle:
      "Design AI systems around your industry's actual rules, language and decision logic.",
    heroDescription:
      "Generic tooling breaks down quickly in specialized markets. We shape the solution around domain reality instead of around a generic demo.",
    cardSummary:
      "Tailored AI systems for industry-specific workflows, compliance requirements and domain-heavy teams.",
  },
  "ai-sales-revenue-automation": {
    ...content.ru.services["ai-sales-revenue-automation"],
    title: "AI Sales & Revenue Automation",
    kicker: "Business service",
    heroTitle:
      "Use AI to speed up qualification, follow-up and revenue execution without losing control.",
    heroDescription:
      "We help sales and revenue teams remove low-value manual work while keeping the pipeline structured, reviewable and commercially useful.",
    cardSummary:
      "AI-assisted qualification, outreach support, routing and revenue workflows grounded in real sales operations.",
  },
  "ai-integration-automation": {
    ...content.ru.services["ai-integration-automation"],
    title: "AI Integration & Automation",
    kicker: "Business service",
    heroTitle:
      "Connect AI to real workflows so operations move faster and with less manual friction.",
    heroDescription:
      "We design automation around actual business processes, systems and human checkpoints instead of layering AI on top of operational confusion.",
    cardSummary:
      "Workflow automation and AI integration built around operations, systems and human review.",
  },
  "ai-fintech-blockchain": {
    ...content.ru.services["ai-fintech-blockchain"],
    title: "AI + Fintech & Blockchain Solutions",
    kicker: "Business service",
    heroTitle:
      "Apply AI to fintech and blockchain workflows with the control these environments require.",
    heroDescription:
      "We support risk-heavy financial and digital asset operations with AI workflows for review, monitoring, compliance and operational decision support.",
    cardSummary:
      "AI for compliance, review, payment intelligence, digital asset workflows and financial operations support.",
  },
  "ai-security-risk-testing": {
    ...content.ru.services["ai-security-risk-testing"],
    title: "AI Security & Risk Testing",
    kicker: "Business service",
    heroTitle:
      "Review AI systems for data exposure, misuse scenarios and weak operational controls before they become a liability.",
    heroDescription:
      "As AI adoption expands, security turns practical fast. We help teams understand risk, tighten safeguards and keep implementation useful.",
    cardSummary:
      "Security and risk review for AI workflows, prompts, permissions, data exposure and operational misuse paths.",
  },
  "custom-ai-product-development": {
    ...content.ru.services["custom-ai-product-development"],
    title: "Custom AI Product Development",
    kicker: "Business service",
    heroTitle:
      "Build custom AI-powered tools and product capabilities around your own business model.",
    heroDescription:
      "When standard tools do not fit the workflow, we help scope, design and build AI-powered internal systems or client-facing product modules.",
    cardSummary:
      "Custom internal tools and AI-powered product experiences designed around your specific operating model.",
  },
  "ai-training-education": {
    ...content.ru.services["ai-training-education"],
    title: "AI Training & Education",
    kicker: "Education service",
    heroTitle:
      "Practical AI training for teams and professionals who want working capability, not abstract inspiration.",
    heroDescription:
      "We build training around actual work: how to use AI inside daily tasks, decision-making, communication, research and execution.",
    cardSummary:
      "Practical AI training, workshops and education programs built around real-world application.",
  },
  "personal-ai-assistants": {
    ...content.ru.services["personal-ai-assistants"],
    title: "Personal AI Assistants Setup",
    kicker: "Individual service",
    heroTitle:
      "Set up a personal AI operating system that genuinely supports your day-to-day work.",
    heroDescription:
      "We configure AI for planning, preparation, notes, retrieval, communication and cognitive support around your own role and working style.",
    cardSummary:
      "Personal AI setup for founders, executives and professionals who want real leverage in their daily work.",
  },
  "ai-content-creation-systems": {
    ...content.ru.services["ai-content-creation-systems"],
    title: "AI Content Creation Systems",
    kicker: "Individual service",
    heroTitle:
      "Design an AI-assisted content engine that scales output without flattening the voice.",
    heroDescription:
      "We create content systems for briefing, scripting, reuse, review and publishing so expertise can move consistently without becoming generic.",
    cardSummary:
      "AI-assisted content production systems for expert brands, teams and media-driven businesses.",
  },
  "ai-communities-memberships": {
    ...content.ru.services["ai-communities-memberships"],
    title: "AI Communities & Memberships",
    kicker: "Individual service",
    heroTitle:
      "Shape AI communities and memberships around real value, not vague access.",
    heroDescription:
      "We help structure membership offers, support systems, resource layers and learning experiences so the product feels intentional and durable.",
    cardSummary:
      "Community and membership design for AI education, support and ongoing value delivery.",
  },
  "ai-templates-marketplace": {
    ...content.ru.services["ai-templates-marketplace"],
    title: "AI Templates & Automation Marketplace",
    kicker: "Individual service",
    heroTitle:
      "Package AI templates, workflow kits and automation assets into a useful and marketable offer.",
    heroDescription:
      "This service helps turn scattered know-how into structured templates, guides and digital assets people can actually use.",
    cardSummary:
      "Ready-to-use AI templates, workflow kits and automation assets designed for faster implementation.",
  },
  "ai-consulting-for-individuals": {
    ...content.ru.services["ai-consulting-for-individuals"],
    title: "AI Consulting for Individuals",
    kicker: "Individual service",
    heroTitle:
      "One-to-one AI consulting for career growth, independent work and personal operating systems.",
    heroDescription:
      "When you need tailored guidance instead of a generic course, we help define the right AI setup, workflows and next steps for your context.",
    cardSummary:
      "One-to-one AI consulting for founders, independent operators and professionals who want practical clarity.",
  },
};

content.es.services = {
  ...content.ru.services,
  "ai-strategy-governance": {
    ...content.ru.services["ai-strategy-governance"],
    title: "Estrategia y gobierno de IA",
    kicker: "Servicio empresarial",
    heroTitle:
      "Convertimos iniciativas dispersas de IA en una estrategia clara, un roadmap útil y un modelo de gobierno real.",
    heroDescription:
      "Cuando la dirección sabe que la IA importa pero no quiere entrar en caos, ayudamos a definir prioridades, ownership, controles y una secuencia de implantación sensata.",
    cardSummary:
      "Estrategia, priorización, governance, ownership y roadmap de implantación alineados con objetivos reales de negocio.",
  },
  "ai-infrastructure-data-systems": {
    ...content.ru.services["ai-infrastructure-data-systems"],
    title: "Infraestructura de IA y sistemas de datos",
    kicker: "Servicio empresarial",
    heroTitle:
      "Construimos la base de datos, conocimiento y arquitectura que hace que la IA funcione de verdad.",
    heroDescription:
      "Sin una capa sólida de información, la IA se queda en superficie. Diseñamos arquitectura, pipelines y knowledge systems para que la ejecución tenga fundamento.",
    cardSummary:
      "Arquitectura de datos, knowledge systems y base técnica preparada para una implantación de IA más robusta.",
  },
  "industry-specific-ai-solutions": {
    ...content.ru.services["industry-specific-ai-solutions"],
    title: "Soluciones de IA por industria",
    kicker: "Servicio empresarial",
    heroTitle:
      "Diseñamos sistemas de IA alrededor de las reglas, lenguaje y lógica real de tu sector.",
    heroDescription:
      "Las herramientas genéricas se quedan cortas en mercados especializados. Construimos la solución desde la realidad del dominio, no desde una demo promedio.",
    cardSummary:
      "Sistemas de IA diseñados para workflows sectoriales, restricciones regulatorias y equipos con alta complejidad de dominio.",
  },
  "ai-sales-revenue-automation": {
    ...content.ru.services["ai-sales-revenue-automation"],
    title: "IA para ventas y automatización de ingresos",
    kicker: "Servicio empresarial",
    heroTitle:
      "Usa IA para acelerar calificación, seguimiento y ejecución comercial sin perder control.",
    heroDescription:
      "Ayudamos a equipos comerciales a quitar trabajo manual de poco valor y mantener un pipeline más limpio, visible y accionable.",
    cardSummary:
      "Calificación asistida por IA, soporte a outreach, routing y workflows de revenue conectados a ventas reales.",
  },
  "ai-integration-automation": {
    ...content.ru.services["ai-integration-automation"],
    title: "Integración y automatización con IA",
    kicker: "Servicio empresarial",
    heroTitle:
      "Conectamos la IA a workflows reales para que las operaciones ganen velocidad y orden.",
    heroDescription:
      "Diseñamos automatización sobre procesos reales, sistemas y checkpoints humanos, en lugar de sumar una capa más al desorden operativo.",
    cardSummary:
      "Automatización de workflows e integración con IA construidas alrededor de operaciones, sistemas y revisión humana.",
  },
  "ai-fintech-blockchain": {
    ...content.ru.services["ai-fintech-blockchain"],
    title: "IA + soluciones fintech y blockchain",
    kicker: "Servicio empresarial",
    heroTitle:
      "Aplicamos IA a workflows fintech y blockchain con el nivel de control que estos entornos exigen.",
    heroDescription:
      "Apoyamos operaciones financieras y de activos digitales con workflows de IA para revisión, monitoring, compliance y soporte a decisiones.",
    cardSummary:
      "IA para compliance, revisión, inteligencia de pagos, activos digitales y soporte operativo financiero.",
  },
  "ai-security-risk-testing": {
    ...content.ru.services["ai-security-risk-testing"],
    title: "Seguridad, riesgo y testing de IA",
    kicker: "Servicio empresarial",
    heroTitle:
      "Revisamos sistemas de IA para detectar exposición de datos, misuse y controles débiles antes de que se conviertan en un problema real.",
    heroDescription:
      "Cuando el uso de IA crece, la seguridad pasa a ser un asunto operativo. Ayudamos a entender riesgo, fortalecer safeguards y mantener utilidad.",
    cardSummary:
      "Revisión de seguridad y riesgo para workflows de IA, prompts, permisos, exposición de datos y escenarios de misuse.",
  },
  "custom-ai-product-development": {
    ...content.ru.services["custom-ai-product-development"],
    title: "Desarrollo de productos de IA a medida",
    kicker: "Servicio empresarial",
    heroTitle:
      "Construimos herramientas y capacidades de IA a medida alrededor de tu propio modelo de negocio.",
    heroDescription:
      "Cuando las soluciones estándar no encajan, ayudamos a definir alcance, diseño y construcción de sistemas internos o módulos de producto impulsados por IA.",
    cardSummary:
      "Herramientas internas y experiencias de producto con IA diseñadas según tu operating model específico.",
  },
  "ai-training-education": {
    ...content.ru.services["ai-training-education"],
    title: "Formación y educación en IA",
    kicker: "Servicio educativo",
    heroTitle:
      "Formación práctica en IA para equipos y profesionales que quieren capability real, no solo inspiración.",
    heroDescription:
      "Diseñamos la formación alrededor del trabajo real: tareas, decisiones, investigación, comunicación y ejecución diaria.",
    cardSummary:
      "Formación práctica, workshops y programas de IA centrados en aplicación real.",
  },
  "personal-ai-assistants": {
    ...content.ru.services["personal-ai-assistants"],
    title: "Configuración de asistentes personales con IA",
    kicker: "Servicio individual",
    heroTitle:
      "Configura un sistema personal con IA que realmente apoye tu trabajo diario.",
    heroDescription:
      "Ajustamos IA para planificación, preparación, notas, recuperación de contexto, comunicación y apoyo cognitivo según tu rol y tu forma de trabajar.",
    cardSummary:
      "Setup personal de IA para founders, directivos y profesionales que buscan leverage real en su trabajo diario.",
  },
  "ai-content-creation-systems": {
    ...content.ru.services["ai-content-creation-systems"],
    title: "Sistemas de creación de contenido con IA",
    kicker: "Servicio individual",
    heroTitle:
      "Diseñamos un engine de contenido asistido por IA que aumenta producción sin vaciar la voz de marca.",
    heroDescription:
      "Creamos sistemas para briefing, guion, reutilización, revisión y publicación para que la expertise salga con consistencia y sin volverse genérica.",
    cardSummary:
      "Sistemas de producción de contenido asistidos por IA para marcas expertas, equipos y negocios basados en medios.",
  },
  "ai-communities-memberships": {
    ...content.ru.services["ai-communities-memberships"],
    title: "Comunidades y memberships de IA",
    kicker: "Servicio individual",
    heroTitle:
      "Diseñamos comunidades y memberships de IA alrededor de valor real, no de acceso difuso.",
    heroDescription:
      "Ayudamos a estructurar memberships, soporte, recursos y experiencias de aprendizaje para que el producto tenga intención y permanencia.",
    cardSummary:
      "Diseño de comunidades y memberships para educación, soporte y entrega continua de valor con IA.",
  },
  "ai-templates-marketplace": {
    ...content.ru.services["ai-templates-marketplace"],
    title: "Marketplace de plantillas y automatizaciones de IA",
    kicker: "Servicio individual",
    heroTitle:
      "Empaquetamos plantillas, kits de workflow y assets de automatización en una oferta útil y vendible.",
    heroDescription:
      "Este servicio convierte conocimiento disperso en templates, guías y activos digitales que la gente puede usar de verdad.",
    cardSummary:
      "Plantillas de IA, kits de workflow y assets de automatización listos para acelerar implementación.",
  },
  "ai-consulting-for-individuals": {
    ...content.ru.services["ai-consulting-for-individuals"],
    title: "Consultoría de IA para particulares",
    kicker: "Servicio individual",
    heroTitle:
      "Consultoría one-to-one para carrera, trabajo independiente y sistemas personales apoyados por IA.",
    heroDescription:
      "Cuando necesitas guía personalizada en lugar de un curso genérico, ayudamos a definir setup, workflows y próximos pasos según tu contexto.",
    cardSummary:
      "Consultoría one-to-one para founders, profesionales independientes y expertos que buscan claridad práctica.",
  },
};

const compactServiceOverrides: Partial<
  Record<
    Locale,
    Partial<Record<ServiceSlug, Pick<ServiceContent, "heroTitle" | "heroDescription" | "cardSummary">>>
  >
> = {
  ru: {
    "ai-strategy-governance": {
      heroTitle: "Собираем AI-стратегию, roadmap и правила внедрения.",
      heroDescription:
        "Помогаем определить приоритеты, ownership и безопасный порядок запуска AI-инициатив.",
      cardSummary: "AI-стратегия, приоритеты, governance и roadmap внедрения.",
    },
    "ai-infrastructure-data-systems": {
      heroTitle: "Строим data foundation, на которой AI работает по-настоящему.",
      heroDescription:
        "Собираем архитектуру данных, knowledge layer и pipelines для assistants, automation и внутренних AI-сценариев.",
      cardSummary: "Data foundation, knowledge systems и AI-ready архитектура.",
    },
    "industry-specific-ai-solutions": {
      heroTitle: "Делаем AI-решения под логику вашей отрасли.",
      heroDescription:
        "Настраиваем AI под реальные документы, термины, ограничения и decision flows вашего рынка.",
      cardSummary: "AI под отраслевые workflows, правила и domain-логику.",
    },
    "ai-sales-revenue-automation": {
      heroTitle: "Ускоряем продажи с помощью AI и automation.",
      heroDescription:
        "Автоматизируем qualification, enrichment, follow-up и handoff без потери контроля над pipeline.",
      cardSummary: "AI для qualification, outreach и revenue workflows.",
    },
    "ai-integration-automation": {
      heroTitle: "Встраиваем AI в реальные процессы и системы.",
      heroDescription:
        "Соединяем AI с CRM, данными и workflow, чтобы снять ручную нагрузку и ускорить операции.",
      cardSummary: "AI-интеграции и automation для ежедневных процессов.",
    },
    "ai-fintech-blockchain": {
      heroTitle: "Применяем AI в fintech и blockchain-сценариях с контролем рисков.",
      heroDescription:
        "Помогаем с review, compliance, monitoring и операционными decision flows в чувствительных средах.",
      cardSummary: "AI для fintech, compliance, monitoring и digital asset workflows.",
    },
    "ai-security-risk-testing": {
      heroTitle: "Проверяем AI-системы на уязвимости и операционные риски.",
      heroDescription:
        "Находим слабые места в данных, доступах, prompts и usage rules до того, как они станут проблемой.",
      cardSummary: "Security review и risk testing для AI-систем.",
    },
    "custom-ai-product-development": {
      heroTitle: "Создаем кастомные AI-инструменты и продукты.",
      heroDescription:
        "Проектируем внутренние системы и AI-модули, когда готовые решения не подходят под вашу модель.",
      cardSummary: "Кастомные AI-инструменты и продуктовые сценарии.",
    },
    "ai-training-education": {
      heroTitle: "Обучаем AI так, чтобы команда начала применять его в работе.",
      heroDescription:
        "Практические воркшопы и обучение без лишней теории и без generic demos.",
      cardSummary: "Практическое AI-обучение для команд и специалистов.",
    },
    "personal-ai-assistants": {
      heroTitle: "Настраиваем персональные AI-ассистенты под ваш ритм работы.",
      heroDescription:
        "Собираем AI-setup для планирования, заметок, research и повседневных задач.",
      cardSummary: "Персональный AI-setup для founders, руководителей и специалистов.",
    },
    "ai-content-creation-systems": {
      heroTitle: "Собираем AI-системы для контента без потери голоса бренда.",
      heroDescription:
        "Настраиваем production flow для идей, сценариев, repurposing и публикации.",
      cardSummary: "AI-система для контента, repurposing и publishing.",
    },
    "ai-communities-memberships": {
      heroTitle: "Упаковываем AI-комьюнити и memberships вокруг реальной пользы.",
      heroDescription:
        "Структурируем value, контент, support и member journey без шумной оболочки.",
      cardSummary: "AI-комьюнити и membership-модель с понятной ценностью.",
    },
    "ai-templates-marketplace": {
      heroTitle: "Упаковываем AI-шаблоны и automation kits в понятный продукт.",
      heroDescription:
        "Структурируем templates, guides и workflows так, чтобы ими реально пользовались и покупали.",
      cardSummary: "AI-шаблоны, workflow kits и готовые automation assets.",
    },
    "ai-consulting-for-individuals": {
      heroTitle: "Персонально помогаем встроить AI в работу и бизнес.",
      heroDescription:
        "Разбираем ваш контекст, выбираем инструменты и собираем рабочий AI-план.",
      cardSummary: "One-to-one AI-консалтинг для специалистов и founders.",
    },
  },
};

for (const locale of Object.keys(compactServiceOverrides) as Locale[]) {
  const serviceOverrides = compactServiceOverrides[locale];

  if (!serviceOverrides) {
    continue;
  }

  for (const slug of Object.keys(serviceOverrides) as ServiceSlug[]) {
    const override = serviceOverrides[slug];

    if (!override) {
      continue;
    }

    content[locale].services[slug] = {
      ...content[locale].services[slug],
      ...override,
    };
  }
}

Object.assign(content.ru.ui, {
  footerBlurb: "AI-партнер для компаний, которым нужны рабочие системы, а не шум вокруг AI.",
  footerTitle: "AI for business, built to work.",
});

Object.assign(content.ru.home.hero, {
  eyebrow: "AI systems for sales, operations and growth",
  title: "Внедряем AI-системы для продаж, операций и роста.",
  description:
    "Стратегия, data foundation, интеграции и automation под реальные процессы бизнеса.",
});
content.ru.home.hero.panels = [
  {
    title: "Стратегия и governance",
    description: "Приоритеты, ownership и roadmap без хаоса.",
  },
  {
    title: "Интеграции и automation",
    description: "AI в CRM, данных и ежедневных workflows.",
  },
  {
    title: "Кастомные решения",
    description: "Внутренние инструменты и AI-модули под вашу модель.",
  },
];
content.ru.home.positioningStrip = [
  "Business-first, а не tool-first",
  "Стартуем с аудита или сразу с внедрения",
  "Встраиваем AI в реальные процессы",
];
Object.assign(content.ru.home.problem, {
  title: "AI обсуждают, а результата нет.",
  description:
    "Обычно проблема не в интересе к AI, а в ручной рутине, разрозненных системах и отсутствии ясного next step.",
});
content.ru.home.problem.items = [
  {
    title: "Ручная рутина",
    description: "Повторяющиеся задачи съедают время сильных сотрудников.",
  },
  {
    title: "Разрозненные системы",
    description: "CRM, таблицы, чаты и документы не дают цельной картины.",
  },
  {
    title: "Потери в продажах",
    description: "Лиды обрабатываются медленно, а follow-up держится на ручном контроле.",
  },
  {
    title: "AI без плана",
    description: "Команда тестирует инструменты, но не понимает, что внедрять первым.",
  },
];
Object.assign(content.ru.home.solutions, {
  title: "От стратегии до внедрения.",
  description:
    "Можно прийти с конкретной задачей или сначала понять, где AI даст лучший эффект.",
});
Object.assign(content.ru.home.why, {
  title: "Почему VentoLabs",
  description: "Мы внедряем AI в процессы, а не продаем набор модных инструментов.",
});
content.ru.home.why.items = [
  {
    title: "Сначала бизнес-логика",
    description: "Смотрим на revenue, cost, скорость и управляемость.",
  },
  {
    title: "Под ваш процесс",
    description: "Система и rollout собираются под реальную модель бизнеса.",
  },
  {
    title: "Интеграция, а не витрина",
    description: "AI работает внутри workflow, а не рядом с ним.",
  },
  {
    title: "Можно начать с аудита",
    description: "Если приоритеты не ясны, сначала найдем лучшие точки эффекта.",
  },
];
Object.assign(content.ru.home.process, {
  title: "Пять шагов до рабочей системы.",
  description: "Понимаем задачу, проектируем решение, внедряем, запускаем и дорабатываем.",
});
Object.assign(content.ru.home.entryPaths, {
  title: "Два способа начать.",
  description: "Либо приходите с готовой задачей, либо начинаем с аудита возможностей.",
});
content.ru.home.entryPaths.items = [
  {
    title: "Я знаю, что нужно внедрить",
    description: "Берем конкретный use case и быстро переводим его в scope и реализацию.",
    cta: {
      label: "Запросить решение",
      href: "/contact",
    },
  },
  {
    title: "Нужно понять, где AI даст лучший эффект",
    description: "Начинаем с диагностики и выбираем точки внедрения с самым сильным impact.",
    cta: {
      label: "Запросить аудит",
      href: "/services/ai-strategy-governance",
      variant: "secondary",
    },
  },
];
Object.assign(content.ru.home.useCases, {
  title: "Что мы внедряем на практике.",
  description: "Сценарии, которые реально снимают нагрузку и ускоряют работу команды.",
});
content.ru.home.useCases.items = [
  {
    title: "AI-квалификация входящих лидов",
    audience: "B2B продажи",
    challenge: "Первичный разбор лидов съедает время команды.",
    solution: "Настраиваем scoring, enrichment и routing прямо в pipeline.",
    result: "Продавцы быстрее доходят до качественных opportunities.",
    service: "ai-sales-revenue-automation",
  },
  {
    title: "AI knowledge system",
    audience: "Операции и экспертные команды",
    challenge: "Ключевое знание разбросано по чатам, докам и звонкам.",
    solution: "Собираем knowledge layer и AI-помощника с контролем источников.",
    result: "Команда быстрее находит контекст и проще онбордит новых людей.",
    service: "ai-infrastructure-data-systems",
  },
  {
    title: "Executive AI assistant",
    audience: "Фаундеры и руководители",
    challenge: "Рутина по заметкам, summary и prep work тормозит решения.",
    solution: "Собираем персональный assistant для planning, notes и follow-up.",
    result: "Руководитель быстрее держит контекст и меньше тонет в операционке.",
    service: "personal-ai-assistants",
  },
  {
    title: "AI-workflows для внутренних операций",
    audience: "Операционные команды",
    challenge: "Повторяющиеся процессы держатся на ручных действиях и переключениях.",
    solution: "Соединяем AI, данные и automation в единый workflow.",
    result: "Процессы идут быстрее и с меньшей ручной нагрузкой.",
    service: "ai-integration-automation",
  },
];
Object.assign(content.ru.home.audiences, {
  title: "Для бизнеса и для специалистов.",
  description: "От AI-внедрения для компаний до персональных систем и обучения.",
});
Object.assign(content.ru.home.audiences.business, {
  description: "Для компаний, которым нужны AI-системы, automation и кастомные решения.",
});
Object.assign(content.ru.home.audiences.individual, {
  description: "Для founders, специалистов и экспертных проектов, которые хотят применять AI сильнее.",
});
Object.assign(content.ru.home.finalCta, {
  title: "Пора перейти от обсуждений к внедрению.",
  description: "Разберем задачу, ограничения и предложим понятный формат старта.",
});

Object.assign(content.ru.servicesPage.hero, {
  title: "AI-услуги для бизнеса и специалистов.",
  description: "Помогаем выбрать аудит, прямое внедрение, обучение или кастомную разработку.",
});
Object.assign(content.ru.servicesPage.businessIntro, {
  description: "Для компаний, которым нужно связать AI с операциями, данными, revenue и продуктом.",
});
Object.assign(content.ru.servicesPage.individualIntro, {
  description: "Для тех, кто хочет быстрее встроить AI в личную работу, контент и обучение.",
});
Object.assign(content.ru.servicesPage.chooser, {
  title: "Как выбрать формат старта",
  description: "Ориентируйтесь по зрелости задачи и скорости, с которой нужен результат.",
});
content.ru.servicesPage.chooser.items = [
  {
    title: "Стратегия / аудит",
    description: "Когда нужно понять, где AI даст лучший ROI и с чего начинать.",
  },
  {
    title: "Прямое внедрение",
    description: "Когда use case уже выбран и нужен быстрый build sprint.",
  },
  {
    title: "Кастомная разработка",
    description: "Когда нужен внутренний инструмент или AI-модуль под вашу модель.",
  },
  {
    title: "Обучение",
    description: "Когда команде нужен практический AI operating model, а не обзор трендов.",
  },
];
Object.assign(content.ru.servicesPage.finalCta, {
  title: "Не уверены, с чего начать?",
  description: "Начнем с короткой консультации и предложим разумный следующий шаг.",
});

Object.assign(content.ru.caseStudiesPage.hero, {
  title: "Кейсы AI-систем и рабочих сценариев.",
  description: "Показываем задачу, подход и результат без придуманных 10x-обещаний.",
});
content.ru.caseStudiesPage.noteTitle = "Без выдуманных цифр";
content.ru.caseStudiesPage.noteDescription =
  "Если публичных метрик нет, мы показываем логику задачи и реальный операционный эффект.";
Object.assign(content.ru.caseStudiesPage.finalCta, {
  title: "Есть похожая задача?",
  description: "Оценим, какой тип AI-решения подойдет вашему контексту.",
});

Object.assign(content.ru.howWeWorkPage.hero, {
  title: "Прозрачный процесс от аудита до запуска.",
  description: "Фиксируем scope, собираем решение, внедряем и передаем рабочую систему команде.",
});
content.ru.howWeWorkPage.phasesDescription =
  "Даже в быстрых проектах не пропускаем цель, риски, архитектуру и handoff.";
content.ru.howWeWorkPage.modelsDescription =
  "Кому-то нужен аудит, кому-то build sprint, а кому-то сопровождение после запуска.";
Object.assign(content.ru.howWeWorkPage.finalCta, {
  title: "Нужен быстрый, но понятный старт?",
  description: "Расскажите, на какой стадии вы сейчас, и мы предложим рабочий формат.",
});

Object.assign(content.ru.aboutPage.hero, {
  title: "VentoLabs внедряет AI спокойно, точно и по делу.",
  description:
    "Мы помогаем бизнесу использовать AI там, где он дает управляемую операционную выгоду.",
});
content.ru.aboutPage.principlesDescription =
  "Если решение не выдерживает проверку на полезность и внедряемость, мы не считаем его сильным.";
content.ru.aboutPage.beliefsDescription =
  "AI дает результат, когда связан с процессами, данными и ownership внутри команды.";
Object.assign(content.ru.aboutPage.finalCta, {
  title: "Нужен партнер, который умеет и думать, и внедрять?",
  description: "Начнем с разговора о задаче, ограничениях и ближайшем следующем шаге.",
});

Object.assign(content.ru.contactPage.hero, {
  title: "Обсудим задачу и предложим следующий шаг.",
  description: "Подходит для бизнеса, обучения и персонального AI-setup.",
});
content.ru.contactPage.pathsDescription =
  "Разделяем бизнес-запросы и персональные сценарии, чтобы отвечать точнее.";
content.ru.contactPage.paths = [
  {
    title: "Для бизнеса",
    description: "Аудит, roadmap, automation, integrations, revenue workflows и кастомная разработка.",
    cta: {
      label: "Запросить бизнес-решение",
      href: "#contact-form",
    },
  },
  {
    title: "Для специалистов",
    description: "Обучение, personal AI assistants, content systems и one-to-one consulting.",
    cta: {
      label: "Запросить персональную помощь",
      href: "#contact-form",
      variant: "secondary",
    },
  },
];
content.ru.contactPage.detailsDescription =
  "Смотрим на задачу, уточняем scope и предлагаем разумный формат старта.";
Object.assign(content.ru.contactPage.finalCta, {
  title: "Предпочитаете короткий call вместо длинной переписки?",
  description: "Оставьте запрос через форму или напишите напрямую на hello@ventolabs.ai.",
});

content.ru.process.business = [
  {
    title: "Discover",
    description: "Разбираем цели, ограничения и точки, где AI даст результат.",
  },
  {
    title: "Design",
    description: "Собираем логику решения, роли, контроль и критерии качества.",
  },
  {
    title: "Build",
    description: "Внедряем automation, assistants, tools и рабочие flows.",
  },
  {
    title: "Launch",
    description: "Подключаем команду, тестируем и фиксируем operating model.",
  },
  {
    title: "Optimize",
    description: "Улучшаем качество и расширяем систему на новые сценарии.",
  },
];
content.ru.process.individual = [
  {
    title: "Assess",
    description: "Смотрим на вашу роль, задачи и точки, где AI должен помочь.",
  },
  {
    title: "Set up",
    description: "Подбираем стек, сценарии, knowledge sources и templates.",
  },
  {
    title: "Train",
    description: "Показываем, как использовать систему без лишней сложности.",
  },
  {
    title: "Refine",
    description: "Дотягиваем workflow после первых недель реального использования.",
  },
];
content.ru.process.full = [
  {
    title: "Discovery / audit",
    description: "Карта процессов, данных, целей и рисков до старта.",
  },
  {
    title: "Scope definition",
    description: "Фиксируем, что строим, что считаем успехом и где нужен human review.",
  },
  {
    title: "Implementation",
    description: "Собираем логику automation, prompts, knowledge layer и interfaces.",
  },
  {
    title: "Integration",
    description: "Подключаем CRM, документы, базы знаний и внутренние workflows.",
  },
  {
    title: "Training / handoff",
    description: "Передаем систему команде, владельцам и usage rules.",
  },
  {
    title: "Optimization",
    description: "Улучшаем качество там, где это дает реальную выгоду.",
  },
];
content.ru.process.models = [
  {
    title: "Audit-first engagement",
    description: "Когда сначала нужно понять, где AI действительно даст value.",
  },
  {
    title: "Direct implementation sprint",
    description: "Когда use case уже выбран и нужен быстрый переход в build.",
  },
  {
    title: "Custom build and optimization",
    description: "Для более сложных систем, внутренних продуктов и AI layers.",
  },
];
content.ru.process.principles = [
  {
    title: "Сначала полезность, потом технология",
    description: "Начинаем с business logic, а не с модного инструмента.",
  },
  {
    title: "Простая структура сильнее хаоса",
    description: "Scope, ownership и risk profile должны быть понятны заранее.",
  },
  {
    title: "Система должна жить после релиза",
    description: "Думаем о handoff, training и reliability с первого дня.",
  },
  {
    title: "Кастомно - только когда оправдано",
    description: "Не усложняем архитектуру там, где хватит разумного setup.",
  },
];
content.ru.process.beliefs = [
  {
    title: "AI должен усиливать решение",
    description: "Если процессы сломаны, сначала собираем систему, потом усиливаем ее AI.",
  },
  {
    title: "Governance - часть роста",
    description: "Без ролей, доступов и контроля качества AI быстро создает новый риск.",
  },
  {
    title: "Хорошее внедрение выглядит спокойно",
    description: "Сильный AI-проект просто делает сложную работу быстрее и понятнее.",
  },
];

export const siteContent = content;

export function getPageSeo(
  locale: Locale,
  page: PageKey,
  service?: ServiceSlug,
): { title: string; description: string } {
  if (page === "services" && service) {
    const item = siteContent[locale].services[service];
    return {
      title: `${item.title} | VentoLabs`,
      description: item.heroDescription,
    };
  }

  return siteContent[locale].seo[page];
}

export function getServiceContent(locale: Locale, slug: ServiceSlug): ServiceContent {
  const base = siteContent[locale].services[slug];

  const lowerTitle = base.title.toLowerCase();
  const businessAudience =
    locale === "en"
      ? [
          `Teams that need ${lowerTitle} connected to real business priorities instead of isolated experiments.`,
          "Companies ready to move from scattered AI activity to a more structured operating model.",
          "Leaders who want clearer ownership, cleaner execution and visible next steps.",
        ]
      : [
          `Equipos que necesitan ${lowerTitle} conectado a prioridades reales de negocio y no a experimentos aislados.`,
          "Empresas listas para pasar de iniciativas dispersas a un modelo operativo más estructurado.",
          "Líderes que buscan ownership más claro, ejecución más limpia y siguientes pasos visibles.",
        ];
  const individualAudience =
    locale === "en"
      ? [
          `Professionals who want ${lowerTitle} to support their own work with more structure and less friction.`,
          "Founders, experts and independent operators who need a practical system, not generic inspiration.",
          "People who want to move from AI curiosity to repeatable use in daily work.",
        ]
      : [
          `Profesionales que quieren que ${lowerTitle} apoye su trabajo con más estructura y menos fricción.`,
          "Founders, expertos y operadores independientes que necesitan un sistema práctico, no inspiración genérica.",
          "Personas que quieren pasar de la curiosidad por la IA a un uso repetible en su trabajo diario.",
        ];
  const businessProblems =
    locale === "en"
      ? [
          `The current approach to ${lowerTitle} is fragmented, manual or difficult to scale.`,
          "Important work still depends on scattered context, inconsistent process or too much human effort.",
          "The business sees potential, but the execution model is not yet disciplined enough.",
          "Without a clearer system, time, control and commercial momentum continue to leak away.",
        ]
      : [
          `El enfoque actual de ${lowerTitle} está fragmentado, depende demasiado de trabajo manual o no escala bien.`,
          "Trabajo importante sigue dependiendo de contexto disperso, procesos inconsistentes o demasiado esfuerzo humano.",
          "La empresa ve potencial, pero el modelo de ejecución todavía no tiene suficiente disciplina.",
          "Sin un sistema más claro, se siguen perdiendo tiempo, control y tracción comercial.",
        ];
  const individualProblems =
    locale === "en"
      ? [
          `The current approach to ${lowerTitle} is scattered and too dependent on manual effort.`,
          "AI tools may have been tested, but they are not embedded in a durable personal workflow.",
          "There is clear interest in more leverage, but not enough structure to make it stick.",
          "Without a better setup, time keeps disappearing into fragmented tools, notes and experiments.",
        ]
      : [
          `El enfoque actual de ${lowerTitle} es disperso y depende demasiado de esfuerzo manual.`,
          "Puede que ya se hayan probado herramientas de IA, pero no están integradas en un workflow personal sólido.",
          "Existe interés en ganar leverage, pero no suficiente estructura para que se mantenga.",
          "Sin un setup mejor, el tiempo se sigue perdiendo entre herramientas, notas y experimentos fragmentados.",
        ];
  const businessSolution =
    locale === "en"
      ? [
          `We frame ${lowerTitle} around the real workflow, the real constraints and the actual business objective.`,
          "We design the right balance between AI, systems, data and human review.",
          "We define scope, structure and delivery logic so the work can move cleanly from idea to implementation.",
          "We help the team launch something usable, controlled and ready for iteration.",
        ]
      : [
          `Diseñamos ${lowerTitle} alrededor del workflow real, las restricciones reales y el objetivo concreto de negocio.`,
          "Definimos el equilibrio correcto entre IA, sistemas, datos y revisión humana.",
          "Aterrizamos scope, estructura y lógica de entrega para pasar con limpieza de la idea a la implementación.",
          "Ayudamos al equipo a lanzar algo usable, controlado y listo para iterar.",
        ];
  const individualSolution =
    locale === "en"
      ? [
          `We design ${lowerTitle} around how you already work instead of forcing a generic productivity stack.`,
          "We simplify the toolset, clarify the workflow and make the system easier to repeat.",
          "We shape the setup so it actually improves output, clarity and follow-through.",
          "We leave you with a practical model you can keep using after the session ends.",
        ]
      : [
          `Diseñamos ${lowerTitle} alrededor de cómo ya trabajas, sin forzarte a usar un stack genérico.`,
          "Simplificamos el conjunto de herramientas, aclaramos el workflow y hacemos el sistema más repetible.",
          "Ajustamos el setup para que mejore output, claridad y capacidad de ejecución.",
          "Te dejamos con un modelo práctico que puedas seguir usando después de la sesión.",
        ];
  const businessIncluded =
    locale === "en"
      ? [
          `Discovery and workflow review tailored to ${lowerTitle}.`,
          "Service design, architecture logic and practical implementation planning.",
          "Guidance on systems, data, governance and usage rules.",
          "Hands-on support through launch and early refinement.",
          "A clear roadmap for the next implementation phase.",
        ]
      : [
          `Discovery y revisión de workflow adaptados a ${lowerTitle}.`,
          "Diseño del servicio, lógica de arquitectura y planning práctico de implementación.",
          "Guía sobre sistemas, datos, governance y reglas de uso.",
          "Acompañamiento práctico durante lanzamiento y primeros ajustes.",
          "Un roadmap claro para la siguiente fase de implementación.",
        ];
  const individualIncluded =
    locale === "en"
      ? [
          `Assessment and workflow review specific to ${lowerTitle}.`,
          "Tool selection, setup logic and usage structure.",
          "Templates, routines or operating patterns that make the system easier to use.",
          "Hands-on configuration support and early refinement.",
          "Clear follow-up guidance for the next stage of adoption.",
        ]
      : [
          `Evaluación y revisión de workflow específicas para ${lowerTitle}.`,
          "Selección de herramientas, lógica de setup y estructura de uso.",
          "Templates, rutinas o patrones operativos que facilitan el uso del sistema.",
          "Soporte práctico de configuración y primeros ajustes.",
          "Guía clara para la siguiente etapa de adopción.",
        ];
  const businessOutcomes =
    locale === "en"
      ? [
          "Less manual friction and more consistent execution quality.",
          "Better visibility, ownership and confidence around the workflow.",
          "A more scalable operating model built on real business use.",
          "A cleaner path for expansion, iteration or deeper implementation.",
        ]
      : [
          "Menos fricción manual y una ejecución más consistente.",
          "Mejor visibilidad, ownership y confianza alrededor del workflow.",
          "Un modelo operativo más escalable construido sobre uso real de negocio.",
          "Un camino más limpio para expandir, iterar o profundizar la implementación.",
        ];
  const individualOutcomes =
    locale === "en"
      ? [
          "More leverage in daily work with less cognitive clutter.",
          "A setup that is easier to repeat and easier to trust.",
          "Clearer personal workflow and stronger follow-through.",
          "A more confident path from experimentation to actual use.",
        ]
      : [
          "Más leverage en el trabajo diario con menos ruido cognitivo.",
          "Un setup más fácil de repetir y más fácil de confiar.",
          "Workflow personal más claro y mejor capacidad de ejecución.",
          "Un paso más seguro desde la experimentación hacia uso real.",
        ];

  const resolved =
    locale === "ru"
      ? base
      : {
          ...base,
          audience: base.category === "business" ? businessAudience : individualAudience,
          problems: base.category === "business" ? businessProblems : individualProblems,
          solution: base.category === "business" ? businessSolution : individualSolution,
          included: base.category === "business" ? businessIncluded : individualIncluded,
          outcomes: base.category === "business" ? businessOutcomes : individualOutcomes,
        };

  return {
    ...resolved,
    audience: resolved.audience.slice(0, 3),
    problems: resolved.problems.slice(0, 3),
    solution: resolved.solution.slice(0, 3),
    included: resolved.included.slice(0, 4),
    outcomes: resolved.outcomes.slice(0, 3),
  };
}
