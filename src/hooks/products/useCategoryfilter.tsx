import type { Product } from "../../types/api/products/producsts";
import { indexProductQuerySchema } from "../../schema/products";
import { api } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

type useFilter = {
  category?: string | null;
  isVitrine?: boolean | null;
  search?: string | null;
};

const fetchData = async ({
  isVitrine,
  category,
  search,
}: useFilter): Promise<Product[]> => {
  const params = indexProductQuerySchema.parse({
    category,
    isVitrine,
    search,
  });

  const response = await api.get<Product[]>("/products", { params });

  return response.data;
};

export function useCategoryFilter({ isVitrine, category, search }: useFilter={}) {
  const enabled = !!category || typeof isVitrine === "boolean" || !!search;

  const query = useQuery<Product[]>({
    queryKey: ["productsCategory", category, isVitrine, search],
    queryFn: () => fetchData({category, isVitrine, search}),
    enabled,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return { ...query };
}
