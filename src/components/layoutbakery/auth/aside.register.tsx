import { LayoutAuth } from "../../layouts/layout-auth";
import { Fildinput } from "../../index/inputfildset";
import { Button } from "../../index/button";
import { useRegister } from "../../../hooks/useRegister";
import { use } from "react";

type Props = {
  onLoguin: () => void;
  oncloseAuth: () => void;
};

export function AsideRegister({ oncloseAuth, onLoguin }: Props) {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSubmit,
    isloading
  } = useRegister();

  console.log(name,email , password,confirmPassword)

  return (
    <div className="">
      <LayoutAuth
        onLayout={oncloseAuth}
        toggleAuth={onLoguin}
        nameBtn2="Entrar na conta"
        title={<>SEJA BEM VINDO A TERRA MENEIRA</>}
      >
        <form  onSubmit={onSubmit}>
          <Fildinput
          value={name}
            legend="Name"
            placeholder="Infome seu nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Fildinput
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            legend="Email"
            placeholder="digite email... "
            type="email"
            required
          />
          <Fildinput
          value={password}
            legend="senha"
            placeholder="senha "
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Fildinput
          value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            legend="confirme a senha "
            placeholder="confrme a senha  "
            type="password"
            required
          />
          <Button disabled={isloading}type="submit" className="mt-4">
            CADASTRAR
          </Button>
        </form>
      </LayoutAuth>
    </div>
  );
}
