import { useParams } from "react-router";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import type { Product } from "../../types/api/producsts";
import { useState } from "react";
import { idParamSchema } from "../../schema/products/remove";

export function useProductId() {
  const [products, setProduct] = useState<Product | null>(null);
  const {id} = useParams();
  async function onView() {
    

    errorHandler(async () => {
       const data = idParamSchema.parse({id})
      const product = await api.get(`/products/${data.id}`);
      console.log("proudct:", product.data);

      setProduct(product.data);
    });
    
  }
  return {products, onView}
}
