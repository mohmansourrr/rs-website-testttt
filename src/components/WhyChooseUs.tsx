import { useLang } from '../i18n/LanguageContext'
import Photo from './Photo'

export default function WhyChooseUs() {
  const { t } = useLang()

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="why-us" className="bg-cream-200 py-20 lg:py-28" aria-labelledby="why-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12">
          <p className="section-label mb-3">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.why.label}
          </p>
          <h2 id="why-h" className="section-heading">
            {t.why.heading}
          </h2>
          <span className="rule mt-5" aria-hidden="true" />
        </div>

        <Photo
          name="operator"
          alt={t.images.operator}
          ratio="aspect-[21/9]"
          className="mb-12 reveal"
        />

        {/* Numbered list, mirroring the brochure's 1–6 layout */}
        <ol className="grid md:grid-cols-2 gap-x-10 gap-y-1">
          {t.why.items.map((item, i) => (
            <li
              key={item.title}
              className={`flex gap-5 py-6 border-b-2 border-ink/10 reveal reveal-d${(i % 5) + 1}`}
            >
              <span
                className="shrink-0 inline-flex h-12 w-12 items-center justify-center bg-ink text-cream u-display text-xl"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="text-ink font-bold text-base mb-1.5">{item.title}</h3>
                <p className="body-text">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Closing CTA band */}
        <div className="mt-14 bg-rust-600 p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center gap-6 justify-between reveal">
          <div>
            <p className="u-display text-white text-xl sm:text-2xl mb-2">{t.why.ctaTitle}</p>
            <p className="text-white/90 text-sm leading-relaxed max-w-xl">{t.why.ctaText}</p>
          </div>
          <button
            type="button"
            onClick={() => go('#contact')}
            className="btn bg-white text-rust-700 hover:bg-cream shrink-0"
          >
            {t.why.ctaButton}
          </button>
        </div>
      </div>
    </section>
  )
}
