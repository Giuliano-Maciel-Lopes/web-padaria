import { LayoutAuth } from "../../layouts/layout-auth";
import { Fildinput } from "../../index/inputfildset";
import { useUserInfoCreate } from "../../../hooks/userinfo/usecreate";
import { Button } from "../../index/button";
import { Select } from "../../index/select";
import { cityDelivered } from "../../../utils/delivered";
import { GeneralErro } from "../../../utils/general";

type Props = {
  onClosed: () => void;
  onbutton2: () => void;
};

export function AsideUserInfo({ onClosed, onbutton2 }: Props) {
  const { errors, onCreateUserInfo, register } = useUserInfoCreate();

  return (
    <LayoutAuth
      nameBtn2="voltar para o inicio"
      onClosed={onClosed}
      title="Informações de Entrega"
      toggleAuth={onbutton2}
    >
      <form onSubmit={onCreateUserInfo} className="flex flex-col gap-4">
        <Fildinput
          err={errors.street?.message}
          legend="Rua"
          placeholder="Digite sua rua"
          type="text"
          {...register("street")}
        />

        <Fildinput
          err={errors.houseNumber?.message}
          legend="Número"
          placeholder="Digite o número da casa"
          type="text"
          {...register("houseNumber")}
        />

        <Fildinput
          err={errors.neighborhood?.message}
          legend="Bairro"
          placeholder="Digite seu bairro"
          type="text"
          {...register("neighborhood")}
        />

        <Select legend="Cidade" {...register("city")} err={errors.city?.message}>
          {cityDelivered.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </Select>

        <Fildinput
          err={errors.phone?.message}
          legend="Telefone"
          placeholder="Digite seu telefone"
          type="tel"
          {...register("phone")}
        />

        {errors?.root && <GeneralErro message={errors.root.message} />}

        <Button type="submit">Salvar informações</Button>
      </form>
    </LayoutAuth>
  );
}

 
