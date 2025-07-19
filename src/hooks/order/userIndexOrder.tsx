import { api } from "../../services/api";
import type { Order } from "../../types/api/orders/indexOrder";
import { errorHandler } from "../../utils/errorHandler";

export function useIndexOrders() {
  async function onViewOrders() {
   return await errorHandler(async () => {
      const res = await api.get<Order[]>("orders" , {params:{ status: "PROCESSING" }});

      return res.data
    });
  }

  return { onViewOrders };
}
