import { useRef, useEffect, useState } from 'react'
import { Award, Target, Handshake, ShieldCheck } from 'lucide-react'

const VALUES = [
  {
    icon: Award,
    title: 'Quality & Performance',
    desc: 'Every product meets the highest international standards – ASTM A240M / A480M certified.',
  },
  {
    icon: Target,
    title: 'Precision Manufacturing',
    desc: 'State-of-the-art processing ensures dimensional accuracy across all product forms.',
  },
  {
    icon: Handshake,
    title: 'Customer First',
    desc: 'Tailored solutions designed around your operational needs and timelines.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Since 2007',
    desc: "Nearly two decades of expertise supplying Egypt's construction, industrial and retail markets.",
  },
]

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const triggered = useRef(false)

  useEffect(() => {
    const el = document.getElementById(`counter-${target}`)
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return count
}

function Counter({ target, suffix = '', label }: { target: number; suffix?: string; label: string }) {
  const count = useCounter(target)
  return (
    <div id={`counter-${target}`} className="text-center">
      <p className="font-heading text-5xl text-white leading-none tracking-wider">
        {count}{suffix}
      </p>
      <p className="text-xs text-zinc-500 uppercase tracking-widest mt-2">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-zinc-950 py-24 lg:py-32 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 silver-line" aria-hidden="true" />

      {/* Background detail */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-16 animate-on-scroll">
          <span className="section-label">
            <span className="w-6 h-px bg-silver/50" aria-hidden="true" />
            Who We Are
          </span>
          <h2 id="about-heading" className="section-heading mt-3">
            About <span className="silver-text">RS</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          {/* Left – story */}
          <div className="animate-on-scroll space-y-6">
            <p className="text-zinc-300 text-base leading-relaxed">
              <span className="text-white font-semibold">RS for Stainless Industrial Co.</span> was founded
              in 2007 with a steadfast commitment to excellence in the steel industry. We have established
              ourselves as Egypt's leading provider of a comprehensive range of stainless steel products —
              including sheets, coils, pipes, tubes, angles, flat bars and round bars.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              Our dedication to quality is unwavering. Combining state-of-the-art manufacturing processes
              with skilled craftsmanship, we ensure that every product we deliver is not only reliable but
              also competitively priced — meeting the highest international industry standards.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed">
              At RS, our primary objective is to provide customers with high-quality products and
              exceptional service. We understand that clients' needs are diverse, and we strive to exceed
              their expectations by delivering tailored solutions that enhance operational efficiency.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
                aria-label="Contact us for more information"
              >
                Work With Us
              </button>
            </div>
          </div>

          {/* Right – values */}
          <div className="grid sm:grid-cols-2 gap-4 animate-on-scroll delay-2">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-5 group">
                <div className="w-9 h-9 flex items-center justify-center border border-white/10 mb-4 group-hover:border-silver/30 transition-colors">
                  <Icon size={16} className="text-silver" aria-hidden="true" />
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">{title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Counters */}
        <div className="silver-line mb-12 animate-on-scroll" aria-hidden="true" />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll delay-1"
          aria-label="Key figures"
        >
          <Counter target={18} suffix="+" label="Years in Business" />
          <Counter target={9} suffix="+" label="Steel Grades" />
          <Counter target={3} label="Branch Locations" />
          <Counter target={500} suffix="+" label="Active Clients" />
        </div>

      </div>

      {/* Accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 silver-line" aria-hidden="true" />
    </section>
  )
}
