import { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Send,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle
} from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#historia', label: 'Nossa História' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
  { href: '#localizacao', label: 'Localização' },
];

const faqItems = [
  {
    question: 'Preciso agendar horário para ser atendido?',
    answer: 'Atendemos por ordem de chegada, mas recomendamos o agendamento para serviços que demandam mais tempo, como escrituras e inventários. Agende pelo WhatsApp ou telefone.',
  },
  {
    question: 'Quais documentos devo levar para reconhecer firma?',
    answer: 'Para reconhecimento de firma, você precisa do documento original a ser autenticado e um documento de identificação válido com foto (RG, CNH ou Passaporte).',
  },
  {
    question: 'Vocês oferecem atendimento online?',
    answer: 'Sim! Oferecemos assinatura digital e alguns serviços podem ser solicitados remotamente. Entre em contato para saber quais serviços estão disponíveis online.',
  },
];

const Footer = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={sectionRef} className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Cartório Alvarenga" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            Ofício Único de Registro de Imóveis, Registro Civil de Pessoas Jurídicas, Registro de Títulos e Documentos, Registro Civil de Pessoas Naturais, Tabelionato de Protesto de Títulos, Tabelionato de Notas e Tabelionato e Oficialato de Registro de Contratos Marítimos.<br></br>Código CNJ - CNS: 147439
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cartorioalvarenga/"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="font-display text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-display text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">Telefone</p>
                  <p>(62) 3498-1505</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">E-mail</p>
                  <p>contato@cartorioalvarenga.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-primary-foreground/70">Endereço</p>
                  <p>Av. Principal, 123 – Centro<br />Goiânia/GO</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/10 reveal" style={{ transitionDelay: '0.4s' }}>
          <h3 className="font-display text-xl text-center mb-8">Dúvidas Frequentes</h3>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-primary-foreground/5 rounded-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-primary-foreground/10 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-sm">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`accordion-content ${openFaq === index ? 'open' : ''}`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-primary-foreground/70 text-sm">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {currentYear} Cartório Alvarenga. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
