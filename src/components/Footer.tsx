import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold gradient-romantic bg-clip-text text-transparent">
                Saylove Agency
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              L'agence de rencontre qui utilise la science pour créer des connexions authentiques et durables.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Matchmaking Premium</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Coaching Personnel</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Événements VIP</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Test de Compatibilité</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">À Propos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Notre Histoire</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Notre Méthode</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contact@saylove.fr" className="hover:text-primary transition-smooth">
                  contact@saylove.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+33123456789" className="hover:text-primary transition-smooth">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Saylove Agency. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-smooth">Mentions Légales</a>
            <a href="#" className="hover:text-primary transition-smooth">Confidentialité</a>
            <a href="#" className="hover:text-primary transition-smooth">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
