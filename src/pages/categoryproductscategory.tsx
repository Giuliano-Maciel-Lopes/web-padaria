import { useNavigate, useOutletContext } from "react-router-dom";

import { ProductsView } from "../components/index/productsview";
import type { Product } from "../types/api/products/producsts";
import { AddProductCard } from "../components/index/addproductcard";
import { useAuth } from "../hooks/context/useAuth";
import { Loading } from "../components/index/loading";

export function CategoryProductsPage() {
  const { products, isLoading } = useOutletContext<{
    products: Product[];
    isLoading: boolean;
  }>();
  const baseUrl = import.meta.env.VITE_BASE_API;
  const navigate = useNavigate();
  const { session } = useAuth();
    const isHomeStock = session?.datauser.role === "STOCK" 
  || session?.datauser.role === "ADMIN";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 mb-4">
        {products.map((product) => {
          return (
            <ProductsView
              onBuy={() => navigate(`/products/${product.id}`)}
              key={product.id}
              product={product}
            />
          );
        })}
        {isHomeStock && <AddProductCard />}
      </div>
    </div>
  );
}
