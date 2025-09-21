"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Definição dos tipos (Tipagem)
const CATEGORIES = [
  "Gastronomia",
  "Saúde",
  "Imobiliário",
  "Educação",
  "Profissionais",
  "SaaS/Apps",
  "Loja",
  "Institucional",
  "Landing",
] as const;
type Category = typeof CATEGORIES[number];
type TemplateType = "site" | "landing";
interface Template {
  id: string;
  title: string;
  slug: string;
  category: Category;
  type: TemplateType;
  licensiavel: boolean;
  sections: string[];
  thumb: string;
}

// Dados do seu catálogo (YAML convertido para TypeScript)
const TEMPLATES: Template[] = [
  {
    id: "gastronomia_freshheat",
    title: "Freshheat — Food Delivery",
    slug: "freshheat-food-delivery",
    category: "Gastronomia",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "benefits", "how-it-works", "menu", "testimonials", "faq", "cta", "contact"],
    thumb: "/catalogo/gastronomia-freshheat.jpg",
  },
  {
    id: "gastronomia_brasserie",
    title: "Brasserie Lumi — Bistrô",
    slug: "brasserie-lumi-bistro",
    category: "Gastronomia",
    type: "site",
    licensiavel: true,
    sections: ["hero", "about", "menu", "gallery", "reservations", "testimonials", "blog", "contact"],
    thumb: "/catalogo/gastronomia-brasserie.jpg",
  },
  {
    id: "gastronomia_terracafe",
    title: "Terra Café — Cafeteria",
    slug: "terra-cafe",
    category: "Gastronomia",
    type: "site",
    licensiavel: true,
    sections: ["hero", "about", "menu", "loyalty", "gallery", "testimonials", "contact"],
    thumb: "/catalogo/gastronomia-terracafe.jpg",
  },
  {
    id: "gastronomia_vegbox",
    title: "Veg+Box — Marmitas Fit",
    slug: "vegbox-fit",
    category: "Gastronomia",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "plans", "benefits", "how-it-works", "testimonials", "faq", "cta", "contact"],
    thumb: "/catalogo/gastronomia-vegbox.jpg",
  },
  {
    id: "gastronomia_donamassa",
    title: "Dona Massa — Pizzaria",
    slug: "dona-massa",
    category: "Gastronomia",
    type: "site",
    licensiavel: true,
    sections: ["hero", "menu", "promotions", "gallery", "delivery-links", "reviews", "contact"],
    thumb: "/catalogo/gastronomia-donamassa.jpg",
  },
  {
    id: "saude_studioclean",
    title: "Studio Clean — Clínica",
    slug: "studio-clean-clinica",
    category: "Saúde",
    type: "site",
    licensiavel: true,
    sections: ["hero", "specialties", "about", "team", "pricing", "testimonials", "faq", "contact"],
    thumb: "/catalogo/saude-studioclean.jpg",
  },
  {
    id: "saude_odontoviva",
    title: "Odonto Viva — Dentista",
    slug: "odonto-viva",
    category: "Saúde",
    type: "site",
    licensiavel: true,
    sections: ["hero", "treatments", "about", "before-after", "testimonials", "faq", "contact"],
    thumb: "/catalogo/saude-odonto-viva.jpg",
  },
  {
    id: "saude_physiomove",
    title: "PhysioMove — Fisioterapia",
    slug: "physiomove",
    category: "Saúde",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "benefits", "methods", "packages", "testimonials", "faq", "cta", "contact"],
    thumb: "/catalogo/saude-physiomove.jpg",
  },
  {
    id: "saude_dermalux",
    title: "Dermalux — Dermatologia",
    slug: "dermalux",
    category: "Saúde",
    type: "site",
    licensiavel: true,
    sections: ["hero", "procedures", "about", "gallery", "testimonials", "faq", "contact"],
    thumb: "/catalogo/saude-dermalux.jpg",
  },
  {
    id: "saude_psycare",
    title: "PsyCare — Psicologia",
    slug: "psycare",
    category: "Saúde",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "approach", "benefits", "plans", "testimonials", "faq", "cta", "contact"],
    thumb: "/catalogo/saude-psycare.jpg",
  },
  {
    id: "imo_vista",
    title: "Imobiliária Vista — Portfólio",
    slug: "imobiliaria-vista",
    category: "Imobiliário",
    type: "site",
    licensiavel: true,
    sections: ["hero", "highlights", "catalog", "agents", "testimonials", "blog", "contact"],
    thumb: "/catalogo/imobiliario-vista.jpg",
  },
  {
    id: "imo_constroi_plus",
    title: "Constrói+ — Construtora",
    slug: "constroi-plus",
    category: "Imobiliário",
    type: "site",
    licensiavel: true,
    sections: ["hero", "about", "services", "projects", "process", "testimonials", "contact"],
    thumb: "/catalogo/imobiliario-constroi-plus.jpg",
  },
  {
    id: "imo_arq_port",
    title: "Arq & Constrói — Portfólio",
    slug: "arq-construi-portfolio",
    category: "Imobiliário",
    type: "site",
    licensiavel: true,
    sections: ["hero", "portfolio", "services", "about", "awards", "contact"],
    thumb: "/catalogo/imobiliario-arq-port.jpg",
  },
  {
    id: "imo_househub",
    title: "HouseHub — Captura de Leads",
    slug: "househub-captura",
    category: "Imobiliário",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "benefits", "featured-units", "why-us", "testimonials", "faq", "form"],
    thumb: "/catalogo/imobiliario-househub.jpg",
  },
  {
    id: "imo_loftprime",
    title: "Loft Prime — Lançamento",
    slug: "loft-prime",
    category: "Imobiliário",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "video", "features", "floorplans", "location", "tour", "cta", "contact"],
    thumb: "/catalogo/imobiliario-loftprime.jpg",
  },
  {
    id: "edu_eduprime",
    title: "EduPrime — Escola/Curso",
    slug: "eduprime-escola",
    category: "Educação",
    type: "site",
    licensiavel: true,
    sections: ["hero", "courses", "about", "differentials", "testimonials", "admissions", "contact"],
    thumb: "/catalogo/educacao-eduprime.jpg",
  },
  {
    id: "edu_mentorpro",
    title: "Mentor Pro — Mentoria",
    slug: "mentor-pro",
    category: "Educação",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "for-whom", "curriculum", "bonuses", "testimonials", "faq", "cta"],
    thumb: "/catalogo/educacao-mentorpro.jpg",
  },
  {
    id: "edu_kids",
    title: "Kids Learning — Escola Infantil",
    slug: "kids-learning",
    category: "Educação",
    type: "site",
    licensiavel: true,
    sections: ["hero", "methodology", "about", "gallery", "parents-area", "testimonials", "contact"],
    thumb: "/catalogo/educacao-kids.jpg",
  },
  {
    id: "edu_bootcamp",
    title: "Bootcamp Dev — Curso Online",
    slug: "bootcamp-dev",
    category: "Educação",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "program", "modules", "instructors", "testimonials", "faq", "cta"],
    thumb: "/catalogo/educacao-bootcamp.jpg",
  },
  {
    id: "edu_linguas",
    title: "Línguas Agora — Idiomas",
    slug: "linguas-agora",
    category: "Educação",
    type: "site",
    licensiavel: true,
    sections: ["hero", "courses", "placement-test", "plans", "testimonials", "contact"],
    thumb: "/catalogo/educacao-idiomas.jpg",
  },
  {
    id: "prof_advog",
    title: "Advog — Advocacia",
    slug: "advog-advocacia",
    category: "Profissionais",
    type: "site",
    licensiavel: true,
    sections: ["hero", "areas", "about", "cases", "testimonials", "blog", "contact"],
    thumb: "/catalogo/profissionais-advog.jpg",
  },
  {
    id: "prof_contabilup",
    title: "ContábilUp — Contabilidade",
    slug: "contabilup",
    category: "Profissionais",
    type: "site",
    licensiavel: true,
    sections: ["hero", "services", "about", "resources", "testimonials", "contact"],
    thumb: "/catalogo/profissionais-contabilup.jpg",
  },
  {
    id: "prof_studiomacro",
    title: "Studio Macro — Fotógrafo",
    slug: "studio-macro",
    category: "Profissionais",
    type: "site",
    licensiavel: true,
    sections: ["hero", "portfolio", "about", "packages", "testimonials", "contact"],
    thumb: "/catalogo/profissionais-studiomacro.jpg",
  },
  {
    id: "prof_coachflow",
    title: "CoachFlow — Coaching",
    slug: "coachflow",
    category: "Profissionais",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "method", "benefits", "plans", "testimonials", "faq", "cta", "contact"],
    thumb: "/catalogo/profissionais-coachflow.jpg",
  },
  {
    id: "prof_arqstudio",
    title: "Arq Studio — Arquitetura",
    slug: "arq-studio",
    category: "Profissionais",
    type: "site",
    licensiavel: true,
    sections: ["hero", "portfolio", "process", "about", "awards", "contact"],
    thumb: "/catalogo/profissionais-arq-studio.jpg",
  },
  {
    id: "saas_appflow",
    title: "AppFlow — App Mobile",
    slug: "appflow",
    category: "SaaS/Apps",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "features", "screens", "how-it-works", "plans", "testimonials", "faq", "cta"],
    thumb: "/catalogo/saas-appflow.jpg",
  },
  {
    id: "saas_taskly",
    title: "Taskly — Gestão de Tarefas",
    slug: "taskly",
    category: "SaaS/Apps",
    type: "site",
    licensiavel: true,
    sections: ["hero", "features", "integrations", "pricing", "resources", "blog", "contact"],
    thumb: "/catalogo/saas-taskly.jpg",
  },
  {
    id: "saas_fintrack",
    title: "FinTrack — Fintech",
    slug: "fintrack",
    category: "SaaS/Apps",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "benefits", "security", "pricing", "faq", "cta"],
    thumb: "/catalogo/saas-fintrack.jpg",
  },
  {
    id: "saas_supportly",
    title: "Supportly — Helpdesk",
    slug: "supportly",
    category: "SaaS/Apps",
    type: "site",
    licensiavel: true,
    sections: ["hero", "features", "use-cases", "pricing", "case-studies", "contact"],
    thumb: "/catalogo/saas-supportly.jpg",
  },
  {
    id: "saas_clouddocs",
    title: "CloudDocs — Storage",
    slug: "clouddocs",
    category: "SaaS/Apps",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "features", "compliance", "pricing", "faq", "cta"],
    thumb: "/catalogo/saas-clouddocs.jpg",
  },
  {
    id: "loja_moda",
    title: "Moda Nuvem — Moda",
    slug: "moda-nuvem",
    category: "Loja",
    type: "site",
    licensiavel: true,
    sections: ["hero", "collections", "bestsellers", "about", "reviews", "blog", "contact"],
    thumb: "/catalogo/loja-moda.jpg",
  },
  {
    id: "loja_decor",
    title: "HomeDecor — Decoração",
    slug: "homedecor",
    category: "Loja",
    type: "site",
    licensiavel: true,
    sections: ["hero", "featured", "categories", "inspiration", "reviews", "contact"],
    thumb: "/catalogo/loja-decor.jpg",
  },
  {
    id: "loja_pet",
    title: "PetLove+ — Petshop",
    slug: "petlove-plus",
    category: "Loja",
    type: "site",
    licensiavel: true,
    sections: ["hero", "categories", "services", "bestsellers", "reviews", "contact"],
    thumb: "/catalogo/loja-pet.jpg",
  },
  {
    id: "loja_biocosm",
    title: "BioCosm — Cosméticos",
    slug: "biocosm",
    category: "Loja",
    type: "site",
    licensiavel: true,
    sections: ["hero", "featured", "ingredients", "reviews", "faq", "contact"],
    thumb: "/catalogo/loja-biocosm.jpg",
  },
  {
    id: "loja_geartech",
    title: "GearTech — Eletrônicos",
    slug: "geartech",
    category: "Loja",
    type: "site",
    licensiavel: true,
    sections: ["hero", "bestsellers", "categories", "support", "reviews", "contact"],
    thumb: "/catalogo/loja-geartech.jpg",
  },
  {
    id: "inst_portcriativo",
    title: "Portfólio Criativo — Estúdio",
    slug: "portfolio-criativo",
    category: "Institucional",
    type: "site",
    licensiavel: true,
    sections: ["hero", "work", "about", "services", "clients", "contact"],
    thumb: "/catalogo/institucional-portfolio.jpg",
  },
  {
    id: "inst_ongcausa",
    title: "ONG Causa — Organização",
    slug: "ong-causa",
    category: "Institucional",
    type: "site",
    licensiavel: true,
    sections: ["hero", "mission", "projects", "volunteer", "donate", "news", "contact"],
    thumb: "/catalogo/institucional-ong.jpg",
  },
  {
    id: "inst_industech",
    title: "IndusTech — Indústria",
    slug: "industech",
    category: "Institucional",
    type: "site",
    licensiavel: true,
    sections: ["hero", "solutions", "about", "certifications", "cases", "news", "contact"],
    thumb: "/catalogo/institucional-industech.jpg",
  },
  {
    id: "inst_eventos360",
    title: "Eventos360 — Produtora",
    slug: "eventos360",
    category: "Institucional",
    type: "site",
    licensiavel: true,
    sections: ["hero", "services", "portfolio", "clients", "testimonials", "contact"],
    thumb: "/catalogo/institucional-eventos360.jpg",
  },
  {
    id: "inst_agenciaalpha",
    title: "Agência Alpha — Digital",
    slug: "agencia-alpha",
    category: "Institucional",
    type: "site",
    licensiavel: true,
    sections: ["hero", "cases", "services", "about", "blog", "contact"],
    thumb: "/catalogo/institucional-agencia.jpg",
  },
  {
    id: "land_eventoexpress",
    title: "Evento Express — Landing",
    slug: "evento-express",
    category: "Landing",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "agenda", "speakers", "bonuses", "faq", "cta", "contact"],
    thumb: "/catalogo/landing-eventoexpress.jpg",
  },
  {
    id: "land_leadboost",
    title: "LeadBoost — Captura",
    slug: "leadboost",
    category: "Landing",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "benefits", "social-proof", "offer", "faq", "form"],
    thumb: "/catalogo/landing-leadboost.jpg",
  },
  {
    id: "land_pageone",
    title: "PageOne — Pré-lançamento",
    slug: "pageone",
    category: "Landing",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "features", "timeline", "waitlist", "faq", "cta"],
    thumb: "/catalogo/landing-pageone.jpg",
  },
  {
    id: "land_linkbio",
    title: "LinkBio Pro — Página Única",
    slug: "linkbio-pro",
    category: "Landing",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "links-grid", "social", "contact"],
    thumb: "/catalogo/landing-linkbio.jpg",
  },
  {
    id: "land_webinarday",
    title: "Webinar Day — Inscrição",
    slug: "webinar-day",
    category: "Landing",
    type: "landing",
    licensiavel: true,
    sections: ["hero", "about", "speakers", "bonuses", "faq", "form"],
    thumb: "/catalogo/landing-webinarday.jpg",
  },
];

// Importa os ícones do Font Awesome (necessário para as estrelas)
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const CatalogoHomeOne = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = ["Todos", ...CATEGORIES];

  const filteredTemplates = TEMPLATES.filter((template) =>
    activeCategory === "Todos" ? true : template.category === activeCategory
  );

  return (
    <>
      <style jsx global>{`
        .catalogo-area {
          background-color: #f7f7f7 !important;
          padding: 115px 0 95px;
        }

        .catalogo-section-title h2 {
          font-size: 35px;
          margin-bottom: 10px;
        }

        .catalogo-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
        }

        .catalogo-chip {
          padding: 8px 16px;
          border-radius: 20px;
          background-color: #e2e8f0;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .catalogo-chip:hover {
          background-color: #cbd5e0;
        }

        .catalogo-chip.active {
          background-color: #667eea;
          color: #fff;
          border-color: #667eea;
        }

        .catalogo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .catalogo-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .catalogo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .catalogo-thumb {
          width: 100%;
          height: 200px;
          position: relative;
        }

        .catalogo-card-content {
          padding: 20px;
        }

        .catalogo-card-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #000c35;
        }

        .catalogo-card-content p {
          font-size: 14px;
          color: #7d859f;
          margin-bottom: 10px;
        }

        .catalogo-rating {
          color: gold;
        }

        .catalogo-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          gap: 10px;
        }

        .catalogo-buttons .btn {
          font-size: 14px;
          font-weight: 500;
          padding: 10px 20px;
        }

        .catalogo-btn-primary {
          background-color: #667eea;
          color: #fff;
          border: 1px solid #667eea;
        }
        .catalogo-btn-primary:hover {
          background-color: #5a67d8;
        }

        .catalogo-btn-secondary {
          background-color: #fff;
          color: #667eea;
          border: 1px solid #667eea;
        }
        .catalogo-btn-secondary:hover {
          background-color: #667eea;
          color: #fff;
        }

        .catalogo-btn-buy {
          background-color: #2b96cc;
          color: #fff;
          border: 1px solid #2b96cc;
        }
        .catalogo-btn-buy:hover {
          background-color: #2279a3;
        }
      `}</style>
      <section className="catalogo-area">
        <div className="container">
          <div className="row align-items-center mb-40">
            <div className="col-xl-8">
              <div className="section-title mb-30 catalogo-section-title">
                <h2>Catálogo de Estilos</h2>
                <p>
                  Explore nossa curadoria de designs modernos, prontos para
                  serem adaptados à sua marca. Encontre a inspiração perfeita
                  para seu novo site!
                </p>
              </div>
            </div>
            <div className="col-xl-4 text-left text-xl-right">
              <div className="catalogo-chips">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as string)}
                    className={`catalogo-chip ${
                      activeCategory === cat ? "active" : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="catalogo-grid">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="catalogo-card wow fadeInUp animated">
                <div className="catalogo-thumb">
                  <Image
                    src={template.thumb}
                    alt={template.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="catalogo-card-content">
                  <div className="catalogo-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <h3>{template.title}</h3>
                  <p>{template.category}</p>
                  <div className="catalogo-buttons">
                    <a
                      href={`/demo/${template.slug}`}
                      className="btn catalogo-btn-secondary"
                      target="_blank"
                    >
                      Ver Modelo
                    </a>
                    <a
                      href={`/licensa/${template.slug}`}
                      className="btn catalogo-btn-buy"
                      target="_blank"
                    >
                      Licenciar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CatalogoHomeOne;
