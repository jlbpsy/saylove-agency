import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            SayLove Agency — rencontres authentiques & durables
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Une approche scientifique et bienveillante portée par Jean-Luc Beaumont, docteur en psychologie et spécialiste du couple pour <strong className="text-primary">les 25-75 ans.</strong>
          </p>
          
          <Button variant="default" size="xl" asChild>
            <a href="https://calendly.com/jlbpsy/rdv" target="_blank" rel="noopener noreferrer">
              Prendre un rendez-vous offert de 30 min.
            </a>
          </Button>
        </div>
        
        <div className="relative mt-12 rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
          <img
            src={heroImage}
            alt="Couple amoureux dans un champ de fleurs au coucher du soleil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
