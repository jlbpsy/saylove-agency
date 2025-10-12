import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 gradient-romantic rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 gradient-romantic rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Rejoignez-nous Aujourd'hui</span>
          </div>
          
          <h2 className="text-foreground">
            Prêt à Rencontrer Votre Âme Sœur ?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ne laissez plus le hasard décider de votre vie amoureuse. Rejoignez des milliers de célibataires qui ont fait confiance à la science pour trouver l'amour.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Créer Mon Profil
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Discuter Avec un Conseiller
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            ✓ Inscription gratuite  ✓ Profils vérifiés  ✓ Confidentialité garantie
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
