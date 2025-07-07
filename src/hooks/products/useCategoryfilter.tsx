import { useState } from "react";
import type { Product } from "../../types/api/producsts";
import { indexProductQuerySchema } from "../../schema/products";
import { api } from "../../services/api";
import { ZodError } from "zod/v4";

export function useCategoryFilter() {
  const [activeCat, setActiveCat] = useState<null | string>(null);
  const [products, setproducts] = useState<Product[]>([]);
  const [isloading, setisloading] = useState(false);

  async function onClickCategory(params: string) {
    try {
      setisloading(true);
      indexProductQuerySchema.parse({ category: params });

      const products = await api.get("/products", {
        params: { category: params },
      });

      setproducts(products.data);
      setActiveCat(params)
    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
    } finally {
      setisloading(false);
    }
  }

  return { onClickCategory, products, isloading , activeCat };
}
