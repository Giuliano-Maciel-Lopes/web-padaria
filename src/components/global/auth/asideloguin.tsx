import { Fildinput } from "../../index/inputfildset";
import { LayoutAuth } from "../../layouts/layout-auth";
import { Button } from "../../index/button";
import { useLogin } from "../../../hooks/auth/useLoguin";
import { GeneralErro } from "../../../utils/general";

type Props = {
  oncloseAuth: () => void;
  onRegister: () => void;
  onclosed: () => void;
};

export function AsideLoguin({ onclosed, onRegister, oncloseAuth }: Props) {
  const { email, setEmail, password, setPassword, onSubmit, isloading, error } =
    useLogin(onclosed);
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
        err={error?.email}
          value={email}
          legend="email"
          placeholder="ex: @gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Fildinput
        err={error?.password}
          type="password"
          value={password}
          legend="senha"
          placeholder="digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error?.general && (
         <GeneralErro message={error.general}/>
          
        )}
        <Button  disabled={isloading} className="mt-4" type="submit">
          ENTRAR
        </Button>
      </form>
    </LayoutAuth>
  );
}
