import Link from "next/link";
import Image from "next/image"; 
import services_data_type from "../../types/service-types";
// service images 
import service_img_1 from "../../../public/assets/img/icon/s01.png";
import service_img_2 from "../../../public/assets/img/icon/s02.png";
import service_img_3 from "../../../public/assets/img/icon/s03.png";
import service_img_4 from "../../../public/assets/img/icon/s04.png";
import service_img_5 from "../../../public/assets/img/icon/s05.png";
import service_img_6 from "../../../public/assets/img/icon/s06.png"; 
// service data 
 const services_data: services_data_type[] = [
    {
        id: 1,
        img: service_img_1,
        title: "Criação de Sites Modernos",
        sm_des: "Desenvolvemos sites institucionais, blogs e portfólios profissionais, otimizados para SEO e focados em gerar resultados para a sua marca.",
    },
    {
        id: 2,
        img: service_img_2,
        title: "Lojas Virtuais e E-commerce",
        sm_des: "Criamos lojas virtuais completas e seguras. Da vitrine de produtos ao checkout, seu e-commerce estará pronto para vender 24 horas por dia.",
    },
    {
        id: 3,
        img: service_img_3,
        title: "Manutenção e Suporte",
        sm_des: "Garantimos que seu site esteja sempre atualizado, seguro e com performance máxima. Oferecemos suporte técnico para que você não precise se preocupar com nada.",
    },
    {
        id: 4,
        img: service_img_4,
        title: "Sistemas Web Personalizados",
        sm_des: "Construímos plataformas e sistemas web que automatizam processos, gerenciam dados e resolvem desafios complexos do seu negócio, de forma eficiente e escalável.",
    },
    {
        id: 5,
        img: service_img_5,
        title: "Identidade Visual e Branding",
        sm_des: "Criamos logotipos, paletas de cores e guias de marca que constroem uma identidade forte e memorável, alinhada com a sua estratégia de negócio.",
    },
    {
        id: 5,
        img: service_img_6,
        title: "Otimização e Performance (SEO)",
        sm_des: "Garantimos que seu site seja rápido e bem posicionado nos mecanismos de busca, atraindo mais tráfego orgânico e potencializando suas vendas.",
    },
    
 ]

 interface service_content_type {
    title: string;
    sub_title: string;
 }
 const service_content: service_content_type = {
    title: "O que fazemos",
    sub_title: "Nossas soluções são feitas para o seu negócio crescer, com tecnologia de ponta e design que vende.",
 }
 const {title, sub_title} = service_content

 
const ServicesHomeOne = () => { 
    return (
        <>
            <section className="services-area pt-115 pb-95 bg-gray">
                <div className="container">
                    <div className="row align-items-center mb-40">
                        <div className="col-xl-6 col-lg-8">
                            <div className="section-title mb-30">
                                <h2>{title}</h2>
                                <p>{sub_title}</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-4">
                            <div className="section-link text-left text-lg-right mb-30">
                                <a href="#" className="btn btn-soft-border">Saiba mais...</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services_data.map((item, i) => 
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6">
                                <div className="services-box text-center mb-30 wow fadeInUp animated" data-wow-delay="0.3s">
                                    <div className="services-icon mb-35">
                                        <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <div className="services-content">
                                        <h3><Link href="/service-details">{item.title}</Link></h3>
                                        <p>{item.sm_des}</p>
                                        <a className="services-link" href="#"><i className="far fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>         
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesHomeOne;