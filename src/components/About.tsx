const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Sobre a Arena
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            A <span className="font-semibold text-foreground">IPRCM Arena</span> nasceu como um espaço de convivência criado para 
            fortalecer a comunhão entre irmãos por meio do esporte, lazer e amizade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-background shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Comunhão</h3>
              <p className="text-muted-foreground">Fortalecendo laços entre irmãos</p>
            </div>
            
            <div className="p-6 rounded-lg bg-background shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Integração</h3>
              <p className="text-muted-foreground">Unindo pessoas através do esporte</p>
            </div>
            
            <div className="p-6 rounded-lg bg-background shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Alegria</h3>
              <p className="text-muted-foreground">Momentos de lazer e celebração</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
