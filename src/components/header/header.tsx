import { Logo } from "../logo";
import { Menu } from "./menu";
import cart from "../../assets/carrinho.png";
import search from "../../assets/lupa.png";
import { InputSearch } from "./inputSearch";

type Props = {
  onAside: () => void;
};

export function Header({ onAside }: Props) {
  return (
    <div>
      <header className=" w-full flex flex-col  px-2 md:px-8 bg-header relative z-10">
        <div className="flex items-center justify-between">
       
          <Menu onClick={onAside} />
          
          <Logo />
          <div className="flex gap-6 md:gap-6">
        <img src={cart} alt="Cart icon" className="w-6 h-6 object-contain" />
        <img src={cart} alt="Cart icon" className="w-6 h-6 object-contain" />
        </div>
        </div>

        <form className="flex   items-center">
          <InputSearch  placeholder="procure seu pedido aqui"/>
            <button  className="bg-button "type="submit">
              <img
                src={search}
                alt="Search icon"
                className="w-full h-full object-contain"
              />
            </button>

        </form>
      </header>
    </div>
  );
}
