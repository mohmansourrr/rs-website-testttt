import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

const YEAR = new Date().getFullYear()

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why RS', href: '#why-rs' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
]

const PRODUCTS = [
  'Sheets & Coil',
  'Bars & Angle',
  'Tubes & Pipes',
  'Decorative',
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06]" role="contentinfo">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/rs-logo.svg"
                alt="RS Stainless Industrial Co."
                className="w-10 h-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
              <div>
                <p className="text-[9px] text-zinc-600 uppercase tracking-[0.18em]">R.S. for stainless</p>
                <p className="text-sm font-semibold text-white">Industrial Co.</p>
              </div>
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-xs">
              Egypt's first full-service centre for premium stainless steel products.
              Trusted by industry since 2007.
            </p>

            {/* Social */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  role="listitem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-silver hover:border-silver/30 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-5">Navigation</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-zinc-500 hover:text-white text-sm transition-colors text-left focus-visible:ring-1 focus-visible:ring-silver rounded"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Products navigation">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-5">Products</p>
            <ul className="space-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product}>
                  <button
                    onClick={() => scrollTo('#products')}
                    className="text-zinc-500 hover:text-white text-sm transition-colors text-left focus-visible:ring-1 focus-visible:ring-silver rounded"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic space-y-4">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Contact</p>
            <div className="space-y-3">
              <a
                href="tel:+201025009288"
                className="flex items-start gap-2.5 text-zinc-500 hover:text-silver text-sm transition-colors group"
                aria-label="Call main branch: +20 102 500 9288"
              >
                <Phone size={12} className="flex-shrink-0 mt-0.5 text-zinc-700 group-hover:text-silver transition-colors" aria-hidden="true" />
                +20 102 500 9288
              </a>
              <a
                href="tel:+201095797888"
                className="flex items-start gap-2.5 text-zinc-500 hover:text-silver text-sm transition-colors group"
                aria-label="Call Qalyoub branch: +20 109 579 7888"
              >
                <Phone size={12} className="flex-shrink-0 mt-0.5 text-zinc-700 group-hover:text-silver transition-colors" aria-hidden="true" />
                +20 109 579 7888
              </a>
              <a
                href="mailto:info@rsstainless.com"
                className="flex items-start gap-2.5 text-zinc-500 hover:text-silver text-sm transition-colors group"
              >
                <Mail size={12} className="flex-shrink-0 mt-0.5 text-zinc-700 group-hover:text-silver transition-colors" aria-hidden="true" />
                info@rsstainless.com
              </a>
              <div className="flex items-start gap-2.5 text-zinc-600 text-sm">
                <MapPin size={12} className="flex-shrink-0 mt-0.5 text-zinc-700" aria-hidden="true" />
                <span>El Sabtya, Cairo, Egypt</span>
              </div>
            </div>
          </address>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs">
            © {YEAR} RS for Stainless Industrial Co. All rights reserved.
          </p>
          <p className="text-zinc-800 text-xs">
            Egypt's First Full-Service Stainless Steel Centre · Est. 2007
          </p>
        </div>
      </div>
    </footer>
  )
}
