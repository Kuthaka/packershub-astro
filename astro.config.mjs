// astro.config.mjs — PackersHub Astro 5 Configuration
// ══════════════════════════════════════════════════════════════
// Optimized for: SEO 100/100 | GEO | AEO | AIO | SXO
// Author: PackersHub Dev Team
// ══════════════════════════════════════════════════════════════

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://packershub.in',
  trailingSlash: 'always',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),

    sitemap({
      customPages: [
        // Core pages
        'https://packershub.in/',
        'https://packershub.in/about/',
        'https://packershub.in/contact/',
        'https://packershub.in/services/',
        'https://packershub.in/blog/',
        'https://packershub.in/get-quote/',
        'https://packershub.in/track-shipment/',

        // State pages
        'https://packershub.in/packers-movers-andhra-pradesh/',
        'https://packershub.in/packers-movers-telangana/',
        'https://packershub.in/packers-movers-tamil-nadu/',
        'https://packershub.in/packers-movers-karnataka/',
        'https://packershub.in/packers-movers-kerala/',

        // Andhra Pradesh — 20 cities
        'https://packershub.in/packers-movers-visakhapatnam/',
        'https://packershub.in/packers-movers-vijayawada/',
        'https://packershub.in/packers-movers-guntur/',
        'https://packershub.in/packers-movers-nellore/',
        'https://packershub.in/packers-movers-kurnool/',
        'https://packershub.in/packers-movers-rajahmundry/',
        'https://packershub.in/packers-movers-kakinada/',
        'https://packershub.in/packers-movers-tirupati/',
        'https://packershub.in/packers-movers-eluru/',
        'https://packershub.in/packers-movers-ongole/',
        'https://packershub.in/packers-movers-anantapur/',
        'https://packershub.in/packers-movers-kadapa/',
        'https://packershub.in/packers-movers-srikakulam/',
        'https://packershub.in/packers-movers-vizianagaram/',
        'https://packershub.in/packers-movers-bhimavaram/',
        'https://packershub.in/packers-movers-machilipatnam/',
        'https://packershub.in/packers-movers-chittoor/',
        'https://packershub.in/packers-movers-narasaraopet/',
        'https://packershub.in/packers-movers-proddatur/',
        'https://packershub.in/packers-movers-tenali/',

        // Telangana — 14 cities
        'https://packershub.in/packers-movers-hyderabad/',
        'https://packershub.in/packers-movers-warangal/',
        'https://packershub.in/packers-movers-nizamabad/',
        'https://packershub.in/packers-movers-karimnagar/',
        'https://packershub.in/packers-movers-khammam/',
        'https://packershub.in/packers-movers-ramagundam/',
        'https://packershub.in/packers-movers-mahbubnagar/',
        'https://packershub.in/packers-movers-nalgonda/',
        'https://packershub.in/packers-movers-adilabad/',
        'https://packershub.in/packers-movers-suryapet/',
        'https://packershub.in/packers-movers-siddipet/',
        'https://packershub.in/packers-movers-miryalaguda/',
        'https://packershub.in/packers-movers-mancherial/',
        'https://packershub.in/packers-movers-jagtial/',

        // Tamil Nadu — 16 cities
        'https://packershub.in/packers-movers-chennai/',
        'https://packershub.in/packers-movers-coimbatore/',
        'https://packershub.in/packers-movers-madurai/',
        'https://packershub.in/packers-movers-trichy/',
        'https://packershub.in/packers-movers-salem/',
        'https://packershub.in/packers-movers-tirunelveli/',
        'https://packershub.in/packers-movers-vellore/',
        'https://packershub.in/packers-movers-erode/',
        'https://packershub.in/packers-movers-tiruppur/',
        'https://packershub.in/packers-movers-hosur/',
        'https://packershub.in/packers-movers-thanjavur/',
        'https://packershub.in/packers-movers-dindigul/',
        'https://packershub.in/packers-movers-nagercoil/',
        'https://packershub.in/packers-movers-kumbakonam/',
        'https://packershub.in/packers-movers-karur/',
        'https://packershub.in/packers-movers-thoothukudi/',

        // Karnataka — 15 cities
        'https://packershub.in/packers-movers-bengaluru/',
        'https://packershub.in/packers-movers-mysuru/',
        'https://packershub.in/packers-movers-hubballi/',
        'https://packershub.in/packers-movers-mangaluru/',
        'https://packershub.in/packers-movers-belagavi/',
        'https://packershub.in/packers-movers-davanagere/',
        'https://packershub.in/packers-movers-ballari/',
        'https://packershub.in/packers-movers-vijayapura/',
        'https://packershub.in/packers-movers-shivamogga/',
        'https://packershub.in/packers-movers-tumakuru/',
        'https://packershub.in/packers-movers-raichur/',
        'https://packershub.in/packers-movers-hassan/',
        'https://packershub.in/packers-movers-udupi/',
        'https://packershub.in/packers-movers-bidar/',
        'https://packershub.in/packers-movers-gadag/',

        // Kerala — 10 cities
        'https://packershub.in/packers-movers-thiruvananthapuram/',
        'https://packershub.in/packers-movers-kochi/',
        'https://packershub.in/packers-movers-kozhikode/',
        'https://packershub.in/packers-movers-thrissur/',
        'https://packershub.in/packers-movers-kollam/',
        'https://packershub.in/packers-movers-palakkad/',
        'https://packershub.in/packers-movers-alappuzha/',
        'https://packershub.in/packers-movers-malappuram/',
        'https://packershub.in/packers-movers-kannur/',
        'https://packershub.in/packers-movers-kottayam/',
      ],
      serialize(item) {
        // Priority mapping
        const priorities = {
          'https://packershub.in/': 1.0,
          'hyderabad': 0.95, 'bengaluru': 0.95, 'chennai': 0.95,
          'visakhapatnam': 0.9, 'vijayawada': 0.9, 'kochi': 0.9,
        };
        const freq = {
          'https://packershub.in/': 'daily',
          'blog': 'weekly',
        };

        let priority = 0.8;
        let changefreq = 'monthly';

        if (item.url === 'https://packershub.in/') { priority = 1.0; changefreq = 'daily'; }
        else if (item.url.includes('/blog')) { priority = 0.7; changefreq = 'weekly'; }
        else if (item.url.includes('/packers-movers-andhra') || item.url.includes('/packers-movers-telangana') ||
                 item.url.includes('/packers-movers-karnataka') || item.url.includes('/packers-movers-tamil') ||
                 item.url.includes('/packers-movers-kerala')) { priority = 0.85; changefreq = 'monthly'; }

        return { ...item, priority, changefreq, lastmod: new Date().toISOString().split('T')[0] };
      },
    }),

    mdx(),

    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),

    compress({
      CSS: true,
      HTML: true,
      Image: false, // Use Astro's built-in image optimization instead
      JavaScript: true,
      SVG: true,
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },

  image: {
    remotePatterns: [{ protocol: 'https' }],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro'],
          },
        },
      },
    },
    ssr: {
      noExternal: [],
    },
  },

  output: 'static',

  // Prefetch for SXO — instant navigation feel
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },

  experimental: {
    clientPrerender: true,
  },
});
