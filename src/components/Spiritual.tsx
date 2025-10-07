import { BookOpen } from "lucide-react";

const Spiritual = () => {
  return (
    <section className="py-20 bg-gradient-spiritual">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-spiritual text-spiritual-foreground mb-6">
            <BookOpen className="h-6 w-6" />
          </div>
          
          <blockquote className="space-y-6">
            <p className="text-xl md:text-2xl font-light text-spiritual leading-relaxed italic">
              "Oh! quão bom e quão suave é que os irmãos vivam em união!"
            </p>
            
            <footer className="text-lg md:text-xl text-muted-foreground font-medium">
              — Salmos 133:1
            </footer>
          </blockquote>
          
          <div className="pt-8 max-w-2xl mx-auto">
            <p className="text-md text-muted-foreground leading-relaxed">
              A IPRCM Arena é um reflexo deste versículo: um ambiente dedicado à comunhão cristã, à edificação mútua e à celebração da unidade do corpo de Cristo por meio do esporte e do lazer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spiritual;
