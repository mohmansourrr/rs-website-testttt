import { useState } from 'react'
import { ChevronRight, Layers, AlignJustify, CircleDot, Sparkles } from 'lucide-react'

interface SpecRow {
  label: string
  value: string
}

interface Product {
  id: string
  icon: React.ElementType
  name: string
  tagline: string
  description: string
  specs: SpecRow[]
  applications: string[]
  highlight: string
}

const PRODUCTS: Product[] = [
  {
    id: 'sheets',
    icon: Layers,
    name: 'Sheets & Coil',
    tagline: 'Our flagship product line',
    description:
      'Egypt\'s widest range of stainless steel sheets and coils. From ultra-thin precision sheets for decorative applications to heavy-gauge plates for industrial use, we stock every standard size and can produce custom dimensions to specification.',
    specs: [
      { label: 'Grade', value: '201, 304, 304L, 309, 310, 316, 316L, 410, 430' },
      { label: 'Finish', value: '2B, BA, No.4, No.8 Mirror (Cold Rolled) · No.1 (Hot Rolled)' },
      { label: 'Thickness', value: '0.3 – 20.0 mm' },
      { label: 'Standard Sizes', value: '1500×3000 mm · 1250×2500 mm · 1000×2000 mm' },
      { label: 'Custom Size', value: 'Available per customer requirements' },
      { label: 'Specification', value: 'ASTM A240M-18 / A480M-18a' },
    ],
    applications: ['Elevators & lift cabs', 'Doors & façades', 'Furniture & fitouts', 'Industrial equipment', 'Architectural cladding'],
    highlight: 'Thickness from 0.3 mm',
  },
  {
    id: 'bars',
    icon: AlignJustify,
    name: 'Bars & Angle',
    tagline: 'Structural & profile stock',
    description:
      'A full range of stainless steel bar profiles — round bars, flat bars and equal-leg angles — for structural, mechanical and decorative applications. All supplied to ASTM standards with mill test certificates available.',
    specs: [
      { label: 'Grade', value: '201, 304, 316' },
      { label: 'Round Bar – OD', value: '3.0 – 200.0 mm' },
      { label: 'Flat Bar', value: '20×3.0 mm up to 100×10.0 mm' },
      { label: 'Angle (equal leg)', value: '20×20×2.0 mm up to 100×100×10.0 mm' },
      { label: 'Surface', value: 'Bright annealed, pickled, polished on request' },
    ],
    applications: ['Structural frames', 'Marine fittings', 'Handrails & balustrades', 'Automotive parts', 'Food-processing equipment'],
    highlight: 'Round bar up to 200 mm OD',
  },
  {
    id: 'pipes',
    icon: CircleDot,
    name: 'Tubes & Pipes',
    tagline: 'Welded & seamless profiles',
    description:
      'Precision welded stainless steel tubes in a wide range of outside diameters and wall thicknesses. Mirror, hairline and industrial finishes available. Supplied in standard 6-metre lengths or cut-to-length.',
    specs: [
      { label: 'Grade', value: '201, 304, 316' },
      { label: 'OD Range', value: '10 – 101.6 mm (6 m standard length)' },
      { label: 'Wall Thickness', value: '1.0 – 3.0 mm' },
      { label: 'Finish', value: '600-grit Mirror · 180-grit (No.4 equivalent)' },
      { label: 'Specification', value: 'ASTM A554-14' },
    ],
    applications: ['Architectural columns', 'Handrails & railings', 'Food & beverage pipework', 'Furniture tubing', 'HVAC & fluid systems'],
    highlight: 'ASTM A554-14 certified',
  },
  {
    id: 'decorative',
    icon: Sparkles,
    name: 'Decorative',
    tagline: 'Design-led surface solutions',
    description:
      'Custom-designed decorative stainless steel sheets produced with state-of-the-art etching, PVD coating, hairline, sand and mirror surface technologies. Patterns are computer-generated for precision; bespoke designs available.',
    specs: [
      { label: 'Base Material', value: 'Stainless steel sheet 201 / 304 / 316 / 430' },
      { label: 'Surface Tech', value: 'Etching · Hairline · Sand · PVD vacuum coating · Mirror' },
      { label: 'Design', value: 'Computer-generated; custom artwork accepted' },
      { label: 'Customisation', value: 'Tailored to project; production costs apply' },
      { label: 'Cleaning', value: 'Neutral cleaners only; avoid acids and abrasives' },
    ],
    applications: ['Elevator interiors', 'Lobby feature walls', 'Retail & hospitality fitouts', 'Outdoor signage', 'Door cladding & façades'],
    highlight: 'PVD & custom etching',
  },
]

export default function Products() {
  const [active, setActive] = useState('sheets')
  const product = PRODUCTS.find((p) => p.id === active)!

  return (
    <section
      id="products"
      className="relative bg-black py-24 lg:py-32"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 animate-on-scroll">
          <span className="section-label">
            <span className="w-6 h-px bg-silver/50" aria-hidden="true" />
            What We Offer
          </span>
          <h2 id="products-heading" className="section-heading mt-3">
            Product <span className="silver-text">Range</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm max-w-xl">
            Egypt's most comprehensive stainless steel inventory — all grades, all finishes, all dimensions.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className="flex flex-wrap gap-px border border-white/[0.07] mb-10 animate-on-scroll delay-1"
          role="tablist"
          aria-label="Product categories"
        >
          {PRODUCTS.map(({ id, icon: Icon, name }) => (
            <button
              key={id}
              role="tab"
              aria-selected={active === id}
              aria-controls={`panel-${id}`}
              id={`tab-${id}`}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-5 py-3.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 flex-1 justify-center sm:flex-none focus-visible:ring-2 focus-visible:ring-silver focus-visible:ring-inset ${
                active === id
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 bg-transparent'
              }`}
            >
              <Icon size={13} aria-hidden="true" />
              <span className="hidden sm:inline">{name}</span>
              <span className="sm:hidden">{name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id={`panel-${product.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${product.id}`}
          key={product.id}
          className="grid lg:grid-cols-5 gap-8 animate-on-scroll"
        >
          {/* Description column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <p className="text-[10px] text-silver uppercase tracking-widest mb-2">{product.tagline}</p>
              <h3 className="font-heading text-4xl text-white uppercase tracking-wide">{product.name}</h3>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">{product.description}</p>

            {/* Applications */}
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Applications</p>
              <ul className="space-y-1.5">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-1 h-1 bg-silver rounded-full flex-shrink-0" aria-hidden="true" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlight badge */}
            <div className="inline-flex items-center gap-2 border border-silver/20 px-4 py-2 text-xs text-silver uppercase tracking-widest">
              <ChevronRight size={12} aria-hidden="true" />
              {product.highlight}
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              aria-label={`Request a quote for ${product.name}`}
            >
              Request a Quote
              <ChevronRight size={13} aria-hidden="true" />
            </button>
          </div>

          {/* Spec table column */}
          <div className="lg:col-span-3">
            <div className="card p-6 lg:p-8 h-full">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-6">Technical Specifications</p>
              <table className="spec-table" aria-label={`${product.name} specifications`}>
                <thead>
                  <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="text-zinc-500 font-medium text-xs uppercase tracking-wider py-3 pr-6 border-b border-white/[0.05] whitespace-nowrap align-top">
                        {row.label}
                      </th>
                      <td className="text-zinc-200 text-sm py-3 border-b border-white/[0.05] leading-relaxed">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Grade visual for sheets */}
              {product.id === 'sheets' && (
                <div className="mt-8 pt-6 border-t border-white/[0.06]">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Available Grades</p>
                  <div className="flex flex-wrap gap-2">
                    {['201', '304', '304L', '309', '310', '316', '316L', '410', '430'].map((grade) => (
                      <span
                        key={grade}
                        className="px-3 py-1 border border-white/10 text-xs text-zinc-300 font-mono hover:border-silver/30 hover:text-silver transition-colors"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
