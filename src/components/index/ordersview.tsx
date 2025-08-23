import { useCartContext } from "../../hooks/context/cart";
import { IconButton } from "../layoutbakery/header/iconButton";
import trash from "../../assets/trash-2.svg";
import { useDeleteOrders } from "../../hooks/order/useDeleteorder";
import { currencyBRL } from "../../utils/currencyBRL";
import { QuantityBuy } from "../buyedit & create/quantitybuy";
import { UseUpdateQuantityOrdersItems } from "../../hooks/order.itens/UseUpdateQuantityOrdersItems";
import { ProductImageCart } from "../cart identification/productidentification.";
import { LoadingFull } from "./loadingfull";

type Props = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category: string;
  priceTotal: number;
};

export function Ordersview({
  id,
  name,
  price,
  quantity,
  imageUrl,
  category,
  priceTotal,
 
}: Props) {
  const { mutate, isPending  } = UseUpdateQuantityOrdersItems();
  const { remove, updateQuantity } = useCartContext();
  const { mutate: mutateRemove  , isPending:isPendingRemove} = useDeleteOrders();
 

  async function handleQuantityChange(newQuantity: number) {
    mutate({ data: { quantity: newQuantity }, params: { id } });
    updateQuantity(id, newQuantity);
  }

  async function handleconfirm() {
    mutateRemove({id});
    remove(id);
  }
 if(isPending ||isPendingRemove) return <LoadingFull/>
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
          {<QuantityBuy onChange={handleQuantityChange} quantity={quantity} />}
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
