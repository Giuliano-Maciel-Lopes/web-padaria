import { useForm } from "react-hook-form";
import { createProductSchema  } from "../../../schema/products/creat";
import { updateProductBodySchema } from "../../../schema/products/update";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "../../../types/api/products/producsts";

export function useCreateProductForm(product?: Product) {
  const isEdit = !!product?.id // porque c nao tiver id ele nao existe (teste)

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, 
    setValue,
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(isEdit? updateProductBodySchema :createProductSchema),
    defaultValues: {
      name: product?.name ??   "",
      category: product?.category ?? "",
      price: product?.price ?? undefined,
      isVitrine: product?.isVitrine ?? false,
      description: product?.description ?? "",
      imageUrl: product?.imageUrl ?? "",
      stock: product?.stock ?? undefined,
      
    },
  });
  return{register ,handleSubmit , reset , watch , errors , setValue}
}
export type UseCreateProductFormReturn = ReturnType<typeof useCreateProductForm>;
