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
  const { errors , isloading , onSubmit , register ,  } =
    useLogin(onclosed);


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
     onClosed={oncloseAuth}
    >
      <form onSubmit={onSubmit}>
        <Fildinput
        err={errors?.email?.message}
         
          legend="email"
          placeholder="ex: @gmail.com"
         {...register("email")}
          type="email"
        />
        <Fildinput
        err={errors?.password?.message}
          type="password"
          legend="senha"
          placeholder="digite sua senha"
          {...register("password")}
        />
        {errors.root && (
         <GeneralErro message={errors.root.message}/>
          
        )}
         {errors?.root && <GeneralErro message={errors.root.message} />}
        <Button  disabled={isloading} className="mt-4" type="submit">
          ENTRAR
        </Button>
      </form>
    </LayoutAuth>
  );
}
