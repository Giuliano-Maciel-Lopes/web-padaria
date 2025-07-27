import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../services/api";
import type { Product } from "../../../types/api/products/producsts";
import type { CreateProductInput } from "../../../schema/products/creat";
import type { UpdateInput } from "../../../schema/products/update";

type fetchData = {
  data: CreateProductInput | UpdateInput;
  product?: Product;
};

async function creatEditProduct({ data, product }: fetchData) {
  if (product?.id) {
    const res = await api.patch(`/products/${product.id}`, data);
    console.log("Dados do formulário no submit:", data);
    return res.data;
  } else {
    const res = await api.post("/products", data);
    console.log("Dados do formulário no submit:", data);
    return res.data;
  }
}

export function useCreateEdit(product?: Product) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: creatEditProduct,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["productsCategory"] });

      if (product?.id) {
        queryClient.invalidateQueries({ queryKey: ["productsId", product.id] });
      }
    },
  });
}

