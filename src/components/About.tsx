const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Sobre a Arena
          </h2>
          
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            A <span className="font-semibold text-foreground">IPRCM Arena</span> nasceu para ser um lugar de comunhão, onde nos reunimos para celebrar a bondade de Deus e edificar a nossa fé através do esporte e do lazer.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-lg bg-background shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Comunhão</h3>
              <p className="text-muted-foreground">Onde a igreja se reúne e fortalece laços</p>
            </div>
            
            <div className="p-6 rounded-lg bg-background shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Celebração</h3>
              <p className="text-muted-foreground">Um espaço onde reconhecemos e louvamos a graça que nos sustenta</p>
            </div>
            
            <div className="p-6 rounded-lg bg-background shadow-card hover:shadow-elegant transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Fortalecimento da Fé</h3>
              <p className="text-muted-foreground">Através do esporte, lazer e convivência espiritual.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
