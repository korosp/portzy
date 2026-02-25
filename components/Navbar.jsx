// components/Navbar.jsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import s from '../styles/Navbar.module.css'

const NAV_LINKS = [
  { href: '#about',    label: 'About' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // highlight active section
      const sections = ['about', 'skills', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive('#' + id)
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
        <div className={`container ${s.inner}`}>
          {/* Logo */}
          <a href="#" className={s.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className={s.logoDot} />
            dev.portfolio
          </a>

          {/* Desktop links */}
          <ul className={s.links}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href ? s.active : ''}
                  onClick={e => { e.preventDefault(); handleNavClick(href) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className={s.cta}
            onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
          >
            Hire Me
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`${s.hamburger} ${open ? s.open : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${s.mobileMenu} ${open ? s.open : ''}`}>
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); handleNavClick(href) }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
