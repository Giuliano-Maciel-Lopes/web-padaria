import car from "../../assets/carrinho.png";
import { Button } from "./button";

type Props = {
  name: string;
  value: number;
  img?:string
};

export function ProductsView({ img,  name, value }: Props) {
  return (
    <div className="border-2 border-gray-300 rounded-xl shadow-md p-4 flex flex-col items-center gap-4  w-full bg-white">
    
      <a href="#" className="w-full flex justify-center">
  <img
    src={img}
    alt={`Imagem do produto ${name}`}
    className="object-contain w-52 h-36 bg-white "
  />
</a>

      <span className="text-lg font-semibold text-amber-950 text-center">
        {name}
      </span>

      <span className="bg-footer text-white text-xl font-bold px-4 py-1 rounded-md shadow">
        R$ {value.toFixed(2)}
      </span>

      <Button colorVariant="products" className="text-lg w-full py-2">
        <div className="flex items-center justify-center gap-2">
          <img src={car} alt="Carrinho" className="w-5 h-5" />
          COMPRAR
        </div>
      </Button>
    </div>
  );
}
