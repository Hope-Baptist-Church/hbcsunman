/**
 * Everything about the church that appears on the site, in one place.
 *
 * Most edits to the website should only ever touch this file. Anything still
 * marked TODO is a guess or a blank — confirm it before launch.
 */
export const site = {
  name: 'Hope Baptist Church',
  shortName: 'Hope Baptist',
  tagline: 'Everyone Welcome',
  town: 'Sunman, Indiana',
  url: 'https://hbcsunman.org',

  // TODO: confirm address, phone and email.
  address: {
    street: '',
    city: 'Sunman',
    state: 'IN',
    zip: '47041',
  },
  phone: '',
  email: '',

  facebook: 'https://www.facebook.com/hbcsunman/',

  // TODO: confirm with the pastor. Shown on the home page and the visit page.
  services: [
    { day: 'Sunday', name: 'Sunday School', time: '10:00 AM' },
    { day: 'Sunday', name: 'Morning Worship', time: '11:00 AM' },
    { day: 'Sunday', name: 'Evening Service', time: '6:00 PM' },
    { day: 'Wednesday', name: 'Bible Study & Prayer', time: '7:00 PM' },
  ],

  pastor: {
    name: '', // TODO
    photo: '', // e.g. '/images/pastor.jpg'
  },

  /**
   * Public Google Calendar the church keeps its events in. Anyone with edit
   * access to that calendar updates the website's calendar — no deploy needed.
   *
   * To get it: Google Calendar → Settings → the calendar → "Make available to
   * public", then copy "Calendar ID" (looks like abc123@group.calendar.google.com).
   */
  googleCalendarId: '',

  /**
   * Breeze ChMS subdomain for online giving (the same embed PSP uses —
   * Breeze is part of Tithe.ly). If the church's Breeze is
   * hbcsunman.breezechms.com, this is 'hbcsunman'. Leave blank until the
   * account exists and the Give page shows the by-mail / in-person options.
   */
  breezeSubdomain: '',
}

export const fullAddress = [
  site.address.street,
  `${site.address.city}, ${site.address.state} ${site.address.zip}`,
]
  .filter(Boolean)
  .join(', ')

export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`)

export const nav = [
  { href: '/visit', label: 'Plan a Visit' },
  { href: '/beliefs', label: 'What We Believe' },
  { href: '/calendar', label: 'Calendar' },
  { href: '/give', label: 'Give' },
] as const
