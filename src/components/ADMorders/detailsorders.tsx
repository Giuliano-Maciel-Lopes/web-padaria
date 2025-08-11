import type { Order } from "../../types/api/orders/indexOrder";
import { Select } from "../index/select";
import { orderStatus } from "../../utils/delivered";
import { currencyBRL } from "../../utils/currencyBRL";
import { Button } from "../index/button";
import { useAuth } from "../../hooks/context/useAuth";

type Props = {
  OrderId: Order | undefined;
  Onclick: () => void;
  setNewStatus?: (newStatus: string) => void;
};

export function DetailsOrder({ setNewStatus, Onclick, OrderId }: Props) {
  const statusLabel =
    orderStatus.find((s) => s.value === OrderId?.status)?.label ||
    OrderId?.status; // transfoormei o status em ingles para pt br 

    const {session}= useAuth()
    const adm = session?.datauser.role === "ADMIN"

  return (
    <div>
      <div className="p-6 border-2 rounded-xl shadow-md bg-white max-w-4xl mx-auto">
        <h2 className="text-2xl font-extrabold text-amber-800 mb-6 text-center md:text-left">
          Detalhes do Pedido
        </h2>

        <div className="flex flex-col md:flex-row md:gap-12">
        
          <div className="flex flex-col gap-6 md:w-1/2 bg-amber-50 rounded-lg p-4 shadow-inner">
            {[
              {
                label: "Nome do cliente",
                value: OrderId?.user?.name.toUpperCase() || "Sem nome",
              },
              { label: "Status", value: statusLabel },
              {
                label: "Total do pedido",
                value: OrderId ? currencyBRL(OrderId.totalAmount) : "Não informado",
              },
            ].map(({ label, value }) => (
              <div key={label} className="mb-2 last:mb-0">
                <label className="block text-sm text-gray-600 uppercase font-semibold tracking-wide">
                  {label}
                </label>
                <p className="mt-1 text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>

         
          <div className="flex flex-col gap-6 md:w-1/2 bg-amber-50 rounded-lg p-4 shadow-inner mt-6 md:mt-0">
            <h3 className="text-lg font-bold text-amber-900 border-b border-amber-300 pb-2 mb-4">
              Endereço de Entrega
            </h3>
            {[
              { label: "Rua", value: OrderId?.user?.userInfo?.street },
              { label: "Número", value: OrderId?.user?.userInfo?.houseNumber },
              { label: "Bairro", value: OrderId?.user?.userInfo?.neighborhood },
              { label: "Cidade", value: OrderId?.user?.userInfo?.city },
              { label: "Telefone", value: OrderId?.user?.userInfo?.phone },
            ].map(({ label, value }) => (
              <p key={label} className="text-gray-700">
                <span className="font-semibold">{label}:</span> {value || "Não informado"}
              </p>
            ))}
          </div>
        </div>

      
        <div className="mt-8 flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
          <h2 className="text-xl font-bold text-amber-800">Alterar status</h2>
          {adm &&(
          <Select
            value={OrderId?.status}
            onChange={(e) => setNewStatus?.(e.target.value)}
            className="w-full"
          >
            {orderStatus.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </Select>)}
          <Button
            onClick={Onclick}
            className="text-white bg-amber-700 hover:bg-amber-800 "
          >
            Alterar Status
          </Button>
        </div>
      </div>
    </div>
  );
}
// nova pratica separa por label deixa o cod mais organizado e traz mais agilidade