
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import type { Product } from "../../types/api/products/producsts";
import { useState } from "react";
import { idParamSchema } from "../../schema/products/remove";

export function useProductId() {
  const [products, setProduct] = useState<Product | null>(null);
  

  async function onView(id: string) {
    if (id === "newproduct") return;
    

   const {error , data} = await errorHandler(async () => {
       const data = idParamSchema.parse({id})
      const product = await api.get(`/products/${data.id}`);
      console.log("proudct:", product.data);

     return product
    });
   if (error) {
    alert(error.general || "Erro ao carregar produto");
    setProduct(null);
  } else if (data) {
    setProduct(data.data); // aqui sim, pega a resposta do axios
  }
    
  }
  return {products, onView}
}
