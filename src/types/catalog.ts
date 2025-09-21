// Define a lista de categorias que você vai usar
export const CATEGORIES = [
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

// Cria um tipo (Type) para as categorias, baseado na lista acima
export type Category = typeof CATEGORIES[number];

// Define a estrutura de um template
export type Template = {
  id: number;
  slug: string;
  title: string;
  category: Category | "Todos";
  thumb: string;
};