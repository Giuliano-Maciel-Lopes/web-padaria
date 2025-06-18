import { Logo } from "./logo";
import menu from "../assets/menu.svg";
import cart from "../assets/carrinho.png";
import search from "../assets/lupa.png";

export function Header() {
  return (
    <div className="bg-footer">
      <header className="flex items-center justify-between px-4 py-2">
        <img src={menu} alt="Menu icon" className="w-6 h-6 object-contain" />
        <Logo />
        <div className="flex gap-4 items-center">
          <img src={search} alt="Search icon" className="w-6 h-6 object-contain" />
          <img src={cart} alt="Cart icon" className="w-6 h-6 object-contain" />
        </div>
      </header>
    </div>
  );
}
