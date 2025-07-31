import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../services/api";
import type { CreateOrderResponse } from "../../types/api/orders/create";

async function fetchData() {
  const res = await api.post<CreateOrderResponse>("/orders");

  return res.data.orders.id 
}
export function useCreateOrders() {
  const Queryclient = useQueryClient();

  return useMutation({
    mutationFn: fetchData,
    onSuccess() {
      Queryclient.invalidateQueries({ queryKey: ["orders", "PROCESSING"] });
    },
  });
}
