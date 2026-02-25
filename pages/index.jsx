// pages/index.jsx
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import s from '../styles/Home.module.css'
import { SKILLS, PROJECTS, EXPERIENCE, HIGHLIGHTS } from '../data/portfolio'

/* ─── tiny icon helpers ─────────────────────────── */
const ArrowRight = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const ExternalIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

/* ─── SectionMeta helper ─────────────────────────── */
function SectionMeta({ num, label, dark }) {
  return (
    <div className={s.sectionMeta}>
      <span className={s.sectionNum}>{num}</span>
      <span className={s.sectionLine} style={!dark ? { background: 'rgba(0,0,0,0.1)' } : {}} />
      <span className={s.sectionLabel} style={!dark ? { color: 'rgba(0,0,0,0.3)' } : {}}>
        {label}
      </span>
    </div>
  )
}

/* ─── RevealBox ──────────────────────────────────── */
function RevealBox({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = delay + 'ms'
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    el.classList.add('reveal')
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}

/* ═══════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Head>
        <title>Karlzy | Fullstack Developer</title>
      </Head>

      <Navbar />

      {/* ══ HERO ══════════════════════════════════════ */}
      <section id="hero" className={s.hero}>
        <div className={s.heroBg} />
        <div className="container">
          <div className={s.heroInner}>

            {/* LEFT */}
            <div className={s.heroLeft}>
              <div className={s.heroAvail}>
                <span className={s.availDot} />
                Open to Work — Available Now
              </div>

              <h1 className={s.heroName}>Your Name</h1>

              <p className={s.heroTitle}>
                <span className={s.tagGreen}>Fullstack Developer</span>
                {' · '}
                <span className={s.tagBlue}>Next.js</span>
                {' · '}
                <span className={s.tagYellow}>Python</span>
              </p>

              <p className={s.heroDesc}>
                Saya membangun aplikasi web modern — dari interface yang indah hingga backend yang
                powerful. Spesialisasi di Next.js, Express.js, FastAPI, dan Python.
              </p>

              <div className={s.heroBtns}>
                <a
                  href="#projects"
                  className={s.btnPrimary}
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Lihat Proyek <ArrowRight />
                </a>
                <a
                  href="#contact"
                  className={s.btnOutline}
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Hubungi Saya
                </a>
              </div>

              <div className={s.techRow}>
                {[
                  ['▲ Next.js',   'chipBlack'],
                  ['⚛ React',    'chipBlue'],
                  ['⚡ Express',  'chipGray'],
                  ['🐍 Python',  'chipYellow'],
                  ['🚀 FastAPI', 'chipGreen'],
                  ['🐘 Postgres','chipBlue'],
                  ['🐳 Docker',  'chipGray'],
                ].map(([label, cls]) => (
                  <span key={label} className={`${s.chip} ${s[cls]}`}>{label}</span>
                ))}
              </div>
            </div>

            {/* RIGHT card */}
            <div className={s.heroCard}>
              <div className={s.cardAvatar}>👨‍💻</div>
              <div className={s.cardName}>Your Name</div>
              <div className={s.cardRole}>// fullstack_developer.js</div>
              <div className={s.cardDivider} />

              <div className={s.cardStats}>
                <div className={s.cstat}>
                  <div className={`${s.cstatNum} ${s.green}`}>20+</div>
                  <div className={s.cstatLabel}>Proyek</div>
                </div>
                <div className={s.cstat}>
                  <div className={`${s.cstatNum} ${s.yellow}`}>3+</div>
                  <div className={s.cstatLabel}>Tahun Exp</div>
                </div>
                <div className={s.cstat}>
                  <div className={`${s.cstatNum} ${s.blue}`}>10+</div>
                  <div className={s.cstatLabel}>Klien</div>
                </div>
                <div className={s.cstat}>
                  <div className={s.cstatNum} style={{ color: '#fff' }}>∞</div>
                  <div className={s.cstatLabel}>Kopi ☕</div>
                </div>
              </div>

              <div className={s.cardDivider} />

              <div className={s.cardSkillBars}>
                {[
                  ['Next.js',  '92%'],
                  ['Python',   '85%'],
                  ['Express',  '88%'],
                  ['FastAPI',  '80%'],
                ].map(([label, pct]) => (
                  <div key={label} className={s.skillBar}>
                    <span className={s.skillBarLabel}>{label}</span>
                    <div className={s.skillBarTrack}>
                      <div className={s.skillBarFill} style={{ width: pct }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)', minWidth: 30, textAlign: 'right' }}>{pct}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ ABOUT ══════════════════════════════════════ */}
      <section id="about" className={s.about}>
        <div className="container">
          <div className={s.aboutGrid}>

            {/* Left */}
            <RevealBox>
              <SectionMeta num="01" label="tentang saya" dark />
              <h2 className={s.sectionHeading}>
                Dev yang membangun<br/>
                solusi <span className={s.accent}>nyata.</span>
              </h2>
              <p className={s.aboutText}>
                Saya fullstack developer dengan pengalaman 1 tahun membangun aplikasi web dari skala
                startup hingga enterprise. Saya ahli mengintegrasikan teknologi modern seperti Next.js
                dengan backend Node.js atau Python.
              </p>
              <p className={s.aboutText}>
                Prinsip saya: kode yang baik adalah kode yang bisa dibaca, maintainable, dan
                memberikan pengalaman pengguna terbaik.
              </p>

              <div className={s.aboutHighlights}>
                {HIGHLIGHTS.map(h => (
                  <div key={h.title} className={s.highlight}>
                    <div className={`${s.highlightIcon} ${s[h.iconClass]}`}>{h.icon}</div>
                    <div>
                      <div className={s.highlightTitle}>{h.title}</div>
                      <div className={s.highlightSub}>{h.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </RevealBox>

            {/* Right */}
            <RevealBox delay={100}>
              <div className={s.aboutRight}>
                <div className={s.bigStatRow}>
                  {[
                    ['20+', 'g', 'Proyek Selesai'],
                    ['3+',  'y', 'Tahun Exp'],
                    ['10+', 'b', 'Klien Puas'],
                  ].map(([n, c, l]) => (
                    <div key={l} className={s.bigStat}>
                      <div className={`${s.bigStatNum} ${s[c]}`}>{n}</div>
                      <div className={s.bigStatLabel}>{l}</div>
                    </div>
                  ))}
                </div>

                <div className={s.expCard}>
                  <div className={s.expHeader}>// pengalaman kerja</div>
                  {EXPERIENCE.map(e => (
                    <div key={e.name} className={s.expItem}>
                      <span className={s.expName}>{e.name}</span>
                      <span className={s.expPeriod}>{e.period}</span>
                    </div>
                  ))}
                </div>

                {/* Stack list */}
                <div className={s.expCard}>
                  <div className={s.expHeader}>// tech stack utama</div>
                  {[
                    ['Next.js 14', 'App Router, SSR, SSG'],
                    ['Express.js', 'REST API, Middleware'],
                    ['FastAPI',    'Python, Async, Pydantic'],
                    ['PostgreSQL', 'Prisma ORM, Migrations'],
                  ].map(([name, sub]) => (
                    <div key={name} className={s.expItem}>
                      <div>
                        <div className={s.expName}>{name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', marginTop: 2 }}>{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealBox>

          </div>
        </div>
      </section>

      {/* ══ SKILLS ══════════════════════════════════════ */}
      <section id="skills" className={s.skills}>
        <div className="container">
          <RevealBox className={s.skillsHeader}>
            <SectionMeta num="02" label="keahlian" />
            <h2 className={s.sectionHeading} style={{ fontStyle: 'italic' }}>Tech Stack Saya</h2>
          </RevealBox>

          <div className={s.skillsGrid}>
            {SKILLS.map((sk, i) => (
              <RevealBox key={sk.title} delay={i * 80}>
                <div className={s.skillCard}>
                  <div className={`${s.skillCardBar} ${s[sk.bar]}`} />
                  <div className={`${s.skillCardIcon} ${s[sk.iconBg]}`}>{sk.icon}</div>
                  <div className={s.skillCardTitle}>{sk.title}</div>
                  <div className={s.skillCardDesc}>{sk.desc}</div>
                  <div className={s.skillTags}>
                    {sk.tags.map(t => <span key={t} className={s.stag}>{t}</span>)}
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ══════════════════════════════════════ */}
      <section id="projects" className={s.projects}>
        <div className="container">
          <div className={s.projectsHeader}>
            <RevealBox>
              <SectionMeta num="03" label="portofolio" />
              <h2 className={s.sectionHeading} style={{ fontStyle: 'italic', marginBottom: 0 }}>
                Proyek Terbaru
              </h2>
            </RevealBox>
            <a href="https://github.com/korosp" target="_blank" rel="noreferrer" className={s.viewAll}>
              Lihat semua di GitHub <ArrowRight />
            </a>
          </div>

          <div className={s.projectsGrid}>
            {PROJECTS.map((p, i) => (
              <RevealBox key={p.title} delay={i * 80}>
                <div className={s.projectCard}>
                  <div className={`${s.projectThumb} ${s[p.thumbClass]}`}>
                    <span>{p.emoji}</span>
                    <span className={s.thumbBadge}>{p.badge}</span>
                  </div>
                  <div className={s.projectBody}>
                    <div className={s.projectTitle}>{p.title}</div>
                    <div className={s.projectDesc}>{p.desc}</div>
                    <div className={s.projectStack}>
                      {p.stack.map(t => <span key={t} className={s.ptag}>{t}</span>)}
                    </div>
                    <div className={s.projectLinks}>
                      <a href={p.demo} target="_blank" rel="noreferrer" className={`${s.plink} ${s.plinkDark}`}>
                        Live Demo <ExternalIcon />
                      </a>
                      <a href={p.github} target="_blank" rel="noreferrer" className={`${s.plink} ${s.plinkOut}`}>
                        <GithubIcon /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </RevealBox>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════ */}
      <section id="contact" className={s.contact}>
        <div className="container">
          <div className={s.contactInner}>
            <div className={s.contactSectionMeta}>
              <span className={s.sectionNum} style={{ color: 'rgba(255,255,255,0.3)' }}>04</span>
              <span className={s.sectionLine} />
              <span className={s.sectionLabel}>kontak</span>
            </div>

            <RevealBox>
              <h2 className={s.contactHeading}>
                Mari bekerja<br/>
                sama! 🤝
              </h2>
              <p className={s.contactSub}>
                Punya proyek menarik? Saya selalu terbuka untuk peluang baru — freelance, full-time,
                atau kolaborasi open source.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                <a href="karl:dev@starwarks.com" className={s.contactEmail}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  karl@starwarks.com
                </a>
              </div>

              {/* Social buttons in contact */}
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                {[
                  { href: 'https://github.com/korosp', label: 'GitHub', emoji: '🐙' },
                  { href: 'https://tiktok.com/@karlzyy9', label: 'TikTok', emoji: '🎵' },
                  { href: 'https://instagram.com/kkarlzy_', label: 'Instagram', emoji: '📸' },
                ].map(btn => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.7)',
                      padding: '10px 20px', borderRadius: 8,
                      fontSize: '0.875rem', fontWeight: 600,
                      transition: 'all 0.22s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                      e.currentTarget.style.color = '#fff'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                      e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    {btn.emoji} {btn.label}
                  </a>
                ))}
              </div>
            </RevealBox>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════ */}
      <footer className={s.footer}>
        <div className={`container ${s.footerInner}`}>
          <div>
            <div className={s.footerLogo}>&lt;dev.portfolio /&gt;</div>
            <div className={s.footerCopy}>© {new Date().getFullYear()} — let me dance 💮 &amp; Next.js</div>
          </div>

          <ul className={s.footerLinks}>
            {[
              ['#about',    'About'],
              ['#skills',   'Skills'],
              ['#projects', 'Projects'],
              ['#contact',  'Contact'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social */}
          <div className={s.socialRow}>
            {/* GitHub */}
            <a href="https://github.com/korosp" target="_blank" rel="noreferrer"
               className={`${s.socialBtn} ${s.socialGithub}`} title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://tiktok.com/@karlzyy9" target="_blank" rel="noreferrer"
               className={`${s.socialBtn} ${s.socialTiktok}`} title="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.18 8.18 0 004.79 1.53V7.01a4.85 4.85 0 01-1.02-.32z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/kkarlzy_" target="_blank" rel="noreferrer"
               className={`${s.socialBtn} ${s.socialIg}`} title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* Portfolio */}
            <a href="#projects"
               className={`${s.socialBtn} ${s.socialPorto}`} title="Portfolio"
               onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
