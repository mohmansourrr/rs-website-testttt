import { useLang } from '../i18n/LanguageContext'

/** The four rust stat blocks from the brochure. */
export default function Stats() {
  const { t } = useLang()

  return (
    <section className="bg-ink pb-16 sm:pb-20" aria-label={t.stats.label}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.stats.items.map((s, i) => (
            <li
              key={s.label}
              className={`bg-rust-600 px-4 py-7 sm:py-9 text-center reveal reveal-d${i + 1}`}
            >
              <p className="u-display text-white text-3xl sm:text-4xl lg:text-5xl tracking-normal">
                {s.value}
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/90">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
