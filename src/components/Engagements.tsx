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
    <section id="engagements" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground mb-16">Nos engagements</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {engagements.map((engagement, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:shadow-romantic transition-smooth">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl font-bold text-primary/20">{engagement.number}</div>
                <h3 className="text-foreground font-semibold">{engagement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
