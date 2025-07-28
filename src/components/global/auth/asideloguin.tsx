import { Fildinput } from "../../index/inputfildset";
import { LayoutAuth } from "../../layouts/layout-auth";
import { Button } from "../../index/button";
import { useLoginForm } from "../../../hooks/auth/useloguin/form";
import { useLoguin } from "../../../hooks/auth/useloguin/query";
import { GeneralErro } from "../../../utils/general";

type Props = {
  oncloseAuth: () => void;
  onRegister: () => void;
  onclosed:()=> void
};

export function AsideLoguin({ onRegister, oncloseAuth , onclosed}: Props) {
  const { errors, handleSubmit, register } = useLoginForm();
  const { isPending, mutate , errorMessage} = useLoguin();
  
  const onSubmit = handleSubmit((dataform) => {
    mutate(dataform ,{onSuccess:()=>onclosed()} );
  });

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

        {errorMessage && <GeneralErro message={errorMessage} />}
        <Button isloading={isPending} className="mt-4" type="submit">
          ENTRAR
        </Button>
      </form>
    </LayoutAuth>
  );
}
