import { Formsearch } from "../layoutbakery/header/formSearch";
import { Select } from "../index/select";
import { Button } from "../index/button";

type Props = {
  status: string;
  name: string;
  pricetotal: number;
  onclick?:()=>void
};

export function PainelStatus({onclick,  name, pricetotal, status }: Props) {
  return (
    <div className="border-2 border-gray-300 rounded-xl w-full p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col md:flex-row md:gap-6 text-sm text-gray-700">
          <p className="font-semibold text-xl md:text-2xl">{name}</p>
          <div className="mt-2 md:mt-0">
            <p className="text-gray-500 text-base md:text-lg">
              Valor da compra: R$ {pricetotal.toFixed(2)}
            </p>
            <p className="text-gray-500 text-base md:text-lg">
              Status: {status}
            </p>
          </div>
        </div>

        <Button onClick={onclick} variant="stepcart" className="text-sm md:text-base text-amber-50">
          Detalhes do pedido
        </Button>
      </div>
    </div>
  );
}
