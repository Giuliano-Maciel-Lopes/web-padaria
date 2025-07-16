
import { orderItemIdParamsSchema } from "../../schema/orderItens/quantity"
import { api } from "../../services/api"
import { errorHandler } from "../../utils/errorHandler"

export function useDeleteOrders() {

  async  function onDelete(id:string){
  const data =  orderItemIdParamsSchema.parse({id})

    const {error} =await  errorHandler(async ()=>{
        

        await api.delete(`/orders_itens/items/${data.id}`)

        })
        if(error){
        console.log(error)}
    }
 return{onDelete}
}