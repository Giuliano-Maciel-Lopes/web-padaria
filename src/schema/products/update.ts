import { z } from "zod";

export const updateProductBodySchema = z.object({
  name: z
    .string()
    .min(3, "O nome deve ter no mínimo 3 caracteres.")
    .optional(),

  description: z.string().optional(),

  category: z
    .string()
    .transform((val) => val.toLowerCase())
    .optional(),

price: z
  .union([z.number().positive(), z.undefined()])
  .refine((val) => val === undefined || (typeof val === "number" && val > 0), {
    message: "O preço deve ser um número positivo",
  }),


  imageUrl: z.string().optional(),

  isVitrine: z.boolean().optional(),
});

export type UpdateInput = z.infer<typeof updateProductBodySchema>;
