import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Historia from '@/components/Historia';
import Servicos from '@/components/Servicos';
import Contato from '@/components/Contato';
import Localizacao from '@/components/Localizacao';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

/*
  ========================================
  MAPA DAS IMAGENS - CARTÓRIO ALVARENGA
  ========================================
  
  Imagem 1 (logo-background.png):
    - Origem: Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_1.png
    - Aplicada: Referência de cores (cinza texturizado, rose gold)
    - Uso: Extração da paleta de cores e estilo do logo
  
  Imagem 2 (Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_4.png):
    - Origem: PDF página 4
    - Aplicada: Referência para cards de serviços
    - Uso: Inspiração de layout para grade de serviços, estilo de ícones brancos sobre fundo terracota
  
  Imagem 3 (hero-shadow.png):
    - Origem: Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_6.png
    - Aplicada: Hero section (background com parallax)
    - Uso: Imagem de fundo com sombra de folhagem, transmite elegância e naturalidade
  
  Imagem 4 (Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_3.png):
    - Origem: PDF página 3 (Briefing)
    - Aplicada: Referência para seção "Nossa História"
    - Uso: Inspiração de texto institucional e tom de comunicação
  
  Imagem 5 (valores-bg.png):
    - Origem: Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_5.png
    - Aplicada: Seção História (elemento decorativo de fundo)
    - Uso: Círculos concêntricos representando valores, cor terracota
  
  Imagem 6 (Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_8.png):
    - Origem: PDF página 8
    - Aplicada: Referência de cores
    - Uso: Definição da paleta "Clássica" (marrom) e "Sofisticada" (bege rosado)
  
  Imagem 7 (logo-green.png):
    - Origem: Projeto_Id_Visual_Cartorio_ALVARENGA.pdf_-_12.png
    - Aplicada: Footer
    - Uso: Logo sobre fundo escuro, variação verde musgo
  
  ========================================
  COMO PERSONALIZAR
  ========================================
  
  1. DADOS DO CARTÓRIO:
     - Substitua "(62) 9XXXX-XXXX" pelo telefone real
     - Atualize "contato@cartorioexemplo.com.br" pelo e-mail correto
     - Altere o endereço "Av. Principal, 123" para o endereço real
     - Atualize o link do Google Maps com as coordenadas corretas
  
  2. LOGO:
     - Substitua as imagens em src/assets/ pelas logos oficiais do cartório
     - Ajuste o tamanho no Header e Footer se necessário
  
  3. CORES:
     - As variáveis CSS estão em src/index.css
     - Principais: --verde-musgo, --terracota, --rose-gold, --bege
  
  4. TEXTOS:
     - Seção História: edite src/components/Historia.tsx
     - Serviços: edite src/components/Servicos.tsx
     - FAQ no footer: edite src/components/Footer.tsx
  
  5. HORÁRIOS:
     - Atualize em src/components/Localizacao.tsx
  
  6. REDES SOCIAIS:
     - Adicione os links corretos no Footer
  
  ========================================
*/

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Historia />
        <Servicos />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
