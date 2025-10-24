import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <h1 className="text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            SayLove Agency — rencontres authentiques & durables
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Une approche scientifique et bienveillante portée par Jean-Luc Beaumont, docteur en psychologie et spécialiste du couple pour <strong className="text-primary">les 25-75 ans.</strong>
          </p>
          
          <Button variant="default" size="xl" asChild className="hover-glow">
            <a href="https://calendly.com/jlbpsy/rdv" target="_blank" rel="noopener noreferrer">
              Prendre un rendez-vous offert de 30 min.
            </a>
          </Button>
        </div>
        
        <div className="relative mt-12 rounded-3xl overflow-hidden shadow-romantic h-[400px] md:h-[500px] group">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img
            src={heroImage}
            alt="Couple amoureux dans un champ de fleurs au coucher du soleil"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
