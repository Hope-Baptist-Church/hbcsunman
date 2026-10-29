# Hope Baptist Church — hbcsunman.org

Next.js site for Hope Baptist Church, Sunman, Indiana.

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Editing content

Almost everything lives in **`lib/site.ts`**: address, phone, pastor, service
times, Google Calendar ID, and the Tithe.ly giving link. Anything left blank
is hidden on the site.

- **Hero photo** — save a large (1920px+ wide) JPG as `public/images/sanctuary.jpg`.
- **Welcome text** — the `TODO` in `app/page.tsx`.
- **Statement of faith** — the `TODO` in `app/beliefs/page.tsx`.
- **Calendar** — set `googleCalendarId`; events are then edited in Google Calendar, no deploy needed.
