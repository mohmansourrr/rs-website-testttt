import { useState } from 'react'
import { asset } from '../data/site'

interface LogoProps {
  /** 'light' = for use on dark backgrounds, 'dark' = for use on light backgrounds */
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Renders the RS mark. Drops in the real logo file when present at
 * public/logo-light.svg / public/logo-dark.svg, otherwise falls back to
 * a typographic RS mark so the site never shows a broken image.
 */
export default function Logo({ tone = 'dark', className = 'h-10 w-auto' }: LogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className={`${className} inline-flex items-center justify-center font-black tracking-tighter leading-none ${
          tone === 'light' ? 'text-cream' : 'text-ink'
        }`}
        style={{ fontSize: '1.75em' }}
        aria-hidden="true"
      >
        RS
      </span>
    )
  }

  return (
    <img
      src={asset(tone === 'light' ? 'logo-light.svg' : 'logo-dark.svg')}
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
      onError={() => setFailed(true)}
    />
  )
}
