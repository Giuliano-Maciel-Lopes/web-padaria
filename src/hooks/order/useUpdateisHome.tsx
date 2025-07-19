import { api } from "../../services/api"
import { errorHandler } from "../../utils/errorHandler"
import { paramsSchema } from "../../schema/orders/updatestaatus"
import { updateBodySchemaIsHome } from "../../schema/orders/updateishome"
import type { FormEvent } from "react"

export function useUpdateisHome() {
  async  function onUpdateisHomeOrders(  id:string , isHome:boolean){
    
    const data = paramsSchema.parse({id})
    const databody = updateBodySchemaIsHome.parse({isHome})

      await errorHandler(async()=>{
        await api.patch(`/orders/isHome/${data.id}`, databody)
       })
    }
 return{onUpdateisHomeOrders}
}

