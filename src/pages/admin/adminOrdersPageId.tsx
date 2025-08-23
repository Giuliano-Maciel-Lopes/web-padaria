import { useParams } from "react-router";
import { ProductImageCart } from "../../components/cart identification/productidentification.";
import { useShowOrderID } from "../../hooks/order/useshowOrderId";
import { LoadingFull } from "../../components/index/loadingfull";
import { DetailsOrder } from "../../components/ADMorders/detailsorders";
import { ConfirmLogout } from "../../components/layoutbakery/asideMenu/confirmlogout";
import { useToggle } from "../../hooks/useToggle";
import { useUpdateStatusOrders } from "../../hooks/order/useUpdateStatusOrder";
import { useState } from "react";

export function AdminOrdersIdPage() {
  const { id } = useParams<{ id: string }>();
  
  const { isLoading, data: OrderId } = useShowOrderID(id);
  const baseUrl = import.meta.env.VITE_BASE_API;
  const confirmEditStatus = useToggle();
  const { mutate, isPending } = useUpdateStatusOrders();
  const [newStatus, setNewStatus] = useState<string | null>(null);

  if (isLoading) return <LoadingFull />;

  function handleConfirm() {
    if (!OrderId || newStatus === null) return;
    mutate({
      id: OrderId?.id,
      newStatus: newStatus,
      oldStatus: OrderId?.status,
    });
  }

  console.log(OrderId);
  return (
    <div className="min-h-screen mt-6 ">
      <div className="flex flex-col-reverse md:flex-row gap-2">
        <div className=" flex flex-col gap-4 md:w-1/2 border-2">
          <p className="hidden md:flex text-lg">PRODUTOS</p>
          {OrderId?.items.map((item) => {
            const teste = item.product.imageUrl;
            console.log(teste);
            return (
              <ProductImageCart
                key={item.id}
                category={item.product.category}
                imageUrl={`${baseUrl}${item.product.imageUrl}`}
                name={item.product.name}
                quantity={item.quantity}
              />
            );
          })}
        </div>

        <div className="md:w-1/2">
          <DetailsOrder
            setNewStatus={setNewStatus}
            OrderId={OrderId}
            Onclick={() => confirmEditStatus.open()}
          />
        </div>
      </div>
      {confirmEditStatus.isOpen && (
        <ConfirmLogout
          mensagem="tem certeza que deseja alterar o status "
          onCancel={confirmEditStatus.closed}
          isloading={isPending}
          onConfirm={()=>{handleConfirm(); confirmEditStatus.closed()}}
        />
      )}
    </div>
  );
}
