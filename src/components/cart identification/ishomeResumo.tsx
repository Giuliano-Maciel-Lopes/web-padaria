import { useState } from "react";
import { Button } from "../index/button";
import { Input } from "../index/input";
import { useUpdateisHome } from "../../hooks/order/useUpdateisHome";
import { useAuth } from "../../hooks/context/useAuth";
import { useAuthModal } from "../../hooks/context/asideauth";
import { useUserInFocontext } from "../../hooks/context/userinfo";
import { GeneralErro } from "../../utils/general";
import { useNavigate } from "react-router";

type Props = {
  total: number;
  id: string;
};

export function IsHomeResumo({ id, total }: Props) {
  const [message, setMessage] = useState<string | null>(null);

  const { mutateAsync, isPending } = useUpdateisHome();
  const { userInfo: userInfoModal } = useAuthModal();
  const { userInfo } = useUserInFocontext();
  const [isHome, setishome] = useState<boolean | null>(null);
  const { session } = useAuth();
  const hasAddress = !!(userInfo && userInfo.city);
  const navigate = useNavigate()
      
  async function handleIsHomeChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isHome === null) {
      setMessage("Por favor, selecione uma opção de entrega.");

      return;
    }
    if (isHome === true && !hasAddress) {
      setMessage(
        "Para receber em casa, você precisa cadastrar um endereço primeiro."
      );
      userInfoModal.open();
      return;
    }

    await mutateAsync({ data: { isHome }, params: { id } });
    navigate("../payment")
  }

  return (
    <div className="flex flex-col border-x-2 w-full h-auto">
      <div className="flex flex-col p-4">
        <div className="flex flex-col border-b-1 gap-4">
          <p className="text-gray-600">
            Revise os detalhes do seu pedido antes de finalizar a compra.
          </p>

          <div className="flex-col flex gap-4">
            <p>
              {" "}
              Total do pedido: <span className="font-semibold"> {total}</span>
            </p>
            <p>
              {" "}
              Fret: <span className="font-semibold">a calcular</span>
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Obs: cobramos uma taxa de R$5 para entrega em casa. Se for no bairro
            ou vizinhança, R$2.5.
          </span>
        </div>

        <form onSubmit={handleIsHomeChange} className="p-4">
          <div className="flex gap-8 mt-2">
            <label className="flex items-center gap-2">
              <Input
                type="radio"
                name="delivery"
                onChange={() => setishome(true)}
              />
              Receber em casa
            </label>

            <label className="flex items-center gap-2">
              <Input
                type="radio"
                name="delivery"
                onChange={() => setishome(false)}
              />
              Retirar no local
            </label>
          </div>
          {message && <GeneralErro message={message} />}
          <Button type="submit" className="mt-4" >
            Finalizar Compra
          </Button>
        </form>
      </div>
    </div>
  );
}
