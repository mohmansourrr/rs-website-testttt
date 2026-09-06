import { useState } from 'react'
import { asset } from '../data/site'

interface LogoProps {
  /** Rendered height; the lockup keeps its 830:198 aspect ratio */
  className?: string
  /** Accessible name. Decorative when the logo sits next to the company name. */
  alt?: string
  priority?: boolean
}

/**
 * The official RS lockup: metallic RS mark, divider, and the company name
 * in English and Arabic. It is a light/metallic mark, so it must sit on a
 * dark background.
 */
export default function Logo({
  className = 'h-10',
  alt = 'R.S. for stainless industrial co. — أر.أس لصناعه الاستانلس',
  priority = false,
}: LogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className={`${className} inline-flex items-center font-black text-cream tracking-tighter text-2xl`}>
        RS
      </span>
    )
  }

  return (
    <img
      src={asset('logo.webp')}
      alt={alt}
      width={830}
      height={198}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`${className} w-auto object-contain`}
      onError={() => setFailed(true)}
    />
  )
}
