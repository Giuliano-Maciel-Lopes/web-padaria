import { useEffect, useState } from "react";
import { createProductSchema } from "../../schema/products/creat";
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  useEffect(() => {
    if (!successMessage) return;
    const timer = setTimeout(() => setSuccessMessage(null), 2000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  async function onCreateEdit(
    newImageUrl?: string
  ): Promise<ProductCreateEditError | null> {
    setisLoading(true);
    setError(null);

    const { error, data: database } = await errorHandler(async () => {
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

      const res = await api.post("/products", data);

      return res.data;
    });
    if (error) {
      setError(error);
      return error
    }

    setisLoading(false);
    setSuccessMessage(
      typeof database === "string"
        ? database
        : database?.message ?? "Operação realizada com sucesso!"
    );
    return null;
  }
  return {
    successMessage,
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
