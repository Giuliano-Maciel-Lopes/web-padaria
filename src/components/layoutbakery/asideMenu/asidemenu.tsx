import { Li } from "./li";
import { Logo } from "../../index/logo";
import { Formsearch } from "../header/formSearch";
import { IconButton } from "../header/iconButton";
import x from "../../../assets/x.svg";
import logout from "../../../assets/sair.svg";
import { useAuth } from "../../../hooks/auth/useAuth";


type Props = {
  oncloseMenu: () => void;
  onAsideConfirm: ()=> void

};

export function AsideMenu({ oncloseMenu , onAsideConfirm}: Props) {
  const {session , } = useAuth()
  
  return (
    <div>
      <aside className=" p-4 flex flex-col bg-header h-screen w-screen top-0 fixed md:w-90 z-50 aside-animation">
        <div className="flex flex-col  mb-4">
          <div className="flex justify-between">

            <IconButton onClick={onAsideConfirm} className="flex gap-3 justify-start items-center">
              
              <img src={logout} alt="icone de sair" />
              <span className="max-w-[120px] truncate whitespace-nowrap">
                
               {session?.datauser.name ? `olá ${session?.datauser.name.toUpperCase()}`:"olá convidado"}
              </span>
            </IconButton>

            <IconButton onClick={oncloseMenu} animation className="">
              <img src={x} alt="icone x" />
            </IconButton>
          </div>

          <Logo  />

          <Formsearch />
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
