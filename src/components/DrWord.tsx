import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DrWord = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-foreground mb-8">Le mot du Dr. Jean-Luc Beaumont</h2>
        
        <Card className="gradient-card border-border/50 shadow-romantic">
          <CardContent className="p-8 space-y-6">
            <h3 className="text-foreground text-2xl font-semibold">Aider à trouver l'amour.</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed italic">
              <p>
                « Pendant des années, j'ai vu des hommes et des femmes sincères accumuler <strong>les déceptions amoureuses</strong>. Ils passaient des heures sur les applications de rencontre, y trouvaient un peu d'excitation, beaucoup d'illusions… et, au final, peu de vraies relations. D'autres tentaient leur chance dans les agences matrimoniales, mais se heurtaient à un manque de profils et à des rencontres sans véritable compatibilité. Même quand une relation semblait prometteuse, les blessures du passé ou les difficultés de communication finissaient par la faire exploser.
              </p>
              
              <p>
                Je me suis dit qu'il devait exister une autre voie.
                <br />C'est ainsi que j'ai mis au point une méthode basée sur la psychologie et la compatibilité émotionnelle, pour donner toutes les chances à l'amour de durer. Aujourd'hui, plus de <strong>800 célibataires autour de Lille</strong> font partie de notre réseau, et chacun d'eux passe un <strong>test psychologique et sociologique de 400 questions.</strong> Ce test permet de comprendre les blessures inconscientes, les besoins profonds et les compétences conjugales à développer.
              </p>

              <p>
                Mon équipe et moi vous accompagnons à chaque étape : nous vous aidons à mieux vous connaître, à vous préparer à la rencontre et à guérir ce qui, jusqu'ici, sabotait vos relations. Puis, nous vous présentons la personne la plus compatible avec vous, selon vos critères et votre équilibre affectif.
              </p>

              <p>
                C'est une approche plus humaine, plus consciente, et surtout plus durable de la rencontre amoureuse.»
              </p>
            </div>
            
            <div className="pt-4">
              <div className="font-semibold text-foreground">Jean-Luc Beaumont, 2025</div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 space-y-4">
          <p className="text-muted-foreground">
            <a href="https://fr.wikipedia.org/wiki/Jean-Luc_Beaumont" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-smooth">
              Voir le parcours de Jean-Luc Beaumont
            </a>
          </p>
          <Button variant="default" size="xl" asChild>
            <a href="https://calendly.com/jlbpsy/rdv" target="_blank" rel="noopener noreferrer">
              Prendre un rendez-vous offert de 30 min.
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DrWord;
