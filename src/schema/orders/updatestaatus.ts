import { z } from "zod";


export const paramsSchema = z.object({
  id: z.string().uuid(),
});

export const bodySchema = z.object({
  status: z.enum(["PROCESSING", "SHIPPED", "DELIVERED"]),
});
export type ParamsInput = z.infer<typeof paramsSchema>;