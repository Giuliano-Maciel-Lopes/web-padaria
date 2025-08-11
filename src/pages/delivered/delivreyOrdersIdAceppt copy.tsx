import { useParams } from "react-router";
import { useShowOrderID } from "../../hooks/order/useshowOrderId";
import { useUpdateStatusOrders } from "../../hooks/order/useUpdateStatusOrder";
import { ProductImageCart } from "../../components/cart identification/productidentification.";
import { DetailsOrder } from "../../components/ADMorders/detailsorders";

import { Loading } from "../../components/index/loading";
import { useToggle } from "../../hooks/useToggle";
import { ConfirmLogout } from "../../components/layoutbakery/asideMenu/confirmlogout";

//pagina id
export function DelivreyOrdersIdAcepptPage() {
  const { id } = useParams<{ id: string }>();
  const { data: orderId, isLoading } = useShowOrderID(id);
  const { mutate, isPending } = useUpdateStatusOrders();
  const confModal = useToggle();
  
  function handleUpdate(){
    if (!orderId) return; 
    mutate({id:orderId?.id , newStatus:"SHIPPED", oldStatus:"DELIVERED"})
    confModal.closed()
  }

  const baseUrl = import.meta.env.VITE_BASE_API;
  if (isLoading) return <Loading />;
  

  return (
    <div className="min-h-screen mt-6 ">
      <div className="flex flex-col-reverse md:flex-row gap-2">
        <div className=" flex flex-col gap-4 md:w-1/2 border-2">
          <p className="hidden md:flex text-lg">PRODUTOS</p>
          {orderId?.items.map((item) => (
            <ProductImageCart
              category={item.product.category}
              imageUrl={`${baseUrl}${item.product.imageUrl}`}
              name={item.product.name}
              quantity={item.quantity}
              key={item.id}
            />
          ))}
        </div>

        <div className="md:w-1/2">
          <DetailsOrder  Onclick={confModal.open} OrderId={orderId} />
        </div>
      </div>
      {confModal.isOpen && (
        <ConfirmLogout
          isloading={isPending}
          onConfirm={()=>handleUpdate()}
          onCancel={confModal.closed}
          mensagem="tem certeza que deseja mudar o status para entrega"
        />
      )}
    </div>
  );
}
