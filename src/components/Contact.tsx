import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Send, CheckCircle2, AlertTriangle, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../data/site'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  product: string
  message: string
}

const EMPTY: FormState = { name: '', company: '', email: '', phone: '', product: '', message: '' }

type Status = 'idle' | 'sending' | 'emailed' | 'whatsapp' | 'error'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState<FormState>(EMPTY)
  const [status, setStatus] = useState<Status>('idle')
  /* Honeypot: hidden from people, commonly filled by bots. */
  const [honeypot, setHoneypot] = useState('')
  const sending = status === 'sending'

  const bind =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  /** The same enquiry, written out for WhatsApp. */
  const whatsappUrl = () => {
    const lines = [
      t.contact.waHeader,
      '',
      `${t.contact.name}: ${form.name}`,
      ...(form.company ? [`${t.contact.company}: ${form.company}`] : []),
      `${t.contact.email}: ${form.email}`,
      `${t.contact.phone}: ${form.phone}`,
      ...(form.product ? [`${t.contact.product}: ${form.product}`] : []),
      '',
      `${t.contact.message}:`,
      form.message,
    ]
    return `https://wa.me/${SITE.enquiryWhatsapp}?text=${encodeURIComponent(lines.join('\n'))}`
  }

  const handOffToWhatsApp = () => {
    const url = whatsappUrl()
    /* Runs from the submit gesture, so this is not treated as a popup.
       If a blocker stops it anyway, navigate in place instead. */
    const opened = window.open(url, '_blank', 'noopener,noreferrer')
    if (!opened) window.location.href = url
  }

  /**
   * The enquiry is posted to Web3Forms, which emails it on. The sender stays
   * on the page and simply sees it was received — nothing is redirected.
   *
   * Without an access key configured there is nowhere to post, so the enquiry
   * is handed to WhatsApp instead rather than quietly going nowhere. The same
   * fallback is offered if the request fails.
   */
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    /* Silently accept and drop: a bot gets no signal that it was caught. */
    if (honeypot) {
      setStatus('emailed')
      setForm(EMPTY)
      return
    }

    if (!SITE.formAccessKey) {
      setStatus('sending')
      handOffToWhatsApp()
      setStatus('whatsapp')
      setForm(EMPTY)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.formAccessKey,
          subject: `Quote request — ${form.name}${form.company ? ` (${form.company})` : ''}`,
          from_name: 'RS website',
          /* Replying to the notification reaches the customer directly. */
          replyto: form.email,
          [t.contact.name]: form.name,
          [t.contact.company]: form.company,
          [t.contact.email]: form.email,
          [t.contact.phone]: form.phone,
          [t.contact.product]: form.product,
          [t.contact.message]: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message ?? 'submit failed')
      setStatus('emailed')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-cream-200 py-20 lg:py-28" aria-labelledby="contact-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mb-12 max-w-2xl">
          <p className="section-label mb-3">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.contact.label}
          </p>
          <h2 id="contact-h" className="section-heading">
            {t.contact.heading}
          </h2>
          <span className="rule mt-5 mb-7" aria-hidden="true" />
          <p className="body-text">{t.contact.intro}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Form */}
          <div className="lg:col-span-7 reveal">
            {status === 'emailed' || status === 'whatsapp' ? (
              <div
                className="bg-cream-100 border-2 border-rust-500 p-10 text-center flex flex-col items-center gap-4"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 size={40} className="text-rust-600" aria-hidden="true" />
                <h3 className="u-display text-ink text-2xl">
                  {status === 'emailed' ? t.contact.successTitle : t.contact.waSuccessTitle}
                </h3>
                <p className="body-text max-w-sm">
                  {status === 'emailed' ? t.contact.successText : t.contact.waSuccessText}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-2"
                >
                  {t.contact.successAgain}
                </button>
              </div>
            ) : status === 'error' ? (
              <div
                className="bg-cream-100 border-2 border-rust-700 p-10 text-center flex flex-col items-center gap-4"
                role="alert"
              >
                <AlertTriangle size={40} className="text-rust-700" aria-hidden="true" />
                <h3 className="u-display text-ink text-2xl">{t.contact.errorTitle}</h3>
                <p className="body-text max-w-sm">{t.contact.errorText}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    {t.contact.errorCta}
                  </a>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-outline"
                  >
                    {t.contact.errorRetry}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <input
                  type="text"
                  name="company_website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute h-px w-px -m-px overflow-hidden opacity-0 pointer-events-none"
                />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="field-label">
                      {t.contact.name} <span className="text-rust-700">*</span>
                    </label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={bind('name')}
                      placeholder={t.contact.namePlaceholder}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-company" className="field-label">
                      {t.contact.company}
                    </label>
                    <input
                      id="c-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={form.company}
                      onChange={bind('company')}
                      placeholder={t.contact.companyPlaceholder}
                      className="field"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-email" className="field-label">
                      {t.contact.email} <span className="text-rust-700">*</span>
                    </label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={bind('email')}
                      placeholder={t.contact.emailPlaceholder}
                      className="field"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="field-label">
                      {t.contact.phone} <span className="text-rust-700">*</span>
                    </label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={bind('phone')}
                      placeholder={t.contact.phonePlaceholder}
                      className="field"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-product" className="field-label">
                    {t.contact.product}
                  </label>
                  <select
                    id="c-product"
                    name="product"
                    value={form.product}
                    onChange={bind('product')}
                    className="field"
                  >
                    <option value="">{t.contact.productPlaceholder}</option>
                    {t.contact.productOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="c-message" className="field-label">
                    {t.contact.message} <span className="text-rust-700">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={bind('message')}
                    placeholder={t.contact.messagePlaceholder}
                    className="field resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span
                        className="h-3.5 w-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin"
                        aria-hidden="true"
                      />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send size={14} aria-hidden="true" />
                      {t.contact.submit}
                    </>
                  )}
                </button>

                <p className="text-[12px] text-muted-light text-center">
                  {t.contact.disclaimer}
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 flex flex-col gap-4 reveal reveal-d2">
            <div className="bg-ink p-7">
              <h3 className="u-display text-cream text-lg mb-1">{t.contact.quickContact}</h3>
              <span className="rule mt-4 mb-6" aria-hidden="true" />
              <ul className="flex flex-col gap-4">
                {t.branches.items.map((b, i) => (
                  <li key={b.name} className="flex gap-3">
                    <Phone size={14} className="text-rust-400 shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-dark mb-0.5">
                        {b.name}
                      </p>
                      <a
                        href={`tel:${SITE.branches[i].phoneHref}`}
                        dir="ltr"
                        className="text-cream font-bold text-[15px] hover:text-rust-400 transition-colors"
                      >
                        {SITE.branches[i].phoneDisplay}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`https://wa.me/${SITE.enquiryWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-rust-600 p-6 hover:bg-rust-700 transition-colors"
            >
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-white/15"
                aria-hidden="true"
              >
                <MessageCircle size={20} className="text-white" />
              </span>
              <span>
                <span className="block text-white font-bold text-[15px]">
                  {t.contact.whatsappTitle}
                </span>
                <span className="block text-white/85 text-[13px]">{t.contact.whatsappText}</span>
              </span>
            </a>

            <div className="bg-cream-100 border-2 border-ink/10 p-6 flex gap-3">
              <MapPin size={15} className="text-rust-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-light mb-1">
                  {t.contact.officeTitle}
                </p>
                <address className="not-italic text-[14px] leading-relaxed text-ink">
                  {t.branches.items[0].address}
                </address>
              </div>
            </div>

            <div className="bg-cream-100 border-2 border-ink/10 p-6 flex gap-3">
              <Mail size={15} className="text-rust-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-light mb-1">
                  {t.contact.emailTitle}
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  dir="ltr"
                  className="text-[14px] text-ink font-semibold hover:text-rust-700 transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
