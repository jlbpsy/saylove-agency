

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <a 
            href="/politique-de-confidentialite" 
            className="text-sm hover:underline transition-smooth"
          >
            Politique de confidentialité
          </a>
          <p className="text-center">© 2025 SayLove Agency — Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
