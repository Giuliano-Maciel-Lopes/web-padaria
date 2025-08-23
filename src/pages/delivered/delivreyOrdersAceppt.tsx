import { Painel } from "../../components/layoutadmin/painel";
import { Button } from "../../components/index/button";
import { useNavigate } from "react-router";
import { useIndexOrders } from "../../hooks/order/userIndexOrder";
import { PainelStatus } from "../../components/ADMorders/painelstatus";
import { NotOrders } from "../../components/index/NotOrders";
import { LoadingFull } from "../../components/index/loadingfull";

export function DelivreyOrdersAcepptPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useIndexOrders("DELIVERED");

  if (isLoading) return <LoadingFull />;

  return (
    <div className="min-h-screen flex flex-col  items-center mt-4">
      <Painel title="Corridas Aceitas ">
        <Button onClick={() => navigate("/")} variant="stepcart">
          voltar
        </Button>
      </Painel>

      <div className=" w-full h-auto flex flex-col gap-4 mt-4">
        {!data || data.length === 0 ? (
          <NotOrders msg="vc ainda nao aceitou nenhum pedido" />
        ) : (
          data.map((order) => (
            <PainelStatus
              name={order.user.name}
              pricetotal={order.totalAmount}
              status={order.status}
              key={order.id}
              onclick={() => navigate(`/accepted/${order.id}`)}
            />
          ))
        )}
      </div>
    </div>
  );
}
