 

interface accordion_data_type {
    id: number;
    question: string;
    answer: JSX.Element;
    accordion_id: string;
    collapsed: string;
    aria_expanded: boolean;
    show: string;
}
 const accordion_data: accordion_data_type[] = [
        {
            id: 1,
            question: "1. Criação de Sites Modernos?",
            answer: <>Desenvolvemos sites institucionais, blogs e portfólios profissionais. Nossas criações são otimizadas para SEO e focadas em converter visitantes em clientes, impulsionando a sua marca.  </>,    
            accordion_id: "One",
            collapsed: "", 
            aria_expanded: true, 
            show: "show"
        },
        {
            id: 2,
            question: "2. Lojas Virtuais e E-commerce",
            answer: <>Construímos lojas virtuais completas e seguras. Cuidamos de tudo, da vitrine de produtos ao checkout, para que seu e-commerce esteja sempre pronto para vender, 24 horas por dia. </>,    
            accordion_id: "Two",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 3,
            question: "3. Manutenção e Suporte",
            answer: <>Garantimos que seu site esteja sempre atualizado, seguro e com o máximo de performance. Com nosso suporte técnico, você não precisa se preocupar com nada, focando apenas no seu negócio.</>,    
            accordion_id: "Three",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },  

        {
            id: 4,
            question: "4. Sistemas Web Personalizados",
            answer: <>Criamos plataformas e sistemas web que automatizam processos e gerenciam dados. Desenvolvemos soluções eficientes e escaláveis para resolver os desafios mais complexos da sua empresa.</>,    
            accordion_id: "four",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },  
        {
            id: 5,
            question: "5. Identidade Visual e Branding",
            answer: <>Vamos além do código. Criamos logotipos, paletas de cores e guias de marca para construir uma identidade forte, consistente e memorável, alinhada com a sua estratégia de negócio.</>,    
            accordion_id: "five",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },  
        {
            id: 6,
            question: "6. Otimização e Performance (SEO)",
            answer: <>Garantimos que seu site seja rápido e bem posicionado nos mecanismos de busca. Com SEO, atraímos mais tráfego orgânico e aumentamos o potencial de vendas do seu site.</>,    
            accordion_id: "six",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },
        {
            id: 7,
            question: "7. Catálogo de Estilos",
            answer: <>Navegue por nossa curadoria de designs modernos, prontos para serem adaptados à sua marca. Encontre a inspiração perfeita para o seu projeto, em diversas áreas como: Gastronomia, Saúde, Imobiliário, Educação, Loja, Institucional e muito mais.</>,    
            accordion_id: "seven",
            collapsed: "collapsed", 
            aria_expanded: false, 
            show: ""
        },    
 ]
const FAQHomeOne = () => {
    return (
        <>
            <section className="faq-area grad-bg pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="faq-img mb-30">
                                <img className="bounce-animate" src="/assets/img/bg/illustration.png" alt="theme-pure" />
                            </div>
                        </div>
                        <div className="col-xl-6 ">
                            <div className="faq-wrapper mb-30">
                                <div className="section-title section-title-white mb-70">
                                    <span>Faq</span>
                                    <h3>Perguntas e Respostas</h3>
                                    <h4>Ainda com dúvidas?
Fale conosco, e responderemos o mais rápido possível.</h4>
                                </div>
                                <div className="faq-box">
                                    <div className="accordion" id="accordionExample">
                                    {accordion_data.map((item) => (
                                        <div key={item.id} className="accordion-items">
                                            <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                                <button
                                                className={`accordion-button ${item.collapsed}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.accordion_id}`}
                                                aria-expanded={item.aria_expanded}
                                                aria-controls={`collapse${item.accordion_id}`}>
                                                {item.question}
                                                </button>
                                            </h2>
                                            <div
                                                id={`collapse${item.accordion_id}`}
                                                className={`accordion-collapse collapse ${item.show}`}
                                                aria-labelledby={`heading${item.accordion_id}`}
                                                data-bs-parent="#accordionExample" >
                                                <div className="accordion-content faq_content">
                                                    <p>{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQHomeOne;