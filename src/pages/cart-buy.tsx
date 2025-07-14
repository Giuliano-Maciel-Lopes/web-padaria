import { useCartContext } from "../hooks/context/cart";
import { Ordersview } from "../components/index/ordersview";

export function CartbuyPage() {
  const { items } = useCartContext();
 const baseUrl = import.meta.env.VITE_BASE_API;

  return (
    <div className="w-full">
      {items.map((item) => (
        <Ordersview
          category={item.category}
          imageUrl={`${baseUrl}${item.imageUrl}`}
          key={item.id}
          name={item.name}
          price={item.price}
          pricetotal={item.price * item.quantity}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
}
