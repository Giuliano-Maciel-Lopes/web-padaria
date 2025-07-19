import { useState } from "react";
import type { Product } from "../../types/api/products/producsts";
import { indexProductQuerySchema } from "../../schema/products";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";

export function useCategoryFilter() {
  const [activeCat, setActiveCat] = useState<null | string>(null);
  const [products, setproducts] = useState<Product[]>([]);
  const [isloading, setisloading] = useState(false);

  async function onClickCategory(params: string) {
    setisloading(true);

    const { error } = await errorHandler(async () => {
      indexProductQuerySchema.parse({ category: params });

      const response = await api.get("/products", {
        params: { category: params },
      });

      setproducts(response.data);
      setActiveCat(params);
    });

    if (error) {
      alert(error.general || "Erro ao carregar produtos");
    }
    setisloading(false);
  }



  return { onClickCategory,  products, isloading, activeCat };
}
