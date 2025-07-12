import { useCartContext } from "../hooks/context/cart";
import { Ordersview } from "../components/index/ordersview";


export function CartbuyPage() {
  const {items} = useCartContext()


  return (
    <div>
      <Ordersview/>
     
    </div>
  );
}