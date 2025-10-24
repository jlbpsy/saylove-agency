import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              SayLove Agency
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('unique')} className="text-sm font-semibold text-primary hover:text-secondary transition-smooth">
              Pourquoi
            </button>
            <button onClick={() => scrollToSection('engagements')} className="text-sm font-semibold text-primary hover:text-secondary transition-smooth">
              Engagements
            </button>
            <button onClick={() => scrollToSection('formules')} className="text-sm font-semibold text-primary hover:text-secondary transition-smooth">
              Formules
            </button>
            <button onClick={() => scrollToSection('temoignages')} className="text-sm font-semibold text-primary hover:text-secondary transition-smooth">
              Témoignages
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-semibold text-primary hover:text-secondary transition-smooth">
              Contact
            </button>
          </div>
          
          <Button variant="default" asChild>
            <a href="https://calendly.com/jlbpsy/rdv" target="_blank" rel="noopener noreferrer">
              Prendre RDV
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
