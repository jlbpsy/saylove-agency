const Approach = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-romantic group">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=800&h=600&fit=crop"
              alt="Homme romantique tenant un bouquet de fleurs"
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-foreground leading-tight">Une approche personnalisée pour chaque rencontre</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chez SayLove Agency, nous croyons que chaque histoire d'amour est unique. Notre méthode combine l'expertise psychologique du Dr. Beaumont avec une approche humaine et chaleureuse.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous prenons le temps de vous connaître en profondeur pour vous proposer des rencontres qui ont du sens et qui correspondent vraiment à vos attentes et vos valeurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
