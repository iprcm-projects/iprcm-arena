import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import beachTennis from "@/assets/beach-tennis.jpg";
import beachVolleyball from "@/assets/beach-volleyball.jpg";
import tableTennis from "@/assets/table-tennis.jpg";

const sports = [
  {
    title: "Beach Tennis",
    image: beachTennis,
    description: "Diversão na areia com raquetes e bola",
    link: "#", // Substituir com link real
  },
  {
    title: "Vôlei de Areia",
    image: beachVolleyball,
    description: "Jogo em equipe cheio de energia",
    link: "#", // Substituir com link real
  },
  {
    title: "Tênis de Mesa",
    image: tableTennis,
    description: "Reflexos rápidos e precisão",
    link: "#", // Substituir com link real
  },
];

const Sports = () => {
  return (
    <section id="sports" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Modalidades e Inscrições
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha sua modalidade favorita e participe do festival de inauguração
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sports.map((sport, index) => (
            <div 
              key={sport.title}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={sport.image} 
                  alt={sport.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{sport.title}</h3>
                <p className="text-muted-foreground">{sport.description}</p>
                
                <Button 
                  className="w-full bg-primary hover:bg-accent group-hover:scale-105 transition-transform"
                  onClick={() => window.open(sport.link, '_blank')}
                >
                  Inscreva-se
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sports;
