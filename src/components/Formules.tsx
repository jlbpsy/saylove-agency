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
    <section id="formules" className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-foreground mb-16 text-center animate-fade-in-up">Nos formules</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {formules.map((formule, index) => (
            <div key={index} className="relative">
              {formule.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-romantic px-6 py-2 rounded-full shadow-glow z-10">
                  <span className="text-white font-bold text-sm">Populaire</span>
                </div>
              )}
              <Card className={`gradient-card border-2 hover:shadow-hover hover-lift group overflow-hidden h-full ${
                formule.highlight 
                  ? 'border-primary/20 hover:border-primary/40 md:-translate-y-4 shadow-romantic' 
                  : 'border-transparent hover:border-primary/30'
              }`}>
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">{formule.title}</h3>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      formule.title === 'VIP' 
                        ? 'bg-gradient-romantic' 
                        : 'bg-primary/10'
                    }`}>
                      <formule.icon className={`w-6 h-6 ${
                        formule.title === 'VIP' 
                          ? 'text-white' 
                          : 'text-primary'
                      }`} />
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
