import { api } from "../../services/api";
import { idParamSchema } from "../../schema/products/remove";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { Product } from "../../types/api/products/producsts";

async function deleteProduct(product:Product) {
  const params = idParamSchema.parse({id: product.id });
  const res = await api.delete(`products/${params.id}`);

  return res.data;
}

export function useDelete( ) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: (_, product) => {
      queryClient.invalidateQueries({ queryKey: ["productsCategory", ] });
      queryClient.invalidateQueries({ queryKey: ["productsId", product.id] });
    },
  });
}
