import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { PRIMARY, SITE } from '../data/site'
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
    { label: t.nav.contact, href: '#contact' },
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

  /* Solid bar once scrolled or when the mobile sheet is open.
     The official logo is a light metallic mark, so the bar stays dark
     in every state and the lockup always reads cleanly. */
  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-ink/95 backdrop-blur border-b border-cream/10' : 'bg-transparent'
      }`}
    >
      {/* Contact strip — collapses on scroll so the sticky bar stays compact */}
      <div
        className={`hidden lg:block overflow-hidden border-b border-cream/10 bg-ink-950 transition-all duration-300 ${
          solid ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
        aria-hidden={solid}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2.5 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-cream/50">
            {t.topbar.tagline}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${PRIMARY.phoneHref}`}
              dir="ltr"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-cream/80 transition-colors hover:text-rust-300"
            >
              <Phone size={12} aria-hidden="true" />
              {PRIMARY.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              dir="ltr"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-cream/80 transition-colors hover:text-rust-300"
            >
              <Mail size={12} aria-hidden="true" />
              {SITE.email}
            </a>
            <a
              href={`https://wa.me/${PRIMARY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-cream/80 transition-colors hover:text-rust-300"
            >
              <MessageCircle size={12} aria-hidden="true" />
              {t.branches.whatsapp}
            </a>
          </div>
        </div>
      </div>

      <nav aria-label={t.nav.home} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 lg:h-24">
          {/* Brand — the lockup already carries the name in English and Arabic */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center shrink-0"
            aria-label={t.nav.home}
          >
            <Logo priority className="h-12 sm:h-14 lg:h-[52px] xl:h-16" />
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  type="button"
                  onClick={() => go(l.href)}
                  className="whitespace-nowrap text-[12px] font-bold uppercase tracking-wider text-cream hover:text-rust-300 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right cluster — the phone lives in the contact strip above */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle tone="light" />

            <button
              type="button"
              onClick={() => go('#contact')}
              className="hidden lg:inline-flex btn-primary !px-5 !py-2.5 !min-h-[44px] whitespace-nowrap"
            >
              {t.nav.quote}
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 border-2 border-cream/30 text-cream hover:bg-cream/10 transition-colors"
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
        className="lg:hidden bg-ink border-t border-cream/10"
      >
        <ul className="px-4 sm:px-6 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <button
                type="button"
                onClick={() => go(l.href)}
                className="w-full text-start py-4 text-sm font-bold uppercase tracking-wider text-cream border-b border-cream/10"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="px-4 sm:px-6 pb-6 flex flex-col gap-3">
          <a
            href={`tel:${PRIMARY.phoneHref}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cream"
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
