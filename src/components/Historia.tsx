import { useEffect, useRef } from 'react';
import valoresBg from '@/assets/valores-bg.png';

const timelineEvents = [
  {
    year: 'Início',
    title: 'Raízes que Sustentam',
    description: 'A história da Dra. Suzana Alvarenga é marcada por fé, família e propósito — valores que guiam cada etapa da sua caminhada e do seu trabalho.',
  },
  {
    year: '2010',
    title: 'Servir antes de liderar',
    description: 'Por anos, atuou como servidora do Tribunal de Justiça do Estado de Goiás, exercendo com excelência a função de assessora da Corregedoria.',
  },
  {
    year: '2024',
    title: 'Um Ciclo Encerra, Outro Começa',
    description: 'Em 2024, um sonho se tornou realidade: foi aprovada no concurso e assumiu como Tabeliã no Cartório Único de Mundo Novo-GO, onde atuou com dedicação e carinho desde julho de 2024.',
  },
  {
    year: '2026',
    title: 'Excelência que Continua',
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
              O Cartório Alvarenga nasceu com o propósito fundamental de ser mais do que um balcão de serviços: nascemos para ser o porto seguro jurídico da comunidade de Professor Jamil. Nossa trajetória é construída diariamente sobre o pilar da confiança, unindo a tradição do rigor normativo à modernidade de um atendimento ágil e resolutivo.
            </p>
            <p className="text-muted-foreground leading-relaxed reveal-left" style={{ transitionDelay: '0.1s' }}>
              Desde o início, entendemos que cada documento que passa por nossas mãos representa um sonho, uma conquista ou a segurança de uma família. Por isso, consolidamos nossa atuação com foco em soluções complexas — como REURB, inventários e regularização rural — sempre buscando prevenir litígios e oferecer clareza onde houver dúvida
            </p>
            <p className="text-muted-foreground leading-relaxed reveal-left" style={{ transitionDelay: '0.2s' }}>
              Nossa evolução é marcada pelo aperfeiçoamento técnico contínuo e pela crença de que a tecnologia deve servir para humanizar, não para afastar. Somos uma equipe unida pelo compromisso com a ética, a discrição e a transparência, trabalhando incansavelmente para impulsionar o desenvolvimento social da nossa região.
              <br />
              <br />
              Hoje, o Cartório Alvarenga é referência em excelência, mantendo o olhar atento às necessidades de cada usuário e o coração voltado para o bem-estar da nossa cidade.
              <br />
              <br />
              Hoje, em 2026, atua no Cartório Único de Professor Jamil-GO com excelência, agilidade e eficiência. E essa história continua sendo construída todos os dias — com trabalho sério, equipe comprometida e você.
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
