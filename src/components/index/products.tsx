import car from "../../assets/carrinho.png";
import { useAuth } from "../../hooks/auth/useAuth";
import { Button } from "./button";


type Props = {
  name: string;
  value: number;
  img?:string,
  onBuy?:()=> void
  
  
};

export function ProductsView({ onBuy ,  img,  name, value }: Props) {
   const {session }= useAuth()
   const isHomeStock = session?.datauser.role === "STOCK"
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
    
      <Button onClick={onBuy}  colorVariant="products" className="text-lg w-full py-2">
        <div className="flex items-center justify-center gap-2">
          
             {!isHomeStock && <img src={car} alt="Carrinho" className="w-5 h-5" />}
          {isHomeStock ? "EDITAR" : "COMPRAR"}
        
        </div>
      </Button>
    </div>
  );
}
