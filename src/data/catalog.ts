// Importa o tipo 'Template' que você definiu na etapa anterior
import { Template } from "@/types/catalog";

// Exporta uma lista de templates com dados de exemplo
export const TEMPLATES: Template[] = [
  {
    id: 1,
    slug: "template-gastronomia",
    title: "Sabor & Cia",
    category: "Gastronomia",
    thumb: "/images/templates/gastronomia-sabor.jpg",
  },
  {
    id: 2,
    slug: "template-clinica-saude",
    title: "Bem-Estar Clínica",
    category: "Saúde",
    thumb: "/images/templates/saude-bem-estar.jpg",
  },
  {
    id: 3,
    slug: "template-imobiliaria",
    title: "Lar Doce Lar Imóveis",
    category: "Imobiliário",
    thumb: "/images/templates/imobiliaria-lar-doce-lar.jpg",
  },
  {
    id: 4,
    slug: "template-educacao",
    title: "Academia do Conhecimento",
    category: "Educação",
    thumb: "/images/templates/educacao-academia.jpg",
  },
  {
    id: 5,
    slug: "template-profissionais",
    title: "Portfólio Profissional",
    category: "Profissionais",
    thumb: "/images/templates/profissionais-portfolio.jpg",
  },
  {
    id: 6,
    slug: "template-saas",
    title: "CloudFlow SaaS",
    category: "SaaS/Apps",
    thumb: "/images/templates/saas-cloudflow.jpg",
  },
  {
    id: 7,
    slug: "template-loja",
    title: "Moda Online Store",
    category: "Loja",
    thumb: "/images/templates/loja-moda-online.jpg",
  },
  {
    id: 8,
    slug: "template-institucional",
    title: "Corporativo Connect",
    category: "Institucional",
    thumb: "/images/templates/institucional-corporativo.jpg",
  },
  {
    id: 9,
    slug: "template-landing-page",
    title: "Lançamento Digital",
    category: "Landing",
    thumb: "/images/templates/landing-lancamento.jpg",
  },
];