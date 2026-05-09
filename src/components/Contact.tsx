import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'

const PRODUCT_OPTIONS = [
  'Stainless Steel Sheets & Coil',
  'Stainless Steel Bars & Angle',
  'Stainless Steel Tubes & Pipes',
  'Decorative Stainless Steel',
  'Multiple Products',
  'Other / Not Sure',
]

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  product: string
  message: string
}

const INITIAL: FormState = { name: '', company: '', email: '', phone: '', product: '', message: '' }

const INPUT_CLS =
  'w-full bg-zinc-900 border border-white/[0.08] text-white text-sm px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-silver/40 transition-colors'

const LABEL_CLS = 'block text-[10px] text-zinc-500 uppercase tracking-widest mb-1.5'

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    /* Replace this with your actual form submission (EmailJS, Formspree, etc.) */
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm(INITIAL)
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="relative bg-zinc-950 py-24 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-0 left-0 right-0 silver-line" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 animate-on-scroll">
          <span className="section-label">
            <span className="w-6 h-px bg-silver/50" aria-hidden="true" />
            Get in Touch
          </span>
          <h2 id="contact-heading" className="section-heading mt-3">
            Request a <span className="silver-text">Quote</span>
          </h2>
          <p className="mt-4 text-zinc-500 text-sm max-w-xl">
            Tell us about your project and our team will respond within one business day with pricing and availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 animate-on-scroll delay-1">

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4 border border-silver/20 card">
                <CheckCircle size={40} className="text-silver" aria-hidden="true" />
                <h3 className="text-white font-semibold text-lg">Message Received!</h3>
                <p className="text-zinc-500 text-sm max-w-xs">
                  Thank you for reaching out. A member of our team will contact you within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost mt-4"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact and quote request form"
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={LABEL_CLS}>Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={set('name')}
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={INPUT_CLS}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className={LABEL_CLS}>Company</label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={set('company')}
                      autoComplete="organization"
                      placeholder="Company or project name"
                      className={INPUT_CLS}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={LABEL_CLS}>Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={INPUT_CLS}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={LABEL_CLS}>Phone / WhatsApp *</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      required
                      autoComplete="tel"
                      placeholder="+20 1xx xxx xxxx"
                      className={INPUT_CLS}
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="product" className={LABEL_CLS}>Product Interest</label>
                  <select
                    id="product"
                    value={form.product}
                    onChange={set('product')}
                    className={`${INPUT_CLS} appearance-none cursor-pointer`}
                  >
                    <option value="">Select a product category</option>
                    {PRODUCT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={LABEL_CLS}>
                    Project Details / Specifications *
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={set('message')}
                    required
                    rows={5}
                    placeholder="Describe your requirements: grade, thickness, size, quantity, finish…"
                    className={`${INPUT_CLS} resize-none`}
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-busy={sending}
                >
                  {sending ? (
                    <>
                      <span className="w-3 h-3 border border-black/40 border-t-black rounded-full animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={13} aria-hidden="true" />
                      Send Request
                    </>
                  )}
                </button>

                <p className="text-[11px] text-zinc-700 text-center">
                  We respond within 1 business day · All enquiries treated in confidence
                </p>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Contact information">

            {/* Quick contact */}
            <div className="card p-6 space-y-5">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Quick Contact</p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone size={14} className="text-silver flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">El Sabtya (Main)</p>
                    <a
                      href="tel:+201025009288"
                      className="text-zinc-300 hover:text-white text-sm transition-colors"
                    >
                      +20 102 500 9288
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={14} className="text-silver flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Qalyoub</p>
                    <a
                      href="tel:+201095797888"
                      className="text-zinc-300 hover:text-white text-sm transition-colors"
                    >
                      +20 109 579 7888
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone size={14} className="text-silver flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">6th of October</p>
                    <a
                      href="tel:+201007184005"
                      className="text-zinc-300 hover:text-white text-sm transition-colors"
                    >
                      +20 100 718 4005
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201025009288"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 card p-5 hover:border-silver/30 transition-all group"
              aria-label="Chat with us on WhatsApp – opens in new tab"
            >
              <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors flex-shrink-0">
                <MessageCircle size={18} className="text-silver" aria-hidden="true" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Chat on WhatsApp</p>
                <p className="text-zinc-500 text-xs">Available 7 days a week</p>
              </div>
            </a>

            {/* Address */}
            <div className="card p-6">
              <div className="flex gap-3">
                <MapPin size={14} className="text-silver flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Main Office</p>
                  <address className="not-italic text-zinc-400 text-sm leading-relaxed">
                    1 Rabaa El Roz St., Souk El Asr<br />
                    El Sabtya, Cairo, Egypt
                  </address>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card p-6">
              <div className="flex gap-3">
                <Mail size={14} className="text-silver flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">Email</p>
                  <a
                    href="mailto:info@rsstainless.com"
                    className="text-zinc-300 hover:text-white text-sm transition-colors"
                  >
                    info@rsstainless.com
                  </a>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 silver-line" aria-hidden="true" />
    </section>
  )
}
