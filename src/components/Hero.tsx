import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import logoBranco from "@/assets/logo-branco.png";

const Hero = () => {
  const scrollToSports = () => {
    const sportsSection = document.getElementById('sports');
    sportsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})` }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="mb-8 flex flex-col items-center gap-6">
            <img 
              src={logoBranco} 
              alt="IPRCM Logo" 
              className="h-14 md:h-16 w-auto"
            />
            <h2 className="text-2xl md:text-3xl font-light text-primary-foreground tracking-wide">
              Mais que esporte, comunhão em movimento.
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Venha celebrar a inauguração da{" "}
            <span className="bg-primary-foreground text-primary px-4 py-2 inline-block mt-2">
              IPRCM Arena
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light max-w-2xl mx-auto">
            Um novo espaço de integração, comunhão e esporte para nossos membros.
          </p>
          
          <Button 
            onClick={scrollToSports}
            size="lg"
            className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8 py-6 transition-all hover:scale-105 shadow-elegant"
          >
            Veja as modalidades disponíveis
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
