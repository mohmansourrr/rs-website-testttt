import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../data/site'
import Logo from './Logo'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.finishes, href: '#finishes' },
    { label: t.nav.quality, href: '#quality' },
    { label: t.nav.whyUs, href: '#why-us' },
    { label: t.nav.branches, href: '#branches' },
  ]

  const socials = [
    { Icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
    { Icon: Instagram, href: SITE.social.instagram, label: 'Instagram' },
    { Icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-ink-900 text-cream">
      <div className="h-1.5 bg-rust-500" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Logo className="h-11 mb-5" />
            <p className="text-[13px] leading-relaxed text-muted-dark max-w-xs mb-6">
              {t.footer.tagline}
            </p>
            <ul className="flex gap-2.5" aria-label={t.footer.social}>
              {socials.map(({ Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center border border-cream/20 text-muted-dark hover:border-rust-500 hover:text-rust-400 transition-colors"
                  >
                    <Icon size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label={t.footer.navTitle}>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-rust-400 mb-5">
              {t.footer.navTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    type="button"
                    onClick={() => go(l.href)}
                    className="text-[14px] text-muted-dark hover:text-cream transition-colors text-start"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label={t.footer.productsTitle}>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-rust-400 mb-5">
              {t.footer.productsTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {t.products.range.map((p) => (
                <li key={p.name}>
                  <button
                    type="button"
                    onClick={() => go('#products')}
                    className="text-[14px] text-muted-dark hover:text-cream transition-colors text-start"
                  >
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-wider text-rust-400 mb-5">
              {t.footer.contactTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {SITE.branches.map((b, i) => (
                <li key={b.phoneHref}>
                  <a
                    href={`tel:${b.phoneHref}`}
                    dir="ltr"
                    className="inline-flex items-center gap-2.5 text-[14px] text-muted-dark hover:text-cream transition-colors"
                    aria-label={`${t.branches.callAria} ${t.branches.items[i].name}`}
                  >
                    <Phone size={13} className="text-rust-400 shrink-0" aria-hidden="true" />
                    {b.phoneDisplay}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  dir="ltr"
                  className="inline-flex items-center gap-2.5 text-[14px] text-muted-dark hover:text-cream transition-colors break-all"
                >
                  <Mail size={13} className="text-rust-400 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[14px] text-muted-dark">
                <MapPin size={13} className="text-rust-400 shrink-0 mt-1" aria-hidden="true" />
                <span>{t.branches.items[0].name} · {t.branches.items[0].city}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-muted-dark text-center">
            © {year} RS for Stainless Industrial Co. {t.footer.rights}
          </p>
          <p className="text-[11px] font-bold uppercase tracking-wider text-rust-400 text-center">
            {t.footer.strap}
          </p>
        </div>
      </div>
    </footer>
  )
}
