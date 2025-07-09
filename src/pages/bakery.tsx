import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Product } from "../types/api/producsts";

import img1 from "../assets/rosquinhas - Copia.png"
import img2 from  "../assets/torta_de_frutas-removebg-preview - Copia.png"


import { Carrossel } from "../components/bakeryshowcase/corrosel";
import { ProductsView } from "../components/index/productsview";
import { useNavigate } from "react-router";

export function BakeryPage() {
  const [doces, setDoces] = useState<Product[]>([]);
  const [outros, setOutros] = useState<Product[]>([]);
  const navigate = useNavigate()
  

  useEffect(() => {
    async function carregarProdutos() {
      const response = await api.get<Product[]>("/products");
      const allProducts = response.data;

      const filtrados = allProducts.filter(p => p.isVitrine);

      setDoces(filtrados.filter(p => p.category === "Doces"));
      setOutros(filtrados.filter(p => p.category !== "Doces"));
    }

    carregarProdutos();
  }, []);

  
  return (
    <div className="flex flex-col ">
     
      <Carrossel  img={img1} img2={img1} name="Nossas Delícias peça do conforto de sua casa"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {outros.map((product) => (
            <ProductsView
              onBuy={()=> navigate(`/products/${product.id}`)}
              key={product.id}
              product={product}
            />
          ))}
        </div>
   

      {/* Carrossel só de Doces */}
      <Carrossel img={img2} img2={img2} name="Doces pra adoçar seu dia!"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doces.map((product) => (
            <ProductsView
              key={product.id}
              product={product}
            />
          ))}
        </div>
      
    </div>
  );
}

