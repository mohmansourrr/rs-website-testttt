import { Star, Gauge, Ruler, BadgeCheck, Users, Zap } from 'lucide-react'

const FEATURES = [
  {
    icon: Star,
    title: "Egypt's First Full-Service Centre",
    desc: "The pioneering stainless steel service centre in Egypt — under one roof you get every grade, finish, and form factor.",
    delay: 'delay-1',
  },
  {
    icon: Gauge,
    title: 'Largest Grade Portfolio',
    desc: 'Nine standard grades — 201, 304, 304L, 309, 310, 316, 316L, 410 and 430 — plus specialty grades on request.',
    delay: 'delay-2',
  },
  {
    icon: Ruler,
    title: 'Custom Dimensions',
    desc: 'Standard and non-standard sizes cut, slit or sheared to your exact requirements. No minimum order on most lines.',
    delay: 'delay-3',
  },
  {
    icon: BadgeCheck,
    title: 'International Standards',
    desc: 'All products comply with ASTM A240M, A480M and A554 specifications. Mill test certificates available.',
    delay: 'delay-4',
  },
  {
    icon: Users,
    title: 'Expert Technical Team',
    desc: 'Our specialists provide material selection guidance, grade substitution advice and application engineering support.',
    delay: 'delay-5',
  },
  {
    icon: Zap,
    title: 'Competitive Pricing & Fast Lead Times',
    desc: 'Direct importer relationships and Egypt-wide distribution from three strategically placed branches.',
    delay: 'delay-6',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-rs"
      className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden"
      aria-labelledby="why-heading"
    >
      <div className="absolute top-0 left-0 right-0 silver-line" aria-hidden="true" />

      {/* Large "RS" background watermark */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-heading text-[22rem] leading-none text-white/[0.02] select-none pointer-events-none uppercase"
        aria-hidden="true"
      >
        RS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="section-label">
            <span className="w-6 h-px bg-silver/50" aria-hidden="true" />
            Our Difference
          </span>
          <h2 id="why-heading" className="section-heading mt-3">
            Why Choose <span className="silver-text">RS</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm max-w-xl">
            Durability, precision and industrial expertise — combined with the convenience of a single,
            fully stocked service centre.
          </p>
        </div>

        {/* Features grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          role="list"
          aria-label="Why choose RS Stainless"
        >
          {FEATURES.map(({ icon: Icon, title, desc, delay }, index) => (
            <div
              key={title}
              role="listitem"
              className={`card p-6 group animate-on-scroll ${delay}`}
            >
              {/* Number */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-silver/30 transition-colors">
                  <Icon size={16} className="text-silver" aria-hidden="true" />
                </div>
                <span className="font-heading text-5xl text-white/[0.06] leading-none select-none" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>

              {/* Hover accent line */}
              <div className="h-px w-0 group-hover:w-full bg-silver/20 transition-all duration-500 mt-5" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 border border-white/[0.07] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div>
            <p className="text-white font-semibold mb-1">Ready to specify your material?</p>
            <p className="text-zinc-500 text-sm">
              Our technical team is available to help you select the right grade, finish and dimension.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary flex-shrink-0"
            aria-label="Start a conversation with our technical team"
          >
            Start a Conversation
          </button>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 silver-line" aria-hidden="true" />
    </section>
  )
}
