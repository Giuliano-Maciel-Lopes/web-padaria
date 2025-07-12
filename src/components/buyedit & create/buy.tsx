import { useOutletContext } from "react-router-dom";
import type { Product } from "../../types/api/producsts";
import { currencyBRL } from "./currencyBRL";
import { Button } from "../index/button";
import menos from "../../assets/menos.svg";
import mais from "../../assets/mais.svg";
import { useState } from "react";
import local from "../../assets/local.svg";
import { Socials } from "../layoutbakery/fotter/socials";
import Facebook from "../../assets/Facebook.svg";
import twwiter from "../../assets/Twitter.svg";
import email from "../../assets/Email.svg";
import insta from "../../assets/Instagram.svg";
import { useCartContext } from "../../hooks/context/cart";

export function Buy() {
  const { product } = useOutletContext<{ product: Product }>();
  const [amount, setAmount] = useState(1);
  const { save } = useCartContext();

  if (!product) {
    return <div className="p-4 text-red-600">Carregando product</div>;
  }
  const {
    category,
    isVitrine,
    description,
    createdAt,
    updatedAt,
    ...itemSave
  } = product;

  function handleConfirm() {
    save({ ...itemSave, quantity: amount });
    
  }

  return (
    <div className="min-h-screen w-full rounded-2xl border-2 border-amber-950 p-4 flex flex-col gap-7 text-gray-700">
      <h1 className="text-4xl font-semibold">
        {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
      </h1>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-xl text-gray-800">Descriçao</h3>
        <p>{product.description}</p>
      </div>
      <span className="text-xl">{` ${currencyBRL(product.price)}`}</span>

      <div className="flex h-12">
        <div className="flex border-1 ">
          <Button
            onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
            variant="square"
            colorVariant="bg"
          >
            <img src={menos} alt="sinal de menos" />
          </Button>
          <div className="flex items-center justify-center h-12 w-12">
            <span className="text-2xl">{amount}</span>
          </div>
          <Button
            onClick={() => setAmount(amount + 1)}
            className=""
            variant="square"
            colorVariant="bg"
          >
            <img src={mais} alt="sinal de mais" />
          </Button>
        </div>
        <Button
          onClick={handleConfirm}
          className="text-white rounded-none  rounded-r-lg"
          colorVariant="primary"
          variant="buy"
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
