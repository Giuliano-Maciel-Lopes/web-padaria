import { LayoutAuth } from "../../layouts/layout-auth";
import { Fildinput } from "../../index/inputfildset";
import { useUserInfoCreate } from "../../../hooks/userinfo/usecreate";
import { Button } from "../../index/button";
type Props ={
  onClosed: () => void;
  onbutton2:() => void
}
export function AsideUserInfo({onClosed , onbutton2}: Props) {
  const { userInfo, setField, onCreateUserInfo } = useUserInfoCreate();

  return (
    <LayoutAuth
      nameBtn2="voltar para o inicio"
      onClosed={onClosed}
      title="Informações de Entrega"
      toggleAuth={onbutton2}
    >
      <form onSubmit={onCreateUserInfo} className=" gap-4">
        <Fildinput
          legend="Rua"
          placeholder="Digite sua rua"
          type="text"
          value={userInfo.street}
          onChange={(e) => setField("street", e.target.value)}
        />

        <Fildinput
          legend="Número"
          placeholder="Digite o número da casa"
          type="text"
          value={userInfo.houseNumber}
          onChange={(e) => setField("houseNumber", e.target.value)}
        />

        <Fildinput
          legend="Bairro"
          placeholder="Digite seu bairro"
          type="text"
          value={userInfo.neighborhood}
          onChange={(e) => setField("neighborhood", e.target.value)}
        />

        <Fildinput
          legend="Cidade"
          placeholder="Digite sua cidade"
          type="text"
          value={userInfo.city}
          onChange={(e) => setField("city", e.target.value)}
        />

        <Fildinput
          legend="Telefone"
          placeholder="Digite seu telefone"
          type="tel"
          value={userInfo.phone}
          onChange={(e) => setField("phone", e.target.value)}
        />
        <Button type="submit" >
          Salvar informaçoes
        </Button>
         
      </form>
    </LayoutAuth>
  );
}
