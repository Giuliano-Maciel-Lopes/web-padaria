import { useNavigate, useOutletContext, useLocation } from "react-router-dom";

import img1 from "../assets/rosquinhas - Copia.png";
import img2 from "../assets/torta_de_frutas-removebg-preview - Copia.png";

import { Carrossel } from "../components/bakeryshowcase/corrosel";
import { ProductsView } from "../components/index/productsview";
import { useCategoryFilter } from "../hooks/products/useCategoryfilter";

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
    <div className="flex flex-col">
      <Carrossel
        img={img1}
        img2={img1}
        name="Nossas Delícias peça do conforto de sua casa"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {product.map((product) => (
          <ProductsView
            key={product.id}
            product={product}
            onBuy={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>
      <Carrossel img={img2} img2={img2} name="Doces pra adoçar seu dia!" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productCategory.map((product) => (
          <ProductsView
            key={product.id}
            product={product}
            onBuy={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
