# Hope Baptist Church — hbcsunman.org

Next.js site for Hope Baptist Church, Sunman, Indiana.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Editing content

Almost everything lives in **`lib/site.ts`**: address, phone, email, service
times, Google Calendar ID, and the Breeze giving subdomain.

- **Hero photo** — save a large (1920px+ wide) JPG as `public/images/sanctuary.jpg`.
- **Statement of faith** — `app/beliefs/page.tsx` (currently a draft for the pastor to approve).
- **Calendar** — set `googleCalendarId`; events are then edited in Google Calendar, no deploy needed.
- **Give** — set `breezeSubdomain` once the church has a Breeze (Tithe.ly) account.
