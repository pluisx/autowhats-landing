export interface TranslationKeys {
  meta: {
    title: string;
    description: string;
  };

  common: {
    getDemo: string;
    chatOnWhatsApp: string;
    learnMore: string;
    recommended: string;
  };

  navbar: {
    benefits: string;
    howItWorks: string;
    useCases: string;
    testimonials: string;
  };

  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    pricingBadge: string;
    freeSetup: string;
    idealFor: string;
    qualifications: readonly string[];
    floatingLabels: {
      responseTime: string;
      moreAppointments: string;
    };
    chat: {
      businessName: string;
      online: string;
      customer1: string;
      bot1: string;
      bot1Times: string;
      bot1Question: string;
      customer2: string;
      bot2: string;
    };
  };

  logoBar: {
    title: string;
    googleCalendar: string;
    metaAds: string;
    otherIntegrations: string;
  };

  problem: {
    title: string;
    titleHighlight: string;
    titleEnd: string;
    problems: readonly string[];
  };

  comparison: {
    title: string;
    titleHighlight: string;
    manual: {
      title: string;
      responseTime: { metric: string; value: string };
      availability: { metric: string; value: string };
      monthlyCost: { metric: string; value: string };
      lostLeads: { metric: string; value: string };
    };
    automated: {
      title: string;
      responseTime: { metric: string; value: string };
      availability: { metric: string; value: string };
      monthlyCost: { metric: string; value: string };
      lostLeads: { metric: string; value: string };
    };
    savingsBanner: string;
  };

  benefits: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly {
      title: string;
      description: string;
    }[];
  };

  howItWorks: {
    title: string;
    titleHighlight: string;
    titleEnd: string;
    steps: readonly {
      title: string;
      description: string;
    }[];
    readyNote: string;
    cta: string;
  };

  useCases: {
    title: string;
    titleHighlight: string;
    categories: readonly {
      title: string;
      features: readonly string[];
    }[];
  };

  testimonials: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    reviews: readonly {
      quote: string;
      author: string;
      business: string;
    }[];
    googleReview: string;
  };

  faq: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly {
      question: string;
      answer: string;
    }[];
  };

  pricing: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    features: readonly {
      title: string;
      description: string;
    }[];
    price: string;
    priceUnit: string;
    noContracts: string;
  };

  finalCta: {
    title: string;
    subtitle: string;
    disclaimer: string;
  };

  footer: {
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
    company: string;
  };

  language: {
    switchTo: string;
    current: string;
  };
}
