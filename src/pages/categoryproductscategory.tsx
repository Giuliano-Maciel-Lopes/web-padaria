import { useNavigate, useOutletContext } from "react-router-dom";

import { ProductsView } from "../components/index/productsview";
import type { Product } from "../types/api/products/producsts";
import { AddProductCard } from "../components/index/addproductcard";
import { useAuth } from "../hooks/context/useAuth";
import { useSuccessMessage } from "../hooks/sucessmensagem";
import { TopBanner } from "../components/index/banner";
TopBanner



export function CategoryProductsPage() {
  const { products, setRefreshProducts } = useOutletContext<{
  products: Product[];
  setRefreshProducts: React.Dispatch<React.SetStateAction<boolean>>;
}>();
  const baseUrl = import.meta.env.VITE_BASE_API;
  const navigate = useNavigate()
  const {session}= useAuth()
  const isStock = session?.datauser.role === "STOCK"

  const {setSuccessMessage, successMessage}=  useSuccessMessage()

  
console.log("teste do cintext" , products)
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">

        
        {products.map((product) => {
          return (
            <ProductsView
            setMensagem={setSuccessMessage}
              onBuy={()=> navigate(`/products/${product.id}`)}
              key={product.id}
             product={product}
            
              
            />
          );
        })}
        {isStock && <AddProductCard />}
      </div>
          {successMessage && <TopBanner message={successMessage} />}

    </div>
  );
}
