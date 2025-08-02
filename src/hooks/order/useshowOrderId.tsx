import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import type { Order } from "../../types/api/orders/indexOrder";

export async function fetchData(id: string) {
  const res = await api.get<Order>(`orders/${id}`);
  return res.data;
}

export function useShowOrderID(id: string | undefined) {
  return useQuery({
    queryKey: ["ordersId", id],
    queryFn: () => {
      if (!id) throw new Error("ID inválido");
      return fetchData(id);
    },
    enabled: !!id,
  });
}
