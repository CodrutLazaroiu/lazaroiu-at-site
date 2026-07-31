import type { Dictionary } from './types';

const ro: Dictionary = {
  locale: 'ro',
  dir: 'ltr',
  siteName: 'Ioan-Codrut Lazaroiu',

  nav: {
    advisory: 'Consultanță',
    research: 'Cercetare',
    about: 'Profil',
    contact: 'Contact',
  },

  footer: {
    linkedin: 'LinkedIn',
    impressum: 'Legal notice',
    datenschutz: 'Privacy',
  },

  home: {
    metaTitle: 'Ioan-Codrut Lazaroiu — Strategie, risc și capital pentru infrastructuri de neînlocuit',
    metaDescription:
      'Consultant independent în infrastructură energetică și guvernanța riscului, Viena. Guvernanța riscului la nivel de întreprindere, integritatea activelor și strategie de infrastructură transfrontalieră.',
    eyebrow: 'Consultanță independentă — Viena, Austria',
    eyebrowShort: 'Consultanță independentă — Viena',
    h1: 'Strategie, risc și capital pentru infrastructuri de neînlocuit.',
    lede: 'Senior advisor la intersecția dintre guvernanța riscului la nivel de întreprindere, integritatea activelor și strategia infrastructurii transfrontaliere. Douăzeci de ani de execuție la nivel executiv în infrastructura energetică; astăzi, consultanță la nivel de consiliu și cercetare independentă.',
    pillars: [
      {
        num: '01',
        title: 'Consultanță',
        text: 'Proiectarea guvernanței riscului la nivel de întreprindere, mandate de transformare și sprijin decizional pentru operatori și investitori.',
        href: '/advisory/',
        cta: '→ /ro/advisory',
      },
      {
        num: '02',
        title: 'Cercetare',
        text: 'Lucrări de cercetare independente despre infrastructură, alocarea capitalului și risc.',
        href: '/research/',
        cta: '→ /ro/research',
      },
      {
        num: '03',
        title: 'Profil',
        text: 'Douăzeci de ani de execuție la nivel executiv în Europa, Orientul Mijlociu, Africa de Nord și de Vest și Asia Centrală.',
        href: '/about/',
        cta: '→ /ro/about',
      },
    ],
    papers: [
      {
        eyebrow: 'Working paper · august 2026',
        title:
          'Molecules of Optionality — Why Europe’s Pipeline Transition Is a Capital-Allocation Problem, Not an Engineering One',
        thesis: '„Conducta se poate înlocui; coridorul nu.”',
        cta: 'Abstract și link SSRN → /ro/research',
        ctaShort: 'Abstract + SSRN → /ro/research',
        href: '/research/',
      },
      {
        eyebrow: 'Working paper · august 2026',
        title: 'The Settlement Layer — The Missing Financial Infrastructure of the Circular Economy',
        thesis: '„Returnarea este o decontare, nu o virtute.”',
        cta: 'Abstract și link SSRN → /ro/research',
        ctaShort: 'Abstract + SSRN → /ro/research',
        href: '/research/',
      },
    ],
  },

  advisory: {
    metaTitle: 'Consultanță — Ioan-Codrut Lazaroiu',
    metaDescription:
      'Proiectarea și transformarea guvernanței riscului la nivel de întreprindere, cultura riscului și ownership, raportare executivă, managementul activelor și livrarea proiectelor, guvernanță transfrontalieră.',
    eyebrow: 'Consultanță',
    h1: 'Consultanță',
    lede: 'Mandate pentru consilii și echipe executive ale operatorilor, investitorilor și consultanților din infrastructura energetică.',
    servicesLabel: 'Servicii',
    services: [
      {
        num: '01',
        title: 'Guvernanța riscului la nivel de întreprindere',
        text: 'Mandate de proiectare și transformare: arhitectura guvernanței, apetitul de risc și modelul operațional care le leagă de decizii.',
      },
      {
        num: '02',
        title: 'Cultura riscului și ownership',
        text: 'Modele de ownership care plasează riscul la executivii responsabili de active — nu la o funcție de raportare.',
      },
      {
        num: '03',
        title: 'Raportare executivă și sprijin decizional',
        text: 'Raportare pentru consilii și comitete construită pentru decizii: mai puțini indicatori, praguri mai clare, compromisuri explicite.',
      },
      {
        num: '04',
        title: 'Managementul activelor și livrarea proiectelor',
        text: 'Transformarea, de partea proprietarului, a managementului activelor și a livrării proiectelor de investiții — terminale, parcuri de rezervoare, rafinării și sisteme de conducte, de la proiectare până la turnaround.',
      },
      {
        num: '05',
        title: 'Guvernanță transfrontalieră',
        text: 'Guvernanță pentru operatori multi-jurisdicționali: o singură întreprindere, transformată și condusă ca una, peste autorități de reglementare, acționari și granițe.',
      },
    ],
    trackRecordLabel: 'Track record',
    trackRecord: [
      'Douăzeci de ani de execuție la nivel executiv în infrastructura energetică în Europa, Orientul Mijlociu, Africa de Nord și de Vest și Asia Centrală; un portofoliu de proiecte de investiții de peste 8,5 miliarde de euro.',
      'Poziții senior la OMV, Wood Group, Nabucco și ILF Consulting Engineers.',
      'În prezent: consultant independent într-un mandat de transformare a guvernanței la nivel de întreprindere pentru un grup european de conducte transfrontaliere.',
    ],
    closing:
      'În dezvoltare: o platformă de guvernanță a riscului la nivel de întreprindere, nativă Microsoft 365. Detalii la cerere.',
  },

  research: {
    metaTitle: 'Cercetare & Publicații — Ioan-Codrut Lazaroiu',
    metaDescription:
      'Lucrări de cercetare independente despre infrastructură, alocarea capitalului și risc. Lucrările actuale: Molecules of Optionality și The Settlement Layer (august 2026).',
    eyebrow: 'Cercetare & Publicații',
    h1: 'Cercetare & Publicații',
    lede: 'Lucrări de cercetare independente despre infrastructură, alocarea capitalului și risc.',
    papers: [
      {
        eyebrow: 'Working paper · august 2026',
        title:
          'Molecules of Optionality — Why Europe’s Pipeline Transition Is a Capital-Allocation Problem, Not an Engineering One',
        thesis: '„Conducta se poate înlocui; coridorul nu.”',
        summary: [
          'Coridoarele europene de conducte sunt analizate în mod convențional ca active inginerești; lucrarea le tratează ca opțiuni evaluate greșit, în raport cu patru viitoruri moleculare posibile.',
          'Coridorul — autorizat, contractat și continuu fizic peste granițe — este activul care nu poate fi reconstruit; conducta din interiorul lui, da.',
          'Constrângerea determinantă a tranziției este riscul de cerere, nu fezabilitatea tehnică.',
          'Sarcina definitorie a operatorului este, prin urmare, suprapunerea instrumentelor peste granițe: alinierea capacității, a contractelor și a instrumentelor de reglementare astfel încât opționalitatea coridorului să fie păstrată, nu închisă.',
        ],
        pdfLabel: 'Citește lucrarea (PDF, 12 pagini)',
        pdfHref: '/papers/Lazaroiu_Molecules-of-Optionality_2026.pdf',
        ssrnUrl: '',
        ssrnRecordLabel: 'Pagina SSRN ↗',
      },
      {
        eyebrow: 'Working paper · august 2026',
        title: 'The Settlement Layer — The Missing Financial Infrastructure of the Circular Economy',
        thesis: '„Returnarea este o decontare, nu o virtute.”',
        summary: [
          'Sistemele europene de retur demonstrează un mecanism financiar: acolo unde de nereturnare se leagă o consecință obligatorie, ambalajele revin în proporție de 85–99 la sută; acolo unde nu, bunăvoința eșuează.',
          'Piesa lipsă este stratul de decontare — registrul comun de identitate, obligație și compensare care ar permite unei creanțe să circule peste granițe, categorii și sisteme rivale.',
          'Reglementarea care se aplică acum va multiplica circuitele naționale fără a le conecta.',
          'Lucrarea evaluează cele cinci instrumente folosite astăzi, localizează cele trei rosturi unde decontarea se oprește și încheie cu patru teste pentru operatori, comercianți și investitori: operează un circuit, intră în strat, păstrează opțiunea — sau nu construi.',
        ],
        pdfLabel: 'Citește lucrarea (PDF, 16 pagini)',
        pdfHref: '/papers/Lazaroiu_The-Settlement-Layer_2026.pdf',
        ssrnUrl: '',
        ssrnRecordLabel: 'Pagina SSRN ↗',
      },
    ],
  },

  about: {
    metaTitle: 'Profil — Ioan-Codrut Lazaroiu',
    metaDescription:
      'Consultant independent în infrastructură energetică și guvernanța riscului, Viena. Peste 20 de ani în Europa, Orientul Mijlociu, Africa de Nord și de Vest și Asia Centrală.',
    eyebrow: 'Profil',
    h1: 'Ioan-Codrut Lazaroiu',
    lede: 'Consultant independent în infrastructură energetică și guvernanța riscului, Viena.',
    portraitAlt: 'Ioan-Codrut Lazaroiu',
    portraitCaption: 'Viena, Austria',
    rows: [
      {
        label: 'Experiență',
        text: 'Peste 20 de ani în infrastructura energetică în Europa, Orientul Mijlociu, Africa de Nord și de Vest și Asia Centrală.',
      },
      {
        label: 'Portofoliu',
        text: 'Portofoliu de proiecte de investiții de peste 8,5 miliarde de euro — proiectarea, construcția, punerea în funcțiune și turnaround-ul unor terminale, parcuri de rezervoare, rafinării și sisteme internaționale de conducte.',
      },
      {
        label: 'Poziții senior',
        text: 'OMV (Austria, România, EAU, Tunisia) · Wood Group · Nabucco · ILF Consulting Engineers.',
      },
      {
        label: 'În prezent',
        text: 'Consultant independent într-un mandat de transformare a guvernanței la nivel de întreprindere pentru un grup european de conducte transfrontaliere.',
      },
      {
        label: 'Educație',
        text: 'Inginerie, Universitatea Tehnică de Construcții, București · Licență în Economie, Universitatea Spiru Haret, București · MIT Sloan School of Management — Executive Programme in General Management, Cohort 15.',
      },
      {
        label: 'Acreditări',
        text: 'Institute of Risk Management · PMI · FIDIC · Lean Six Sigma Green Belt.',
      },
      {
        label: 'Limbi',
        text: 'Engleză · Italiană · Germană · Română.',
      },
    ],
  },

  contact: {
    metaTitle: 'Contact — Ioan-Codrut Lazaroiu',
    metaDescription:
      'Contact Ioan-Codrut Lazaroiu — consultant independent în infrastructură energetică și guvernanța riscului, Viena, Austria.',
    eyebrow: 'Contact',
    h1: 'Contact',
    lede: 'Viena, Austria.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
  },
};

export default ro;
