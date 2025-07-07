import { useNavigate, useOutletContext } from "react-router";

import { ProductsView } from "../components/index/products";
import type { Product } from "../types/api/producsts";

export function CategoryProductsPage() {
  const products = useOutletContext<Product[]>();
  const baseUrl = import.meta.env.VITE_BASE_API;
  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <ProductsView
            
              onBuy={()=> navigate(`/products/${product.id}`)}
              key={product.id}
              name={product.name}
              value={Number(product.price)}
              img={`${baseUrl}${product.imageUrl}`}
            />
          );
        })}
      </div>
    </div>
  );
}
