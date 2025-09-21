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

export type Category = typeof CATEGORIES[number];

export type TemplateType = "site" | "landing";

export interface Template {
  id: string;
  title: string;
  slug: string;
  category: Category;
  type: TemplateType;
  licensiavel: boolean;
  sections: string[];
  thumb: string; // path public
}
