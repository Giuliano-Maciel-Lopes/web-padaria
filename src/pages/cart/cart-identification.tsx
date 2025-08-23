import { useOutletContext } from "react-router";
import { License } from "../../components/cart identification/license";
import { LicenseInfo } from "../../components/cart identification/licenseinfo";
import { ProductImageCart } from "../../components/cart identification/productidentification.";
import { useAuth } from "../../hooks/context/useAuth";
import type { Orderview } from "../../types/api/orders/ordersview";
import { IsHomeResumo } from "../../components/cart identification/ishomeResumo";
import type { Order } from "../../types/api/orders/indexOrder";

type DataApiContextType = {
  DataApiContext: Orderview[];
  total: number;
  ordersData: Order[] | null;
};

export function CartIdentificationPage() {
  const { DataApiContext, total, ordersData } =
    useOutletContext<DataApiContextType>();

  const baseUrl = import.meta.env.VITE_BASE_API;
  const { session } = useAuth();
  const auth = session?.token;

  {console.log("auth:", auth)} 
{console.log("dataOrdersfull:", ordersData);}
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

      <div className="md:w-1/3 flex flex-col gap-4" >
        <h1 className="hidden md:block">informaçoes</h1>
        <License
          auth={!!auth}
          name={session?.datauser.name}
          email={session?.datauser.email}
          
        />
        <LicenseInfo/>
      </div>

      <div className="md:w-1/3 p-5">
        <h2 className="text-xl font-semibold">Resumo do Pedido</h2>
      

        {auth && ordersData &&ordersData.length > 0 ? (
          <IsHomeResumo id={String(ordersData[0].id)} total={total} />
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
