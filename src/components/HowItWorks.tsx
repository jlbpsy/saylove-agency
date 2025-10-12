import { FileText, Users, Heart } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Créez Votre Profil",
    description: "Complétez notre questionnaire scientifique détaillé. Nos experts analysent vos réponses pour comprendre votre personnalité, vos valeurs et vos attentes."
  },
  {
    icon: Users,
    number: "02",
    title: "Recevez vos Matches",
    description: "Notre algorithme vous propose des profils hautement compatibles. Chaque match est accompagné d'un score de compatibilité détaillé."
  },
  {
    icon: Heart,
    number: "03",
    title: "Rencontrez Votre Match",
    description: "Échangez en toute sécurité sur notre plateforme. Nos conseillers vous accompagnent pour organiser votre première rencontre dans les meilleures conditions."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-foreground">Comment Ça Marche</h2>
          <p className="text-lg text-muted-foreground">
            Trois étapes simples vers une relation épanouissante
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent"></div>
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-romantic transition-smooth border border-border/50 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 gradient-romantic rounded-2xl flex items-center justify-center shadow-romantic">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="text-5xl font-bold text-primary/20">{step.number}</div>
                </div>
                
                <h3 className="text-foreground">{step.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
