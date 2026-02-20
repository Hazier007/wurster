import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  BuildingOfficeIcon,
  IdentificationIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Contact - Neem Contact Op Voor Beveiligingsoplossingen',
  description: 'Neem contact op met Wurster Security (Security Tools BV) voor professionele beveiligingsoplossingen. Bel +32 (0)9 366 66 03 of bezoek ons in Wetteren.',
}

const contactInfo = [
  {
    icon: BuildingOfficeIcon,
    title: 'Bedrijfsnaam',
    details: ['Security Tools BV', 'BTW: BE 0123.456.789']
  },
  {
    icon: MapPinIcon,
    title: 'Adres',
    details: ['Koningin Astridlaan 54a', '9230 Wetteren', 'België']
  },
  {
    icon: PhoneIcon,
    title: 'Telefoon',
    details: ['+32 (0)9 366 66 03', 'Ma-Vr: 8:00 - 17:00']
  },
  {
    icon: EnvelopeIcon,
    title: 'E-mail',
    details: ['info@security-tools.be', 'Reactie binnen 24u']
  },
  {
    icon: ClockIcon,
    title: 'Openingstijden',
    details: ['Maandag - Vrijdag: 8:00 - 17:00', 'Weekend: Op afspraak']
  },
  {
    icon: IdentificationIcon,
    title: 'Contact Persoon',
    details: ['Kristof Ponnet', 'Security Specialist']
  }
]

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-20">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                <span className="text-primary-400">Contact</span> Opnemen
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Heeft u vragen over onze beveiligingsoplossingen of wilt u een offerte aanvragen? 
                Neem gerust contact met ons op. Wij helpen u graag verder.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-dark-800">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info) => (
                <div 
                  key={info.title}
                  className="bg-dark-700 rounded-lg p-6 border border-dark-600 hover:border-primary-500/30 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                      <info.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, index) => (
                      <p 
                        key={index}
                        className={`${index === 0 ? 'text-white font-medium' : 'text-gray-300'}`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                  Stuur Ons Een Bericht
                </h2>
                <p className="text-gray-300 mb-8">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op. 
                  Voor spoedeisende zaken kunt u ons direct bellen.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="voornaam" className="block text-sm font-medium text-white mb-2">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        id="voornaam"
                        name="voornaam"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Uw voornaam"
                      />
                    </div>
                    <div>
                      <label htmlFor="achternaam" className="block text-sm font-medium text-white mb-2">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        id="achternaam"
                        name="achternaam"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Uw achternaam"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bedrijf" className="block text-sm font-medium text-white mb-2">
                      Bedrijf
                    </label>
                    <input
                      type="text"
                      id="bedrijf"
                      name="bedrijf"
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="uw.email@voorbeeld.be"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoon" className="block text-sm font-medium text-white mb-2">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        id="telefoon"
                        name="telefoon"
                        className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="+32 ..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="onderwerp" className="block text-sm font-medium text-white mb-2">
                      Onderwerp *
                    </label>
                    <select
                      id="onderwerp"
                      name="onderwerp"
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Selecteer een onderwerp</option>
                      <option value="offerte">Offerte Aanvragen</option>
                      <option value="doorgeeflades">Doorgeeflades & Geldkommen</option>
                      <option value="kogelwerend">Kogelwerende Oplossingen</option>
                      <option value="intercom">Intercomsystemen</option>
                      <option value="maatwerk">Maatwerk Oplossingen</option>
                      <option value="service">Service & Onderhoud</option>
                      <option value="algemeen">Algemene Vraag</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="bericht" className="block text-sm font-medium text-white mb-2">
                      Uw bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-vertical"
                      placeholder="Beschrijf uw vraag of project zo gedetailleerd mogelijk..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-dark-500 rounded bg-dark-600"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-300">
                      Ik ga akkoord met de{' '}
                      <a href="/privacy" className="text-primary-400 hover:text-primary-300 transition-colors">
                        privacy voorwaarden
                      </a>
                      {' '}en{' '}
                      <a href="/algemene-voorwaarden" className="text-primary-400 hover:text-primary-300 transition-colors">
                        algemene voorwaarden
                      </a>
                      . *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Bericht Versturen
                  </button>
                </form>
              </div>

              {/* Direct Contact & Map */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                  Direct Contact
                </h2>
                
                <div className="bg-dark-700 rounded-lg p-8 border border-dark-600 mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Voor Spoedeisende Zaken
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Heeft u een urgent beveiligingsprobleem of bent u slachtoffer van een inbraak? 
                    Bel ons direct voor snelle hulp en advies.
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="tel:+32093666603"
                      className="flex items-center p-4 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors group"
                    >
                      <PhoneIcon className="h-6 w-6 text-white mr-3" />
                      <div>
                        <div className="text-white font-semibold">+32 (0)9 366 66 03</div>
                        <div className="text-primary-100 text-sm">Bel nu voor directe hulp</div>
                      </div>
                    </a>
                    
                    <a 
                      href="mailto:info@security-tools.be"
                      className="flex items-center p-4 bg-dark-600 hover:bg-dark-500 rounded-lg transition-colors group"
                    >
                      <EnvelopeIcon className="h-6 w-6 text-primary-500 mr-3" />
                      <div>
                        <div className="text-white font-semibold">info@security-tools.be</div>
                        <div className="text-gray-400 text-sm">E-mail voor offerte aanvragen</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Location Map Placeholder */}
                <div className="bg-dark-700 rounded-lg p-8 border border-dark-600">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Onze Locatie
                  </h3>
                  <div className="bg-dark-600 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-dark-500">
                    <div className="text-center">
                      <MapPinIcon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                      <p className="text-white font-medium mb-2">Koningin Astridlaan 54a</p>
                      <p className="text-gray-400">9230 Wetteren, België</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Google Maps integratie beschikbaar
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-gray-300 text-sm mb-2">
                      <strong>Bereikbaarheid:</strong>
                    </p>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li>• Gemakkelijk bereikbaar vanaf E40</li>
                      <li>• Parking beschikbaar voor bezoekers</li>
                      <li>• Op afspraak ook buiten kantooruren</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}