import fs from 'node:fs'
import path from 'node:path'

/**
 * The hero photo. Drop a large (1920px+ wide) photo at
 * public/images/sanctuary.jpg and the home page picks it up; until then the
 * hero is a navy gradient.
 */
const HERO_PATH = '/images/sanctuary.jpg'
export const heroImage = fs.existsSync(path.join(process.cwd(), 'public', HERO_PATH))
  ? HERO_PATH
  : null
