import { useNavigate } from "react-router";
import { IconButton } from "../layoutbakery/header/iconButton";
import togoout from "../../assets/sair.svg";
import { useToggle } from "../../hooks/useToggle";
import { ConfirmLogout } from "../layoutbakery/asideMenu/confirmlogout";

type props={
className?:string
}

export function ToGoOut({className}:props) {
  const navigate = useNavigate();
  const confModal = useToggle();
  return (
    <div className={className}>
      <IconButton onClick={() => confModal.open()}>
        <div className=" flex flex-col items-center">
          <img src={togoout} alt="sair" className="w-5 h-5"/>
          <span className="text-black" >voltar ao início</span>
        </div>
      </IconButton>
      {confModal.isOpen && (
        <ConfirmLogout
          mensagem="Tem Certeza que deseja voltar ao inicio"
          onCancel={confModal.closed}
          onConfirm={() => {
            navigate("/");
            confModal.closed();
          }}
        />
      )}
    </div>
  );
}
