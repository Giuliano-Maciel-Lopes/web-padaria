import { useOutletContext } from "react-router";

import { ProductsView } from "../components/layouts/products";
import type { Product } from "../types/api/producsts";



export function CategoryProductsPage() {
  const products = useOutletContext<Product[]>();
  const baseUrl = import.meta.env.VITE_BASE_API


  return (
     <div className="flex flex-col">
      {products.map((product) => {
        console.log(`${baseUrl}${product.imageUrl}`);
        return (
          <ProductsView
            key={product.id}
            name={product.name}
            value={Number(product.price)}
            img={`${baseUrl}${product.imageUrl}`}
          />
        );
      })}
    </div>
  );
}
