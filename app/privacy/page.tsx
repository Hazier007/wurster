import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Beleid - Bescherming van Uw Gegevens',
  description: 'Privacy beleid van Security Tools BV. Lees hoe wij uw persoonlijke gegevens beschermen en verwerken volgens de GDPR wetgeving.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <main>
        <section className="py-20 bg-dark-800">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8 font-heading">
                Privacy Beleid
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-dark-700 rounded-lg p-6 mb-8 border border-dark-600">
                  <p className="text-gray-300 mb-4">
                    <strong>Laatst bijgewerkt:</strong> 20 februari 2026
                  </p>
                  <p className="text-gray-300">
                    Security Tools BV hecht groot belang aan de bescherming van uw privacy en de 
                    veiligheid van uw persoonsgegevens. Dit privacy beleid legt uit hoe wij uw 
                    gegevens verzamelen, gebruiken en beschermen.
                  </p>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      1. Wie zijn wij?
                    </h2>
                    <div className="text-gray-300">
                      <p className="mb-4">
                        Security Tools BV is verantwoordelijk voor de verwerking van uw persoonsgegevens.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Bedrijfsnaam: Security Tools BV</li>
                        <li>Adres: Koningin Astridlaan 54a, 9230 Wetteren</li>
                        <li>E-mail: info@security-tools.be</li>
                        <li>Telefoon: +32 (0)9 366 66 03</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      2. Welke gegevens verzamelen wij?
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>Wij kunnen de volgende gegevens verzamelen:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Contactgegevens (naam, e-mail, telefoon, adres)</li>
                        <li>Bedrijfsgegevens (bedrijfsnaam, BTW-nummer)</li>
                        <li>Communicatie (e-mails, formulieren, telefoongesprekken)</li>
                        <li>Website gebruik (cookies, IP-adres, browsergegevens)</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      3. Waarom verwerken wij uw gegevens?
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>Wij verwerken uw gegevens voor:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Het beantwoorden van uw vragen en verzoeken</li>
                        <li>Het opstellen van offertes en contracten</li>
                        <li>Het leveren van onze diensten en producten</li>
                        <li>Het onderhouden van klantrelaties</li>
                        <li>Het voldoen aan wettelijke verplichtingen</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      4. Hoe lang bewaren wij uw gegevens?
                    </h2>
                    <div className="text-gray-300">
                      <p className="mb-4">
                        Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden 
                        waarvoor zij werden verzameld, of zoals vereist door de wet.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Klantgegevens: 7 jaar na laatste contact</li>
                        <li>Factuurgegevens: 7 jaar (fiscale verplichting)</li>
                        <li>Website cookies: maximaal 2 jaar</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      5. Uw rechten
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>U heeft de volgende rechten betreffende uw persoonsgegevens:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Recht van inzage in uw gegevens</li>
                        <li>Recht op rectificatie van onjuiste gegevens</li>
                        <li>Recht op verwijdering van uw gegevens</li>
                        <li>Recht op beperking van de verwerking</li>
                        <li>Recht op dataportabiliteit</li>
                        <li>Recht van bezwaar tegen verwerking</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      6. Beveiliging
                    </h2>
                    <div className="text-gray-300">
                      <p className="mb-4">
                        Wij nemen passende technische en organisatorische maatregelen om uw 
                        persoonsgegevens te beschermen tegen verlies, diefstal, misbruik of 
                        ongeautoriseerde toegang.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      7. Contact
                    </h2>
                    <div className="text-gray-300">
                      <p className="mb-4">
                        Heeft u vragen over dit privacy beleid of wilt u gebruik maken van uw rechten? 
                        Neem dan contact met ons op:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>E-mail: info@security-tools.be</li>
                        <li>Telefoon: +32 (0)9 366 66 03</li>
                        <li>Post: Koningin Astridlaan 54a, 9230 Wetteren</li>
                      </ul>
                    </div>
                  </section>
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