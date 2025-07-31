import { api } from "../../services/api";
import {
  schemaBodyQuantity,
  type OrderItemIdParamsInput,
  type schemaBodyQuantityInput,
  orderItemIdParamsSchema,
} from "../../schema/orderItens/quantity";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { toastSuccessCutomer } from "../../styles/animations/toast/toastsucess";

type Fetchdata = {
  params: OrderItemIdParamsInput;
  data: schemaBodyQuantityInput;
};

async function fetchdata({ params, data }: Fetchdata) {
  orderItemIdParamsSchema.parse(params);
  schemaBodyQuantity.parse(data);

  await new Promise((r) => setTimeout(r, 2000));
  await api.patch(`/orders_itens/items/${params.id}`, data);
}

export function UseUpdateQuantityOrdersItems() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchdata,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders", "PROCESSING"] });
      toastSuccessCutomer("quantidade do produto modificada");
    },
  });
}
