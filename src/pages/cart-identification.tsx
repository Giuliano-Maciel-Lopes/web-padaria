import { Navigate, useOutletContext } from "react-router";
import { License } from "../components/cart identification/license";
import { ProductImageCart } from "../components/cart identification/productidentification.";
import { useAuth } from "../hooks/auth/useAuth";
import type { Orderview } from "../types/api/orders/ordersview";
import { IsHomeResumo } from "../components/cart identification/ishomeResumo";
import type { Order } from "../types/api/orders/indexOrder";

type DataApiContextType = {
  DataApiContext: Orderview[];
  total: number;
  dataOrdersfull: Order[] | null;
};

export function CartIdentificationPage() {
  const { DataApiContext, total, dataOrdersfull } =
    useOutletContext<DataApiContextType>();

  const baseUrl = import.meta.env.VITE_BASE_API;
  const { session } = useAuth();
  const auth = session?.token;

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/3 flex flex-col gap-5 ">
        {DataApiContext.map((item) => (
          <ProductImageCart
            category={item.category}
            quantity={item.quantity}
            key={item.id}
            imageUrl={`${baseUrl}${item.imageUrl}`}
            name={item.name}
          />
        ))}
      </div>

      <div className="md:w-1/3">
        <h1 className="hidden md:block">informaçoes</h1>
        <License
          auth={!!auth}
          name={session?.datauser.name}
          email={session?.datauser.email}
          addressRegistered="sim ou nao "
        />
      </div>

      <div className="md:w-1/3 p-5">
        <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
        {auth && dataOrdersfull && dataOrdersfull.length > 0 ? (
          <IsHomeResumo id={String(dataOrdersfull[0].id)} total={total} />
        ) : (
          <p className="text-gray-500 mt-4">
            {auth
              ? "Você ainda não tem pedidos." 
              : "Faça login para ver o resumo do pedido."}
          </p>
        )}
      </div>
    </div>
  );
}
