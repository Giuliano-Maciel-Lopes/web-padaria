import { Logo } from "../logo";
import { Menu } from "./menu";
import cart from "../../assets/carrinho.png";
import loguin from "../../assets/LOGUIN.png"

import { Formsearch } from "./formSearch";


type Props = {
  onAside: () => void;
};

export function Header({ onAside }: Props) {
  return (
    <div>
      <header className=" w-full flex flex-col  px-2 md:px-8 bg-header relative z-10">

        <div className=" flex  items-center justify-between gap-10">
         
          <Menu onClick={onAside} />
          <Logo />
          

          <div className="hidden md:block w-full ">
            <Formsearch className="" />
          </div>

          <div className="flex gap-6 md:gap-6 ">
            <img
              src={loguin}
              alt="loguin icon"
              className="w-6 h-6 object-contain"
            />
            <img
              src={cart}
              alt="Cart icon"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

         <div className="md:hidden mt-4 w-full">
          <Formsearch />
        </div>
        
      </header>
    </div>
  );
}
