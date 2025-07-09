import { Outlet, useParams } from "react-router";
import { useEffect } from "react";
import { useProductId } from "../../hooks/products/useProductId";

export function ProductLayoutPage() {
  const { products, onView } = useProductId();
  const baseUrl = import.meta.env.VITE_BASE_API;


  const { id } = useParams<{ id: string }>(); // 👈 Pega o ID da URL

  useEffect(() => {
    if (id) {
      onView(id); // 👈 Passa o ID para buscar o produto certo
    }
  }, [id]);

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
        <Outlet context={{ product: products }} />
      </div>
    </div>
  );
}
