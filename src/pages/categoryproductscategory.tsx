import { useNavigate, useOutletContext } from "react-router";

import { ProductsView } from "../components/index/productsview";
import type { Product } from "../types/api/producsts";
import { AddProductCard } from "../components/index/addproductcard";
import { useAuth } from "../hooks/auth/useAuth";


export function CategoryProductsPage() {
  const products = useOutletContext<Product[]>();
  const baseUrl = import.meta.env.VITE_BASE_API;
  const navigate = useNavigate()
  const {session}= useAuth()
  const isStock = session?.datauser.role === "STOCK"
  

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">

        
        {products.map((product) => {
          return (
            <ProductsView
            
              onBuy={()=> navigate(`/products/${product.id}`)}
              key={product.id}
             product={product}
            
              
            />
          );
        })}
        {isStock && <AddProductCard />}
      </div>
    </div>
  );
}
