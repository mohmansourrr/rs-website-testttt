import { Check, Building2, CookingPot, Factory } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

const APP_ICONS = [Building2, CookingPot, Factory]

export default function Quality() {
  const { t } = useLang()

  return (
    <section id="quality" className="bg-ink py-20 lg:py-28 relative" aria-labelledby="quality-h">
      <div className="absolute inset-0 hatch" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 max-w-2xl">
          <p className="section-label-dark mb-3">
            <span className="h-px w-8 bg-rust-400" aria-hidden="true" />
            {t.quality.label}
          </p>
          <h2 id="quality-h" className="section-heading-dark">
            {t.quality.heading}
          </h2>
          <span className="rule mt-5 mb-7" aria-hidden="true" />
          <p className="body-text-dark">{t.quality.intro}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Quality features */}
          <div className="lg:col-span-5 reveal reveal-d1">
            <h3 className="u-display text-rust-400 text-lg mb-6">
              {t.quality.featuresTitle}
            </h3>
            <ul className="flex flex-col gap-4">
              {t.quality.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-rust-600"
                    aria-hidden="true"
                  >
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-cream">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="lg:col-span-7 reveal reveal-d2">
            <h3 className="u-display text-rust-400 text-lg mb-6">
              {t.quality.applicationsTitle}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {t.quality.applications.map((group, i) => {
                const Icon = APP_ICONS[i] ?? Building2
                return (
                  <div key={group.group} className="bg-ink-700 border border-cream/10 p-6">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center bg-rust-600 mb-4"
                      aria-hidden="true"
                    >
                      <Icon size={17} className="text-white" />
                    </span>
                    <h4 className="text-cream font-bold text-sm leading-snug mb-4">
                      {group.group}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-[13px] leading-relaxed text-muted-dark flex gap-2"
                        >
                          <span
                            className="mt-1.5 h-1 w-1 shrink-0 bg-rust-400"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
