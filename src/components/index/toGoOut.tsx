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
        <img src={togoout} alt="sair" />
      </IconButton>
      {confModal.isOpen && (
        <ConfirmLogout
          mensagem="Tem Certeza que deseja sair"
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
