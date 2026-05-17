import type { Config } from 'tailwindcss'

// Tailwind v4 — theme tokens defined in globals.css via @theme {}
// This file is kept for content path configuration only.
const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
}

export default config
