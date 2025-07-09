import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import { idParamSchema } from "../../schema/products/remove";
import { useState } from "react";


export function usedelete() {
  const [isloading, setisloading] = useState(false);


  async function onDelete(uuid: string) {
    const data = idParamSchema.parse({ id: uuid });
    setisloading(true);
    await errorHandler(async () => {
      await api.delete(`products/${data.id}`);
     
    });

    setisloading(false);
  }

  return { onDelete, isloading };
}
