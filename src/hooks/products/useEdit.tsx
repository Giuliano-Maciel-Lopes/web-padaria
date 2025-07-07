import { useState } from "react";
import { updateProductBodySchema } from "../../schema/products/update";
import { ZodError } from "zod/v4";
import { AxiosError } from "axios";
import { api } from "../../services/api";
import { useParams } from "react-router";

export function useEdit() {
  const [isloading, setisloading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { id } = useParams<string>();

  async function OnEdit(newImageUrl?: string) {
    console.log("esta sendo chamado");
    const imageToSend = newImageUrl ?? imageUrl; // se receber param, usa ele, senão o estado atual

    if (!id) {
      return alert("product nao encontrado");
    }

    try {
      setisloading(true);
      console.log("c");

      const data = updateProductBodySchema.parse({
        name,
        description,
        category,
        price: price.trim() === "" ? undefined : Number(price),
        imageUrl:
          imageToSend?.trim() === ""
            ? undefined
            : "/" + imageToSend.trim().replace(/^\/+/, ""),
      });

      await api.patch(`/products/${id}`, data);

      console.log("mudanças feitas  com sucesso");
      console.log("📝 Dados enviados:", {
        name,
        description,
        category,
        price,
        imageUrl: imageToSend,
      });
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error);
        return alert(error.issues[0].message);
      }
      if (error instanceof AxiosError) {
        console.log(error);
        console.error("Axios error response:", error.response?.data);
        return alert(error.response?.data.message);
      }

      console.log(error);
    } finally {
      setisloading(false);
    }
  }
  return {
    isloading,
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
    OnEdit,
  };
}
