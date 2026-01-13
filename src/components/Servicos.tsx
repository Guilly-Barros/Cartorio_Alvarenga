import { useEffect, useRef, useState } from 'react';
import {
  FileText,
  Users,
  Home,
  Shield,
  PenTool,
  FileCheck,
  BookOpen,
  Building2,
  Car,
  Heart,
  FileSignature,
  Scale,
  X,
} from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  fullDesc: string;
}

const services: Service[] = [
  {
    icon: FileText,
    title: 'Escrituras Públicas',
    shortDesc: 'Compra, venda, doação e permuta de imóveis.',
    fullDesc: 'Elaboramos escrituras públicas de compra e venda, doação, permuta, usufruto, hipoteca e outras modalidades. Garantimos segurança jurídica em todas as transações imobiliárias, com atendimento personalizado e agilidade no processo.',
  },
  {
    icon: PenTool,
    title: 'Reconhecimento de Firma',
    shortDesc: 'Autenticação de assinaturas em documentos.',
    fullDesc: 'Realizamos o reconhecimento de firma por autenticidade ou semelhança, conferindo validade jurídica às suas assinaturas. Processo rápido e seguro, com verificação criteriosa da identidade do signatário.',
  },
  {
    icon: FileCheck,
    title: 'Autenticação de Cópias',
    shortDesc: 'Cópias autenticadas com fé pública.',
    fullDesc: 'Autenticamos cópias de documentos, conferindo-lhes o mesmo valor probante do original. Ideal para processos judiciais, administrativos e transações que exigem documentação oficial.',
  },
  {
    icon: Users,
    title: 'Procurações',
    shortDesc: 'Procurações públicas e substabelecimentos.',
    fullDesc: 'Lavramos procurações públicas para representação em atos diversos: compra e venda de imóveis, questões bancárias, processos judiciais, e muito mais. Orientamos sobre os poderes adequados para cada situação.',
  },
  {
    icon: BookOpen,
    title: 'Testamentos',
    shortDesc: 'Testamentos públicos e aprovação de cerrados.',
    fullDesc: 'Elaboramos testamentos públicos e realizamos a aprovação de testamentos cerrados, garantindo que sua vontade seja preservada e executada conforme a lei. Atendimento sigiloso e respeitoso.',
  },
  {
    icon: Home,
    title: 'Inventário Extrajudicial',
    shortDesc: 'Partilha de bens de forma rápida e segura.',
    fullDesc: 'Realizamos inventários extrajudiciais quando todos os herdeiros são maiores, capazes e concordes. Processo mais rápido e econômico que o judicial, com toda a segurança jurídica necessária.',
  },
  {
    icon: Heart,
    title: 'Divórcio Extrajudicial',
    shortDesc: 'Divórcio consensual em cartório.',
    fullDesc: 'Casais sem filhos menores ou incapazes podem se divorciar diretamente no cartório, de forma consensual. Processo ágil, discreto e com menor custo comparado ao processo judicial.',
  },
  {
    icon: Shield,
    title: 'Ata Notarial',
    shortDesc: 'Constatação de fatos com fé pública.',
    fullDesc: 'Elaboramos atas notariais para constatar fatos, situações ou estados de coisas. Ideal para preservar provas de conversas, publicações em redes sociais, estado de imóveis e outras situações relevantes.',
  },
  {
    icon: Building2,
    title: 'Registro de Imóveis',
    shortDesc: 'Registro e averbação de imóveis.',
    fullDesc: 'Processamos registros de aquisição, hipotecas, penhoras, e averbações de construções, demolições e outros atos. Mantemos a matrícula do imóvel sempre atualizada e regular.',
  },
  {
    icon: Car,
    title: 'Apostilamento',
    shortDesc: 'Apostila de Haia para documentos.',
    fullDesc: 'Realizamos o apostilamento de documentos brasileiros para uso em países signatários da Convenção de Haia. Procedimento que substitui a legalização consular tradicional.',
  },
  {
    icon: FileSignature,
    title: 'Assinatura Digital',
    shortDesc: 'Certificação e assinatura eletrônica.',
    fullDesc: 'Oferecemos serviços de assinatura digital e certificação eletrônica, permitindo a realização de atos notariais à distância com toda a segurança jurídica e validade legal.',
  },
  {
    icon: Scale,
    title: 'Usucapião Extrajudicial',
    shortDesc: 'Regularização de propriedade em cartório.',
    fullDesc: 'Processamos usucapião extrajudicial para regularização de imóveis. Procedimento mais célere que o judicial, realizado diretamente no cartório quando atendidos os requisitos legais.',
  },
];

const Servicos = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-scale');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedService]);

  return (
    <>
      <section id="servicos" ref={sectionRef} className="py-24 bg-bege-claro">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-4 reveal">
              O que fazemos
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 reveal">
              Nossos Serviços
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6 reveal" />
            <p className="text-muted-foreground reveal" style={{ transitionDelay: '0.1s' }}>
              Oferecemos uma ampla gama de serviços cartoriais com agilidade, segurança e 
              atendimento humanizado. Clique em cada serviço para saber mais.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service group cursor-pointer reveal-scale"
                style={{ transitionDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedService(service)}
              >
                <div className="w-14 h-14 rounded-full bg-terracota/10 flex items-center justify-center mb-5 group-hover:bg-terracota transition-colors duration-300">
                  <service.icon 
                    className="w-7 h-7 text-terracota group-hover:text-primary-foreground transition-colors duration-300" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.shortDesc}</p>
                <span className="text-sm text-accent font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver detalhes
                  <span className="text-lg">→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <>
          <div className="modal-backdrop" aria-hidden="true" />
          <div
            ref={modalRef}
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-terracota flex items-center justify-center">
                    <selectedService.icon className="w-8 h-8 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 id="modal-title" className="font-display text-2xl text-foreground">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-muted rounded-sm transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {selectedService.fullDesc}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contato" onClick={() => setSelectedService(null)} className="btn-secondary flex-1 justify-center">
                  Solicitar via WhatsApp
                </a>
                <a href="#contato" onClick={() => setSelectedService(null)} className="btn-secondary flex-1 justify-center">
                  Agendar Atendimento
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Servicos;
