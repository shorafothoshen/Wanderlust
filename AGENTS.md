<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands (npm; lockfile is package-lock.json)

- `npm run dev` — dev server on http://localhost:3000 (Turbopack). Edit `src/app/(site)/page.tsx`; it auto-updates.
- `npm run build` — production build (`next build`).
- `npm run start` — production server (`next start`).
- `npm run lint` — ESLint over the project (flat config in `eslint.config.mjs`; Next vitals + TS rules).
- No test script exists; no test suite is configured. Do not run `npm test`.

## Stack & layout

- Next.js 16 (App Router), React 19, TypeScript 5 (`strict: true`, `isolatedModules`).
- Tailwind CSS v4: `src/app/globals.css` imports `tailwindcss`, `tw-animate-css`, and `shadcn/tailwind.css`. There is no `tailwind.config.js`.
- shadcn/ui (base-nova, RSC). Components live in `src/components/ui/` and `src/components/layout/`. `src/lib/utils.ts` re-exports `cn` from the `cn` package. Add components with `npx shadcn add <name>`; `components.json` holds the shadcn aliases.
- Path alias `@/*` → `./src/*` (see `tsconfig.json`).
- Josefin Sans font loaded in `src/app/(site)/layout.tsx` via `next/font/google` as `--font-josefin`, mapped to Tailwind `font-sans`. Do NOT add other font imports or `<link>` tags.
- All public-facing pages live in `src/app/(site)/` route group so Navbar + Footer render automatically on every page.
- Primary teal token: `#15A1BF` (CSS var `--color-primary`, Tailwind class `text-primary`/`bg-primary`/`border-primary`).

## Route table

| Route | Page | Title |
|-------|------|-------|
| `/` | `src/app/(site)/page.tsx` | Hero + Featured + Why + Testimonials + CTA |
| `/destinations` | `src/app/(site)/destinations/page.tsx` | Explore All Destinations |
| `/destinations/[id]` | `src/app/(site)/destinations/[id]/page.tsx` | Destination Details |
| `/my-bookings` | `src/app/(site)/my-bookings/page.tsx` | My Bookings |
| `/admin` | `src/app/(site)/admin/page.tsx` | Add New Travel Package |
| `/profile` | `src/app/(site)/profile/page.tsx` | My Profile |
| `/signup` | `src/app/(site)/signup/page.tsx` | Create Account |
| `/login` | `src/app/(site)/login/page.tsx` | Welcome Back |

## Folder structure

```
src/
├─ app/(site)/
│  ├─ layout.tsx           <- Navbar + {children} + Footer (single place)
│  ├─ page.tsx             <- Home (Hero, Featured, Why, Testimonials, CTA)
│  ├─ destinations/page.tsx
│  ├─ destinations/[id]/page.tsx
│  ├─ my-bookings/page.tsx
│  ├─ admin/page.tsx
│  ├─ profile/page.tsx
│  ├─ signup/page.tsx
│  └─ login/page.tsx
├─ components/
│  ├─ layout/
│  │  ├─ navbar.tsx        ("use client", fixed, 3-col grid, NAV_LINKS + usePathname)
│  │  ├─ footer.tsx        (Server Component, Figma-based)
│  │  ├─ page-container.tsx (pt-[88px], max-w-[1280px] mx-auto)
│  │  └─ newsletter-form.tsx ("use client", email box + ArrowUpRight submit)
│  ├─ ui/
│  │  ├─ container.tsx     <- mx-auto w-full max-w-[1440px] px-4 md:px-10 xl:px-20
│  │  ├─ social-icons.tsx  <- XIcon, LinkedInIcon, InstagramIcon inline SVGs
│  │  ├─ button.tsx        (shadcn base-ui, exports Button + buttonVariants)
│  │  ├─ input.tsx
│  │  ├─ rating.tsx
│  │  ├─ section-heading.tsx
│  │  ├─ hero.tsx          (refactored: relative isolate, SearchBar in normal flow)
│  │  ├─ search-bar.tsx    ("use client", normal flow, no absolute)
│  │  ├─ carousel.tsx      (embla-carousel-react wrapper)
│  │  └─ why-choose-us.tsx
│  ├─ sections/
│  │  └─ home/
│  │     ├─ featured-destinations.tsx ("use client", fluid slider)
│  │     ├─ testimonials.tsx ("use client", manual translateX slider)
│  │     └─ cta.tsx        (Server Component, gradient overlay)
│  ├─ shared/
│  │  ├─ destination-card.tsx (fluid, no fixed w/h)
│  │  └─ testimonial-card.tsx (fluid, no fixed w/h)
│  └─ ui/                  (existing shadcn components stay)
├─ lib/
│  ├─ constants.ts         <- NAV_LINKS, RIGHT_NAV_LINKS, FOOTER_LINKS, CONTACT
│  ├─ utils.ts             <- cn()
│  └─ data/
│     ├─ destinations.ts   <- mock destinations
│     ├─ bookings.ts       <- mock bookings
│     └─ testimonials.ts   <- mock testimonials
└─ types/
   ├─ destination.ts
   ├─ booking.ts
   └─ testimonial.ts
```

## Layout rules (mandatory)

1. **Container**: `mx-auto w-full max-w-[1440px] px-4 md:px-10 xl:px-20`. Use `<Container>` from `components/ui/container.tsx` in every section. No ad-hoc widths like `w-[1280px]`.
2. **Section spacing**: `py-16 md:py-20 xl:py-[120px]` for every section. Gap between header and content: `gap-8 md:gap-10`.
3. **NO fixed heights** on content. Only allowed fixed sizes: image boxes, buttons/inputs (h-14 = 56px), navbar bar (h-14), search bar cells.
4. **NO absolute positioning** for layout. `absolute` allowed ONLY for: background images/overlays (`absolute inset-0 -z-10`), rating badge on card image, fixed navbar.
5. **Fluid type scale** (globals.css / Tailwind theme, use clamp()):
   - display (hero h1): clamp(44px, 7.2vw, 104px), line-height 1.02, letter-spacing -0.03em
   - h2 (section titles): clamp(34px, 4.2vw, 60px), line-height 1.05, letter-spacing -0.04em
   - card-title: clamp(22px, 2.2vw, 32px)
   - lead (subtext): clamp(16px, 1.4vw, 20px) with line-height 1.6
   - body: 16-18px, small: 14px
   No component may hardcode a px font-size outside this scale except icons/buttons (16px) and tiny labels (14px).
6. **Overflow safety**: `html, body { overflow-x: clip }`; every flex child that holds text gets `min-w-0`; long text uses `text-balance` or `break-words`; images always sit inside a `relative` parent with explicit size and `object-cover`; Next/Image gets a correct `sizes` prop.
7. **Hero structure**: `<section class="relative isolate flex min-h-[640px] md:min-h-[746px] flex-col overflow-hidden">` with background image + overlays (absolute inset-0 -z-10), content div with `pt-[88px] pb-10 px-4`, SearchBar in normal flow (last child, NOT absolute).
8. **Navbar**: fixed, 16px inset, white 56px bar, 3-column grid so logo stays centered; mobile hamburger under 1024px. Pages other than Home use `<PageContainer>` with pt-[88px].
9. **Sliders**: no fixed pixel widths. Viewport `overflow-hidden`, track `flex gap-6`, each card `shrink-0 basis-full lg:basis-[calc((100%-24px)/2)]`. Clamp index so you can never slide into empty space.
10. **Grids**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` etc. with gap tokens, never fixed column widths.

## How to add a new page

1. Create `src/app/(site)/<name>/page.tsx`.
2. Export `metadata` with `title` and optional `description`.
3. Wrap content in `<PageContainer>` (adds `pt-[88px]` so content clears the fixed navbar, plus `max-w-[1280px] mx-auto px-4 md:px-10 xl:px-20`).
4. Home does NOT use `PageContainer` (full-bleed hero).
5. Add the link to `NAV_LINKS` or `RIGHT_NAV_LINKS` in `src/lib/constants.ts` if it should appear in the navbar.

## How to add a new section

1. Create `src/components/sections/<page>/<section>.tsx` (e.g. `src/components/sections/home/cta.tsx`).
2. Keep it a Server Component unless it uses hooks/event handlers.
3. Import and render it in `src/app/(site)/page.tsx`.

## Navbar / Footer rules

- Navbar: `fixed top-4 inset-x-4 z-50`, `h-14`, white, floating. Links from `NAV_LINKS` / `RIGHT_NAV_LINKS` in `src/lib/constants.ts`. Active link via `usePathname()` + `startsWith` for nested routes.
- Footer: Server Component, full width, `bg-[#0C0B0B]`, white text, Josefin Sans, teal accent `#15A1BF`. Shown on every page via `(site)/layout.tsx`.
- `page-container.tsx`: adds `pt-[88px]` + `max-w-[1280px] mx-auto px-4 md:px-10 xl:px-20`. Home does not use it.

## Pages that must NOT have Navbar/Footer

- Put them in a separate route group like `(auth)` or `(dashboard)` with their own layout that does not import Navbar/Footer.

## Gotchas

- `.env*` is gitignored — env files are local-only and never committed.
- `.next/`, `out/`, `build/`, and `next-env.d.ts` are generated/gitignored; do not edit or commit them. `next-env.d.ts` is regenerated by Next but is listed in `tsconfig.json` include.
- `"use client"` ONLY where truly needed (navbar, search-bar, newsletter-form, modals, forms). All other components are Server Components.
- `globals.css` lives at `src/app/globals.css`; route group layouts import it via relative path (`../../app/globals.css`).
- Do NOT change the design, colors, fonts (Josefin Sans), or copy of existing components.
- `CTA` section image: `public/images/cta.jpg` (add this file). Hero image: `public/images/hero.jpg`. Testimonial images: `public/images/testimonials/traveler-1.jpg`, `traveler-2.jpg`.
