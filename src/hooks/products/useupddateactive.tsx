import { api } from "../../services/api";
import { idParamSchema } from "../../schema/products/remove";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { Product } from "../../types/api/products/producsts";
import { toast } from "react-toastify";
import { erroHandlerAxios } from "../../utils/ErrohandlederAxios";
import { bodySchemaUpdateACtive } from "../../schema/products/updateisactive";
type fetchData = {
  product: Product;
  isActive: boolean;
};
async function fetchData({ product, isActive }: fetchData) {
  const params = idParamSchema.parse({ id: product.id });
                bodySchemaUpdateACtive.parse({isActive})
  const res = await api.patch(`products/active/${params.id}`, {isActive});

  return res.data;
}

export function useUpdateToggleActive() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchData,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["productsCategory"] });
      queryClient.invalidateQueries({
        queryKey: ["productsId", variables.product.id],
      });
      toast.success(typeof data === "string" ? data : "Produto editado !");
    },
    onError(error) {
      toast.error(erroHandlerAxios(error));
      console.log(error);
    },
  });
}
