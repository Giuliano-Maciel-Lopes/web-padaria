import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import { idParamSchema } from "../../schema/products/remove";
import { useState } from "react";
import { useEffect } from "react";


export function usedelete() {
  const [isloading, setisloading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
  if (!successMessage) return;
  const timer = setTimeout(() => setSuccessMessage(null), 2000);
  return () => clearTimeout(timer);
}, [successMessage]);


  async function onDelete(uuid: string) {
    const data = idParamSchema.parse({ id: uuid });
    setisloading(true);
    const { error, data: responseData } = await errorHandler(async () => {
      const res = await api.delete(`products/${data.id}`);

      return res.data;
    });
    if (error) {
      alert(
        error.general ||
          "Impossível deletar o produto. Tente novamente mais tarde."
      );
      return ;
    }
    setisloading(false);
    return setSuccessMessage(responseData); // retorna os dados recebidos (ex: produto deletado)
  }

  return { onDelete, isloading, successMessage };
}
