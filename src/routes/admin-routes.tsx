import { Route, Routes } from "react-router-dom";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { AdminPage } from "../pages/admin/adminHome";
import { AdmOrdersPage } from "../pages/admin/adminOrderspage";
import { AdminOrdersIdPage } from "../pages/admin/adminOrdersPageId";
import { CategoryProductsPage } from "../pages/categoryproductscategory";
import { SearchProductPage } from "../pages/Searchchproducts";
import { ProductLayoutPage } from "../components/layouts/product-layout";
import { BuyEditPage } from "../pages/BuyEdit";
BuyEditPage;

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery />}>

        <Route index element={<AdminPage />} />
        <Route path="orders" element={<AdmOrdersPage />} />
        <Route path="orders/:id" element={<AdminOrdersIdPage />} />
        <Route path="search/" element={<SearchProductPage />} />

        <Route path="category" element={<CategoryProductsPage />} />

        <Route path="products" element={<ProductLayoutPage />}>
          <Route path=":id" element={<BuyEditPage />} />
        </Route>
        
      </Route>
    </Routes>
  );
}
