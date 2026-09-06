import { ArrowDown, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLang()

  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center bg-ink overflow-hidden pt-24 pb-16"
      aria-label={t.hero.title}
    >
      {/* Texture + depth */}
      <div className="absolute inset-0 hatch" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 0%, rgba(190,90,50,0.16) 0%, rgba(28,26,25,0) 60%)',
        }}
        aria-hidden="true"
      />

      {/* Rust rule across the top, echoing the brochure cover */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-rust-500" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label-dark mb-6">
            <span className="h-px w-8 bg-rust-400" aria-hidden="true" />
            {t.hero.eyebrow}
          </p>

          <h1 className="u-display text-cream text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.2rem] mb-6">
            {t.hero.title}
          </h1>

          <span className="rule mb-6" aria-hidden="true" />

          <p className="text-cream text-lg sm:text-xl lg:text-2xl font-bold mb-4">
            {t.hero.subtitle}
          </p>

          <p className="body-text-dark max-w-xl mb-8">{t.hero.intro}</p>

          <p className="u-display text-rust-400 text-sm sm:text-base tracking-wider2 mb-10">
            {t.hero.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={() => go('#products')} className="btn-primary group">
              {t.hero.ctaProducts}
              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </button>
            <button type="button" onClick={() => go('#contact')} className="btn-outline-light">
              {t.hero.ctaContact}
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-wider2 text-cream/50">
          {t.hero.scroll}
        </span>
        <ArrowDown size={14} className="text-rust-400 animate-bounce" />
      </div>
    </section>
  )
}
