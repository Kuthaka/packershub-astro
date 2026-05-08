// tailwind.config.mjs — PackersHub Design System
// Premium Light Theme | Orange Accent | South Indian Logistics Brand

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand Primary — Vibrant Orange (Energy, Action, South Indian warmth)
        brand: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',   // Primary CTA
          600: '#ea6c0a',   // Hover
          700: '#c2530a',
          800: '#9a3a12',
          900: '#7c2d12',
          950: '#431407',
        },
        // Deep Navy — Trust, Professionalism
        navy: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d9fe',
          300: '#a5bffc',
          400: '#819cf9',
          500: '#6174f4',
          600: '#4d55e8',
          700: '#3f3fcf',
          800: '#2d2da6',
          900: '#1a1a7a',
          950: '#0f0f52',
        },
        // Warm Neutral — Background system
        warm: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Success Green
        success: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        // WhatsApp green
        whatsapp: '#25D366',
      },

      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },

      fontSize: {
        'hero':   ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1':     ['clamp(2rem, 4vw, 3.5rem)',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2':     ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'h3':     ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body':    ['1rem',     { lineHeight: '1.7' }],
        'sm':     ['0.875rem', { lineHeight: '1.6' }],
        'xs':     ['0.75rem',  { lineHeight: '1.5' }],
      },

      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
        'container': '1.25rem',
      },

      maxWidth: {
        'container': '1280px',
        'prose-wide': '75ch',
      },

      borderRadius: {
        'xl':  '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },

      boxShadow: {
        'card':      '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 4px 12px -2px rgb(0 0 0 / 0.06)',
        'hover':     '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 20px 40px -8px rgb(0 0 0 / 0.12)',
        'brand':     '0 4px 14px 0 rgb(249 115 22 / 0.35)',
        'brand-lg':  '0 8px 30px 0 rgb(249 115 22 / 0.4)',
        'inner-sm':  'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'float':     '0 20px 60px -10px rgb(0 0 0 / 0.25)',
      },

      backgroundImage: {
        'hero-gradient':    'linear-gradient(135deg, #fff7ed 0%, #ffffff 40%, #f0f4ff 100%)',
        'orange-gradient':  'linear-gradient(135deg, #f97316 0%, #ea6c0a 100%)',
        'navy-gradient':    'linear-gradient(135deg, #1a1a7a 0%, #0f0f52 100%)',
        'card-gradient':    'linear-gradient(145deg, #ffffff 0%, #fafaf9 100%)',
        'mesh-orange':      'radial-gradient(at 40% 20%, #ffedd5 0px, transparent 50%), radial-gradient(at 80% 0%, #fed7aa 0px, transparent 50%), radial-gradient(at 0% 50%, #fff7ed 0px, transparent 50%)',
      },

      animation: {
        'fade-up':      'fadeUp 0.6s ease forwards',
        'fade-in':      'fadeIn 0.5s ease forwards',
        'slide-right':  'slideRight 0.6s ease forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':    'spin 20s linear infinite',
        'bounce-slow':  'bounce 3s infinite',
        'count-up':     'countUp 2s ease-out forwards',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        countUp: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    // Typography plugin for blog content
    require('@tailwindcss/typography') ?? {},
  ],
};
