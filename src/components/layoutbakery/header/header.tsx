import { Logo } from "../../index/logo";
import { IconButton } from "./iconButton";
import cart from "../../../assets/carrinho.png";
import loguin from "../../../assets/LOGUIN.png";
import menu from "../../../assets/menu.svg";

import { Formsearch } from "./formSearch";
import { useCartContext } from "../../../hooks/context/cart";
import { useNavigate, useOutlet, useOutletContext } from "react-router-dom";
import { useAuth } from "../../../hooks/context/useAuth";
import { useIndexOrders } from "../../../hooks/order/userIndexOrder";
import {  useMemo, useState } from "react";

type Props = {
  onAsideMenu: () => void;
  onAsideLoguin: () => void;
  refreshOrders: boolean
};

export function Header({ refreshOrders , onAsideMenu, onAsideLoguin }: Props) {
  const { items } = useCartContext();
  const { session } = useAuth();
  const { data:ordersData  } = useIndexOrders("PROCESSING");
  const amountItens = items.length;
  const navigate = useNavigate();
  const auth = session?.token
   

  




    
    
    
 const total =ordersData?.reduce((acc, pedido) => acc + pedido.items.length, 0);
  
    const quantityItems = auth? total : items.length;

  return (
    <header className=" w-full flex flex-col  px-2 md:px-8 bg-header fixed z-10 md:max-w-[100rem] h-[9.5rem] md:h-20">
      <div className=" flex  items-center justify-between gap-10">
        <IconButton onClick={onAsideMenu}>
          <img src={menu} alt="icone menu" />
        </IconButton>
        <Logo />

        <div className="hidden md:block w-full ">
          <Formsearch placeholder="procure seu pedido aqui" className="" />
        </div>

        <div className="flex gap-6 md:gap-6 ">
          <IconButton animationbase onClick={onAsideLoguin}>
            <img
              src={loguin}
              alt="loguin icon"
              className=" object-contain hover:opacity-60"
            />
          </IconButton>

          <IconButton
            onClick={() => navigate("/cart")}
            animationbase
            className="flex relative"
          >
            {(quantityItems ?? 0) > 0 && ( // c for null assume 0
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-bold text-amber-900 shadow-md">
                {quantityItems}
              </span>
            )}
            <img
              src={cart}
              alt="Cart icon"
              className="object-contain hover:opacity-60  h-8"
            />
          </IconButton>
        </div>
      </div>

      <div className="md:hidden mt-4 w-full">
        <Formsearch placeholder="procure seu pedido aqui"/>
      </div>
    </header>
  );
}
