import { useState } from "react";
import { updateProductBodySchema } from "../../schema/products/update";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import { useEffect } from "react";
import type { Product } from "../../types/api/producsts";
import type { UseProductHook } from "../../types/api/createEdit";
import type { ProductCreateEditError } from "../../types/erros/product/createedit";

export function useEdit(product: Product | null, id?: string): UseProductHook {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [isVitrine, setIsVitrine] = useState<boolean>(false);
  const [error, setError] = useState<ProductCreateEditError | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      setIsVitrine(product.isVitrine ?? false);
    }
  }, [product]);
  useEffect(() => {
    if (!successMessage) return;
    const timer = setTimeout(() => setSuccessMessage(null), 2000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  async function onCreateEdit(newImageUrl?: string): Promise<ProductCreateEditError | null> {
    console.log("esta sendo chamado");

    if (!id) {
      return { general: "Produto não encontrado" };
    }
    setisLoading(true);
    setError(null);

    const { error: err, data: database } = await errorHandler(async () => {
      const imageToSend = newImageUrl ?? imageUrl;

      const data = updateProductBodySchema.parse({
        name,
        description,
        category,
        isVitrine,
        price: String(price).trim() === "" ? undefined : Number(price),
        imageUrl:
          imageToSend && imageToSend.trim() !== ""
            ? "/" + imageToSend.trim().replace(/^\/+/, "")
            : undefined,
      });

      const res = await api.patch(`/products/${id}`, data);

      return res.data;
    });

    if (err) {
      setError(err);
    }

    setisLoading(false);
    setSuccessMessage(
      typeof database === "string"
        ? database
        : database?.message ?? "Operação realizada com sucesso!"
    );
    return err ?? null;
  }

  return {
    successMessage,
    error,
    setisLoading,
    isLoading,
    name,
    description,
    category,
    price,
    imageUrl,
    setName,
    setCategory,
    setDescription,
    setPrice,
    setImageUrl,
    onCreateEdit,
    setIsVitrine,
    isVitrine,
  };
}
