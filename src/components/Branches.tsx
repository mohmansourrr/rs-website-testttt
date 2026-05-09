import { MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react'

interface Branch {
  name: string
  city: string
  address: string
  phone: string
  whatsapp: string
  mapsQuery: string
  primary?: boolean
}

const BRANCHES: Branch[] = [
  {
    name: 'El Sabtya',
    city: 'Cairo',
    address: '1 Rabaa El Roz St., Souk El Asr, El Sabtya, Cairo, Egypt',
    phone: '+2 010 250 09288',
    whatsapp: '201025009288',
    mapsQuery: 'El+Sabtya+Cairo+Egypt',
    primary: true,
  },
  {
    name: 'Qalyoub',
    city: 'Cairo – North',
    address: 'The Slow Road, In front of El Belbasi, Abo Senna, Qalyoub, Cairo, Egypt',
    phone: '+2 010 957 97888',
    whatsapp: '201095797888',
    mapsQuery: 'Qalyoub+Cairo+Egypt',
  },
  {
    name: '6th of October',
    city: 'Giza',
    address: 'Piece 175 Industrial Sixth Extension (opp. El-Sharqia for Smoking & Marakbi Factory), Giza, Egypt',
    phone: '+2 010 071 84005',
    whatsapp: '201007184005',
    mapsQuery: '6th+of+October+City+Giza+Egypt',
  },
]

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative bg-black py-24 lg:py-32"
      aria-labelledby="branches-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="section-label">
            <span className="w-6 h-px bg-silver/50" aria-hidden="true" />
            Find Us
          </span>
          <h2 id="branches-heading" className="section-heading mt-3">
            Our <span className="silver-text">Branches</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm max-w-xl">
            Three strategically located service centres across Greater Cairo and Giza — stocked and ready.
          </p>
        </div>

        {/* Branch cards */}
        <div className="grid md:grid-cols-3 gap-4 animate-on-scroll delay-1" role="list" aria-label="Branch locations">
          {BRANCHES.map((branch) => (
            <article
              key={branch.name}
              role="listitem"
              className={`relative flex flex-col card p-6 lg:p-8 group ${
                branch.primary ? 'border-silver/20' : ''
              }`}
              aria-label={`${branch.name} branch in ${branch.city}`}
            >
              {branch.primary && (
                <span className="absolute top-4 right-4 text-[9px] text-silver border border-silver/30 px-2 py-0.5 uppercase tracking-widest">
                  Main Branch
                </span>
              )}

              {/* Branch name */}
              <div className="mb-6">
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-1">{branch.city}</p>
                <h3 className="font-heading text-3xl text-white uppercase tracking-wide">{branch.name}</h3>
              </div>

              {/* Address */}
              <div className="flex gap-3 mb-6 flex-1">
                <MapPin
                  size={14}
                  className="text-silver flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <address className="not-italic text-zinc-400 text-sm leading-relaxed">{branch.address}</address>
              </div>

              {/* Contact */}
              <div className="space-y-3 mb-6">
                <a
                  href={`tel:${branch.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 text-sm text-zinc-300 hover:text-white transition-colors group/link"
                  aria-label={`Call ${branch.name} branch: ${branch.phone}`}
                >
                  <Phone size={13} className="text-silver" aria-hidden="true" />
                  <span>{branch.phone}</span>
                </a>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={`https://wa.me/${branch.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 flex-1 justify-center border border-white/10 hover:border-silver/30 text-zinc-300 hover:text-white text-xs uppercase tracking-widest py-2.5 transition-all"
                  aria-label={`WhatsApp ${branch.name} branch`}
                >
                  <MessageCircle size={12} aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${branch.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 flex-1 justify-center border border-white/10 hover:border-silver/30 text-zinc-300 hover:text-white text-xs uppercase tracking-widest py-2.5 transition-all"
                  aria-label={`View ${branch.name} branch on Google Maps`}
                >
                  <ExternalLink size={12} aria-hidden="true" />
                  Directions
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs text-zinc-700 animate-on-scroll delay-2">
          All branches are stocked with the full product range. Call ahead to confirm specific grades.
        </p>

      </div>
    </section>
  )
}
