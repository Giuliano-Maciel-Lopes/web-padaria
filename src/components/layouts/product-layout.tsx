import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { useProductId } from "../../hooks/products/useProductId";
import { Loading } from "../index/loading";


export function ProductLayoutPage() {
 const { id } = useParams<{ id: string }>();
  const {data:products , isLoading , } = useProductId(id);
  const baseUrl = import.meta.env.VITE_BASE_API;
  const { setRefreshOrders } = useOutletContext<{setRefreshOrders: React.Dispatch<React.SetStateAction<boolean>>; }>();

if(isLoading)return <Loading/> 
  
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="h-auto flex items-center justify-center md:w-1/2">
        <img
          src={`${baseUrl}${products?.imageUrl}`}
          alt={products?.name}
          className="object-contain h-full"
        />
      </div>
      <div className="md:w-1/2 w-full">
        <Outlet context={{ product: products , setRefreshOrders}} />
      </div>
    </div>
  );
}
