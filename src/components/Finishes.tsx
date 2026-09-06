import { useLang } from '../i18n/LanguageContext'

/** Surface finishes — dark cards on cream, as laid out in the brochure. */
export default function Finishes() {
  const { t } = useLang()

  return (
    <section id="finishes" className="bg-cream py-20 lg:py-28" aria-labelledby="finishes-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 max-w-2xl">
          <p className="section-label mb-3">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.finishes.label}
          </p>
          <h2 id="finishes-h" className="section-heading">
            {t.finishes.heading}
          </h2>
          <span className="rule mt-5 mb-7" aria-hidden="true" />
          <p className="lede mb-3">{t.finishes.lead}</p>
          <p className="body-text">{t.finishes.intro}</p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.finishes.items.map((f, i) => (
            <li
              key={f.name}
              className={`bg-ink p-6 flex flex-col reveal reveal-d${(i % 5) + 1}`}
            >
              <h3 className="u-display text-cream text-lg leading-tight">{f.name}</h3>
              <span className="rule mt-4 mb-4 !w-10" aria-hidden="true" />
              <p className="text-[13px] leading-relaxed text-muted-dark">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
