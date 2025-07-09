import { useState } from "react";
import {
  createProductSchema,
  type CreateProductInput,
} from "../../schema/products/creat";
import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import type { UseProductHook } from "../../types/api/createEdit";

export function useCreateProduct():UseProductHook {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | string >("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isVitrine, setIsVitrine] = useState(false);

  async function onCreateEdit(newImageUrl?: string) {
    setisLoading(true)
    errorHandler(async () => {

       const imageToSend = newImageUrl ?? imageUrl;
      
      const data = createProductSchema.parse({
        name,
        description,
        category,
      price: String(price).trim() === "" ? undefined : Number(price),
        imageUrl:  imageToSend && imageToSend.trim() !== ""
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
    });
     setisLoading(false)
  }
  return {
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
    onCreateEdit
  };
}
