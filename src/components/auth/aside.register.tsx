import { LayoutAuth } from "../layouts/layout-auth";
import { Input } from "./input";

type Props = {
  onLoguin: () => void;
  oncloseAuth: () => void
};

export function AsideRegister({oncloseAuth , onLoguin}:Props) {
  return (
    <div>
      <LayoutAuth onLayout={oncloseAuth}
      toggleAuth={onLoguin}
        nameBtn="CADASTRAR"
        nameBtn2="Entrar na conta"
        title={<>SEJA BEM VINDO A TERRA MENEIRA</>}
      >
        <Input legend="Name" placeholder="Infome seu nome " required />
        <Input
          legend="Email"
          placeholder="Infome seu nome "
          type="email"
          required
        />
        <Input
          legend="senha"
          placeholder="Infome seu nome "
          type="password"
          required
        />
        <Input
          legend="confirme a senha "
          placeholder="Infome seu nome "
          type="password"
          required
        />
      </LayoutAuth>
    </div>
  );
}
