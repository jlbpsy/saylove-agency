import { Card, CardContent } from "@/components/ui/card";

const engagements = [
  {
    number: "1",
    title: "Séance offerte d'écoute",
    description: "Échange initial pour comprendre vos besoins par un psychologue spécialiste du couple."
  },
  {
    number: "2",
    title: "Questionnaire approfondi",
    description: "Test complet pour un matching pertinent avec un nombre conséquent de personnes dans notre base (800 autour de Lille !)."
  },
  {
    number: "3",
    title: "Accompagnement à la rencontre",
    description: "Briefing et débriefing par un expert. Selon la formule choisie, coachings collectifs ou individuels, nombre minimum de personnes présentées."
  }
];

const Engagements = () => {
  return (
    <section id="engagements" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-foreground mb-16 text-center animate-fade-in-up">Nos engagements</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {engagements.map((engagement, index) => (
            <Card key={index} className="gradient-card border-2 border-transparent hover:border-primary/20 hover:shadow-hover hover-lift group overflow-hidden">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-romantic rounded-2xl flex items-center justify-center mb-6 shadow-romantic">
                  <span className="text-3xl font-bold text-white">{engagement.number}</span>
                </div>
                <h3 className="text-foreground text-xl font-bold">{engagement.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {engagement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
