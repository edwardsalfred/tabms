# The TAB — Tabernacle Missionary Baptist Church
### Premium Website · D'Iberville, Mississippi

Built via Website Intelligence skill — researched, designed, and coded from scratch based on competitive analysis of the South Mississippi church market.

---

## Project Structure

```
thetabms/
├── research/
│   ├── 01-client-brand.md          Brand extraction from thetabms.com
│   ├── 02-competitor-analysis.md   Top 5 competitor analysis + scoring
│   ├── 03-build-brief.md           Approved build blueprint
│   └── 04-quality-audit.md         Pre-launch checklist
├── competitive-analysis.html       PDF-ready client report (open in browser → print)
├── site/
│   ├── index.html                  Homepage
│   ├── about.html                  About / Mission / Beliefs
│   ├── ministries.html             All 13+ ministries
│   ├── leadership.html             Pastoral team
│   ├── events.html                 Service times + events + gallery
│   ├── media.html                  Watch online + sermon archive
│   ├── giving.html                 Online giving (Realm embed)
│   ├── contact.html                Contact form + Plan Your Visit
│   ├── prayer.html                 Prayer request form
│   ├── css/
│   │   └── style.css               All styles (mobile-first, dark theme)
│   └── js/
│       └── main.js                 GSAP animations + nav behavior
└── README.md
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styles | CSS3 (custom properties, grid, flexbox) |
| Animation | GSAP 3 + ScrollTrigger (CDN) |
| Fonts | Google Fonts: Instrument Serif + DM Sans |
| Icons | Inline SVG (zero external requests) |
| Forms | Netlify Forms (built-in) |
| Giving | Realm (onrealm.org) iframe embed |
| Deploy | Vercel or Netlify (one-click) |

---

## Deploying to Netlify (Recommended — Free)

1. Go to [netlify.com](https://netlify.com) and create a free account
2. Drag and drop the `site/` folder onto the Netlify dashboard
3. Your site is live instantly at a `.netlify.app` URL
4. Add a custom domain in Settings → Domain Management

**Forms work automatically** — Netlify detects the `data-netlify="true"` attributes on all contact/prayer forms.

---

## Deploying to Vercel (Also Free)

```bash
npm install -g vercel
cd site/
vercel
```

Follow the prompts. Live in under 60 seconds.

---

## Before Going Live — Required Updates

1. **Facebook URL**: Find all `href="#"` on `.footer-social` Facebook links → replace with real URL
2. **YouTube URL**: Replace `https://www.youtube.com` with the TAB's YouTube channel URL
3. **Phone number**: Add church phone to contact.html and footer
4. **Full address**: Add street address to contact.html and footer
5. **Google Maps embed**: Update iframe in contact.html with real coordinates for the church
6. **OG image**: Create a 1200×630 image (`assets/og-image.jpg`) and add to all page `<head>`
7. **Ministry photos**: Replace the 3 featured ministry card images on index.html with real ones
8. **Pastor booking**: Link to Wix booking page or set up Calendly/similar in contact.html

---

## Design System

| Variable | Value | Use |
|----------|-------|-----|
| `--black` | `#0d0d0d` | Dark backgrounds, nav |
| `--terracotta` | `#c45d3e` | CTAs, accents, service bar |
| `--beige` | `#e8c89a` | Secondary text on dark, brand warmth |
| `--cream` | `#f8f5ef` | Light section backgrounds |
| `--ink` | `#1a1812` | Body text on light backgrounds |
| Font (headings) | Instrument Serif | Editorial, warm authority |
| Font (body) | DM Sans | Clean, readable, modern |

---

## Adding the 3D Hero Asset

In `index.html`, find the comment:
```html
<!-- 3D SCROLL ASSET — drop your video/3D element here -->
```

Replace with your scroll-triggered video or Spline 3D element. The hero section directly above it is designed to flow into this asset.

---

## Competitive Context

| Site | Score | Platform |
|------|-------|---------|
| Pinelake Church | 70/80 | Custom WordPress |
| Brown MBC | 63/80 | Custom WordPress |
| Brandon BC | 59/80 | Squarespace |
| **The TAB (new)** | **~55/80** | Custom HTML/CSS |
| Meadowview BC | 47/80 | Snappages |
| The TAB (old Wix) | ~23/80 | Wix |

The new site targets **55–60/80** at launch, surpassing every template-based competitor in the region. With active content (sermon posts, event updates, real ministry photos), it can reach **65+/80**.
