import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Wurster Security - Professionele Beveiligingsoplossingen',
    template: '%s | Wurster Security'
  },
  description: 'Wurster Security (Security Tools BV) levert professionele beveiligingsoplossingen: doorgeeflades, kogelwerende balieramen, veiligheidsloketetten, intercomsystemen en maatwerk security producten.',
  keywords: ['beveiliging', 'security', 'doorgeeflades', 'kogelwerend', 'balieramen', 'loketten', 'intercom', 'geldkommen', 'veiligheid'],
  authors: [{ name: 'Security Tools BV' }],
  creator: 'Security Tools BV',
  publisher: 'Security Tools BV',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://wurster.be',
    siteName: 'Wurster Security',
    title: 'Wurster Security - Professionele Beveiligingsoplossingen',
    description: 'Professionele beveiligingsoplossingen: doorgeeflades, kogelwerende balieramen, veiligheidsloketetten en maatwerk security producten.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wurster Security - Professionele Beveiligingsoplossingen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wurster Security - Professionele Beveiligingsoplossingen',
    description: 'Professionele beveiligingsoplossingen voor banken, apotheken en bedrijven.',
    images: ['/og-image.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className="dark">
      <head>
        <link rel="canonical" href="https://wurster.be" />
        <meta name="geo.region" content="BE-OV" />
        <meta name="geo.placename" content="Wetteren" />
        <meta name="geo.position" content="51.0019;3.8834" />
        <meta name="ICBM" content="51.0019, 3.8834" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}