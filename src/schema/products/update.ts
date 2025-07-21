import { z } from "zod";

const optionalNonEmptyString = () =>
  z
    .string()
    .transform((val) => (val.trim() === "" ? undefined : val.trim()))
    .optional();

export const updateProductBodySchema = z.object({
  name: optionalNonEmptyString().refine(
    (val) => val === undefined || val.length >= 3,
    { message: "O nome deve ter no mínimo 3 caracteres." }
  ),

  description: optionalNonEmptyString(),

  category: optionalNonEmptyString().transform((val) => val?.toLowerCase()),

price: z.preprocess(
  (val) => {
    if (val === "" || val === null || val === undefined) return undefined;
    const number = Number(val);
    return isNaN(number) ? undefined : number;
  },
  z.number().positive().optional()
),

  imageUrl: z.string().optional(),
  
   isVitrine: z.boolean().optional(), 
});

export type UpdateInput = z.infer<typeof updateProductBodySchema>;
