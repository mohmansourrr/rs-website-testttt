import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLang()

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="about" className="bg-cream py-20 lg:py-28" aria-labelledby="about-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12">
          <p className="section-label mb-3">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.about.label}
          </p>
          <h2 id="about-h" className="section-heading">
            {t.about.heading}
          </h2>
          <span className="rule mt-5" aria-hidden="true" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-7 reveal reveal-d1">
            <p className="lede mb-5">{t.about.p1}</p>
            <p className="body-text mb-5">{t.about.p2}</p>
            <p className="body-text">{t.about.p3}</p>

            <button type="button" onClick={() => go('#contact')} className="btn-outline mt-8">
              {t.about.cta}
            </button>
          </div>

          {/* Core services — black bar treatment from the brochure */}
          <div className="lg:col-span-5 reveal reveal-d2">
            <div className="bg-ink p-7 sm:p-9">
              <h3 className="u-display text-cream text-xl sm:text-2xl mb-1">
                {t.about.servicesTitle}
              </h3>
              <span className="rule mt-4 mb-6" aria-hidden="true" />
              <ul className="flex flex-col divide-y divide-cream/10">
                {t.about.services.map((s) => (
                  <li
                    key={s}
                    className="py-3.5 text-cream text-base font-bold flex items-center gap-3"
                  >
                    <span className="h-1.5 w-1.5 bg-rust-500 shrink-0" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
