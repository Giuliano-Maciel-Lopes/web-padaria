import { orderItemIdParamsSchema ,type OrderItemIdParamsInput } from "../../schema/orderItens/quantity";
import { api } from "../../services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastSuccessCutomer } from "../../styles/animations/toast/toastsucess";
toastSuccessCutomer

async function deleteOrderItem(params: OrderItemIdParamsInput) {
   orderItemIdParamsSchema.parse(params);
  await api.delete(`/orders_itens/items/${params.id}`);
}

export function useDeleteOrders() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteOrderItem,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders", "PROCESSING"] });
      toastSuccessCutomer("item excluido");
    },
 
  });
}
