import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Playfair_Display, Montserrat, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500'],
})

const elegantSeason = localFont({
  src: [
    { path: '../../public/fonts/ElegantSeasonSerif.woff2' },
    { path: '../../public/fonts/ElegantSeasonSerif.woff' },
  ],
  variable: '--font-elegant-season',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6f3ee',
}

export const metadata: Metadata = {
  title: 'Goldie Grace | Join the Insider List',
  description:
    'Get your free 5-Minute Face Guide and early access to Goldie Grace — personalized makeup mentorship from professional artists.',
  icons: { icon: '/goldie-grace-logo-gold-icon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${cormorant.variable} ${elegantSeason.variable}`}
    >
      <body className="min-h-screen bg-cream antialiased">{children}</body>
    </html>
  )
}
