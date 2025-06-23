import { Logo } from "../logo";
import { IconButton } from "./iconButton";
import cart from "../../assets/carrinho.png";
import loguin from "../../assets/LOGUIN.png";
import menu from "../../assets/menu.svg";

import { Formsearch } from "./formSearch";

type Props = {
  onAsideMenu: () => void;
  onAsideLoguin: ()=> void;
};

export function Header({onAsideMenu , onAsideLoguin}: Props) {
  return (
    <div>
      <header className=" w-full flex flex-col  px-2 md:px-8 bg-header fixed z-10 md:max-w-[100rem]">
        
        <div className=" flex  items-center justify-between gap-10">
          <IconButton onClick={onAsideMenu}>
            <img src={menu} alt="icone menu" />
          </IconButton>
          <Logo />

          <div className="hidden md:block w-full ">
            <Formsearch className="" />
          </div>

          <div className="flex gap-6 md:gap-6 ">
            <IconButton  onClick={onAsideLoguin}>
              <img
                src={loguin}
                alt="loguin icon"
                className="w-6 h-6 object-contain hover:opacity-60"
              />
            </IconButton>

            <IconButton>
              <img
                src={cart}
                alt="Cart icon"
                className="w-6 h-6 object-contain hover:opacity-60"
              />
            </IconButton>
          </div>
        </div>

        <div className="md:hidden mt-4 w-full">
          <Formsearch />
        </div>
      </header>
    </div>
  );
}
