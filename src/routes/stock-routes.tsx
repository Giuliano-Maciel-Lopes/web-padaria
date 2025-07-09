import { Route, Routes } from "react-router";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { Stockpage } from "../pages/stockHome";
import { CategoryProductsPage } from "../pages/categoryproductscategory";
import { BuyEditPage } from "../pages/BuyEdit";

export function StockRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery />}>
        <Route index element={<Stockpage />} />
        <Route path="category/:name" element={<CategoryProductsPage />} />
        <Route path="products/:id" element={<BuyEditPage />} />
        
        
      </Route>
    </Routes>
  );
}
