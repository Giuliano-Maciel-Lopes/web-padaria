import { Route , Routes } from "react-router-dom";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { AdminPage } from "../pages/admin/adminHome";
import { AdmOrdersPage } from "../pages/admin/adminOrderspage";
import { AdminOrdersIdPage } from "../pages/admin/adminOrdersPageId";


export function AdminRoutes() {
  return (
<Routes>
  <Route path="/" element={<LayoutBakery />}>
    <Route index element={<AdminPage />} />
    <Route path="admin/orders" element={<AdmOrdersPage />} />
    <Route path="admin/orders/:id" element={<AdminOrdersIdPage />} />
  </Route>
</Routes>

  );
}
