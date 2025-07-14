import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import { createOrderItemsSchema } from "../../schema/orderItens/create";

export function useCreateOrdersItens() {
  async function onCreateOrderItens(
    ordersId: string,
    items: { productId: string; quantity: number }[]
  ) {
    // Validação com Zod
    const result = createOrderItemsSchema.parse({ items });

    

    await errorHandler(async () => {
      await api.post(`orders_itens/${ordersId}`, result); 
    });
  }

  return { onCreateOrderItens };
}
