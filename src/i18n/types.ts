export interface Pillar {
  num: string;
  title: string;
  text: string;
  href: string;
  cta: string;
}

export interface AboutRow {
  label: string;
  text: string;
}

export interface Service {
  num: string;
  title: string;
  text: string;
}

export interface HomePaperTeaser {
  eyebrow: string;
  title: string;
  thesis: string;
  cta: string;
  ctaShort: string;
  href: string;
}

export interface ResearchPaper {
  eyebrow: string;
  title: string;
  thesis: string;
  summary: string[];
  pdfLabel: string;
  pdfHref: string;
  ssrnUrl: string;
  ssrnRecordLabel: string;
}

export interface Dictionary {
  locale: string;
  dir: 'ltr' | 'rtl';
  siteName: string;

  nav: {
    advisory: string;
    research: string;
    about: string;
    contact: string;
  };

  footer: {
    linkedin: string;
    impressum: string;
    datenschutz: string;
  };

  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    eyebrowShort: string;
    h1: string;
    lede: string;
    pillars: Pillar[];
    papers: HomePaperTeaser[];
  };

  advisory: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    lede: string;
    servicesLabel: string;
    services: Service[];
    trackRecordLabel: string;
    trackRecord: string[];
    closing: string;
  };

  research?: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    lede: string;
    papers: ResearchPaper[];
  };

  /** Per-paper PDF button labels for locales without a full research dictionary (AR/KO). */
  researchPdfLabels?: string[];
  /** Per-paper SSRN record labels for locales without a full research dictionary (AR/KO). */
  researchSsrnRecordLabels?: string[];

  /**
   * For locales whose Research page stays in English (AR/KO launch scope),
   * translated one-paragraph abstracts shown above the English summary,
   * one per paper (same order as research.papers).
   */
  researchAbstracts?: string[];

  about: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    lede: string;
    portraitAlt: string;
    portraitCaption: string;
    rows: AboutRow[];
  };

  contact: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    lede: string;
    emailLabel: string;
    linkedinLabel: string;
  };
}
