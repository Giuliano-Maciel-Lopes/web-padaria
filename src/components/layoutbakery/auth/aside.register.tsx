import { LayoutAuth } from "../../layouts/layout-auth";
import { Input } from "../../index/input";
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
          <Input
          value={name}
            legend="Name"
            placeholder="Infome seu nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
          value={email}
            onChange={(e) => setEmail(e.target.value)}
            legend="Email"
            placeholder="digite email... "
            type="email"
            required
          />
          <Input
          value={password}
            legend="senha"
            placeholder="senha "
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
          value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            legend="confirme a senha "
            placeholder="confrme a senha  "
            type="password"
            required
          />
          <Button type="submit" className="mt-4">
            CADASTRAR
          </Button>
        </form>
      </LayoutAuth>
    </div>
  );
}
