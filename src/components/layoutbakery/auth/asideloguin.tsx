import { Input } from "../../index/input";
import { LayoutAuth } from "../../layouts/layout-auth";

type Props = {
  oncloseAuth: () => void;
  onRegister:()=>void
};

export function AsideLoguin({ onRegister , oncloseAuth }: Props) {
  return (
    <LayoutAuth 
    className="aside-login-animation"
    toggleAuth={onRegister}
    title={
    <>
    Faça o login e volte pras Terras
    <br className="block md:hidden" />
    <span className="block text-center md:inline md:text-left "> Mineiras</span>
    </>}

     nameBtn2="Criar uma conta"
      onLayout={oncloseAuth}
      nameBtn="ENTRAR"
    >
      <Input legend="email" placeholder="ex: @gmail.com" />
      <Input legend="senha" placeholder="digite sua senha" />
    </LayoutAuth>
  );
}
