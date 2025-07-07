import { useParams } from "react-router";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import type { Product } from "../../types/api/producsts";
import { useState } from "react";

export function useProductId() {
  const [products, setProduct] = useState<Product | null>(null);
  const {id} = useParams();
  async function onView() {
    

    errorHandler(async () => {
      const product = await api.get(`/products/${id}`);
      console.log("proudct:", product.data);

      setProduct(product.data);
    });
    
  }
  return {products, onView}
}
