import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";

export function useCreateOrders() {
  async function onCreateOrder() {
    const { error, data: database } = await errorHandler(async () => {
      const res = await api.post("/orders");

      return res.data.orders.id; // Supondo que o ID esteja aqui
    });
    if (error) {
      console.error("Erro ao criar pedido:", error);
      return null;
    }

    return database; //  Retorna o ID do pedido
  }

  return {
    onCreateOrder,
  };
}
