import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  ShieldCheckIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CogIcon,
  AcademicCapIcon,
  GlobeEuropeAfricaIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Over Ons - Meer Dan 50 Jaar Ervaring in Beveiliging',
  description: 'Ontdek de geschiedenis van Wurster Security (Security Tools BV). Meer dan 50 jaar ervaring, 50 gespecialiseerde vaklui en DIN EN ISO 9001:2008 gecertificeerd.',
}

const milestones = [
  {
    year: '1970',
    title: 'Oprichting Walter Wurster GmbH',
    description: 'Start als kleine metaalbewerking in Duitsland'
  },
  {
    year: '1985',
    title: 'Specialisatie in Security',
    description: 'Focus op beveiligingsoplossingen voor banken'
  },
  {
    year: '1995',
    title: 'ISO Certificering',
    description: 'DIN EN ISO 9001 kwaliteitscertificering behaald'
  },
  {
    year: '2005',
    title: 'Uitbreiding naar België',
    description: 'Security Tools BV opgericht in Wetteren'
  },
  {
    year: '2010',
    title: 'Technologische Innovatie',
    description: 'Investering in modern machinepark en R&D'
  },
  {
    year: '2020',
    title: 'Marktleider Benelux',
    description: 'Erkend als specialist in kogelwerende systemen'
  }
]

const values = [
  {
    icon: ShieldCheckIcon,
    title: 'Kwaliteit & Veiligheid',
    description: 'Elk product wordt getest volgens internationale normen. Veiligheid staat altijd voorop in ons ontwerp en productieproces.'
  },
  {
    icon: UserGroupIcon,
    title: 'Expertise & Ervaring',
    description: 'Ons team van 50+ specialisten heeft decennia ervaring in de beveiligingsbranche en blijft zich continu ontwikkelen.'
  },
  {
    icon: CogIcon,
    title: 'Maatwerk & Innovatie',
    description: 'We luisteren naar uw specifieke behoeften en ontwikkelen oplossingen die perfect aansluiten bij uw situatie.'
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: 'Internationale Standaarden',
    description: 'Al onze producten voldoen aan de strengste Europese en internationale veiligheidsnormen en certificeringen.'
  }
]

const certifications = [
  'DIN EN ISO 9001:2008',
  'EN 1522 BR4-BR7',
  'CE Markering',
  'VdS Gecertificeerd',
  'ANSI/UL Standards'
]

export default function OverOnsPage() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-20">
          <div className="section-container">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
                Meer Dan <span className="text-primary-400">50 Jaar</span> Ervaring
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Van een kleine metaalbewerking tot marktleider in beveiligingsoplossingen. 
                Ontdek het verhaal achter Wurster Security en waarom bedrijven ons vertrouwen.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-dark-800">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                  Ons Verhaal
                </h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    Wurster Security begon meer dan 50 jaar geleden als Walter Wurster GmbH in 
                    Leinfelden-Echterdingen (Stuttgart), Duitsland. Wat startte als een kleine 
                    metaalbewerking groeide uit tot een gespecialiseerde producent van 
                    beveiligingsoplossingen.
                  </p>
                  <p>
                    In 2005 breidden we uit naar België met Security Tools BV in Wetteren. 
                    Deze strategische locatie stelt ons in staat om klanten in de hele Benelux 
                    en daarbuiten optimaal te bedienen.
                  </p>
                  <p>
                    Vandaag de dag staan we bekend om onze hoogwaardige doorgeeflades, 
                    kogelwerende systemen en maatwerk beveiligingsoplossingen. Onze producten 
                    worden gebruikt door banken, apotheken, overheidsinstellingen en bedrijven 
                    door heel Europa.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 border border-primary-500/20">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
                      <div className="text-sm text-gray-300">Jaar Ervaring</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-400 mb-2">50</div>
                      <div className="text-sm text-gray-300">Vaklui</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-400 mb-2">1000+</div>
                      <div className="text-sm text-gray-300">Projecten</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                      <div className="text-sm text-gray-300">Support</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-primary-500/20">
                    <p className="text-primary-300 font-semibold mb-2">
                      Contact Persoon
                    </p>
                    <p className="text-white text-lg font-medium">Kristof Ponnet</p>
                    <p className="text-gray-300 text-sm">Security Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-dark-900">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                Onze <span className="text-primary-400">Geschiedenis</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Van humble beginnings tot marktleider - de belangrijkste mijlpalen in onze ontwikkeling.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-500/30"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={milestone.year}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <div className="bg-dark-700 rounded-lg p-6 border border-dark-600">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold text-primary-400 mr-4">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-semibold text-white">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-dark-800">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                Onze <span className="text-primary-400">Waarden</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Deze kernwaarden drijven ons dagelijks werk en bepalen hoe wij onze klanten bedienen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-dark-700 rounded-lg p-8 border border-dark-600 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="p-3 bg-primary-500/10 rounded-lg mr-4 flex-shrink-0">
                      <value.icon className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white font-heading">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Standards */}
        <section className="py-20 bg-dark-900">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                  Certificering & <span className="text-primary-400">Kwaliteit</span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Kwaliteit is geen toeval bij Wurster Security. Al onze processen en producten 
                  voldoen aan de strengste internationale normen en worden regelmatig geauditeerd 
                  door onafhankelijke instanties.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <AcademicCapIcon className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-300">Gecertificeerd personeel</span>
                  </div>
                  <div className="flex items-center">
                    <BuildingOfficeIcon className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-300">Modern machinepark</span>
                  </div>
                  <div className="flex items-center">
                    <CogIcon className="h-5 w-5 text-primary-500 mr-3" />
                    <span className="text-gray-300">Kwaliteitscontrole op elk product</span>
                  </div>
                </div>
                
                <Link href="/contact" className="btn-primary">
                  Vraag Meer Informatie
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="bg-dark-700 rounded-lg p-8 border border-dark-600">
                <h3 className="text-xl font-semibold text-white mb-6 text-center">
                  Onze Certificeringen
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{cert}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-dark-600">
                  <p className="text-sm text-gray-400 text-center">
                    Alle certificeringen worden jaarlijks geauditeerd en bijgewerkt volgens de laatste normen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Klaar Om Samen Te Werken?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Ontdek waarom honderden bedrijven vertrouwen op Wurster Security voor hun beveiligingsoplossingen. 
              Laat ons u helpen met de juiste oplossing voor uw situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-lg"
              >
                Neem Contact Op
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/diensten"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors text-lg"
              >
                Bekijk Onze Diensten
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}