import { useState } from "react";
import { createProductSchema,type CreateProductInput,} from "../../schema/products/creat";
import { updateProductBodySchema , type UpdateInput } from "../../schema/products/update";
import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "../../types/api/products/producsts";
import { useSuccessMessage } from "../sucessmensagem";


export function useCreateProduct(product?: Product) {
  const isEdit = !!product?.id // porque c nao tiver id ele nao existe (teste)

  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
    watch, 
    setValue
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(isEdit? updateProductBodySchema :createProductSchema),
    defaultValues: {
      name: product?.name ?? "",
      category: product?.category ?? "",
      price: product?.price ?? undefined,
      isVitrine: product?.isVitrine ?? false,
      description: product?.description ?? "",
      imageUrl: product?.imageUrl ?? "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { setSuccessMessage, successMessage } = useSuccessMessage();

  const onCreateEdit = handleSubmit(async (data) => {
    setIsLoading(true);

    const { error, data: database } = await errorHandler(async () => {
      if (product?.id) {
        const res = await api.patch(`/products/${product.id}`, data);
 console.log("Dados do formulário no submit:", data);
        return res.data;
        
      } else {
        const res = await api.post("/products", data);
 console.log("Dados do formulário no submit:", data);
        return res.data;
      }
    });

    if (error) {
      setError("root", { message: error.general });
    } else {
      setSuccessMessage(database);
      reset()
    }

    setIsLoading(false);
  });

  return {
    watch, 
    register,
    errors,
    onCreateEdit,
    isLoading,
    successMessage,
    setValue
  };
}
