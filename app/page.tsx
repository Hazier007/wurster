import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  ShieldCheckIcon, 
  CurrencyEuroIcon, 
  ChatBubbleLeftRightIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Doorgeeflades & Geldkommen',
    description: 'Veilige doorgeefsystemen voor banken, apotheken en retail. Verschillende maten en uitvoeringen beschikbaar.',
    icon: CurrencyEuroIcon,
    href: '/diensten#doorgeeflades',
    features: ['Pendellade', 'Schuiflade', 'Gevellade', 'Auto-lade']
  },
  {
    name: 'Kogelwerende Oplossingen',
    description: 'Kogelwerende balieramen en loketten volgens EN 1522 normen (BR4-BR7). Maximum veiligheid voor risico-locaties.',
    icon: ShieldCheckIcon,
    href: '/diensten#kogelwerend',
    features: ['BR4 tot BR7', 'Kogelwerend glas', 'Veiligheidsdeuren', 'Balieramen']
  },
  {
    name: 'Intercomsystemen',
    description: 'Professionele intercomsystemen voor loketten en beveiligde communicatie. Kristalheldere audio kwaliteit.',
    icon: ChatBubbleLeftRightIcon,
    href: '/diensten#intercom',
    features: ['Loketintercom', 'Handsfree communicatie', 'Geluidsreductie', 'Eenvoudige bediening']
  },
  {
    name: 'Maatwerk Oplossingen',
    description: 'Volledig aangepaste security producten volgens uw specificaties. DIN EN ISO 9001:2008 gecertifieerd.',
    icon: CogIcon,
    href: '/diensten#maatwerk',
    features: ['Materiaalsluis', 'Koffersluis', 'Compleetsystemen', 'Persoonlijk ontwerp']
  }
]

const benefits = [
  'DIN EN ISO 9001:2008 gecertifieerd',
  'Meer dan 50 jaar ervaring',
  '50 gespecialiseerde vaklui',
  'Modern machinepark',
  'Maatwerk oplossingen',
  'Snelle levering'
]

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/70"></div>
          <div className="relative section-container py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
                Professionele <span className="text-primary-400">Beveiligings</span>oplossingen
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Specialist in doorgeeflades, kogelwerende systemen en maatwerk security producten. 
                Vertrouwd door banken, apotheken en bedrijven in heel Europa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Gratis Offerte Aanvragen
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/diensten" className="btn-secondary text-lg px-8 py-4">
                  Bekijk Onze Diensten
                </Link>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-dark-800">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
                Onze Specialiteiten
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Van eenvoudige doorgeeflades tot complexe kogelwerende systemen - 
                wij leveren de juiste beveiligingsoplossing voor elke situatie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.name}
                  className="group bg-dark-700 rounded-xl p-8 hover:bg-dark-600 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 border border-dark-600 hover:border-primary-500/30"
                >
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-white font-heading">
                      {service.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors font-semibold"
                  >
                    Meer informatie
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-dark-900">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                  Waarom Kiezen Voor <span className="text-primary-400">Wurster Security?</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Met meer dan 50 jaar ervaring zijn wij dé specialist in beveiligingsoplossingen. 
                  Ons team van 50 vaklui en modern machinepark garanderen kwaliteit en betrouwbaarheid.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/over-ons" className="btn-primary">
                    Meer Over Ons
                  </Link>
                  <a href="tel:+32093666603" className="btn-secondary">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Direct Bellen
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-500/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-300 mb-4">Jaar Ervaring</div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-400 mb-1">50</div>
                        <div className="text-sm text-gray-400">Gespecialiseerde Vaklui</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-400 mb-1">100%</div>
                        <div className="text-sm text-gray-400">ISO Gecertifieerd</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-400">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-400 mb-1">∞</div>
                        <div className="text-sm text-gray-400">Maatwerk</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Klaar Voor Een Veiligere Toekomst?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Laat ons u helpen met de juiste beveiligingsoplossing. 
              Vraag vandaag nog een gratis offerte aan of neem contact op voor advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg"
              >
                Gratis Offerte Aanvragen
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:+32093666603"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-lg"
              >
                <PhoneIcon className="mr-2 h-5 w-5" />
                +32 (0)9 366 66 03
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}