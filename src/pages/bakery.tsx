import { useState } from "react";
import { Buttoncategory } from "../components/bakeryshowcase/category";
import { Slid } from "../components/bakeryshowcase/slider";

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
    </div>
  );
}
