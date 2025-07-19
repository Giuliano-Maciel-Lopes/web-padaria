import { Outlet } from "react-router-dom";
import { HeaderCart } from "../layoutcart/headercart";
import { StepCart } from "../layoutcart/stepcart";
import { useAuth } from "../../hooks/auth/useAuth";
import { useCartContext } from "../../hooks/context/cart";
import { useIndexOrders } from "../../hooks/order/userIndexOrder";
import { useEffect, useState } from "react";
import type { Orderview } from "../../types/api/orders/ordersview";
import { currencyBRL } from "../../utils/currencyBRL";
import type { Order } from "../../types/api/orders/indexOrder";





export function LayoutCartpage() {
  const {session} =useAuth()
  const auth = session?.token;
   const { items } = useCartContext();
    const { onViewOrders } = useIndexOrders();
    
    const [dataOrdersfull , setDataOrdersfull] = useState<Order[]| null>(null);
    const [orders, setOrders] = useState<Orderview[] | null>(null);
      const [refreshQuantity, setRefreshQuantity] = useState(false);

       useEffect(() => {
          async function fetchOrders() {
            if (!auth) return;
      
            const { data } = await onViewOrders();
      
            //descoberta nova "flatmap" do ts ele junta map e o flat envese de usar map 2 vezes e flota no final
            if (data) {
              const datanew = data.flatMap((order) =>
                order.items.map((item) => ({
                  id: item.id,
                  name: item.product.name,
                  category: item.product.category,
                  imageUrl: item.product.imageUrl,
                  price: item.unitPrice,
                  quantity: item.quantity,
                  priceTotal: order.totalAmount,
                }))
              );
              setDataOrdersfull(data)
              setOrders(datanew);

            } else {
              setOrders(null);
            }
          }
          fetchOrders();
        }, [auth , refreshQuantity]);
         const DataApiContext = auth && orders ? orders : items;
  const totalAmount = DataApiContext.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const total = currencyBRL(totalAmount);


  return (
    <div className="bg-beige h-full min-h-screen flex flex-col ">
      <HeaderCart />

      <div className="flex flex-col items-center my-12 ">
        <div className="max-w-[100rem] w-full flex flex-col">
          <StepCart />

          <div className="mt-10">
            <Outlet context={{DataApiContext, setRefreshQuantity , setOrders , total , dataOrdersfull}} />
          </div>
        </div>
      </div>
    </div>
  );
}
