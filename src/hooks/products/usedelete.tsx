import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import { idParamSchema } from "../../schema/products/remove";


export function usedelete() {
   

   function onDelete(uuid:string){
    const data = idParamSchema.parse({id:uuid})
    
   return errorHandler(async()=>{
        await api.delete(`products/${data.id}`)
    })

    
    }
  return{ onDelete}
}