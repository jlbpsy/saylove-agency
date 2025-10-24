import { Brain, Users, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Matching scientifique",
    description: "Test psychologique approfondi et algorithme de compatibilité avec 800 personnes autour de Lille (difficile de trouver mieux !)"
  },
  {
    icon: Users,
    title: "Accompagnement par un Dr. en psychologie",
    description: "Diagnostic complet et selon la formule, coaching pour travailler vos blocages relationnels et optimisation de la durabilité de votre prochain couple."
  },
  {
    icon: Shield,
    title: "Sécurité & confidentialité",
    description: "Vérification d'identité et protection de vos données."
  }
];

const Features = () => {
  return (
    <section id="unique" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 space-y-2">
          <h2 className="text-foreground">Ce qui rend SayLove Agency unique</h2>
          <h3 className="text-foreground text-xl">(Vous n'aurez cela nul part ailleurs)</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-romantic transition-smooth">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 gradient-romantic rounded-xl flex items-center justify-center shadow-romantic">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
