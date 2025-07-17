import { useOutletContext } from "react-router";
import { License } from "../components/cart identification/license";
import { ProductImageCart } from "../components/cart identification/productidentification.";
import { useAuth } from "../hooks/auth/useAuth";
import type { Orderview } from "../types/api/orders/ordersview";
useOutletContext;

type DataApiContextType = {
  DataApiContext: Orderview[];
  // outros campos se tiver, por exemplo setRefreshQuantity, etc
};

export function CartIdentificationPage() {
  const { DataApiContext } = useOutletContext<DataApiContextType>();

  const baseUrl = import.meta.env.VITE_BASE_API;
  const { session } = useAuth();
  const auth = session?.token;
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/3 flex">
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
          name={"teste"}
          email={"teste"}
          addressRegistered="sim ou nao "
        />
      </div>

      <div className="md:w-1/3">
        <h1 className="hidden md:block">resumo</h1>
      </div>
    </div>
  );
}
