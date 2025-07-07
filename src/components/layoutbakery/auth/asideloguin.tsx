import { Fildinput } from "../../index/inputfildset";
import { LayoutAuth } from "../../layouts/layout-auth";
import { Button } from "../../index/button";
import { useLogin } from "../../../hooks/auth/useLoguin";

type Props = {
  oncloseAuth: () => void;
  onRegister: () => void;
  onclosed:()=>void
};

export function AsideLoguin({ onclosed, onRegister, oncloseAuth }: Props) {
  const { email, setEmail, password, setPassword, onSubmit , isloading,
   } = useLogin(onclosed);
  console.log(email, password);

  return (
    <LayoutAuth
      className="aside-login-animation"
      toggleAuth={onRegister}
      title={
        <>
          Faça o login e volte pras Terras
          <br className="block md:hidden" />
          <span className="block text-center md:inline md:text-left ">
            {" "}
            Mineiras
          </span>
        </>
      }
      nameBtn2="Criar uma conta"
      onLayout={oncloseAuth}
    >
      <form onSubmit={onSubmit}>
        <Fildinput
        value={email}
          legend="email"
          placeholder="ex: @gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Fildinput
        type="password"
        value={password}
          legend="senha"
          placeholder="digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={isloading}  className="mt-4" type="submit">
          ENTRAR
        </Button>
      </form>
    </LayoutAuth>
  );
}
