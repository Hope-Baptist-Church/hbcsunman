/**
 * Everything about the church that appears on the site, in one place.
 *
 * Most edits to the website should only ever touch this file. Anything left
 * blank is simply hidden on the site until it's filled in.
 */

type Service = { day: string; name: string; time: string }

export const site = {
  name: 'Hope Baptist Church',
  tagline: 'Everyone Welcome',
  town: 'Sunman, Indiana',
  url: 'https://hbcsunman.org',

  // From the church's Google Maps listing.
  address: {
    street: '27698 Temple Dr',
    city: 'Sunman',
    state: 'IN',
    zip: '47041',
  },
  phone: '(513) 310-5248',
  email: '',

  pastor: 'Pastor Kelly Barnes',

  facebook: 'https://www.facebook.com/hbcsunman/',
  googleMaps: 'https://www.google.com/maps?cid=9865302433364097194',

  /**
   * Weekly schedule, e.g. { day: 'Sunday', name: 'Morning Worship', time: '11:00 AM' }.
   * Shown on the home, visit and calendar pages; hidden while empty.
   */
  services: [
    { day: 'Sunday', name: 'Sunday School', time: '10:00 AM' },
    { day: 'Sunday', name: 'Morning Service', time: '11:00 AM' },
    { day: 'Wednesday', name: 'Wednesday Service', time: '6:00 PM' },
  ] as Service[],

  /**
   * Public Google Calendar the church keeps its events in. Anyone with edit
   * access to that calendar updates the website's calendar — no deploy needed.
   *
   * To get it: Google Calendar → Settings → the calendar → "Make available to
   * public", then copy "Calendar ID" (looks like abc123@group.calendar.google.com).
   */
  googleCalendarId: '',

  /** Tithe.ly giving page. The Give page and nav button link here. */
  givingUrl: 'https://tithe.ly/give?c=1443040',
}

export const fullAddress = [
  site.address.street,
  `${site.address.city}, ${site.address.state} ${site.address.zip}`,
]
  .filter(Boolean)
  .join(', ')

export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`)
export const phoneHref = `tel:+1${site.phone.replace(/\D/g, '')}`

export const nav = [
  { href: '/visit', label: 'Plan a Visit' },
  { href: '/beliefs', label: 'What We Believe' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/give', label: 'Give' },
] as const
