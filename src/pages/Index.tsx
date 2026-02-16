import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Servicos from "@/components/Servicos";
import Contato from "@/components/Contato";
import Localizacao from "@/components/Localizacao";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
