/** Contact details and links shared across the site (language-independent). */

export const SITE = {
  email: 'info@rsstainlessegypt.com',
  /** Branch order matches translations.branches.items */
  branches: [
    {
      /* Head office & factory */
      phoneDisplay: '0100 718 0405',
      phoneHref: '+201007180405',
      whatsapp: '201007180405',
      maps: '6th+of+October+City+Industrial+Zone+Giza+Egypt',
    },
    {
      phoneDisplay: '0102 500 9288',
      phoneHref: '+201025009288',
      whatsapp: '201025009288',
      maps: 'El+Sabtia+Cairo+Egypt',
    },
    {
      phoneDisplay: '0109 579 7888',
      phoneHref: '+201095797888',
      whatsapp: '201095797888',
      maps: 'Qalyoub+Qalyubia+Egypt',
    },
  ],
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
} as const

/** Primary number = head office & factory (6th of October). */
export const PRIMARY = SITE.branches[0]

/** Vite base path, so assets resolve correctly on GitHub Pages. */
export const asset = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`
