import type { Dictionary } from './types';

// Launch scope per brief Section 4: core pages (Home, Advisory, About, Contact).
// Research stays in English with the translated abstract paragraph below.
// Pending native review before being treated as final.
const ko: Dictionary = {
  locale: 'ko',
  dir: 'ltr',
  siteName: 'Ioan-Codrut Lazaroiu',

  nav: {
    advisory: '자문',
    research: '연구',
    about: '소개',
    contact: '연락처',
  },

  footer: {
    linkedin: 'LinkedIn',
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
  },

  home: {
    metaTitle: 'Ioan-Codrut Lazaroiu — 대체 불가능한 인프라를 위한 전략, 리스크, 자본',
    metaDescription:
      '오스트리아 빈의 독립 에너지 인프라·리스크 거버넌스 어드바이저. 전사적 리스크 거버넌스, 자산 건전성, 국경 간 인프라 전략.',
    eyebrow: '독립 자문 — 오스트리아 빈',
    eyebrowShort: '독립 자문 — 빈',
    h1: '대체 불가능한 인프라를 위한 전략, 리스크, 자본.',
    lede: '전사적 리스크 거버넌스, 자산 건전성, 국경 간 인프라 전략이 교차하는 영역의 시니어 어드바이저. 에너지 인프라 분야 20년의 실행 경험을 바탕으로, 현재는 이사회 수준의 자문과 독립 연구를 수행하고 있습니다.',
    pillars: [
      {
        num: '01',
        title: '자문',
        text: '운영사와 투자자를 위한 전사적 리스크 거버넌스 설계, 전환 프로젝트, 경영진 의사결정 지원.',
        href: '/advisory/',
        cta: '→ /ko/advisory',
      },
      {
        num: '02',
        title: '연구',
        text: '인프라, 자본 배분, 리스크에 관한 독립 워킹 페이퍼.',
        href: '/research/',
        cta: '→ /ko/research',
      },
      {
        num: '03',
        title: '소개',
        text: '유럽, 중동, 북·서아프리카, 중앙아시아에 걸친 20년의 실행 경험.',
        href: '/about/',
        cta: '→ /ko/about',
      },
    ],
    papers: [
      {
        eyebrow: '워킹 페이퍼 · 2026년 8월',
        title:
          'Molecules of Optionality — Why Europe’s Pipeline Transition Is a Capital-Allocation Problem, Not an Engineering One',
        thesis: '“파이프는 대체할 수 있어도, 회랑은 대체할 수 없다.”',
        cta: '초록 및 SSRN 링크 → /ko/research',
        ctaShort: '초록 + SSRN → /ko/research',
        href: '/research/',
      },
      {
        eyebrow: '워킹 페이퍼 · 2026년 8월',
        title: 'The Settlement Layer — The Missing Financial Infrastructure of the Circular Economy',
        thesis: '“반환은 미덕이 아니라 정산이다.”',
        cta: '초록 및 SSRN 링크 → /ko/research',
        ctaShort: '초록 + SSRN → /ko/research',
        href: '/research/',
      },
    ],
  },

  advisory: {
    metaTitle: '자문 — Ioan-Codrut Lazaroiu',
    metaDescription:
      '전사적 리스크 거버넌스 설계와 전환, 리스크 문화와 오너십, 경영진 보고, 자산 관리와 프로젝트 수행, 국경 간 거버넌스.',
    eyebrow: '자문',
    h1: '자문',
    lede: '에너지 인프라 운영사·투자자·자문사의 이사회와 경영진을 위한 프로젝트를 수행합니다.',
    servicesLabel: '서비스',
    services: [
      {
        num: '01',
        title: '전사적 리스크 거버넌스',
        text: '설계 및 전환 프로젝트: 거버넌스 아키텍처, 리스크 성향, 그리고 이를 의사결정과 연결하는 운영 모델.',
      },
      {
        num: '02',
        title: '리스크 문화와 오너십',
        text: '리스크를 보고 조직이 아니라 자산을 책임지는 경영진에게 두는 오너십 모델.',
      },
      {
        num: '03',
        title: '경영진 보고 및 의사결정 지원',
        text: '의사결정을 위한 이사회·위원회 보고: 더 적은 지표, 더 명확한 임계값, 명시적인 트레이드오프.',
      },
      {
        num: '04',
        title: '자산 관리 및 프로젝트 수행',
        text: '발주자 측 자산 관리와 자본 프로젝트 수행의 전환 — 터미널, 저장 탱크, 정유소, 파이프라인 시스템을 설계부터 턴어라운드까지.',
      },
      {
        num: '05',
        title: '국경 간 거버넌스',
        text: '복수 관할권 운영사를 위한 거버넌스: 규제기관, 주주, 국경을 아울러 하나의 기업으로 전환하고 하나로 관리하는 체계.',
      },
    ],
    trackRecordLabel: '실적',
    trackRecord: [
      '유럽, 중동, 북·서아프리카, 중앙아시아의 에너지 인프라에서 20년간 실행을 담당했으며, 자본 프로젝트 포트폴리오는 85억 유로를 상회합니다.',
      'OMV, Wood Group, Nabucco, ILF Consulting Engineers에서 시니어 직책을 역임했습니다.',
      '현재: 유럽 국경 간 파이프라인 그룹의 전사적 거버넌스 전환 프로젝트를 수행하는 독립 어드바이저.',
    ],
    closing: '개발 중: Microsoft 365 네이티브 전사적 리스크 거버넌스 플랫폼. 세부 사항은 문의 바랍니다.',
  },

  researchPdfLabels: ['논문 읽기 (PDF, 12쪽)', '논문 읽기 (PDF, 16쪽)'],
  researchSsrnRecordLabel: 'SSRN 페이지 ↗',

  researchAbstract:
    '유럽의 파이프라인 회랑은 통상 엔지니어링 자산으로 분석되지만, 이 논문은 이를 네 가지 가능한 분자적 미래에 대한 가격이 잘못 매겨진 옵션으로 다룬다. 인허가와 계약을 갖추고 국경을 넘어 물리적으로 이어진 회랑은 다시 지을 수 없는 자산이며, 그 안의 파이프는 교체할 수 있다. 전환의 결정적 제약은 기술적 타당성이 아니라 수요 리스크다. 따라서 운영사의 핵심 과제는 국경을 넘어 수단을 쌓아 올리는 것 — 용량, 계약, 규제 수단을 정렬하여 회랑의 옵션 가치를 잃지 않고 보존하는 것이다.',

  about: {
    metaTitle: '소개 — Ioan-Codrut Lazaroiu',
    metaDescription:
      '오스트리아 빈의 독립 에너지 인프라·리스크 거버넌스 어드바이저. 유럽, 중동, 북·서아프리카, 중앙아시아에서 20년 이상의 경력.',
    eyebrow: '소개',
    h1: 'Ioan-Codrut Lazaroiu',
    lede: '오스트리아 빈의 독립 에너지 인프라·리스크 거버넌스 어드바이저.',
    portraitAlt: 'Ioan-Codrut Lazaroiu',
    portraitCaption: '오스트리아 빈',
    rows: [
      {
        label: '경력',
        text: '유럽, 중동, 북·서아프리카, 중앙아시아의 에너지 인프라 분야에서 20년 이상.',
      },
      {
        label: '포트폴리오',
        text: '85억 유로를 상회하는 자본 프로젝트 포트폴리오 — 터미널, 저장 탱크, 정유소, 국제 파이프라인 시스템의 설계·건설·시운전·턴어라운드.',
      },
      {
        label: '주요 경력',
        text: 'OMV (오스트리아, 루마니아, UAE, 튀니지) · Wood Group · Nabucco · ILF Consulting Engineers.',
      },
      {
        label: '현재',
        text: '유럽 국경 간 파이프라인 그룹의 전사적 거버넌스 전환 프로젝트를 수행하는 독립 어드바이저.',
      },
      {
        label: '학력',
        text: '공학, 부쿠레슈티 건설기술대학교 · 경제학 학사, 부쿠레슈티 스피루 하레트 대학교 · MIT Sloan School of Management — Executive Programme in General Management, 15기.',
      },
      {
        label: '자격',
        text: 'Institute of Risk Management · PMI · FIDIC · Lean Six Sigma Green Belt.',
      },
      {
        label: '언어',
        text: '영어 · 이탈리아어 · 독일어 · 루마니아어.',
      },
    ],
  },

  contact: {
    metaTitle: '연락처 — Ioan-Codrut Lazaroiu',
    metaDescription:
      'Ioan-Codrut Lazaroiu 연락처 — 오스트리아 빈의 독립 에너지 인프라·리스크 거버넌스 어드바이저.',
    eyebrow: '연락처',
    h1: '연락처',
    lede: '오스트리아 빈.',
    emailLabel: '이메일',
    linkedinLabel: 'LinkedIn',
  },
};

export default ko;
