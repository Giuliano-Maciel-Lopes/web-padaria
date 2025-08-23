import { Painel } from "../../components/layoutadmin/painel";
import { OrdersPainel } from "../../components/deliverdpage/orderpaiel";
import { useIndexOrders } from "../../hooks/order/userIndexOrder";
import { Loading } from "../../components/index/loading";
import { ConfirmLogout } from "../../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../../hooks/useToggle";
import { useUpdateStatusOrders } from "../../hooks/order/useUpdateStatusOrder";
import { useState } from "react";
import { NotOrders } from "../../components/index/NotOrders";
import { Button } from "../../components/index/button";
import { useNavigate } from "react-router";

export function Deliverypage() {
  const navigate = useNavigate();
  const { data, isLoading } = useIndexOrders("ORDER_FINISH");
  const { mutateAsync, isPending } = useUpdateStatusOrders();
  const confOrd = useToggle();

  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  function Storage(orderId: string) {
    // salvoo o orderId
    setSelectedOrderId(orderId);
    confOrd.open();
  }

  async function handleUpdate() {
    if (!selectedOrderId) return;

    await mutateAsync({
      id: selectedOrderId,
      newStatus: "DELIVERED",
      oldStatus: "ORDER_FINISH",
    });
    confOrd.closed();
  }

  return (
    <div className="min-h-screen flex flex-col  items-center mt-4">
      <Painel title="Painel de Corridas " subTitle={`voce tem 7 corridas clique em ver minhas corridas para obter mais informaçoes `}>
        <Button onClick={()=>navigate("/accepted")} variant="stepcart">Corridas aceitas</Button>
      </Painel>

      <div className="flex flex-col gap-4 w-full md:px-6 mt-4">
        {isLoading ? (
          <Loading />
        ) : !data || data.length === 0 ? (
          <NotOrders msg="Ainda não há corridas" />
        ) : (
          data.map((order) => (
            <OrdersPainel
              key={order.id}
              name={order.user.name}
              quantityitens={order.items.length}
              valor={order.totalAmount}
              onClick={() => Storage(order.id)}
            />
          ))
        )}
      </div>

      {confOrd.isOpen && (
        <ConfirmLogout
          mensagem="Tem certeza que deseja aceitar essa corrida"
          onCancel={confOrd.closed}
          onConfirm={handleUpdate}
          isloading={isPending}
        />
      )}
    </div>
  );
}
