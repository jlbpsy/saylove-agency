import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie & Marc",
    location: "Paris",
    text: "Après des années d'essais infructueux sur d'autres sites, Saylove Agency a tout changé. L'approche scientifique est incroyable, nous sommes vraiment compatibles sur tous les plans !",
    rating: 5,
    couple: true
  },
  {
    name: "Émilie D.",
    location: "Lyon",
    text: "Je ne croyais pas à la compatibilité scientifique au début, mais les résultats parlent d'eux-mêmes. J'ai trouvé quelqu'un qui me comprend vraiment. Merci Saylove !",
    rating: 5,
    couple: false
  },
  {
    name: "Thomas & Julie",
    location: "Bordeaux",
    text: "L'accompagnement personnalisé fait toute la différence. L'équipe nous a aidés à construire une vraie connexion avant même notre première rencontre. Nous sommes ensemble depuis 2 ans maintenant.",
    rating: 5,
    couple: true
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-foreground">Ils Ont Trouvé l'Amour</h2>
          <p className="text-lg text-muted-foreground">
            Des milliers de couples heureux grâce à notre approche scientifique
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-romantic transition-smooth">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary/30" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
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
