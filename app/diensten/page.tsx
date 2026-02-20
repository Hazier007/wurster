import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  CurrencyEuroIcon, 
  ShieldCheckIcon, 
  ChatBubbleLeftRightIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Onze Diensten - Professionele Beveiligingsoplossingen',
  description: 'Ontdek onze complete range beveiligingsoplossingen: doorgeeflades, kogelwerende systemen, intercomsystemen en maatwerk security producten voor banken en bedrijven.',
}

const services = [
  {
    id: 'doorgeeflades',
    name: 'Doorgeeflades & Geldkommen',
    icon: CurrencyEuroIcon,
    description: 'Veilige doorgeefsystemen voor banken, apotheken en retail met verschillende uitvoeringen.',
    longDescription: 'Onze doorgeefsystemen bieden een veilige manier om geld, documenten en kleine objecten door te geven tussen klant en medewerker. Alle systemen zijn ontworpen voor maximale veiligheid en gebruiksgemak.',
    products: [
      {
        name: 'Pendellade Systemen',
        description: 'Klassieke pendellade voor veilige overdracht',
        features: ['Automatische vergrendeling', 'Roestvrij staal', 'Verschillende maten', 'Anti-terugslag mechanisme']
      },
      {
        name: 'Schuiflade Systemen',
        description: 'Horizontaal schuivende laden voor gemakkelijke toegang',
        features: ['Soepele beweging', 'Stille werking', 'Verwijderbare lade', 'Aangepaste afmetingen']
      },
      {
        name: 'Gevellade Systemen',
        description: 'Speciaal voor apotheken en drive-through loketten',
        features: ['Weerbestendige uitvoering', 'Geïntegreerde verlichting', 'Afstandsbediening', 'Temperatuurbestendig']
      },
      {
        name: 'Auto-lade Systemen',
        description: 'Automatische doorgeefsystemen met elektrische bediening',
        features: ['Volautomatische werking', 'Programmeerbare cyclus', 'Veiligheidssensoren', 'Noodstop functie']
      }
    ]
  },
  {
    id: 'kogelwerend',
    name: 'Kogelwerende Oplossingen',
    icon: ShieldCheckIcon,
    description: 'Kogelwerende balieramen en loketten volgens EN 1522 normen voor maximum bescherming.',
    longDescription: 'Onze kogelwerende systemen voldoen aan de strengste internationale normen (EN 1522 BR4-BR7) en bieden bescherming tegen verschillende dreigingsniveaus. Ideaal voor banken, overheidsinstellingen en high-risk locaties.',
    products: [
      {
        name: 'Kogelwerende Balieramen',
        description: 'Volledig geïntegreerde kogelwerende balies',
        features: ['EN 1522 BR4-BR7 gecertifieerd', 'Geïntegreerde intercom', 'Doorgeefsysteem', 'Maatwerk ontwerp']
      },
      {
        name: 'Kogelwerend Glas',
        description: 'Hoogwaardige kogelwerende beglazing',
        features: ['Multi-layer constructie', 'Kristalheldere zicht', 'UV-bestendig', 'Verschillende diktes']
      },
      {
        name: 'Veiligheidsdeuren',
        description: 'Kogelwerende toegangsdeuren en sluizen',
        features: ['Meerpunts vergrendeling', 'Paniekhardware', 'Toegangscontrole integratie', 'Brandveilig']
      },
      {
        name: 'Complete Loketsystemen',
        description: 'All-in-one beveiligde loketoplossingen',
        features: ['Geïntegreerd ontwerp', 'Alle beveiligingselementen', 'Professionele installatie', 'Onderhoud service']
      }
    ]
  },
  {
    id: 'intercom',
    name: 'Intercomsystemen',
    icon: ChatBubbleLeftRightIcon,
    description: 'Kristalheldere communicatie voor loketten en beveiligde omgevingen.',
    longDescription: 'Onze intercomsystemen zorgen voor perfecte communicatie tussen klant en medewerker, zelfs bij kogelwerende beglazing. Met geavanceerde geluidstechnologie en gebruiksvriendelijke bediening.',
    products: [
      {
        name: 'Loket Intercomsystemen',
        description: 'Speciaal ontworpen voor loketten en balies',
        features: ['Hands-free communicatie', 'Noise-cancelling technologie', 'Volumecontrole', 'Eenvoudige installatie']
      },
      {
        name: 'Digitale Intercom',
        description: 'Moderne digitale communicatiesystemen',
        features: ['Digitale signaalverwerking', 'Meerdere zones', 'Opname functie', 'Netwerk integratie']
      },
      {
        name: 'Emergency Intercom',
        description: 'Noodcommunicatie voor kritieke situaties',
        features: ['Direct alarm verbinding', 'Batterij backup', 'Robuuste constructie', '24/7 beschikbaarheid']
      },
      {
        name: 'Draadloze Intercom',
        description: 'Flexibele draadloze communicatie oplossingen',
        features: ['Geen bedrading nodig', 'Mobiele units', 'Lange bereik', 'Meerdere kanalen']
      }
    ]
  },
  {
    id: 'maatwerk',
    name: 'Maatwerk Oplossingen',
    icon: CogIcon,
    description: 'Volledig aangepaste security producten volgens uw exacte specificaties.',
    longDescription: 'Elk bedrijf heeft unieke beveiligingsbehoeften. Ons team van ervaren engineers en vaklui ontwerpt en produceert volledig aangepaste oplossingen die perfect aansluiten bij uw specifieke vereisten.',
    products: [
      {
        name: 'Materiaalsluis Systemen',
        description: 'Grote objecten veilig doorgeven',
        features: ['Verschillende formaten', 'Dubbele deuren systeem', 'Automatische vergrendeling', 'Toegangscontrole']
      },
      {
        name: 'Koffersluizen',
        description: 'Veilige overdracht van koffers en pakketten',
        features: ['X-ray integratie mogelijk', 'Explosiebestendige opties', 'Tracking systeem', 'Audit trail']
      },
      {
        name: 'Complete Beveiligingssystemen',
        description: 'Geïntegreerde security oplossingen',
        features: ['Ontwerp op maat', 'Alle componenten geïntegreerd', 'Professionele installatie', 'Training inbegrepen']
      },
      {
        name: 'Speciale Projecten',
        description: 'Unieke oplossingen voor specifieke behoeften',
        features: ['Persoonlijk ontwerp', 'Prototype ontwikkeling', 'Testing & certificering', 'Volledige projectbegeleiding']
      }
    ]
  }
]

export default function DienstenPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-20">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Onze <span className="text-primary-400">Diensten</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Van eenvoudige doorgeeflades tot complexe kogelwerende systemen - 
                ontdek onze complete range aan professionele beveiligingsoplossingen.
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section 
            key={service.id}
            id={service.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-dark-800' : 'bg-dark-900'}`}
          >
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-primary-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white font-heading">
                      {service.name}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.longDescription}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-primary">
                      Offerte Aanvragen
                    </Link>
                    <a href="tel:+32093666603" className="btn-secondary">
                      Direct Bellen
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {service.products.map((product) => (
                    <div 
                      key={product.name}
                      className="bg-dark-700 rounded-lg p-6 border border-dark-600 hover:border-primary-500/30 transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {product.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-400">
                            <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Niet Gevonden Wat U Zoekt?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Ons team ontwikkelt graag een maatwerk oplossing die perfect aansluit bij uw specifieke beveiligingsbehoeften.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg"
              >
                Bespreek Uw Behoeften
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/over-ons"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-lg"
              >
                Meer Over Wurster
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}