import { useState } from "react";
import { updateProductBodySchema } from "../../schema/products/update";
import { api } from "../../services/api";

import { errorHandler } from "../../utils/errorHandler";
import { useEffect } from "react";
import type { Product } from "../../types/api/producsts";
import type { UseProductHook } from "../../types/api/createEdit";


export function useEdit(product:Product | null, id?:string):UseProductHook {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | string >("");
  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [isVitrine, setIsVitrine] = useState<boolean>(false);

 

  useEffect(() => {
  if (product) {
   
      setIsVitrine(product.isVitrine ?? false);
  }
}, [product]);
   

  async function onCreateEdit(newImageUrl?: string) {
    console.log("esta sendo chamado");
    

    if (!id) {
      return alert("product nao encontrado");
    }
  setisLoading(true)
  
   await errorHandler(async () => {
   
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

    await api.patch(`/products/${id}`, data);

    console.log("mudanças feitas  com sucesso");
    console.log("📝 Dados enviados:", {
      name,
      description,
      category,
      price,
      imageUrl: imageToSend,
      isVitrine,
      
    });
    
 
  });
   

     setisLoading(false);
}

  
  return {
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