import { z } from "zod";

export const categorie = [
  "achocolatados",
  "bebidas",
  "bolos-e-tortas",
  "combos",
  "doces",
  "paes",
  "queijos",
  "salgados",
  "sanduiches",
] as const;
export const schemaCategory = z.enum(categorie);


