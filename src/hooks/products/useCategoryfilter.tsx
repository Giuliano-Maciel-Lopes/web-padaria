import type { Product } from "../../types/api/products/producsts";
import { indexProductQuerySchema } from "../../schema/products";
import { api } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

type useFilter = {
  isCategory?: string | null;
  activeVitrine?: boolean | null;
};

const fetchData = async (
  category?: string | null,
  isVitrine?: boolean | null
): Promise<Product[]> => {
  const params = indexProductQuerySchema.parse({ category, isVitrine });

  const response = await api.get<Product[]>("/products", { params });

  return response.data;
};

export function useCategoryFilter({ activeVitrine, isCategory }: useFilter) {
  const enabled = !!isCategory || typeof activeVitrine === "boolean";

  const query = useQuery<Product[]>({
    queryKey: ["productsCategory", isCategory, activeVitrine],
    queryFn: () => fetchData(isCategory, activeVitrine),
    enabled,
  });

  return { ...query };
}
