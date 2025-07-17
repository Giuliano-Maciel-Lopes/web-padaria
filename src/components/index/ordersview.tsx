import { useCartContext } from "../../hooks/context/cart";
import type { Orderview } from "../../types/api/orders/ordersview";
import { IconButton } from "../layoutbakery/header/iconButton";
import trash from "../../assets/trash-2.svg";
import { useDeleteOrders } from "../../hooks/order/useDeleteorder";
import { useAuth } from "../../hooks/auth/useAuth";
import { currencyBRL } from "../../utils/currencyBRL";
import { QuantityBuy } from "../buyedit & create/quantitybuy";
import { UseUpdateQuantityOrdersItems } from "../../hooks/order.itens/UseUpdateQuantityOrdersItems";
import { useEffect, useState } from "react";
import { ProductImageCart } from "../cart identification/productidentification.";

type Props = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category: string;
  priceTotal: number;
  roloadQuantityorder:()=> void
  setOrders: React.Dispatch<React.SetStateAction<Orderview[] | null>>;
};

export function Ordersview({
  id,
  name,
  price,
  quantity,
  imageUrl,
  category,
  priceTotal,
  setOrders,
  roloadQuantityorder
}: Props) {
  const { UpdateQuantityOrders } = UseUpdateQuantityOrdersItems();
  const { remove ,updateQuantity } = useCartContext();
  const { onDelete } = useDeleteOrders();
  const { session } = useAuth();
  const [localQuantity, setLocalQuantity] = useState(quantity); // localquantity vai ser a quantidade que tem na api que quantity vai pegar

  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  async function handleQuantityChange(newQuantity: number) {
    setLocalQuantity(newQuantity);
    await UpdateQuantityOrders(id, newQuantity);
    roloadQuantityorder();
    updateQuantity(id , newQuantity)

  }

  async function handleconfirm() {
    if (session?.token) {
      await onDelete(id);

      setOrders((prev) => prev?.filter((item) => item.id !== id) || null);
    }
    remove(id);
  }
  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  return (
    <div className="w-full border-b py-4 px-4 md:px-10 flex flex-col md:flex-row gap-4  text-sm relative ">
      {/* produtos */}
      <div className=" md:w-2/5">
        <ProductImageCart
          imageUrl={imageUrl}
          name={name}
          quantity={quantity}
          category={category}
        />
      </div>

      <div className="flex md:w-3/5 items-center">
        {/* Quantidade */}
        <div className="w-full  text-left md:text-center md:w-1/3">
          {
            <QuantityBuy
              onChange={handleQuantityChange}
              quantity={localQuantity}
            />
          }
        </div>

        <div className="hidden md:block md:w-1/3">
          <div className="w-full  md:text-center text-gray-700 text-2xl ">
            <p>{currencyBRL(price)}</p>
          </div>
        </div>

        {/* Valor total */}
        <div className="md:text-center font-bold text-2xl md:w-1/3 ">
          <p>{currencyBRL(priceTotal)}</p>
        </div>
      </div>

      <div className="absolute top-4 right-4 ">
        <IconButton onClick={handleconfirm}>
          <img src={trash} alt="lixeira" />
        </IconButton>
      </div>
    </div>
  );
}
