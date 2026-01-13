import { useEffect, useRef } from 'react';
import { MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';

const horarios = [
  { dia: 'Segunda a Sexta:',  horario: '08:00 às 17:00' },
  { dia: 'Sábado:', horario: '08:00 às 12:00' },
  { dia: 'Domingo e Feriados:', horario: 'Fechado' },
];

const Localizacao = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="localizacao" ref={sectionRef} className="py-24 bg-bege-claro">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-4 reveal">
            Onde Estamos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 reveal">
            Localização
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto reveal" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="reveal-left">
            {/* Address Card */}
            <div className="bg-card p-8 rounded-sm shadow-card mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua. Matilde, Qd,61, Lt.07 – Av.Boa Nova, <br />
                    Prof.Jamil/GO – CEP 75645-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-terracota flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    {horarios.map((item) => (
                      <div key={item.dia} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{item.dia}</span>
                        <span className="text-foreground font-medium">{item.horario}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How to get there */}
            <div className="bg-card p-8 rounded-sm shadow-card mb-8">
              <h3 className="font-display text-xl text-foreground mb-4">Como Chegar</h3>
              <p className="text-muted-foreground mb-4">
                Estamos localizados no coração de Professor Jamil, proximo a 
                Prefeitura Municipal da cidade tendo vagas de estacionamento a frente do Cartorio.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Na Avenida da Prefeitura Municipal
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Proximo ao Batalhão da Polícia Militar
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Atras da Avenida do Hotel Doura Ponte
                </li>
              </ul>
            </div>

            {/* Map Button */}
            <a
              href="https://maps.app.goo.gl/JbDenqYKYe92hjiL9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <Navigation className="w-5 h-5" />
              <span>Abrir no Google Maps</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Map */}
          <div className="reveal-right">
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-card bg-muted">
              <iframe
                title="Localização do Cartório Alvarenga"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15240.923753505178!2d-49.2635816!3d-17.2560587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935f738059e5e6a3%3A0xc51ee70cbba158c7!2sTabelionato%20de%20Notas%2C%20Protestos%20e%20Registros%20de%20Professor%20Jamil-GO!5e0!3m2!1spt-BR!2sbr!4v1767789806142!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Mapa ilustrativo. Atualize com a localização exata do cartório.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
