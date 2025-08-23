import { useNavigate, useLocation } from "react-router-dom";
import { ProductsView } from "../components/index/productsview";
import { useCategoryFilter } from "../hooks/products/useCategoryfilter";
import { ProductsViewConditional } from "../components/bakeryshowcase/Productsviweimagem";
import { PainelFodd } from "../components/bakeryshowcase/painelFodd";
import { StepOrders } from "../components/bakeryshowcase/steporders";
import { SweetsAndSavories } from "../components/bakeryshowcase/SweetsAndSavories";

export function BakeryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/"; // true dito isso na pag inicial isvitrine

  const { data: product = [], isLoading: isLoadingMain } = useCategoryFilter({
    isVitrine: isHomePage,
  });
  const { data: productCategory = [], isLoading: isLoadingCategory } =
    useCategoryFilter({
      isVitrine: isHomePage,
      category: "doces",
    });

  if (isLoadingMain || isLoadingCategory) {
    return (
      <div className="w-screen h-screen bg-white flex items-center justify-center"></div>
    );
  }
  return (
    <div className="flex flex-col h-auto">
      <h1 className="text-xl md:text-3xl font-extrabold text-amber-700 text-center my-8">
        Festival da Jabuticaba
      </h1>

      <div className="flex overflow-x-auto scroll-smooth gap-2 md:grid md:grid-cols-3 md:gap-6 hide-scrollbar  ">
        {product.map((product) => (
          <ProductsViewConditional
            key={product.id}
            product={product}
            onBuy={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>

      <PainelFodd />
      <StepOrders /> 

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productCategory.map((product) => (
          <ProductsView
            key={product.id}
            product={product}
            onBuy={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>
      <div>
        <SweetsAndSavories/>
      </div>
    </div>
  );
}
