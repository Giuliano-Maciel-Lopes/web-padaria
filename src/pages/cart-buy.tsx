import { useCartContext } from "../hooks/context/cart";
import { Ordersview } from "../components/index/ordersview";
import { useIndexOrders } from "../hooks/order/userIndexOrder";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth/useAuth";
import type { Orderview } from "../types/api/orders/ordersview";
import { data } from "react-router";

export function CartbuyPage() {
  const { session } = useAuth();
  const auth = session?.token;
  const { items } = useCartContext();
  const { onViewOrders } = useIndexOrders();
  const baseUrl = import.meta.env.VITE_BASE_API;

  const [orders, setOrders] = useState<Orderview[] | null>(null);

  useEffect(() => {
    async function fetchOrders() {

      if (!auth) return;

      const { data } = await onViewOrders();
      if (data) {
        const datanew = data.flatMap((order) =>
          order.items.map((item) => ({
            id: order.id,
            name: item.product.name,
            category: item.product.category,
            imageUrl: item.product.imageUrl,
            price: item.unitPrice,
            quantity: item.quantity,
            priceTotal: order.totalAmount,
          }))
        );
        setOrders(datanew);
      } else {
        setOrders(null);
      }
    }
    fetchOrders();
  }, []);

  const DataApiContext = auth && orders ? orders : items

   if (!DataApiContext || DataApiContext.length === 0) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center p-8">
        <p className="text-center text-gray-500 text-3xl md:text-5xl font-semibold">
          Nenhum pedido encontrado
        </p>
      </div>
    );
  }

  return (
      

    <div className="w-full">
      {DataApiContext.map((item) => (
        <Ordersview
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
  );
}
