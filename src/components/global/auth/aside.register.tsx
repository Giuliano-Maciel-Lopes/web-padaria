import { LayoutAuth } from "../../layouts/layout-auth";
import { Fildinput } from "../../index/inputfildset";
import { Button } from "../../index/button";
import { useRegister } from "../../../hooks/auth/useRegister";

import { GeneralErro } from "../../../utils/general";

type Props = {
  onLoguin: () => void;
  oncloseAuth: () => void;
};

export function AsideRegister({ oncloseAuth, onLoguin }: Props) {
  const { onSubmit, errors, isLoading, register, successMessage } =
    useRegister();

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
            required
            {...register("name")}
          />
          <Fildinput
            err={errors.email?.message}
            {...register("email")}
            legend="Email"
            placeholder="digite email... "
            type="email"
            required
          />
          <Fildinput
            {...register("password")}
            err={errors?.password?.message}
            legend="senha"
            placeholder="senha "
            type="password"
            required
          />
          <Fildinput
            err={errors?.confirmPassword?.message}
            {...register("confirmPassword")}
            legend="confirme a senha "
            placeholder="confrme a senha  "
            type="password"
            required
          />
          {errors?.root && <GeneralErro message={errors.root.message} />}
          <Button disabled={isLoading} type="submit" className="mt-4">
            CADASTRAR
          </Button>
        </form>
      </LayoutAuth>
    </div>
  );
}
