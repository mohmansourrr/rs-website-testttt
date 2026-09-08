import { useState } from 'react'
import { Play, Maximize2 } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { asset, VIDEO_ID } from '../data/site'

/**
 * Factory video.
 *
 * The YouTube player is only mounted once the visitor asks for it — until
 * then this is a poster image and a button, so the page costs nothing extra
 * to load and no third-party player runs unless it is wanted. The embed uses
 * the no-cookie host and allows full screen.
 */
export default function VideoTour() {
  const { t } = useLang()
  const [playing, setPlaying] = useState(false)

  return (
    <section id="video" className="bg-ink py-20 lg:py-28 relative" aria-labelledby="video-h">
      <div className="absolute inset-0 hatch" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="reveal mb-10 max-w-2xl">
          <p className="section-label mb-3 text-rust-400">
            <span className="h-px w-8 bg-rust-500" aria-hidden="true" />
            {t.video.label}
          </p>
          <h2 id="video-h" className="section-heading text-cream">
            {t.video.heading}
          </h2>
          <span className="rule mt-5 mb-7" aria-hidden="true" />
          <p className="text-[15px] leading-relaxed text-muted-dark">{t.video.intro}</p>
        </div>

        <div className="reveal relative aspect-video w-full overflow-hidden bg-ink-700 border-2 border-cream/10">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={t.video.heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full cursor-pointer"
              aria-label={t.video.play}
            >
              <img
                src={asset('images/video-poster.webp')}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                className="absolute inset-0 bg-ink/45 transition-colors group-hover:bg-ink/30"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                aria-hidden="true"
              >
                <span className="inline-flex h-20 w-20 items-center justify-center bg-rust-600 transition-transform duration-300 group-hover:scale-110">
                  <Play size={30} className="text-white translate-x-0.5" fill="currentColor" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cream/80">
                  {t.video.play}
                </span>
              </span>
            </button>
          )}
        </div>

        <p className="reveal mt-4 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-muted-dark">
          <Maximize2 size={13} className="text-rust-400" aria-hidden="true" />
          {t.video.hint}
        </p>
      </div>
    </section>
  )
}
