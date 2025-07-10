import { useState } from "react";
import { api } from "../../services/api";
import { errorHandler } from "../../utils/errorHandler";
import type { Product } from "../../types/api/producsts";
import React from "react";
import z from "zod";

export function useProductsearch() {
    const [producstSerach , setProductSearch] =useState<Product| null>(null)
    const [name , setname] =useState("")

     const bodySchema = z.object({ //so por preucaçao
      name: z.string(),
    });

  function onSearch(e:React.FormEvent) {
    e.preventDefault()
    errorHandler(async () => {
        const data = bodySchema.parse({name})

        

      const products = await api.get("/products/search" )
      console.log(products.data)
      setProductSearch(products.data)
     

    });
  }

  return {onSearch , producstSerach , name ,setname};
}
