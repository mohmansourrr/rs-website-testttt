import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../data/site'

export default function Branches() {
  const { t } = useLang()

  return (
    <section id="branches" className="bg-cream py-20 lg:py-28" aria-labelledby="branches-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 max-w-2xl">
          <p className="section-label mb-3">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.branches.label}
          </p>
          <h2 id="branches-h" className="section-heading">
            {t.branches.heading}
          </h2>
          <span className="rule mt-5 mb-7" aria-hidden="true" />
          <p className="body-text">{t.branches.intro}</p>
        </div>

        <ul className="grid md:grid-cols-3 gap-4">
          {t.branches.items.map((branch, i) => {
            const info = SITE.branches[i]
            const isMain = i === 0
            return (
              <li
                key={branch.name}
                className={`relative flex flex-col p-7 border-2 reveal reveal-d${i + 1} ${
                  isMain
                    ? 'bg-ink border-ink'
                    : 'bg-cream-100 border-ink/10 hover:border-rust-500 transition-colors'
                }`}
              >
                {isMain && (
                  <span className="inline-block self-start bg-rust-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-5">
                    {t.branches.mainBadge}
                  </span>
                )}

                <p
                  className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${
                    isMain ? 'text-rust-400' : 'text-rust-700'
                  }`}
                >
                  {branch.city}
                </p>
                <h3
                  className={`u-display text-2xl mb-5 ${isMain ? 'text-cream' : 'text-ink'}`}
                >
                  {branch.name}
                </h3>

                <div className="flex gap-3 mb-5 flex-1">
                  <MapPin
                    size={15}
                    className={`shrink-0 mt-0.5 ${isMain ? 'text-rust-400' : 'text-rust-600'}`}
                    aria-hidden="true"
                  />
                  <address
                    className={`not-italic text-[14px] leading-relaxed ${
                      isMain ? 'text-muted-dark' : 'text-muted-light'
                    }`}
                  >
                    {branch.address}
                  </address>
                </div>

                <a
                  href={`tel:${info.phoneHref}`}
                  dir="ltr"
                  className={`inline-flex items-center gap-2.5 text-[15px] font-bold mb-5 transition-colors ${
                    isMain ? 'text-cream hover:text-rust-400' : 'text-ink hover:text-rust-700'
                  }`}
                  aria-label={`${t.branches.callAria} ${branch.name}: ${info.phoneDisplay}`}
                >
                  <Phone
                    size={14}
                    className={isMain ? 'text-rust-400' : 'text-rust-600'}
                    aria-hidden="true"
                  />
                  {info.phoneDisplay}
                </a>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a
                    href={`https://wa.me/${info.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 border-2 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors min-h-[44px] ${
                      isMain
                        ? 'border-cream/30 text-cream hover:bg-cream hover:text-ink'
                        : 'border-ink/20 text-ink hover:bg-ink hover:text-cream'
                    }`}
                  >
                    <MessageCircle size={13} aria-hidden="true" />
                    {t.branches.whatsapp}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${info.maps}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 border-2 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors min-h-[44px] ${
                      isMain
                        ? 'border-cream/30 text-cream hover:bg-cream hover:text-ink'
                        : 'border-ink/20 text-ink hover:bg-ink hover:text-cream'
                    }`}
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    {t.branches.directions}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 text-center text-[13px] text-muted-light reveal">
          {t.branches.note}
        </p>
      </div>
    </section>
  )
}
