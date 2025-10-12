import { Brain, Users, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Algorithmes Scientifiques",
    description: "Nos algorithmes basés sur la psychologie et les neurosciences analysent plus de 150 critères de compatibilité pour vous trouver le partenaire idéal."
  },
  {
    icon: Users,
    title: "Accompagnement Personnalisé",
    description: "Une équipe d'experts vous guide à chaque étape, de la création de votre profil à votre première rencontre."
  },
  {
    icon: Shield,
    title: "Sécurité & Confidentialité",
    description: "Vos données sont protégées par les plus hauts standards de sécurité. Profils vérifiés et confidentialité garantie."
  },
  {
    icon: Sparkles,
    title: "Résultats Prouvés",
    description: "94% de nos membres trouvent une relation durable. Notre approche scientifique fait toute la différence."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-foreground">Notre Approche Scientifique</h2>
          <p className="text-lg text-muted-foreground">
            La science au service de votre bonheur. Découvrez comment nous transformons la recherche de l'amour.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
