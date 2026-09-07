import { asset } from '../data/site'

interface PhotoProps {
  /** File name in public/images, without extension */
  name: string
  /** Accessible description of the photograph */
  alt: string
  /**
   * Short caption printed under the frame. Every photograph on the page
   * carries one — it is what makes the image read as evidence for the
   * surrounding claim rather than decoration.
   */
  caption?: string
  className?: string
  /** Tailwind aspect ratio class. Keep to the 4/3 and 16/9 family. */
  ratio?: string
  /** Caption colour for the section the photo sits in */
  tone?: 'light' | 'dark'
  /**
   * 'below' prints the caption under the frame. 'overlay' lays it over the
   * bottom of the image, for photos that must stay flush with a neighbour.
   */
  captionStyle?: 'below' | 'overlay'
  /** Above-the-fold images should load eagerly */
  priority?: boolean
}

/**
 * A captioned plant photograph.
 *
 * Photographs appear only where they back up a specific claim, and always
 * in this frame, so they read as a consistent set of figures across the page.
 */
export default function Photo({
  name,
  alt,
  caption,
  className = '',
  ratio = 'aspect-[4/3]',
  tone = 'light',
  captionStyle = 'below',
  priority = false,
}: PhotoProps) {
  const overlaid = Boolean(caption) && captionStyle === 'overlay'

  const frame = (
    <div className={`relative overflow-hidden bg-ink-700 ${ratio}`}>
      <img
        src={asset(`images/${name}.webp`)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {overlaid && (
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent px-5 pb-4 pt-10">
          <span className="flex items-start gap-2.5 text-[11px] font-semibold uppercase tracking-wider text-cream/85">
            <span className="mt-[7px] h-px w-4 shrink-0 bg-rust-500" aria-hidden="true" />
            <span>{caption}</span>
          </span>
        </figcaption>
      )}
    </div>
  )

  if (overlaid) return <figure className={className}>{frame}</figure>
  if (!caption) return <div className={className}>{frame}</div>

  return (
    <figure className={className}>
      {frame}
      <figcaption
        className={`mt-3 flex items-start gap-2.5 text-[11px] font-semibold uppercase tracking-wider ${
          tone === 'dark' ? 'text-cream/60' : 'text-muted-light'
        }`}
      >
        <span
          className="mt-[7px] h-px w-4 shrink-0 bg-rust-500"
          aria-hidden="true"
        />
        <span>{caption}</span>
      </figcaption>
    </figure>
  )
}
