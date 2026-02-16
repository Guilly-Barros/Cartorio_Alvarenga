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

interface ChecklistTextProps {
  text: string;
  className?: string;
  itemClassName?: string;
}

const ChecklistText = ({ text, className, itemClassName }: ChecklistTextProps) => {
  const items = text
    .split('\n')
    .map((line) => line.replace(/^\s*[-•*]\s*/, '').trim())
    .filter(Boolean);

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`} className={itemClassName ?? 'flex items-start gap-2'}>
          <span aria-hidden="true" className="text-terracota font-semibold leading-relaxed">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const services: Service[] = [
  {
    icon: FileText,
    title: 'Escrituras Públicas',
    shortDesc: 'Compra, venda, doação e permuta de imóveis.',
    fullDesc: '- Documentos Nescessarios\n- Escritura de Compra e Venda: RG, CPF, Comprovante de Residência, Certidão de Casamento (se aplicável), Matrícula do Imóvel atualizada, IPTU do ano vigente, Certidão Negativa de Débitos Municipais, Declaração de Imposto de Renda (se aplicável), Procuração (se for o caso).',
  },
  {
    icon: PenTool,
    title: 'Reconhecimento de Firma',
    shortDesc: 'Autenticação de assinaturas em documentos.',
    fullDesc: '- Documentos Necessários\n- Para reconhecimento de firma por semelhança: Documento com assinatura a ser reconhecida, documento de identidade do solicitante. Para reconhecimento de firma por autenticidade: Documento com assinatura a ser reconhecida, documento de identidade do solicitante, presença do signatário para conferência da assinatura.',
  },
  {
    icon: FileCheck,
    title: 'Autenticação de Cópias',
    shortDesc: 'Cópias autenticadas com fé pública.',
    fullDesc: '- Documentos Necessários\n- Cópia do documento original a ser autenticado, documento de identidade do solicitante.',
  },
  {
    icon: Users,
    title: 'Procurações',
    shortDesc: 'Procurações públicas e substabelecimentos.',
    fullDesc: '- Documento de identidade do outorgante, documento de identidade do procurador, descrição detalhada dos poderes a serem conferidos, endereço completo do outorgante e do procurador, CPF do outorgante e do procurador, comprovante de residência do outorgante e do procurador (se necessário), informações sobre o prazo de validade da procuração (se aplicável).',
  },
  {
    icon: BookOpen,
    title: 'Testamentos',
    shortDesc: 'Testamentos públicos e aprovação de cerrados.',
    fullDesc: '- Documentos Necessários\n- Testamento público ou cerrado, documento de identidade do testador, endereço completo do testador, CPF do testador, comprovante de residência do testador (se necessário).',
  },
  {
    icon: Home,
    title: 'Inventário Extrajudicial',
    shortDesc: 'Partilha de bens de forma rápida e segura.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade do falecido, documento de identidade dos herdeiros, endereço completo dos herdeiros, CPF dos herdeiros, comprovante de residência dos herdeiros (se necessário), informações sobre o valor total do patrimônio (se aplicável).',
  },
  {
    icon: Heart,
    title: 'Divórcio Extrajudicial',
    shortDesc: 'Divórcio consensual em cartório.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade dos cônjuges, certidão de casamento atualizada, CPF dos cônjuges, comprovante de residência dos cônjuges (se necessário), acordo de divórcio consensual (se aplicável), informações sobre a partilha de bens e guarda de filhos (se aplicável).',
  },
  {
    icon: Shield,
    title: 'Ata Notarial',
    shortDesc: 'Constatação de fatos com fé pública.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade do solicitante, endereço completo do solicitante, CPF do solicitante, comprovante de residência do solicitante (se necessário), descrição detalhada do fato a ser constatado.',
  },
  {
    icon: Building2,
    title: 'Registro de Imóveis',
    shortDesc: 'Registro e averbação de imóveis.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade do proprietário, documento de identidade do requerente (se diferente), endereço completo do proprietário, CPF do proprietário, comprovante de residência do proprietário (se necessário), informações sobre o valor total do imóvel (se aplicável).',
  },
  {
    icon: Car,
    title: 'Apostilamento',
    shortDesc: 'Apostila de Haia para documentos.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade do requerente, endereço completo do requerente, CPF do requerente, comprovante de residência do requerente (se necessário), documento a ser apostilado.',
  },
  {
    icon: FileSignature,
    title: 'Assinatura Digital',
    shortDesc: 'Certificação e assinatura eletrônica.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade do requerente, endereço completo do requerente, CPF do requerente, comprovante de residência do requerente (se necessário), documento a ser assinado digitalmente.',
  },
  {
    icon: Scale,
    title: 'Usucapião Extrajudicial',
    shortDesc: 'Regularização de propriedade em cartório.',
    fullDesc: '- Documentos Necessários\n- Documento de identidade do requerente, endereço completo do requerente, CPF do requerente, comprovante de residência do requerente (se necessário), informações sobre o imóvel objeto do usucapião, documentos que comprovem a posse do imóvel por parte do requerente (como contas de serviços públicos, contratos de compra e venda, declarações de testemunhas, etc.).',
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
                <ChecklistText
                  text={service.shortDesc}
                  className="text-sm text-muted-foreground mb-4 space-y-1"
                  itemClassName="flex items-start gap-2"
                />
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

              <ChecklistText
                text={selectedService.fullDesc}
                className="text-muted-foreground leading-relaxed mb-8 space-y-2"
                itemClassName="flex items-start gap-2"
              />

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
