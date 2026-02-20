# Wurster Security Website

Een moderne Next.js website voor Wurster Security (Security Tools BV) - specialist in professionele beveiligingsoplossingen.

## 🛡️ Over Wurster Security

Wurster Security is een gespecialiseerd bedrijf in beveiligingsoplossingen met meer dan 50 jaar ervaring. Wij leveren:

- Doorgeeflades & Geldkommen
- Kogelwerende Oplossingen (EN 1522 BR4-BR7)
- Intercomsystemen
- Maatwerk Beveiligingsproducten

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons & Lucide React
- **TypeScript**: Voor type safety
- **Deployment**: Vercel

## 🎨 Design Features

- Modern 2026 design met donker security thema
- Volledig responsive design
- Dark mode optimized
- Professional security/beveiligingsthema
- Nederlandse content
- SEO geoptimaliseerd

## 📱 Pagina's

- **Homepage**: Hero, diensten overzicht, bedrijfsinfo
- **Diensten**: Gedetailleerd overzicht van alle services
- **Over Ons**: Bedrijfsgeschiedenis en waarden
- **Contact**: Contactformulier en bedrijfsgegevens
- **Privacy & Voorwaarden**: GDPR compliant

## 🛠️ Development

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Production build
npm run build

# Production server
npm start
```

## 📧 Contact

**Security Tools BV**
- Adres: Koningin Astridlaan 54a, 9230 Wetteren
- Telefoon: +32 (0)9 366 66 03
- Email: info@security-tools.be
- Contact persoon: Kristof Ponnet

## 🏗️ Project Structure

```
/app
├── globals.css          # Global styles
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
├── diensten/           # Services page
├── over-ons/           # About page
├── contact/            # Contact page
├── privacy/            # Privacy policy
├── algemene-voorwaarden/ # Terms & conditions
├── sitemap.ts          # SEO sitemap
└── robots.ts           # SEO robots.txt

/components
├── Header.tsx          # Navigation header
└── Footer.tsx          # Footer with links

/public
└── (static assets)
```

## 🔧 Configuration

- **next.config.js**: Static export configuration
- **tailwind.config.js**: Custom security theme colors
- **tsconfig.json**: TypeScript configuration

## 📊 SEO Features

- Meta tags voor alle pagina's
- Open Graph tags
- Twitter Card tags
- Structured data
- XML sitemap
- robots.txt
- Canonical URLs

## 🎯 Key Features

- **Responsive Design**: Werkt perfect op alle devices
- **Performance**: Geoptimaliseerd voor snelle laadtijden
- **Accessibility**: WCAG richtlijnen gevolgd
- **SEO**: Volledig geoptimaliseerd voor zoekmachines
- **Security Theme**: Professioneel donker thema
- **Dutch Content**: Volledige Nederlandse website

## 🚀 Deployment

Het project is geconfigureerd voor automatische deployment naar Vercel:

```bash
npx vercel --prod --yes
```

## 📄 License

© 2026 Security Tools BV. Alle rechten voorbehouden.