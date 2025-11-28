import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#e9d9c3',
        'cream-dark': '#d4c2a8',
        sand: '#d1c4a8',
        'sand-dark': '#b8aa8f',
        'gold-light': '#b39a6b',
        gold: '#c4a65a',
        'gold-dark': '#9d7e3a',
        'gold-darker': '#7a5f21',
        bronze: '#8a6e3d',
        'bronze-light': '#b5905e',
        'bronze-dark': '#6b5127',
        'deep-bronze': '#3d2e1a',
        charcoal: '#2a2420',
        ivory: '#faf7f2',
        'dark-brown': '#5a4a2a',
        burgundy: '#8b3a3a',
        'teal-elegant': '#2d5f5f',
        sage: '#7a8e7e',
        'warm-gray': '#8b8178',
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'Georgia', 'serif'],
        body: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(61, 46, 26, 0.08), 0 1px 2px rgba(61, 46, 26, 0.06)',
        'medium': '0 4px 6px rgba(61, 46, 26, 0.1), 0 2px 4px rgba(61, 46, 26, 0.08)',
        'large': '0 10px 15px rgba(61, 46, 26, 0.12), 0 4px 6px rgba(61, 46, 26, 0.1)',
        'elevated': '0 12px 24px rgba(61, 46, 26, 0.14), 0 6px 12px rgba(61, 46, 26, 0.1)',
        'gold': '0 4px 14px rgba(157, 126, 58, 0.3)',
        'glow': '0 0 20px rgba(196, 166, 90, 0.4)',
        'elegant': '0 4px 6px rgba(61, 46, 26, 0.08), 0 2px 4px rgba(61, 46, 26, 0.06)',
        'hover-elegant': '0 12px 24px rgba(61, 46, 26, 0.12), 0 6px 12px rgba(61, 46, 26, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;

