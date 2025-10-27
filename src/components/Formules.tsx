import { Heart, Sparkles, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const formules = [
  {
    title: "Standard",
    description: "Ecoute de vos demandes + Questionnaire de profil perso et de recherche + Elaboration de votre profil + on vous contacte très régulièrement + on vous trouve le premier profil compatible + on s'occupe de la rencontre. Vous bénéficiez de mini. 7 rencontres sur 6 mois + accès privilégié à nos speed datings.",
    icon: Heart
  },
  {
    title: "Premium",
    description: "Formule standard + Coachings collectifs : Coaching psychologique Collectif (travail sur vos failles qui conduisent aux échecs amoureux répétitifs) + Coaching comportemental (comment interagir lors de la rencontre et après, les erreurs à ne plus faire) + Coaching vestimentaire + Coaching sportif si besoin.",
    highlight: true,
    icon: Sparkles
  },
  {
    title: "VIP",
    description: "Accompagnement complet et sur mesure : Formule Premium + tous les Coaching personnalisés + 10 rencontres mini. sur un an + bilan conjugal approfondi avec la personne qui vous convient, Coaching de couple préventif, Suivi supplémentaire de 6 mois du couple.",
    icon: Crown
  }
];

const Formules = () => {
  return (
    <section id="formules" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground mb-16 text-center">Nos formules</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {formules.map((formule, index) => (
            <div key={index} className="relative">
              {formule.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-2 rounded-full z-10">
                  <span className="text-primary-foreground font-bold text-sm">Populaire</span>
                </div>
              )}
              <Card className={`h-full ${
                formule.highlight ? 'border-2 border-primary' : ''
              }`}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-primary">{formule.title}</h3>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <formule.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {formule.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formules;
