# PackersHub — Astro 5 Developer Integration Guide
## Complete Setup, Customization & Integration Manual

---

## 📁 Project Structure

```
packershub-astro/
├── astro.config.mjs          ← Astro 5 config (integrations, sitemap, compress)
├── tailwind.config.mjs       ← Full design system / color tokens
├── tsconfig.json             ← TypeScript paths
├── package.json              ← Dependencies list
│
├── public/
│   ├── favicon.svg           ← Brand favicon
│   ├── site.webmanifest      ← PWA manifest
│   ├── robots.txt            ← SEO crawl rules
│   └── og-default.jpg        ← Default Open Graph image (ADD MANUALLY)
│
└── src/
    ├── styles/
    │   └── global.css        ← Base styles, components, utilities
    │
    ├── data/
    │   └── cities.ts         ← ALL 75 cities + 5 states data + CONTACT constants
    │
    ├── layouts/
    │   └── BaseLayout.astro  ← Full SEO head, schema, fonts, floating buttons
    │
    ├── components/
    │   ├── Header.astro      ← Sticky nav with mobile menu
    │   └── Footer.astro      ← Full footer with city links
    │
    └── pages/
        ├── index.astro                    ← Homepage
        ├── [slug].astro                   ← 75 city pages (dynamic)
        ├── [stateSlug].astro              ← 5 state pages (dynamic)
        ├── get-quote.astro                ← Quote form page
        ├── services/index.astro           ← Services page
        ├── about/index.astro              ← About page
        ├── contact/index.astro            ← Contact page
        └── blog/index.astro               ← Blog listing page
```

---

## 🚀 Quick Start (Developer Commands)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Opens at http://localhost:4321

# 3. Build for production
npm run build
# → Output in /dist folder

# 4. Preview production build
npm run preview
```

---

## ⚙️ Installation Requirements

| Requirement   | Version  |
|---------------|----------|
| Node.js       | 18.14+   |
| npm           | 9+       |
| Astro         | 5.7+     |
| Tailwind CSS  | 3.4+     |

---

## 📝 HOW TO EDIT — Most Common Changes

### 1. Change Phone Number
**File:** `src/data/cities.ts`
```ts
export const CONTACT = {
  phone: '+917731074075',          // ← Change here
  phoneDisplay: '+91 77310 74075', // ← Display format
  whatsapp: '917731074075',        // ← Without +
  ...
};
```
This automatically updates phone across ALL pages (header, footer, floating buttons, forms).

---

### 2. Change Business Address
**File:** `src/data/cities.ts`
```ts
export const CONTACT = {
  address: 'BV Nagar, Nellore, Andhra Pradesh', // ← Edit
  pincode: '524004',                             // ← Edit
  mapLink: 'https://maps.google.com/?q=...',    // ← Update Google Maps link
};
```

---

### 3. Add or Edit a City Page
**File:** `src/data/cities.ts` — add to the `cities` array:
```ts
{
  slug: 'packers-movers-CITYNAME',     // URL slug (lowercase, hyphens)
  name: 'CityName',
  state: 'AP',                          // AP | TS | TN | KA | KL
  district: 'District Name',
  lat: 17.123,                          // GPS latitude
  lng: 80.456,                          // GPS longitude
  population: '0.5M',
  description: 'Short city description',
  metaTitle: 'Best Packers and Movers in CityName | PackersHub',
  metaDescription: '160 char SEO description...',
  h1: 'Packers and Movers in CityName',
  intro: 'Long-form intro paragraph...',
  highlights: ['Service 1', 'Service 2', 'Service 3', 'Service 4'],
  faqs: [
    { q: 'Question 1?', a: 'Answer 1.' },
    { q: 'Question 2?', a: 'Answer 2.' },
  ],
  nearbyAreas: ['Area1', 'Area2', 'Area3'],
},
```
The `[slug].astro` page automatically generates the city page.

---

### 4. Edit Homepage Content
**File:** `src/pages/index.astro`
- Edit `services[]` array for service cards
- Edit `testimonials[]` for customer reviews
- Edit `faqs[]` for FAQ section
- Edit `stats[]` for counter numbers

---

### 5. Add a Blog Post
**File:** Create `src/pages/blog/YOUR-SLUG.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';
---
<BaseLayout
  title="Your Blog Title | PackersHub"
  description="160-char SEO description"
  canonical="https://packershub.in/blog/your-slug/"
>
  <Header slot="header" />
  <article class="container section max-w-3xl prose">
    <h1>Blog Title</h1>
    <p>Your content here...</p>
  </article>
  <Footer slot="footer" />
</BaseLayout>
```

Then add to `src/pages/blog/index.astro` posts array to show in listing.

---

### 6. Update Open Graph Image
Replace: `public/og-default.jpg` (1200×630px, JPG)
- Create city-specific OG images at `public/og-CITYNAME.jpg`
- Reference in city page: `ogImage="/og-CITYNAME.jpg"`

---

### 7. Connect Google Analytics / GTM
**File:** `src/layouts/BaseLayout.astro`
- Uncomment the GTM script block
- Replace `GTM-XXXXXXX` with your GTM container ID

```astro
<!-- UNCOMMENT AND REPLACE ID: -->
<script type="text/partytown">
  (function(w,d,s,l,i){ ... 'GTM-XXXXXXX'); // ← Your GTM ID
</script>
```

---

### 8. Connect Form Submissions (FormSubmit)
**File:** `src/pages/get-quote.astro` and `src/pages/contact/index.astro`
- Update `action` URL: `https://formsubmit.co/YOUR-EMAIL@domain.com`
- Update `_next` redirect to your thank-you page URL
- First submission requires email verification from FormSubmit

**Alternative: Use Netlify Forms**
Add `netlify` attribute to form tag if hosting on Netlify:
```html
<form netlify name="quote-form" ...>
```

---

## 🌐 Deployment Guide

### Option A: Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```
Set build command: `npm run build`
Set output directory: `dist`

### Option B: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Option C: Shared Hosting (cPanel)
```bash
npm run build
# Upload /dist folder contents to public_html
```

---

## 🔍 SEO Checklist After Deployment

| Task | File to Update |
|------|---------------|
| Submit sitemap | https://packershub.in/sitemap-index.xml → Google Search Console |
| Verify robots.txt | https://packershub.in/robots.txt |
| Add Google Analytics | BaseLayout.astro → uncomment GTM |
| Update GSTIN | cities.ts → BUSINESS.gstin |
| Add real OG image | public/og-default.jpg |
| Add logo PNG | public/logo.png (used in Schema.org) |
| Submit to Bing | Bing Webmaster Tools |
| Set up Google My Business | maps.google.com/business |

---

## 🎨 Design System — Color Customization

**File:** `tailwind.config.mjs`

```js
brand: {
  500: '#f97316',  // ← Primary orange — change this for full rebrand
  600: '#ea6c0a',  // ← Hover state
}
```

**File:** `src/styles/global.css`
```css
:root {
  --color-brand: #f97316;  /* ← Single source of truth */
}
```

---

## 📦 Adding New Integrations

### Add Sanity CMS (already in package.json)
```bash
npm install @sanity/astro @sanity/client
```
Follow: https://www.sanity.io/docs/astro

### Add React Components
```bash
npm install @astrojs/react react react-dom
```
Add to `astro.config.mjs` integrations: `react()`

### Add Image Optimization
Astro has built-in image optimization. Use:
```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/hero.jpg';
---
<Image src={myImage} alt="Hero" width={1200} height={630} />
```

---

## 🔧 Environment Variables

Create `.env` file in project root:
```env
# Analytics
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_GA_ID=G-XXXXXXXXXX

# Forms (if using custom backend)
FORM_ENDPOINT=https://api.packershub.in/contact

# Sanity CMS (optional)
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-token
```

Access in `.astro` files:
```astro
---
const gtmId = import.meta.env.PUBLIC_GTM_ID;
---
```

---

## 📊 Performance Optimization Tips

1. **Images**: Use Astro's `<Image>` component — auto-converts to WebP
2. **Fonts**: Already preloaded in `BaseLayout.astro` using `rel="preload"`
3. **CSS**: Tailwind automatically purges unused CSS in build
4. **JS**: Minimal JS — only intersection observers for animations
5. **Compression**: `@astrojs/compress` handles HTML/CSS/JS minification
6. **Sitemap**: Auto-generated at `/sitemap-index.xml`

---

## 📞 Support

**PackersHub HQ:** BV Nagar, Nellore, AP 524004
**Phone:** +91 77310 74075
**Website:** https://packershub.in

---
*Generated by PackersHub Dev Team | Astro 5 | Tailwind CSS 3*
