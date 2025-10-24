import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Hélène, 45 ans",
    text: "« J'ai enfin trouvé un amour équilibré grâce à SayLove. Je ne remercierai jamais assez le Dr. Jean-Luc Beaumont de m'avoir trouvé l'amour qui répond au doux prénom de Maxime. À L'époque j'étais sur les applis et je n'étais pas en phase avec moi-même. Avec les personnes que je rencontrais, ça clachait inévitablement à cause de mes vulnérabilités et de mon partenaire. Aujourd'hui je me sens plus équilibrée personnellement et dans notre couple avec Maxime depuis 2 ans.»",
    rating: 5
  },
  {
    name: "François, 36 ans",
    text: "« Un accompagnement sérieux et humain qui a changé ma vie. Je n'avais plus envie de prendre mon temps sur les appli . Les agences matrimoniales que j'avais essayées n'avaient que peu de personnes à me présenter. Je suis fier d'être le premier à avoir proposé à Jean-Luc Beaumont de me coacher personnellement et de me trouver l'amour. Je n'étais pas un cadeau, je le sais mais depuis 2 ans et 5 mois je me suis stabilisé avec Perrine, 34 ans. On s'aime énormément, on fait un tas d'activités à deux et on gère bien nos émotions…»",
    rating: 5
  },
  {
    name: "Karine, 54 ans",
    text: "« La deuxième rencontre a été la bonne. Je voulais une personne bien à tous égards et je n'ai jamais trouvé dans la vie réelle, ni sur les quelques applis soi-disant haut de gamme que j'ai fréquentées. J'ai même adhéré à une agence de rencontre et ils ne m'ont trouvé que trois personnes incompatibles en 6 mois ! Je sais que je suis très exigeante, mais ça me semble normal sur le plan amoureux. Quand j'ai fait appel à JL Beaumont, la deuxième rencontre a été la bonne. Nous sommes encore ensemble aujourd'hui (1an1/2).»",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground mb-16">Témoignages</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-romantic transition-smooth">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  {testimonial.text}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
