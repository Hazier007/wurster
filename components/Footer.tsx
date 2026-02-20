import Link from 'next/link'
import { ShieldCheckIcon, PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const navigation = {
  diensten: [
    { name: 'Doorgeeflades', href: '/diensten#doorgeeflades' },
    { name: 'Kogelwerende Oplossingen', href: '/diensten#kogelwerend' },
    { name: 'Intercomsystemen', href: '/diensten#intercom' },
    { name: 'Maatwerk', href: '/diensten#maatwerk' },
  ],
  bedrijf: [
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
    { name: 'Sitemap', href: '/sitemap' },
    { name: 'Privacy Beleid', href: '/privacy' },
  ],
  legal: [
    { name: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-primary-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Wurster Security</span>
                <span className="text-sm text-gray-400">Security Tools BV</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Specialist in professionele beveiligingsoplossingen. Van doorgeeflades tot kogelwerende systemen - 
              wij leveren maatwerk security producten voor banken, apotheken en bedrijven.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon className="h-4 w-4 text-primary-500" />
                <span className="text-sm">Koningin Astridlaan 54a, 9230 Wetteren</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon className="h-4 w-4 text-primary-500" />
                <a href="tel:+32093666603" className="text-sm hover:text-primary-400 transition-colors">
                  +32 (0)9 366 66 03
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="h-4 w-4 text-primary-500" />
                <a href="mailto:info@security-tools.be" className="text-sm hover:text-primary-400 transition-colors">
                  info@security-tools.be
                </a>
              </div>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Diensten
            </h3>
            <ul className="space-y-2">
              {navigation.diensten.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Bedrijf
            </h3>
            <ul className="space-y-2">
              {navigation.bedrijf.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              {navigation.legal.map((item) => (
                <div key={item.name}>
                  <Link href={item.href} className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © {currentYear} Security Tools BV. Alle rechten voorbehouden.
            </p>
            <div className="mt-2 md:mt-0">
              <p className="text-xs text-gray-500">
                Webdesign door{' '}
                <a 
                  href="https://hazier.be" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  hazier.be
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}