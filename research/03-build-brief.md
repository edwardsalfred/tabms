# Website Build Brief — Tabernacle Missionary Baptist Church

_Compiled: 2026-03-31 | Based on: Brand Extraction + Competitive Analysis_

---

## Design Direction

### Color Palette

| Role | Color | Hex | Rationale |
|------|-------|-----|-----------|
| Primary / Background | Near-Black | `#0d0d0d` | Matches logo, creates cinematic quality |
| Accent / CTA | Terracotta | `#c45d3e` | Warmth without being generic; matches competitive set |
| Brand Warm | Beige Gold | `#e8c89a` | Lifted from logo's beige; heritage feel |
| Light Section BG | Cream | `#f8f5ef` | Warm white for alternating sections |
| Body Text (on light) | Ink | `#1a1812` | Warm near-black, easier on eyes than pure black |
| Muted Text | Warm Gray | `#6b6356` | Secondary info, captions |

### Typography

| Use | Font | Weight |
|-----|------|--------|
| H1 / H2 headings | Instrument Serif | 400 (italic for emphasis) |
| H3 / subheadings | DM Sans | 600 |
| Body copy | DM Sans | 400 |
| Labels / nav / tags | DM Sans | 500, uppercase, tracked |
| Quotes / pull quotes | Instrument Serif | 400 italic |

Both fonts: Google Fonts (free, fast CDN). No licensing issues.

### Photography Style

- **Hero:** Wide-angle Sunday worship, congregation in genuine praise — pull from existing gallery
- **Ministry cards:** Real ministry leaders' faces — replace ALL broken placeholder images
- **About section:** Dr. Kenneth Maurice Davis portrait + congregation community shots
- **What's Happening:** Event collage/mosaic — already have dozens of usable images

### Animations (GSAP + ScrollTrigger)

- Hero text: fade-in on load (0.8s, stagger words)
- Sections: fade-up on scroll (translateY 40px → 0, opacity 0 → 1)
- Ministry grid: stagger reveal (0.1s delay per card)
- Parallax: hero background image (0.4x scroll speed)
- Counters: number count-up on enter viewport (ministries count, years established)
- CTA buttons: subtle scale on hover (1.0 → 1.03)
- Nav: transparent → solid on scroll

### What to AVOID

- Photo carousels / slideshows
- Auto-playing videos (mobile data killer)
- Thin decorative dividers (Wix signature)
- Generic "More About Us" CTAs
- All-caps body text (use for labels only)

---

## Site Architecture

### Pages to Build

| Page | Purpose | Primary CTA |
|------|---------|-------------|
| **index.html** | First impression, convert new visitors | "Plan Your Visit" |
| **about.html** | Mission, beliefs, history, pastoral bio | "Meet Our Pastor" |
| **ministries.html** | Showcase all 13+ ministries | "Find Your Ministry" |
| **leadership.html** | Staff directory | "Contact Us" |
| **events.html** | What's happening, calendar | "Register / Learn More" |
| **media.html** | Sermons, videos, live stream | "Watch Now" |
| **giving.html** | Online giving (Realm integration) | "Give Now" |
| **contact.html** | Contact form + location | "Send Message" |
| **prayer.html** | Prayer request form | "Submit Prayer" |

### Navigation Structure

```
[Logo]   Home   About   Ministries   Events   Media   [Give]   [Plan Your Visit]
```

- Logo: left-aligned, links to home
- Primary nav: 5 items (Home, About, Ministries, Events, Media)
- Right-aligned utility: "Give" (outlined button) + "Plan Your Visit" (filled accent button)
- Mobile: hamburger → full-screen overlay menu

### Content Hierarchy Per Page

**Homepage (index.html):**
1. Hero — full-bleed image, "Welcome to The TAB" headline, dual CTA
2. Service times bar — Sunday Worship 9am | Sunday School 8am | Wednesday 6pm
3. Welcome copy — Pastor's voice, scripture reference
4. Three-Path section — Know / Grow / Serve (matching contact form options)
5. Ministry spotlight — 3 featured ministries with real images
6. Quote/testimonial pull — MLK quote currently on site (keep it)
7. Events preview — Next 3 upcoming events
8. Giving CTA — "We give because God gave" section
9. Footer — address, social, service times, quick links

---

## Content Framework

### Homepage Headline Options

**Option A (Bold/Declarative):**
> "The Best South Mississippi Has to Offer."
_(Already used on About — move it to the Hero. It's strong and ownable.)_

**Option B (Welcoming/Invitational):**
> "You Were Made for Community. Find Yours in D'Iberville."

**Option C (Spiritual/Aspirational):**
> "Where Faith Transforms Lives. Every Sunday in D'Iberville."

**Recommendation: Option A.** It's already their language, it's bold, and it creates geographic pride. Pair with a sub-heading that leads into the mission.

### Sub-headline (Hero secondary text):
> "Tabernacle Missionary Baptist Church — a faith community in D'Iberville, Mississippi, dedicated to returning productive, positive-thinking people back to the community."

### Section Headlines to Use

| Section | Headline |
|---------|---------|
| Know/Grow/Serve | "Where Do You Start Your Journey?" |
| Ministries | "A Ministry for Every Season of Life" |
| About | "Spirit-Filled. Community-Rooted. D'Iberville Proud." |
| Giving | "Our Generosity Is Simply a Response to His." |
| Events | "What's Happening at The TAB" |

### SEO Keyword Targets

Primary: "church D'Iberville MS", "Baptist church D'Iberville Mississippi", "Tabernacle Missionary Baptist Church"
Secondary: "Sunday worship D'Iberville", "church near me D'Iberville", "Black church South Mississippi"

Each page should naturally contain the primary keyword in: `<title>`, `<h1>`, first paragraph, and meta description.

### Schema Markup to Include (index.html)

```json
{
  "@type": "Church",
  "name": "Tabernacle Missionary Baptist Church",
  "alternateName": "The TAB",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "D'Iberville",
    "addressRegion": "MS",
    "addressCountry": "US"
  },
  "telephone": "[add phone]",
  "url": "https://www.thetabms.com",
  "sameAs": ["[facebook URL]", "[youtube URL]", "https://www.tiktok.com/@tabmbc"]
}
```

---

## Conversion Playbook

### Primary Conversion Goal
**New visitor → Plan Your Visit / Contact form submission**

Every page should have one path back to the contact/visit form.

### Lead Capture Strategy
- Contact form with Know/Grow/Serve options (already exists — just design it better)
- Prayer request form (emotional touchpoint — keep prominent)
- Events registration for special services (Easter, VBS, etc.)

### Social Proof Plan

| Element | Placement | Source |
|---------|-----------|--------|
| "13+ Active Ministries" | Hero or stat bar | Current site |
| "Serving D'Iberville since [year]" | About section | Research/find founding year |
| Congregation event photos | Gallery section | What's Happening page |
| MLK quote | Section divider | Already on current site |
| Scripture pull quotes | Between sections | About page |
| Pastor's bio + photo | About/Leadership | Already on site |

### Trust Signal Checklist

- [ ] Real address visible in footer
- [ ] Phone number in header/footer
- [ ] Social links working and real (fix Facebook link)
- [ ] SSL (already on Wix, carry to new site)
- [ ] Realm giving integration (already trusted brand)
- [ ] Pastor's professional photo (already have)
- [ ] Ministry leader photos (need to replace placeholders)
- [ ] Google Maps embed on contact page

---

## Technical Specs

- **Stack:** HTML5, CSS3, Vanilla JavaScript
- **Animations:** GSAP 3 + ScrollTrigger (CDN)
- **Fonts:** Google Fonts (Instrument Serif + DM Sans)
- **Icons:** No icon font libraries — use inline SVG only
- **Images:** All from existing wixstatic CDN URLs
- **Giving:** Iframe/embed to Realm (onrealm.org) — no change needed
- **Forms:** Netlify Forms or Formspree for contact/prayer (Wix forms won't migrate)
- **Deployment:** Vercel or Netlify (one-click, free tier)

---

## APPROVAL CHECKPOINT

**This brief is complete. Please review before the build begins.**

Key decisions requiring your approval:

1. **Homepage headline:** Which option — A ("The Best South Mississippi Has to Offer"), B ("You Were Made for Community"), or C ("Where Faith Transforms Lives")? Or a different direction entirely?

2. **Color palette:** Black + Terracotta + Beige — or do you want to preserve a different accent color?

3. **Pages to build:** The 9-page architecture above — are there pages to add or remove?

4. **Pastor booking:** Should the booking form (currently on a separate page) be integrated into the new contact page or kept as a standalone?

5. **Ministry images:** For the build, I'll pull existing images from the Wix site. After delivery, you'll want to replace placeholder images with real ministry photos. Confirmed?

**Reply "Ready to build" (or with any adjustments) and Phase 5 begins.**
