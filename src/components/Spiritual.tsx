import { BookOpen } from "lucide-react";

const Spiritual = () => {
  return (
    <section className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-spiritual text-spiritual-foreground mb-6">
            <BookOpen className="h-8 w-8" />
          </div>
          
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-4xl font-light text-spiritual leading-relaxed italic">
              "Melhor é serem dois do que um, porque têm melhor paga do seu trabalho."
            </p>
            
            <footer className="text-xl md:text-2xl text-muted-foreground font-medium">
              — Eclesiastes 4:9
            </footer>
          </blockquote>
          
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A IPRCM Arena é um reflexo deste versículo: um lugar onde juntos somos mais fortes, 
              onde a comunhão nos edifica e onde celebramos a união através do esporte e da amizade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spiritual;
