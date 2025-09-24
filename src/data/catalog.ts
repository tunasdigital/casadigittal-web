// Importa o tipo 'Template' que você definiu na etapa anterior
import { Template } from "@/types/catalog";

// Exporta uma lista de templates com dados de exemplo e as imagens
export const TEMPLATES: Template[] = [
  {
    id: 1,
    slug: "template-gastronomia",
    title: "Sabor & Cia",
    category: "Gastronomia",
    thumb: "/assets/img/templates/gastronomia-sabor.png", // Corrigido para .png
  },
  {
    id: 2,
    slug: "template-clinica-saude",
    title: "Bem-Estar Clínica",
    category: "Saúde",
    thumb: "/assets/img/templates/saude-bem-estar.png", // Corrigido para .png
  },
  {
    id: 3,
    slug: "template-imobiliaria",
    title: "Lar Doce Lar Imóveis",
    category: "Imobiliário",
    thumb: "/assets/img/templates/imobiliaria-lar-doce-lar.png", // Corrigido para .png
  },
  {
    id: 4,
    slug: "template-educacao",
    title: "Academia do Conhecimento",
    category: "Educação",
    thumb: "/assets/img/templates/educacao-academia.png", // Corrigido para .png
  },
  {
    id: 5,
    slug: "template-profissionais",
    title: "Portfólio Profissional",
    category: "Profissionais",
    thumb: "/assets/img/templates/profissionais-portfolio.png", // Corrigido para .png
  },
  {
    id: 6,
    slug: "template-saas",
    title: "CloudFlow SaaS",
    category: "SaaS/Apps",
    thumb: "/assets/img/templates/saas-cloudflow.png", // Corrigido para .png
  },
  {
    id: 7,
    slug: "template-loja",
    title: "Moda Online Store",
    category: "Loja",
    thumb: "/assets/img/templates/loja-moda-online.png", // Corrigido para .png
  },
  {
    id: 8,
    slug: "template-institucional",
    title: "Corporativo Connect",
    category: "Institucional",
    thumb: "/assets/img/templates/institucional-corporativo.png", // Corrigido para .png
  },
  {
    id: 9,
    slug: "template-landing-page",
    title: "Lançamento Digital",
    category: "Landing",
    thumb: "/assets/img/templates/landing-lancamento.png", // Corrigido para .png
  },
];