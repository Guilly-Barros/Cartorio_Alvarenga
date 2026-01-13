import { useEffect, useRef } from 'react';
import valoresBg from '@/assets/valores-bg.png';

const timelineEvents = [
  {
    year: 'Inicio',
    title: 'Raízes que Sustentam',
    description: 'A caminhada da Dra. Suzana Alvarenga nasce do que é eterno: fé, família e amor. São esses valores que sustentam seus dias, inspiram suas escolhas e dão sentido a cada passo.',
  },
  {
    year: '2010',
    title: 'Servir Antes de Liderar',
    description: 'Antes de assumir um cartório, ela aprendeu a servir com excelência. No Tribunal de Justiça do Estado de Goiás, atuou como assessora da Corregedoria, unindo técnica, responsabilidade e sensibilidade.',
  },
  {
    year: '2024',
    title: 'Um Sonho Realizado',
    description: 'Em 2024, um sonho se tornou realidade: a aprovação no concurso e a honra de atuar como Tabeliã em Mundo Novo-GO. Desde julho, entregou dedicação e carinho em cada atendimento, construindo confiança com trabalho sério.',
  },
  {
    year: '2025',
    title: 'Um Ciclo Encerra, Outro Inicia',
    description: 'Em 2025, iniciou um novo capítulo rumo ao Cartório Único de Professor Jamil-GO. Hoje, em 2026, segue oferecendo serviços com segurança jurídica, agilidade e qualidade — e essa história continua, com você e nossa equipe.',
  },
];

const Historia = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="historia" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <img src={valoresBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-4 reveal">Tradição & Confiança</span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 reveal">
            Nossa História
          </h2>
          <div className="w-20 h-1 bg-accent mb-8 reveal" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed reveal-left">
              O <strong>Cartório Alvarenga</strong>, localizado no Estado de Goiás e liderado por 
              Suzana Estevam de Almeida Alvarenga, tem como objetivo oferecer serviços extrajudiciais 
              de alta qualidade, com foco em <em>segurança jurídica, agilidade e simplicidade</em>.
            </p>
            <p className="text-muted-foreground leading-relaxed reveal-left" style={{ transitionDelay: '0.1s' }}>
              A marca busca consolidar seu nome como sinônimo de profissionalismo, honestidade e 
              acessibilidade, enquanto moderniza e sofistica seu atendimento e instalações. Atendendo 
              a um público diversificado, incluindo empresas e clientes do setor agro, o cartório 
              deseja refletir uma imagem séria, moderna e minimalista.
            </p>
            <p className="text-muted-foreground leading-relaxed reveal-left" style={{ transitionDelay: '0.2s' }}>
              O principal desafio do projeto é criar uma Identidade Visual que integre Tradição e 
              Modernidade, harmonizando a seriedade e a confiança tradicionalmente associadas aos 
              cartórios com a modernidade e acessibilidade que nossa comunidade merece.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className="timeline-item relative pl-8 pb-12 last:pb-0 reveal-right"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="timeline-dot" />
                <div className="bg-card p-6 rounded-sm shadow-soft hover-lift">
                  <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-accent/20 text-accent-foreground rounded-sm mb-3">
                    {event.year}
                  </span>
                  <h3 className="font-display text-xl text-foreground mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 text-center">
          <h3 className="font-display text-3xl text-foreground mb-12 reveal">Nossos Valores</h3>
          <div className="flex flex-wrap justify-center gap-6 reveal" style={{ transitionDelay: '0.2s' }}>
            {['Confiabilidade', 'Agilidade', 'Segurança Jurídica', 'Modernidade', 'Acessibilidade', 'Honestidade'].map((value) => (
              <span
                key={value}
                className="px-6 py-3 bg-terracota/10 text-terracota border border-terracota/20 rounded-full text-sm tracking-wide hover:bg-terracota hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Historia;
