import { useState, useEffect, useRef } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  assunto?: string;
  mensagem?: string;
}

interface Toast {
  type: 'success' | 'error' | 'info';
  message: string;
}

const Contato = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

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

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 3) {
      newErrors.nome = 'Nome deve ter pelo menos 3 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\(?\d{2}\)?[\s.-]?\d{4,5}[\s.-]?\d{4}$/.test(formData.telefone.replace(/\s/g, ''))) {
      newErrors.telefone = 'Telefone inválido';
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Assunto é obrigatório';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setToast({ type: 'error', message: 'Por favor, corrija os erros no formulário.' });
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setToast({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({ type: 'info', message: `${label} copiado para a área de transferência!` });
    } catch {
      setToast({ type: 'error', message: 'Não foi possível copiar.' });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(62) 9XXXX-XXXX',
      action: () => copyToClipboard('62999999999', 'Telefone'),
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@cartorioexemplo.com.br',
      action: () => copyToClipboard('contato@cartorioexemplo.com.br', 'E-mail'),
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: 'Av. Principal, 123 – Centro, Goiânia/GO',
      action: () => window.open('https://maps.google.com/?q=Av.+Principal,+123,+Centro,+Goiânia,+GO', '_blank'),
    },
  ];

  return (
    <section id="contato" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent text-sm tracking-[0.3em] uppercase mb-4 reveal">
            Fale Conosco
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 reveal">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6 reveal" />
          <p className="text-muted-foreground reveal" style={{ transitionDelay: '0.1s' }}>
            Estamos prontos para atendê-lo. Escolha a forma mais conveniente de entrar em contato 
            ou preencha o formulário abaixo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="reveal-left">
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <button
                  key={info.label}
                  onClick={info.action}
                  className="w-full flex items-center gap-4 p-5 bg-card rounded-sm shadow-soft hover-lift text-left group"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-terracota/10 flex items-center justify-center group-hover:bg-terracota transition-colors">
                    <info.icon className="w-5 h-5 text-terracota group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</span>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-verde-musgo text-primary-foreground rounded-sm shadow-card hover:bg-verde-musgo-light transition-all duration-300 group"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-medium">Conversar pelo WhatsApp</span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-sm shadow-card reveal-right">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nome" className="form-label">Nome completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`form-input ${errors.nome ? 'error' : ''}`}
                  placeholder="Seu nome"
                />
                {errors.nome && <span className="form-error">{errors.nome}</span>}
              </div>
              <div>
                <label htmlFor="email" className="form-label">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="seu@email.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="telefone" className="form-label">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={`form-input ${errors.telefone ? 'error' : ''}`}
                  placeholder="(62) 99999-9999"
                />
                {errors.telefone && <span className="form-error">{errors.telefone}</span>}
              </div>
              <div>
                <label htmlFor="assunto" className="form-label">Assunto *</label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className={`form-input ${errors.assunto ? 'error' : ''}`}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="escritura">Escritura Pública</option>
                  <option value="procuracao">Procuração</option>
                  <option value="reconhecimento">Reconhecimento de Firma</option>
                  <option value="autenticacao">Autenticação</option>
                  <option value="inventario">Inventário Extrajudicial</option>
                  <option value="divorcio">Divórcio Extrajudicial</option>
                  <option value="outros">Outros</option>
                </select>
                {errors.assunto && <span className="form-error">{errors.assunto}</span>}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="mensagem" className="form-label">Mensagem *</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={5}
                className={`form-input resize-none ${errors.mensagem ? 'error' : ''}`}
                placeholder="Descreva sua solicitação..."
              />
              {errors.mensagem && <span className="form-error">{errors.mensagem}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast-container">
          <div className={`toast ${toast.type}`}>
            <div className="flex items-center gap-3">
              {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600" />}
              {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-600" />}
              {toast.type === 'info' && <CheckCircle className="w-5 h-5 text-accent" />}
              <span className="text-sm text-foreground">{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contato;
