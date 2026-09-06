import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { PRIMARY } from '../data/site'
import Logo from './Logo'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.finishes, href: '#finishes' },
    { label: t.nav.quality, href: '#quality' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.branches, href: '#branches' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* Close the mobile menu on Escape */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 60)
  }

  /* Solid bar once scrolled or when the mobile sheet is open */
  const solid = scrolled || open
  const tone = solid ? 'dark' : 'light'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav aria-label={t.nav.home} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Brand */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 shrink-0"
            aria-label={t.nav.home}
          >
            <Logo tone={tone} className="h-8 w-auto lg:h-9" />
            <span
              className={`hidden sm:block text-start text-[13px] font-bold leading-tight ${
                solid ? 'text-ink' : 'text-cream'
              }`}
            >
              RS Stainless
              <span
                className={`block text-[10px] font-medium uppercase tracking-wider ${
                  solid ? 'text-muted-light' : 'text-cream/70'
                }`}
              >
                Egypt
              </span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  type="button"
                  onClick={() => go(l.href)}
                  className={`text-[12px] font-bold uppercase tracking-wider transition-colors ${
                    solid
                      ? 'text-ink hover:text-rust-700'
                      : 'text-cream hover:text-rust-300'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${PRIMARY.phoneHref}`}
              className={`hidden xl:inline-flex items-center gap-2 text-[13px] font-semibold transition-colors ${
                solid ? 'text-ink hover:text-rust-700' : 'text-cream hover:text-rust-300'
              }`}
              dir="ltr"
            >
              <Phone size={14} aria-hidden="true" />
              {PRIMARY.phoneDisplay}
            </a>

            <LanguageToggle tone={tone} />

            <button
              type="button"
              onClick={() => go('#contact')}
              className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !min-h-[44px]"
            >
              {t.nav.quote}
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className={`lg:hidden inline-flex items-center justify-center h-11 w-11 border-2 transition-colors ${
                solid ? 'border-ink/25 text-ink' : 'border-cream/30 text-cream'
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden bg-cream border-t border-ink/10"
      >
        <ul className="px-4 sm:px-6 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <button
                type="button"
                onClick={() => go(l.href)}
                className="w-full text-start py-4 text-sm font-bold uppercase tracking-wider text-ink border-b border-ink/10"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4 sm:px-6 pb-6 flex flex-col gap-3">
          <a
            href={`tel:${PRIMARY.phoneHref}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink"
            dir="ltr"
          >
            <Phone size={15} aria-hidden="true" />
            {PRIMARY.phoneDisplay}
          </a>
          <button type="button" onClick={() => go('#contact')} className="btn-primary w-full">
            {t.nav.quote}
          </button>
        </div>
      </div>
    </header>
  )
}
