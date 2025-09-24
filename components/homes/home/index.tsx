import HeaderOne from "../../layout/headers/header";
import HeroHomeOne from "./HeroHomeOne";
import ServicesHomeOne from "./ServicesHomeOne";
import FAQHomeOne from "./FAQHomeOne";
import ChoseAreaHomeOne from "./ChoseAreaHomeOne";
import TestimonailHomeOne from "./TestimonailHomeOne";
import NewsFeedHomeOne from "./NewsFeedHomeOne";
import BrandHomeOne from "./BrandHomeOne";
import FooterOne from "../../layout/footers/FooterOne";

// Importando o novo componente do catálogo
import CatalogoHomeOne from "./CatalogoHomeOne";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroHomeOne />
        <ServicesHomeOne />
        
        {/* Adicionando a nova seção do catálogo aqui */}
        <CatalogoHomeOne />

       
        <FAQHomeOne />
        <ChoseAreaHomeOne />
        <TestimonailHomeOne />
        <NewsFeedHomeOne />
        <BrandHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeOne;
