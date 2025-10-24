const Approach = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-romantic">
            <img
              src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?w=800&h=600&fit=crop"
              alt="Homme romantique tenant un bouquet de fleurs"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-foreground">Une approche personnalisée pour chaque rencontre</h2>
            <p className="text-muted-foreground leading-relaxed">
              Chez SayLove Agency, nous croyons que chaque histoire d'amour est unique. Notre méthode combine l'expertise psychologique du Dr. Beaumont avec une approche humaine et chaleureuse.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous prenons le temps de vous connaître en profondeur pour vous proposer des rencontres qui ont du sens et qui correspondent vraiment à vos attentes et vos valeurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
