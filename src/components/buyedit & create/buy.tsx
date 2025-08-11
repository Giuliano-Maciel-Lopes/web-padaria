import { data, useOutletContext } from "react-router-dom";
import type { Product } from "../../types/api/products/producsts";
import { currencyBRL } from "../../utils/currencyBRL";
import { Button } from "../index/button";
import { useState } from "react";
import local from "../../assets/local.svg";
import { Socials } from "../layoutbakery/fotter/socials";
import Facebook from "../../assets/Facebook.svg";
import twwiter from "../../assets/Twitter.svg";
import insta from "../../assets/Instagram.svg";
import { useCartContext } from "../../hooks/context/cart";
import { QuantityBuy } from "./quantitybuy";
import { useCreateOrders } from "../../hooks/order/useCreateOrders";
import { useCreateOrdersItens } from "../../hooks/order.itens/useCreateOrdersItens";
import { useAuth } from "../../hooks/context/useAuth";
type Props = {
  onAside: () => void;
};

export function Buy({ onAside }: Props) {
  const { product } = useOutletContext<{
    product: Product;
  }>();

  const [amount, setAmount] = useState(1);
  const { save } = useCartContext();
  const { session } = useAuth();
  const { mutateAsync: mutateOrder } = useCreateOrders();
  const { mutateAsync, isPending } = useCreateOrdersItens();

  const { isVitrine, description, createdAt, updatedAt, ...itemSave } = product;

  async function handleConfirm() {
    if (session?.token) {
      const orderId = await mutateOrder();
      console.log(orderId);
      if (orderId) {
        await mutateAsync({
          data: { items: [{ productId: product.id, quantity: amount }] },
          orderId,
        });
      }
    }

    //  Salva no localStorage de qualquer jeito
    save({ ...itemSave, quantity: amount });
  }

  return (
    <div className="min-h-screen w-full rounded-2xl border-2 border-amber-950 p-4 flex flex-col gap-7 text-gray-700">
      <div className="flex justify-end">
        <h1>quantidade disponivel: {product.stock}</h1>
      </div>
      <h1 className="text-4xl font-semibold">
        {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
      </h1>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-xl text-gray-800">Descriçao</h3>
        <p>{product.description}</p>
      </div>
      <span className="text-xl">{` ${currencyBRL(product.price)}`}</span>

      <div className="flex h-12">
        <QuantityBuy quantity={amount} onChange={setAmount} />

        <Button
          onClick={() => {
            handleConfirm();
            onAside();
          }}
          className="text-white rounded-none  rounded-r-lg"
          colorVariant="primary"
          variant="buy"
          isloading={isPending}
        >
          ADICIONAR AO CARRINHO
        </Button>
      </div>
      <div className=" flex flex-col w-[300px] gap-4">
        Agora realizamos entregas em sua cidade. Aproveite e faça seu pedido com
        comodidade e segurança.
        <a
          href=""
          className="flex items-center gap-2 mt-2 text-amber-950 hover:underline"
        >
          {" "}
          <img src={local} alt="" />
          adiconar sua localizaçao
        </a>
      </div>

      <div className="flex flex-col gap-4 mt-7">
        <h3 className="text-lg">
          Qualquer duvida entre em contato na nossas redes
        </h3>
        <div className="flex gap-6 ">
          <Socials logo={Facebook} href="" />
          <Socials logo={insta} href="" />
          <Socials logo={twwiter} href="" />
        </div>
      </div>
    </div>
  );
}
