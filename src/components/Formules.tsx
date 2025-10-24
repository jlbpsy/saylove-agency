import { Card, CardContent } from "@/components/ui/card";

const formules = [
  {
    title: "Standard",
    description: "Ecoute de vos demandes + Questionnaire de profil perso et de recherche + Elaboration de votre profil + on vous contacte très régulièrement + on vous trouve le premier profil compatible + on s'occupe de la rencontre. Vous bénéficiez de mini. 7 rencontres sur 6 mois + accès privilégié à nos speed datings."
  },
  {
    title: "Premium",
    description: "Formule standard + Coachings collectifs : Coaching psychologique Collectif (travail sur vos failles qui conduisent aux échecs amoureux répétitifs) + Coaching comportemental (comment interagir lors de la rencontre et après, les erreurs à ne plus faire) + Coaching vestimentaire + Coaching sportif si besoin.",
    highlight: true
  },
  {
    title: "VIP",
    description: "Accompagnement complet et sur mesure : Formule Premium + tous les Coaching personnalisés + 10 rencontres mini. sur un an + bilan conjugal approfondi avec la personne qui vous convient, Coaching de couple préventif, Suivi supplémentaire de 6 mois du couple."
  }
];

const Formules = () => {
  return (
    <section id="formules" className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground mb-16">Nos formules</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {formules.map((formule, index) => (
            <Card key={index} className={`gradient-card border-border/50 hover:shadow-romantic transition-smooth ${formule.highlight ? 'ring-2 ring-primary' : ''}`}>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-foreground text-2xl font-bold">{formule.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {formule.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formules;
