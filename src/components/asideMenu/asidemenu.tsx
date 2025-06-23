import { Li } from "./li";
import { Logo } from "../logo";
import { Formsearch } from "../header/formSearch";
import { IconButton } from "../header/iconButton";
import x from "../../assets/x.svg"

type Props = {
  onclose: ()=> void
}

export function  AsideMenu({onclose}:Props) {
  return (
    <div>
      <aside className=" p-4 flex flex-col bg-header h-screen w-screen top-0 fixed md:w-90 z-50 " >
        <div className="flex flex-col items-center mb-4">
          <IconButton onClick={onclose} animation className=" absolute top-4 right-4">
        <img src={x} alt="icone x" />
      </IconButton >
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
