import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Calendar, Shield, Clock, Award } from 'lucide-react';
import heroShadow from '@/assets/hero-shadow.png';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 15, y: y * 15 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const benefits = [
    { icon: Shield, title: 'Segurança Jurídica', desc: 'Documentos com validade legal garantida' },
    { icon: Clock, title: 'Agilidade', desc: 'Atendimento rápido e eficiente' },
    { icon: Award, title: 'Excelência', desc: 'Mais de 20 anos de tradição' },
  ];

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <div
        className="absolute inset-0 parallax-element"
        style={{
          backgroundImage: `url(${heroShadow})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-accent/20 animate-pulse-soft"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full border border-primary/10"
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 opacity-0 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm tracking-wide text-muted-foreground">Serventia Extrajudicial em Goiás</span>
          </div>

          {/* Main heading */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            Segurança Jurídica e
            <span className="block text-primary">Atendimento Humanizado</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Confiabilidade e modernidade ao seu alcance. Oferecemos serviços cartoriais 
            com agilidade, transparência e a excelência que você merece.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Falar no WhatsApp</span>
            </a>
            <a href="#contato" className="btn-secondary">
              <Calendar className="w-5 h-5" />
              <span>Agendar Atendimento</span>
            </a>
          </div>

          {/* Benefits cards */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-sm shadow-soft hover-lift cursor-default"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <benefit.icon className="w-10 h-10 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="text-xs tracking-widest text-muted-foreground uppercase">Explorar</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
