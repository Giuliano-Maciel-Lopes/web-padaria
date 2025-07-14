import { useCartContext } from "../../hooks/context/cart";
import { QuantityBuy } from "../buyedit & create/quantitybuy";
import { IconButton } from "../layoutbakery/header/iconButton";
import trash from "../../assets/trash-2.svg";

type Props = {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  category: string;
  pricetotal: number;
};

export function Ordersview({
  name,
  price,
  quantity,
  imageUrl,
  category,
  pricetotal,
}: Props) {
  const {  remove } = useCartContext();

  return (
    <div className="w-full border-b py-4 px-4 md:px-10 flex flex-col md:flex-row gap-4  text-sm relative ">
      {/* produtos */}
      <div className="flex flex-col-reverse md:flex-row gap-4 md:w-2/5">
        <div className="md:w-28 md:h-28 h-60 border- rounded overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain bg-gray-100"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-2xl">{name}</h2>
          <p className=" text-lg">
            <span className="text-gray-500">Quantidade:</span>
            {quantity}
          </p>
          <p className="text-lg">{category}</p>
        </div>
      </div>

      <div className="flex md:w-3/5 items-center">
        {/* Quantidade */}
        <div className="w-full  text-left md:text-center md:w-1/3">
         {/*<QuantityBuy  quantity={quantity} />*/}
        </div>

        <div className="hidden md:block md:w-1/3">
          <div className="w-full  md:text-center text-gray-700 text-2xl ">
            <p>{price}</p>
          </div>
        </div>

        {/* Valor total */}
        <div className="md:text-center font-bold text-2xl md:w-1/3 ">
          <p>{pricetotal}</p>
        </div>
      </div>

      <div className="absolute top-4 right-4 ">
        <IconButton >
          {" "}
          <img src={trash} alt="lixeira" />
        </IconButton>
      </div>
    </div>
  );
}
