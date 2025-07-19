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
import { useEffect, useState } from "react";

type Props = {
  onAsideMenu: () => void;
  onAsideLoguin: () => void;
  refreshOrders: boolean
};

export function Header({ refreshOrders , onAsideMenu, onAsideLoguin }: Props) {
  const { items } = useCartContext();
  const { session } = useAuth();
  const { onViewOrders } = useIndexOrders();
  const amountItens = items.length;
  const navigate = useNavigate();
   
  const [amountItensApi , setAmountItensApi ]= useState <number| null>(null)
  const quantityItems = session?.token ? amountItensApi : amountItens



  useEffect(() => {
    async function fetchOrder() {
      const { data } = await onViewOrders();
      if (data) {
        const amountItens = data.reduce((acc, pedido) => acc + pedido.items.length, 0);
      
        
        setAmountItensApi(amountItens)
      }
    }
    fetchOrder();
  }, [session?.token ,refreshOrders]);

  return (
    <header className=" w-full flex flex-col  px-2 md:px-8 bg-header fixed z-10 md:max-w-[100rem] h-[9.5rem] md:h-20">
      <div className=" flex  items-center justify-between gap-10">
        <IconButton onClick={onAsideMenu}>
          <img src={menu} alt="icone menu" />
        </IconButton>
        <Logo />

        <div className="hidden md:block w-full ">
          <Formsearch className="" />
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
        <Formsearch />
      </div>
    </header>
  );
}
