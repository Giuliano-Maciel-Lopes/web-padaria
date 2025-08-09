import type { Order } from "../../types/api/orders/indexOrder";
import { Select } from "../index/select";
import { orderStatus } from "../../utils/delivered";
import { currencyBRL } from "../../utils/currencyBRL";
import { Button } from "../index/button";

type Props = {
  OrderId: Order | undefined;
  Onclick: () => void;
  setNewStatus: (newStatus: string) => void;
};
export function DetailsOrder({ setNewStatus, Onclick, OrderId }: Props) {
  const statusLabel =
    orderStatus.find((s) => s.value === OrderId?.status)?.label ||
    OrderId?.status;

  return (
    <div>
      <div className=" p-6 border-2 rounded-xl flex flex-col gap-4 shadow-md">
        <h2 className="text-2xl font-semibold">Detalhes do Pedido</h2>
        
<div className="flex">
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-500">Nome do cliente:</p>
            <p className="text-lg font-medium">
              {OrderId?.user?.name.toUpperCase() || "Sem nome"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">Status:</p>
            <p>{statusLabel}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">Total do pedido</p>
            <p className="text-lg font-medium">
              {OrderId && currencyBRL(OrderId.totalAmount)}
            </p>
          </div>
        </div>

          <div className="flex flex-col gap-4 md:w-1/2">
            teste
        </div>

</div>


        <div className="flex flex-col gap-4 ">
          <h2>Alterar status</h2>
          <Select
            value={OrderId?.status}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            {orderStatus.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </Select>
          <Button onClick={Onclick} className="text-white">
            Alterar Status
          </Button>
        </div>

      </div>
    </div>
  );
}
