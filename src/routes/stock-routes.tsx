import { Route, Routes } from "react-router";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { StockHome } from "../pages/stockHome";
import { CategoryProductsPage } from "../pages/categoryproductscategory";

export function StockRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery />}>
        <Route path="/" element={<StockHome />} />
        <Route path="/:categori" element={<CategoryProductsPage />} />
      </Route>
    </Routes>
  );
}
