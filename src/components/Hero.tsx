import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Compatibilité Scientifique</span>
            </div>
            
            <h1 className="text-foreground">
              Trouvez l'Amour avec la Science
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Saylove Agency utilise des algorithmes scientifiques avancés pour vous connecter avec des partenaires vraiment compatibles. Notre approche basée sur la recherche garantit des relations durables et épanouissantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Commencer Maintenant
              </Button>
              <Button variant="outline" size="xl">
                En Savoir Plus
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">94%</div>
                <div className="text-sm text-muted-foreground">Taux de compatibilité</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">2500+</div>
                <div className="text-sm text-muted-foreground">Couples formés</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-3xl font-bold text-primary">15 ans</div>
                <div className="text-sm text-muted-foreground">D'expérience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 gradient-romantic rounded-3xl blur-3xl opacity-20"></div>
            <img
              src={heroImage}
              alt="Couple heureux trouvé grâce à Saylove Agency"
              className="relative rounded-3xl shadow-romantic w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
