import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api";
import type { Order } from "../../types/api/orders/indexOrder";
import { useAuth } from "../context/useAuth";

async function fecthData() {
  const res = await api.get<Order[]>("orders", {
    params: { status: "PROCESSING" },
  });
 


  return res.data;
}

export function useIndexOrders() {
  const { session } = useAuth();
  const token = session?.token;
  const query = useQuery({
    queryFn: fecthData,
    queryKey: ["orders", "PROCESSING"],
    staleTime: 1000 * 60 * 5,
    enabled: !!token,
  });
  return { ...query };
}
