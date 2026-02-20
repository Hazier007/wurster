import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - Security Tools BV',
  description: 'Algemene voorwaarden van Security Tools BV voor de levering van beveiligingsoplossingen, installatie en onderhoudsdiensten.',
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Header />
      
      <main>
        <section className="py-20 bg-dark-800">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8 font-heading">
                Algemene Voorwaarden
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <div className="bg-dark-700 rounded-lg p-6 mb-8 border border-dark-600">
                  <p className="text-gray-300 mb-4">
                    <strong>Laatst bijgewerkt:</strong> 20 februari 2026
                  </p>
                  <p className="text-gray-300">
                    Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes 
                    en overeenkomsten tussen Security Tools BV en haar klanten.
                  </p>
                </div>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 1 - Definities
                    </h2>
                    <div className="text-gray-300">
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Security Tools BV:</strong> de besloten vennootschap Security Tools BV, gevestigd te Koningin Astridlaan 54a, 9230 Wetteren, België.</li>
                        <li><strong>Klant:</strong> de natuurlijke of rechtspersoon die een overeenkomst aangaat met Security Tools BV.</li>
                        <li><strong>Producten:</strong> beveiligingsoplossingen, doorgeeflades, kogelwerende systemen en aanverwante producten.</li>
                        <li><strong>Diensten:</strong> installatie, onderhoud, reparatie en consultancy diensten.</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 2 - Toepasselijkheid
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen van 
                        Security Tools BV en op alle overeenkomsten tussen Security Tools BV en klant.
                      </p>
                      <p>
                        Afwijkingen van deze voorwaarden zijn alleen geldig indien uitdrukkelijk 
                        schriftelijk overeengekomen.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 3 - Offertes en Prijzen
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij 
                        anders vermeld. Prijzen zijn exclusief BTW en andere heffingen van 
                        overheidswege.
                      </p>
                      <p>
                        Security Tools BV behoudt zich het recht voor prijzen te wijzigen ten 
                        gevolge van wijzigingen in kosten van materialen, lonen of andere 
                        kostprijsbepalende factoren.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 4 - Levering
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        Levertermijnen zijn indicatief en niet bindend. Security Tools BV kan 
                        niet aansprakelijk worden gesteld voor vertraging in de levering.
                      </p>
                      <p>
                        Levering geschiedt franco af fabriek, tenzij uitdrukkelijk anders 
                        overeengekomen. Het risico van de goederen gaat over op de klant bij 
                        aflevering.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 5 - Betaling
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        Betaling dient te geschieden binnen 30 dagen na factuurdatum, tenzij 
                        anders overeengekomen. Bij overschrijding van de betalingstermijn is 
                        de klant van rechtswege in verzuim.
                      </p>
                      <p>
                        Bij niet-tijdige betaling zijn wij gerechtigd rente te rekenen van 1% 
                        per maand vanaf de vervaldatum.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 6 - Garantie
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        Security Tools BV geeft garantie op haar producten conform de 
                        wettelijke bepalingen en eventueel overeengekomen aanvullende garanties.
                      </p>
                      <p>
                        De garantie geldt niet voor schade ontstaan door normale slijtage, 
                        onoordeelkundig gebruik, gebrek aan onderhoud of wijzigingen aan het product.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 7 - Aansprakelijkheid
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        De aansprakelijkheid van Security Tools BV is beperkt tot de 
                        waarde van de geleverde goederen of diensten, met een maximum van 
                        de verzekerde som onder onze bedrijfsaansprakelijkheidsverzekering.
                      </p>
                      <p>
                        Security Tools BV is niet aansprakelijk voor indirecte schade, 
                        gevolgschade, gederfde winst of schade aan derden.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 8 - Eigendomsvoorbehoud
                    </h2>
                    <div className="text-gray-300">
                      <p>
                        Alle geleverde goederen blijven eigendom van Security Tools BV 
                        totdat de klant alle verplichtingen uit de overeenkomst volledig 
                        heeft voldaan.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 9 - Geschillen
                    </h2>
                    <div className="text-gray-300 space-y-4">
                      <p>
                        Op alle overeenkomsten is uitsluitend Belgisch recht van toepassing.
                      </p>
                      <p>
                        Geschillen worden voorgelegd aan de bevoegde rechter in het 
                        arrondissement waar Security Tools BV is gevestigd.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Artikel 10 - Contact
                    </h2>
                    <div className="text-gray-300">
                      <p className="mb-4">
                        Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Security Tools BV</li>
                        <li>Koningin Astridlaan 54a, 9230 Wetteren</li>
                        <li>Telefoon: +32 (0)9 366 66 03</li>
                        <li>E-mail: info@security-tools.be</li>
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