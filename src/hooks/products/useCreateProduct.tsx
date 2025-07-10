import { useState } from "react";
import {
  createProductSchema,
  type CreateProductInput,
} from "../../schema/products/creat";
import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import type { UseProductHook } from "../../types/api/createEdit";
import type { ProductCreateEditError } from "../../types/erros/product/createedit";

export function useCreateProduct(): UseProductHook {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isVitrine, setIsVitrine] = useState(false);
  const [error, setError] = useState<ProductCreateEditError | null>(null);

  async function onCreateEdit(
    newImageUrl?: string
  ): Promise<ProductCreateEditError | null> {
    setisLoading(true);

    const { error } = await errorHandler(async () => {
      const imageToSend = newImageUrl ?? imageUrl;

      const data = createProductSchema.parse({
        name,
        description,
        category,
        price: String(price).trim() === "" ? undefined : Number(price),
        imageUrl:
          imageToSend && imageToSend.trim() !== ""
            ? "/" + imageToSend.trim().replace(/^\/+/, "")
            : undefined,
        isVitrine,
      });

      await api.post("/products", data);

      console.log("product criado");

      console.log("📝 Dados enviados:", {
        name,
        description,
        category,
        price,
        imageUrl: imageToSend,
        isVitrine,
      });
      return null;
    });
    if (error) {
      setError(error);
    }

    setisLoading(false);
    return error ?? null;
  }
  return {
    error,
    isLoading,
    setisLoading,
    name,
    setName,
    description,
    setDescription,
    category,
    setCategory,
    price,
    setPrice,
    imageUrl,
    setImageUrl,
    isVitrine,
    setIsVitrine,
    onCreateEdit,
  };
}
