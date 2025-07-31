import { z } from "zod";

export const orderStatusQuerySchema = z.object({
  status: z.enum([
    "PROCESSING",
    "SHIPPED",
   "ITENS_PROCESSING",
    "ORDER_FINISH",
    "DELIVERED",
  ]).optional()
});
export type OrderStatusQueryInput = z.infer<typeof orderStatusQuerySchema>;