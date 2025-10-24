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
    <section id="unique" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-4 mb-16 text-center animate-fade-in-up">
          <h2 className="text-foreground">Ce qui rend SayLove Agency unique</h2>
          <h3 className="text-2xl md:text-3xl text-primary">(Vous n'aurez cela nulle part ailleurs)</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-hover hover-lift group overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-foreground text-2xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
