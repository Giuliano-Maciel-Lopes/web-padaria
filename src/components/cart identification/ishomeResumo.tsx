import { useState } from "react";
import { Button } from "../index/button";
import { Input } from "../index/input";
import { useUpdateisHome } from "../../hooks/order/useUpdateisHome";
import { useAuth } from "../../hooks/context/useAuth";
import { useAuthModal } from "../../hooks/context/asideauth";



type Props = {
  total: number;
  id:string
  
};

export function IsHomeResumo({id ,  total }: Props) {
  const {onUpdateisHomeOrders} = useUpdateisHome()
  const {userInfo} = useAuthModal()
 const [isHome ,  setishome] = useState<boolean| null>(null)
 const {session} = useAuth()

async function handleIsHomeChange(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (isHome === null) {
    alert("Por favor, selecione uma opção de entrega.");
    return;
  }
  

  await onUpdateisHomeOrders(id, isHome);
  console.log(id)
  console.log(isHome)
}


  
  return (
    <div className="flex flex-col border-x-2 w-full h-auto">
      <div className="flex flex-col p-4">
        <div className="flex flex-col border-b-1 gap-4">
          <p className="text-gray-600">
            Revise os detalhes do seu pedido antes de finalizar a compra.
          </p>

          <div className="flex-col flex gap-4">
           <p> Total do pedido: <span className="font-semibold"> {total}</span></p>
           <p> Fret: <span className="font-semibold">a calcular</span></p>
          </div>

          <span className="text-sm text-gray-500">
            Obs: cobramos uma taxa de R$5 para entrega em casa. Se for no bairro
            ou vizinhança, R$2.5.
          </span>
        </div>

        <form  onSubmit={handleIsHomeChange} className="p-4">

          <div className="flex gap-8 mt-2">
            <label className="flex items-center gap-2">
              <Input type="radio" name="delivery" onChange={()=>setishome(true)}/>
              Receber em casa
            </label>

            <label className="flex items-center gap-2">
              <Input  type="radio" name="delivery" onChange={()=>setishome(false)} />
              Retirar no local
            </label>
          </div>

          <Button onClick={userInfo.open} type="submit" className="mt-4" disabled={!!session?.token}>
            Finalizar Compra
          </Button>
        </form>
      </div>
    </div>
  );
}
