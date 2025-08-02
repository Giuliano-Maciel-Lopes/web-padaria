import { useLocation, useNavigate } from "react-router-dom";
import { useCategoryFilter } from "../hooks/products/useCategoryfilter";
import { ProductsView } from "../components/index/productsview";

export function SearchProductPage() {
  const location = useLocation();
  const navigate = useNavigate();

 
  const params = new URLSearchParams(location.search);
  const search = params.get("search") ?? "";

  const { data: products = [], isLoading } = useCategoryFilter({ search });

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Resultados para: {search}</h1>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductsView
              key={product.id}
              product={product}
              onBuy={() => navigate(`/products/${product.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
