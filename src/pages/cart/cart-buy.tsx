import { Ordersview } from "../../components/index/ordersview";
import type { Orderview } from "../../types/api/orders/ordersview";
import { Button } from "../../components/index/button";
import { useNavigate } from "react-router";
import { currencyBRL } from "../../utils/currencyBRL";
import { useOutletContext } from "react-router";
import { Loading } from "../../components/index/loading";

export function CartbuyPage() {
  // mudar para rquivo separado vou dormir kkkkkk
  type OutletCartContext = {
    DataApiContext: Orderview[];

    total: number;
  };
  const baseUrl = import.meta.env.VITE_BASE_API;
  const navigate = useNavigate();
  const { DataApiContext, total } =
    useOutletContext<OutletCartContext>();

  if (!DataApiContext || DataApiContext.length === 0) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 gap-6">
        <p className="text-center text-gray-500 text-3xl md:text-5xl font-semibold">
          Nenhum pedido encontrado
        </p>
        <Button variant="stepcart" onClick={() => navigate("/")}>
          voltar
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        {DataApiContext.map((item) => (
          <Ordersview
           
            id={item.id}
            category={item.category}
            imageUrl={`${baseUrl}${item.imageUrl}`}
            key={item.id}
            name={item.name}
            price={item.price}
            priceTotal={item.price * item.quantity}
            quantity={item.quantity}
          />
        ))}
      </div>

      <div className="flex flex-col items-center border w-[25rem] bg-white p-6 rounded-2xl shadow-lg gap-4">
        <div className="w-full flex flex-col gap-2 text-lg text-gray-700 font-medium">
          <div className="flex justify-between px-4">
            <span>Valor total:</span>
            <span>{currencyBRL(total)}</span>
          </div>
          <div className="flex justify-between">
            <span>Frete:</span>
            <span>A calcular</span>
          </div>
        </div>
        <Button
          variant="stepcart"
          className="w-full mt-4"
          onClick={() => navigate("identification")}
        >
          continuar
        </Button>
      </div>
    </div>
  );
}
