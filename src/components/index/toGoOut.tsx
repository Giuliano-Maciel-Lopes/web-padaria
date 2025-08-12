import { useNavigate } from "react-router";
import { IconButton } from "../layoutbakery/header/iconButton";
import togoout from "../../assets/sair.svg";
import { useToggle } from "../../hooks/useToggle";
import { ConfirmLogout } from "../layoutbakery/asideMenu/confirmlogout";

export function ToGoOut() {
  const navigate = useNavigate();
  const confModal = useToggle();
  return (
    <div>
      <IconButton onClick={() => confModal.open()}>
        <div className=" flex flex-col items-center">
          <img src={togoout} alt="sair" />
          <span>voltar para o inicio</span>
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
