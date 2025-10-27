import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="text-4xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                Politique de confidentialité
              </h1>

              <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    1. Collecte et utilisation des données personnelles
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Les informations que vous communiquez à <strong>SayLove Agency</strong> sont strictement confidentielles et couvertes par le secret professionnel. Elles sont collectées dans le cadre de votre inscription et de votre utilisation de nos services, notamment pour :
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>établir les pré-sélections et propositions de mise en relation ;</li>
                    <li>vous transmettre les informations demandées ;</li>
                    <li>réaliser des statistiques internes anonymisées ;</li>
                    <li>améliorer la qualité de nos services et de votre expérience utilisateur.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Vos données ne sont jamais transmises à des tiers non affiliés à SayLove Agency, sauf obligation légale ou partenaire technique strictement nécessaire à la prestation (hébergement, maintenance). Aucune donnée n'est utilisée à des fins commerciales sans votre consentement explicite.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Conditions d'éligibilité pour bénéficier de nos services :
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>être âgé(e) d'au moins 18 ans ;</li>
                    <li>être libre de tout engagement matrimonial.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    La base légale du traitement repose sur votre <strong>consentement</strong> et sur l'exécution du contrat entre vous et SayLove Agency.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    2. Consentement
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En validant un questionnaire SayLove, vous acceptez que les données personnelles communiquées soient traitées par SayLove Agency afin de bénéficier de la pré-sélection personnalisée et des services associés.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    3. Durée de conservation
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Vos données sont conservées pendant toute la durée de votre relation avec SayLove Agency, puis archivées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale de conservation plus longue.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    4. Vos droits
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la Loi Informatique et Libertés, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Droit d'accès à vos données ;</li>
                    <li>Droit de rectification en cas d'erreur ou d'inexactitude ;</li>
                    <li>Droit d'opposition au traitement dans certains cas ;</li>
                    <li>Droit à l'effacement de vos données ("droit à l'oubli") ;</li>
                    <li>Droit à la portabilité de vos données ;</li>
                    <li>Droit à la limitation du traitement.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Pour exercer vos droits, vous pouvez contacter :
                  </p>
                  <div className="bg-muted/50 p-4 rounded-md text-sm text-muted-foreground">
                    <p>📧 <strong>contact@saylove.fr</strong></p>
                    <p className="mt-2">ou par courrier à :</p>
                    <p>SayLove Agency – Service Protection des Données<br/>
                    55 rue Jean sans peur<br/>
                    59800 Lille</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vous avez également la possibilité d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    5. Politique de cookies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Le site peut utiliser des cookies afin d'améliorer votre expérience de navigation et de mesurer l'audience du site. Certains cookies sont nécessaires au fonctionnement du site, d'autres sont optionnels (notamment ceux à caractère publicitaire).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Vous pouvez accepter ou refuser les cookies publicitaires à tout moment en cliquant sur le bouton prévu à cet effet sur le site, ou configurer votre navigateur pour bloquer les cookies, conformément à la documentation de votre appareil.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    6. Opposition au démarchage téléphonique
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conformément à la réglementation, vous pouvez vous inscrire gratuitement sur la liste d'opposition au démarchage téléphonique disponible sur le site officiel : <a href="https://www.bloctel.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.bloctel.gouv.fr</a>.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    7. Sécurité et confidentialité
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    SayLove Agency met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles, afin d'éviter toute perte, accès non autorisé, altération ou divulgation.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                    8. Mise à jour de la politique de confidentialité
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    La présente politique peut être modifiée à tout moment pour tenir compte des évolutions légales ou de nos pratiques. La version à jour est toujours disponible sur notre site internet.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Dernière mise à jour : 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
