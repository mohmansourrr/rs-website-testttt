import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why RS', href: '#why-rs' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => scrollTo(href), 50)
  }

  return (
    <header role="banner">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group rounded focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label="RS Stainless Industrial – go to top"
            >
              <img
                src="/rs-logo.svg"
                alt="RS Logo"
                className="w-10 h-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <div className="hidden sm:block leading-tight">
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.18em]">R.S. for stainless</p>
                <p className="text-sm font-semibold text-white tracking-wide">Industrial Co.</p>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8" role="list">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  role="listitem"
                  onClick={() => handleNav(link.href)}
                  className="text-zinc-400 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors duration-200 py-1 border-b border-transparent hover:border-silver/40 focus-visible:ring-2 focus-visible:ring-silver rounded"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+201025009288"
                className="hidden md:flex items-center gap-1.5 text-xs text-zinc-400 hover:text-silver transition-colors"
                aria-label="Call: +20 102 500 9288"
              >
                <Phone size={13} aria-hidden="true" />
                <span>+20 102 500 9288</span>
              </a>
              <button
                onClick={() => handleNav('#contact')}
                className="hidden lg:block btn-primary"
              >
                Get a Quote
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="lg:hidden p-2 text-zinc-400 hover:text-white focus-visible:ring-2 focus-visible:ring-silver rounded transition-colors"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-screen' : 'max-h-0'
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="bg-black border-t border-white/[0.06] px-4 pt-4 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left text-zinc-300 hover:text-white text-sm font-medium uppercase tracking-widest py-3 border-b border-white/[0.05] last:border-b-0 transition-colors focus-visible:ring-2 focus-visible:ring-silver rounded"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+201025009288"
                className="flex items-center gap-2 text-zinc-400 hover:text-silver text-sm transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                +20 102 500 9288
              </a>
              <button
                onClick={() => handleNav('#contact')}
                className="w-full btn-primary justify-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
