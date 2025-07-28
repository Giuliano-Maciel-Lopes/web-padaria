import { LayoutAuth } from "../../layouts/layout-auth";
import { Fildinput } from "../../index/inputfildset";
import { Button } from "../../index/button";
import { useRegisterForm } from "../../../hooks/auth/useregister/form";
import { useRegister } from "../../../hooks/auth/useregister/query";

import { GeneralErro } from "../../../utils/general";


type Props = {
  onLoguin: () => void;
  oncloseAuth: () => void;
};

export function AsideRegister({ oncloseAuth, onLoguin }: Props) {
  const {mutate ,isPending ,errorMessage }= useRegister()
  const {handleSubmit , register ,reset , errors }= useRegisterForm()
  const onSubmit = handleSubmit((data)=>{
    mutate(data , {onSuccess:()=>reset()})

    
  })
  

  return (
    <div className="">
      <LayoutAuth
        onClosed={oncloseAuth}
        toggleAuth={onLoguin}
        nameBtn2="Entrar na conta"
        title={<>SEJA BEM VINDO A TERRA MENEIRA</>}
      >
        <form onSubmit={onSubmit}>
          <Fildinput
            err={errors?.name?.message}
            legend="Name"
            placeholder="Infome seu nome"
           
            {...register("name")}
          />
          <Fildinput
            err={errors.email?.message}
            {...register("email")}
            legend="Email"
            placeholder="digite email... "
            type="email"
          
          />
          <Fildinput
            {...register("password")}
            err={errors?.password?.message}
            legend="senha"
            placeholder="senha "
            type="password"
            
          />
          <Fildinput
            err={errors?.confirmPassword?.message}
            {...register("confirmPassword")}
            legend="confirme a senha "
            placeholder="confrme a senha  "
            type="password"
           
          />
          {errorMessage && <GeneralErro  message={errorMessage} />}
          <Button isloading={isPending} type="submit" className="mt-4">
            CADASTRAR
          </Button>
        </form>
      </LayoutAuth>
    </div>
  );
}
