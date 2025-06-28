import { useState } from "react";
import { Buttoncategory } from "../components/bakeryshowcase/category";
import { Slid } from "../components/bakeryshowcase/slider";
import { ProductsView } from "../components/layouts/products";
import { Carrossel } from "../components/bakeryshowcase/corrosel";

import doce1 from "../assets/rosquinhas - Copia.png"
import { categorie } from "../utils/categorias";



export function BakeryPage() {
  const [activecat, setActiveCat] = useState<null | string>(null);

  const categories = categorie
  
  const produtos = [
    { id: "1", nome: "Pão Francês", preco: 1.2 },
    { id: "2", nome: "Bolo de Chocolate", preco: 6.5 },
    { id: "3", nome: "Torta de Frutas", preco: 5.0 },
    { id: "4", nome: "Café Expresso", preco: 3.0 },
    { id: "5", nome: "Coxinha", preco: 4.0 },
    { id: "6", nome: "Bolo de Fubá", preco: 5.5 },
  ];

  return (
    <div className="flex flex-col">
     

     

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((products) => (
          <ProductsView
            name={products.nome.toUpperCase()}
            value={products.preco}
          />
        ))}
      </div>
    <Carrossel img={doce1} img2={doce1} name="PRA ADOÇAR SEU DIA !"/>

    </div>
  );
}
