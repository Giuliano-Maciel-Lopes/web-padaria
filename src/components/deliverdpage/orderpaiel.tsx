import { Button } from "../index/button";
import add from "../../assets/mais.svg";
import { currencyBRL } from "../../utils/currencyBRL";

type Props = {
  name: string;
  quantityitens: number;
  valor: number;
  onClick:()=> void
};

export function OrdersPainel({onClick ,  name, quantityitens, valor }: Props) {
  return (
       <div
      className="w-full bg-header shadow-lg rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-green-300  "
    >
      <div className="flex flex-col gap-1 text-center md:text-left">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">{name.toUpperCase()}</h2>
        <p className="text-sm md:text-base text-gray-500">
          {quantityitens} {quantityitens === 1 ? "item" : "itens"}
        </p>
        <p className="text-base md:text-lg font-bold text-green-600">
         {currencyBRL(valor)}
        </p>
      </div>

      <Button
      onClick={onClick}
        variant="buy"
        className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 shadow-md"
        title="Adicionar pedido"
        aria-label="Adicionar pedido"
      >
        <img src={add} alt="Adicionar" className="w-5 h-5" />
        <span >Aceitar corrida</span>
      </Button>
    </div>
  );
}

