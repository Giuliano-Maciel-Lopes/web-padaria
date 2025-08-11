import { Route, Routes } from "react-router-dom";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { BakeryPage } from "../pages/bakery";
import { CategoryProductsPage } from "../pages/categoryproductscategory";
import { BuyEditPage } from "../pages/BuyEdit";
import { ProductLayoutPage } from "../components/layouts/product-layout";
import { Notfound } from "../pages/PageUtils/notfound";
import { PageInfo } from "../pages/PageUtils/PageInfo";

export function StockRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery />}>
        <Route index element={<BakeryPage />} />
        <Route path="category/:name?" element={<CategoryProductsPage />} />

        <Route path="products" element={<ProductLayoutPage />}>
          <Route path=":id" element={<BuyEditPage />} />
          <Route path="newproduct" element={<BuyEditPage />} />
        </Route>
        <Route path="info" element={<PageInfo />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
