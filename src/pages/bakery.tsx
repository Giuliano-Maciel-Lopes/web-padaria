import { useState } from "react";
import { Buttoncategory } from "../components/bakeryshowcase/category";
import { Slid } from "../components/bakeryshowcase/slider";
import { ProductsView } from "../components/layouts/products";

export function Bakery() {
  const [activecat, setActiveCat] = useState<null| string>(null);

  const categories = [
    "Pães",
    "Bolos",
    "Tortas",
    "Salgados",
    "Doces",
    "Bebidas",
    "Cafés",
    "Lanches",
    "Naturais",
    "Congelados",
  ];
  const produtos = [
  { id: "1", nome: "Pão Francês", preco: 1.20 },
  { id: "2", nome: "Bolo de Chocolate", preco: 6.50 },
  { id: "3", nome: "Torta de Frutas", preco: 5.00 },
  { id: "4", nome: "Café Expresso", preco: 3.00 },
  { id: "5", nome: "Coxinha", preco: 4.00 },
  { id: "6", nome: "Bolo de Fubá", preco: 5.50 },
];

  return (
    <div className="flex flex-col">
      <Slid />
      <div className="flex gap-4  my-5 md:my-10 overflow-x-auto scroll-smooth md:px-8 hide-scrollbar">
        {categories.map((cat) => (
          <Buttoncategory
            name={cat}
            key={cat}
            onActive={() => setActiveCat(cat)}
            active={activecat === cat}
          />
        ))}
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
      {produtos.map((products)=> <ProductsView name={products.nome.toUpperCase()} value={products.preco} />)}
      </div>
    </div>
  );
}
