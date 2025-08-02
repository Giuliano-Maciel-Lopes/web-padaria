import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import type { Order } from "../../types/api/orders/indexOrder";
import { useAuth } from "../context/useAuth";

export type StatusType =
   "PROCESSING"
  | "SHIPPED"
  | "ITENS_PROCESSING"
  | "ORDER_FINISH"
  | "DELIVERED";

async function fecthData(status?: StatusType  , search?:string) {
  const res = await api.get<Order[]>("orders", {
    params: { status ,  search},
  });

  return res.data;
}

export function useIndexOrders(status?: StatusType , search?:string) {
  const { session } = useAuth();
  const token = session?.token;
  const query = useQuery({
    queryFn: () => fecthData(status , search),
    queryKey: ["orders", status ?? "all", search ?? ""],
    staleTime: 1000 * 60 * 5,
    enabled: !!token,
  });
  return { ...query };
}
