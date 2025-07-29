import { Outlet } from "react-router-dom";
import { useMemo, useState } from "react";

import { HeaderCart } from "../layoutcart/headercart";
import { StepCart } from "../layoutcart/stepcart";

import { useAuth } from "../../hooks/context/useAuth";
import { useCartContext } from "../../hooks/context/cart";
import { useIndexOrders } from "../../hooks/order/userIndexOrder";

import { currencyBRL } from "../../utils/currencyBRL";
import { Loading } from "../index/loading";

import type { Orderview } from "../../types/api/orders/ordersview";

export function LayoutCartpage() {
  const { session } = useAuth();
  const auth = session?.token;
  const { items } = useCartContext();

  const { data, isLoading, isError } = useIndexOrders();
  

   

  const orders = useMemo(() => {
    if (!auth || !data) return null;

    return data.flatMap((order) =>
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
  }, [auth, data]);

 
  const DataApiContext = auth && orders ? orders : items;

  
  const totalAmount = DataApiContext.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = currencyBRL(totalAmount);

  if(isLoading) return <Loading />
  

  return (
    <div className="bg-beige h-full min-h-screen flex flex-col">
      <HeaderCart />

      <div className="flex flex-col items-center my-12">
        <div className="max-w-[100rem] w-full flex flex-col">
          <StepCart />

          <div className="mt-10">
            <Outlet
              context={{
                DataApiContext,
                total,
                ordersData: data,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
