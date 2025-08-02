import { data, useNavigate } from "react-router";
import { Button } from "../../components/index/button";
import { useIndexOrders } from "../../hooks/order/userIndexOrder";
import { Loading } from "../../components/index/loading";
import { useLocation } from "react-router";
import type { StatusType } from "../../hooks/order/userIndexOrder";
import { PainelStatus } from "../../components/ADMorders/painelstatus";
import { Formsearch } from "../../components/layoutbakery/header/formSearch";
import { useState } from "react";

export function AdmOrdersPage() {
  const orderStatus = [
    { label: "Carrinhos", value: "PROCESSING" },
    { label: "Itens sendo preparados", value: "ITENS_PROCESSING" },
    { label: "Finalizado", value: "ORDER_FINISH" },
    { label: "Enviado", value: "SHIPPED" },
    { label: "Entregue", value: "DELIVERED" },
  ];
  const [searchOrders, setSearchOrrders] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paramstatus = params.get("status") as StatusType | undefined;
  const paramserch = params.get("search") as string | undefined;
  const { data: dataOrders, isLoading } = useIndexOrders(
    paramstatus,
    paramserch
  );

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col">
      <div className="bg-[#d6bfa2] p-6 rounded-xl shadow-md  my-6">
        <div className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar md:justify-between">
          {orderStatus.map((status) => (
            <Button
              isActive={paramstatus === status.value}
              onClick={() => navigate(`?status=${status.value}`)}
              key={status.label}
              className="border-4 border-gray-500 bg-beige w-auto h-10 md:h-13 px-5 rounded-lg font-semibold text-sm"
              colorVariant="bg"
            >
              {status.label}
            </Button>
          ))}
        </div>
      </div>
      <div className="border-4 w-full h-auto px-6 py-6 flex flex-col gap-4">
        <Formsearch
          placeholder="Buscar pelo nome do cliente"
          onSearch={(value) => navigate(`?search=${encodeURIComponent(value)}`)}
          onSearchChange={(value) => setSearchOrrders(value)}
          value={searchOrders}
        />

        {dataOrders?.flatMap((orders) => {
          const teste = orderStatus.find((s) => s.value === orders.status);
          return orders.items.map((item) => (
            <PainelStatus
              onclick={() => navigate(`/orders/${orders.id}`)}
              key={orders.id}
              name={orders.user.name.slice(0, 15).toUpperCase()}
              pricetotal={orders.totalAmount}
              status={teste?.label as string}
            />
          ));
        })}
      </div>
    </div>
  );
}
