import { useCartContext } from "../../hooks/context/cart";

export function Ordersview() {
  const {items} = useCartContext()
  
  return (
    <div className="h auto border-2 flex flex-col md:flex-row w-full px-10">
        <div >
            <h1>PRODUCT</h1>

            <div>
                
            </div>


        </div>

      
    </div>
  );
}