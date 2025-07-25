import { api } from "../../services/api";
import type { Product } from "../../types/api/products/producsts";

import { idParamSchema } from "../../schema/products/remove";
import { useQuery } from "@tanstack/react-query";

async function fetchData(id: string | undefined): Promise<Product> {
  const params = idParamSchema.parse({ id });
  const response = await api.get<Product>(`/products/${params.id}`);

  return response.data;
}

export function useProductId(id: string | undefined) {
  const query = useQuery<Product>({
    queryFn: () => fetchData(id),
    queryKey: ["productsId", id],
    enabled: !!id,
  });
  return { ...query };
}
