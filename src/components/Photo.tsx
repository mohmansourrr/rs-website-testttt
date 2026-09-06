import { asset } from '../data/site'

interface PhotoProps {
  /** File name in public/images, without extension */
  name: string
  alt: string
  className?: string
  /** Tailwind aspect ratio class, e.g. 'aspect-[4/3]' */
  ratio?: string
  /** Above-the-fold images should load eagerly */
  priority?: boolean
}

/**
 * Factory photograph with a consistent frame and lazy loading.
 * Images live in public/images and are shipped as WebP.
 */
export default function Photo({
  name,
  alt,
  className = '',
  ratio = 'aspect-[4/3]',
  priority = false,
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-ink-700 ${ratio} ${className}`}>
      <img
        src={asset(`images/${name}.webp`)}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
