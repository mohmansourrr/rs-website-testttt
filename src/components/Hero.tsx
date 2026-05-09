import { ChevronRight, ArrowDown } from 'lucide-react'

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const STATS = [
  { value: '2007', label: 'Founded' },
  { value: '9+', label: 'Steel Grades' },
  { value: '3', label: 'Branches' },
  { value: '500+', label: 'Product Lines' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Welcome to RS Stainless Industrial Co."
    >
      {/* Steel texture background */}
      <div className="absolute inset-0 steel-bg" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-60" aria-hidden="true" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent"
        aria-hidden="true"
      />

      {/* Silver accent line – top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.3), transparent)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">

        {/* Logo */}
        <div className="mb-8 flex justify-center" style={{ animation: 'fadeIn 1s ease-out' }}>
          <img
            src="/rs-logo.svg"
            alt="RS for Stainless Industrial Co. logo"
            className="w-32 h-32 md:w-44 md:h-44 object-contain drop-shadow-[0_0_40px_rgba(192,192,192,0.15)]"
            onError={(e) => {
              const img = e.target as HTMLImageElement
              img.style.display = 'none'
              const parent = img.parentElement
              if (parent) {
                parent.innerHTML =
                  '<div class="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center"><span class="font-heading text-8xl md:text-9xl silver-text leading-none">RS</span></div>'
              }
            }}
          />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 mb-6 px-5 py-2 border border-silver/20 text-silver text-[10px] font-medium uppercase tracking-[0.22em]"
          style={{ animation: 'fadeUp 0.8s ease-out 0.2s both' }}
        >
          <span className="w-6 h-px bg-silver/40" aria-hidden="true" />
          Egypt's First Full-Service Stainless Steel Centre
          <span className="w-6 h-px bg-silver/40" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1
          className="font-heading leading-none uppercase mb-4"
          style={{ animation: 'fadeUp 0.8s ease-out 0.35s both' }}
        >
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white tracking-wide">
            Stainless
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] silver-text tracking-wide">
            Excellence
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          className="text-zinc-400 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeUp 0.8s ease-out 0.5s both' }}
        >
          Premium stainless steel sheets, coils, bars, pipes and decorative solutions.
          <br className="hidden sm:block" />
          Serving Egypt and the region since 2007.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
          style={{ animation: 'fadeUp 0.8s ease-out 0.65s both' }}
        >
          <button
            onClick={() => scrollTo('#products')}
            className="btn-primary group"
            aria-label="Explore our product range"
          >
            Explore Products
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-ghost"
            aria-label="Get in touch with us"
          >
            Get in Touch
          </button>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 border border-white/[0.07] max-w-2xl mx-auto"
          style={{ animation: 'fadeUp 0.8s ease-out 0.8s both' }}
          role="list"
          aria-label="Company at a glance"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              role="listitem"
              className={`py-5 text-center ${
                i < STATS.length - 1 ? 'border-r border-white/[0.07]' : ''
              } ${i === 2 ? 'border-t border-white/[0.07] md:border-t-0' : ''} ${
                i === 3 ? 'border-t border-white/[0.07] md:border-t-0' : ''
              } bg-black/40`}
            >
              <p className="font-heading text-3xl text-white tracking-wider leading-none">{stat.value}</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} className="text-zinc-600 animate-bounce" />
      </div>
    </section>
  )
}
