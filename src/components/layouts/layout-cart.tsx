import { Outlet } from "react-router-dom";

import { HeaderCart } from "../layoutcart/headercart";
import { StepCart } from "../layoutcart/stepcart";

import { useAuth } from "../../hooks/context/useAuth";
import { useCartContext } from "../../hooks/context/cart";
import { useIndexOrders } from "../../hooks/order/userIndexOrder";

import { currencyBRL } from "../../utils/currencyBRL";
import { Loading } from "../index/loading";

export function LayoutCartpage() {
  const { session } = useAuth();
  const auth = session?.token;
  const { items } = useCartContext();

  const { data, isLoading,  } = useIndexOrders("PROCESSING");

  if (isLoading) return <Loading />;

  const orders = data?.flatMap((order) =>
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

  const DataApiContext = auth ? orders ?? [] : items;

  const totalAmount = DataApiContext.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = currencyBRL(totalAmount);
  console.log("Data:", data, "teste");
  console.log("total:", totalAmount, "teste");
  console.log("datapaicontext:", data, "teste");

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
