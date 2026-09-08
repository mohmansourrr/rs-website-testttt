/** Contact details and links shared across the site (language-independent). */

export const SITE = {
  email: 'info@rsstainless.com',
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
    facebook: 'https://www.facebook.com/people/Elradwansteel/100070076870138/',
    instagram: 'https://www.instagram.com/elradwansteel10',
    linkedin: 'https://www.linkedin.com/company/r-s-for-stainless-industrial-coo/',
    x: 'https://x.com/rsstainless',
  },
  /**
   * Web3Forms access key. Get one free at https://web3forms.com — enter the
   * address enquiries should land in and the key is emailed back. The key is
   * public by design: it only allows posting to that one inbox.
   * Empty means the form falls back to handing the enquiry to WhatsApp.
   */
  formAccessKey: '',
  /** Sales line that every website enquiry is routed to. */
  enquiryWhatsapp: '201065646669',
  enquiryPhoneDisplay: '0106 564 6669',
} as const

/** Primary number = head office & factory (6th of October). */
export const PRIMARY = SITE.branches[0]

/** YouTube id for the factory video (https://youtu.be/eFYI73XWoeM). */
export const VIDEO_ID = 'eFYI73XWoeM'

/** Vite base path, so assets resolve correctly on GitHub Pages. */
export const asset = (file: string) =>
  `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`
