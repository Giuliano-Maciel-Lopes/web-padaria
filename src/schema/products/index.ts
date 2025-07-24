import { z } from "zod";
import { schemaCategory } from "../../utils/categorias";

export const indexProductQuerySchema = z.object({
  category: z
    .string()
    .optional()
    .transform((val) => val?.toLowerCase())
    .refine(
      (val) => !val || schemaCategory.safeParse(val).success,
      { message: "Categoria inválida" }
    ),
    isVitrine: z.preprocess((val) => {
    if (val === "true") return true;
    if (val === "false") return false;
    return val;
  }, z.boolean().optional()),
});


export type IndexQueryInput = z.infer<typeof indexProductQuerySchema>;