// data/portfolio.js

export const SKILLS = [
  {
    icon: '⚡',
    iconBg: 'bgGreen3',
    bar: 'barGreen',
    title: 'Frontend Development',
    desc: 'Membangun UI modern, responsif, dan performan dengan pendekatan component-driven dan atomic design.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: '🔧',
    iconBg: 'bgBlue3',
    bar: 'barBlue',
    title: 'Backend Development',
    desc: 'REST API & microservices yang robust, scalable, dan well-documented menggunakan Node.js dan Python.',
    tags: ['Express.js', 'FastAPI', 'Django REST', 'Node.js', 'GraphQL'],
  },
  {
    icon: '🐍',
    iconBg: 'bgYellow3',
    bar: 'barYellow',
    title: 'Python Engineering',
    desc: 'Scripting, automasi, data processing, dan machine learning dasar untuk kebutuhan bisnis dan analitik.',
    tags: ['Python', 'Pandas', 'NumPy', 'Selenium', 'BeautifulSoup'],
  },
  {
    icon: '🗃️',
    iconBg: 'bgGray1',
    bar: 'barBlack',
    title: 'Database & DevOps',
    desc: 'Manajemen database relasional dan NoSQL, containerisasi, CI/CD pipeline, dan cloud deployment.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GitHub Actions'],
  },
]

export const PROJECTS = [
  {
    emoji: '🛒',
    thumbClass: 'thumb1',
    badge: 'E-Commerce',
    title: 'ShopFlow Platform',
    desc: 'Platform belanja online fullstack dengan sistem pembayaran real-time, dashboard admin, manajemen inventory, dan analytics.',
    stack: ['Next.js', 'Express', 'PostgreSQL', 'Stripe', 'Redis'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '📊',
    thumbClass: 'thumb2',
    badge: 'Analytics',
    title: 'DataViz Dashboard',
    desc: 'Dashboard analitik real-time dengan visualisasi interaktif, laporan otomatis, filter dinamis, dan export PDF/Excel.',
    stack: ['React', 'FastAPI', 'Python', 'Chart.js', 'PostgreSQL'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '🤖',
    thumbClass: 'thumb3',
    badge: 'AI · Python',
    title: 'AI Chat Assistant',
    desc: 'Aplikasi chatbot berbasis AI dengan streaming responses, riwayat percakapan, dan interface Next.js yang smooth.',
    stack: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'WebSocket'],
    demo: '#',
    github: '#',
  },
  {
    emoji: '📱',
    thumbClass: 'thumb4',
    badge: 'REST API',
    title: 'Microservice API',
    desc: 'Layanan API yang scalable dengan autentikasi JWT, role-based access, rate limiting, dan dokumentasi Swagger.',
    stack: ['Express.js', 'MongoDB', 'Docker', 'JWT', 'Swagger'],
    demo: '#',
    github: '#',
  },
]

export const EXPERIENCE = [
  { name: 'Fullstack Developer',  period: '2025 – kini' },
  { name: 'Backend Engineer',     period: '2025 – 2026' },
  { name: 'Frontend Developer',   period: '2025 – 2026' },
]

export const HIGHLIGHTS = [
  {
    icon: '🚀',
    iconClass: 'iconGreen',
    title: 'Performance First',
    sub: 'Optimasi Core Web Vitals di setiap proyek',
  },
  {
    icon: '🔐',
    iconClass: 'iconBlue',
    title: 'Security Minded',
    sub: 'Best practice autentikasi & proteksi data',
  },
  {
    icon: '📦',
    iconClass: 'iconYellow',
    title: 'Clean Architecture',
    sub: 'Kode yang maintainable, testable, dan scalable',
  },
]

export const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/korosp',
    icon: (
      `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>`
    ),
    cssClass: 'socialGithub',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@karlzyy9',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.18 8.18 0 004.79 1.53V7.01a4.85 4.85 0 01-1.02-.32z"/></svg>`,
    cssClass: 'socialTiktok',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/kkarlzy_',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    cssClass: 'socialIg',
  },
  {
    label: 'Portfolio',
    href: '#projects',
    icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    cssClass: 'socialPorto',
  },
]
