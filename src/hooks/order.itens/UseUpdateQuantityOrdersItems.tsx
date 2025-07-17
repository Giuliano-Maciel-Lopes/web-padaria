import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import { schemaBodyQuantity } from "../../schema/orderItens/quantity";
import { orderItemIdParamsSchema } from "../../schema/orderItens/quantity";

export function UseUpdateQuantityOrdersItems() {
  async function UpdateQuantityOrders(id:string , quantity:number) {
     const data = orderItemIdParamsSchema.parse({id})
        const databody = schemaBodyQuantity.parse({ quantity})
        
    await errorHandler(async () =>  {
       
        
      await api.patch(`/orders_itens/items/${data.id}`, databody);
    });
  }
  return { UpdateQuantityOrders };
}
