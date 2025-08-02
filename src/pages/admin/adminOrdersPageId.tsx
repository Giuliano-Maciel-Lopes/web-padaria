import { data, useParams } from "react-router";
import { ProductImageCart } from "../../components/cart identification/productidentification.";
import { useShowOrderID } from "../../hooks/order/useshowOrderId";
import { LoadingFull } from "../../components/index/loadingfull";

export function AdminOrdersIdPage() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: OrderId } = useShowOrderID(id);

  const baseUrl = import.meta.env.VITE_BASE_API;

  if (isLoading) return <LoadingFull />;

  console.log(OrderId);
  return (
    <div className="min-h-screen mt-6 ">
      <div className=" flex flex-col gap-4 w-1/2 border-2">
        <p className="hidden md:flex text-lg">PRODUTOS</p>
        {OrderId?.items.map((item) => {
          const teste = item.product.imageUrl;
          console.log(teste);
          return (
            <ProductImageCart
              key={item.id}
              category={item.product.category}
              imageUrl={`${baseUrl}${item.product.imageUrl}`}
              name={item.product.name}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div>
        
      </div>
    </div>
  );
}
