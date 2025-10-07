import { Calendar, Clock, AlertTriangle } from "lucide-react";

const Festival = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-primary-foreground text-primary rounded-full text-sm font-semibold mb-4">
            🎉 EVENTO ESPECIAL
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Inauguração
          </h2>

          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto mt-8">
            Participe de um momento especial de celebração, alegria e comunhão esportiva.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl md:text-2xl font-light">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6" />
              <span>10/10/2025 (sexta-feira)</span>
            </div>
            
            <div className="hidden md:block text-3xl">•</div>
            
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6" />
              <span>19h</span>
            </div>
          </div>
          
          
          
          <div className="mt-12 p-4 bg-warning text-warning-foreground rounded-lg inline-flex items-start gap-4 max-w-2xl">
            <AlertTriangle className="h-4 w-6 flex-shrink-0 mt-1" />
            <p className="text-left font-medium">
              Em caso de chuva, o evento será cancelado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festival;
