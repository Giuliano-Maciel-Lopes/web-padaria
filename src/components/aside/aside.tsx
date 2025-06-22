import { Li } from "./li";
import { Logo } from "../logo";
import { Formsearch } from "../header/formSearch";

export function Aside() {
  return (
    <div>
      <aside className=" p-4 flex flex-col bg-header h-screen w-screen top-0 fixed md:w-90 z-50 " >
        <div className="flex flex-col items-center mb-4">
        <Logo/>
        <Formsearch/>
        </div>
        
        <nav>
          <ul className="flex flex-col gap-4 justify-center ">
            <Li href="#sobre">SOBRE NÓS</Li>
            <Li href="#cardapio">CARDÁPIO</Li>
            <Li href="#contato">CONTATO</Li>
            <Li href="#promocoes">PROMOÇÕES DO DIA</Li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
