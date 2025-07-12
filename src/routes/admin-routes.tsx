import { Route , Routes } from "react-router-dom";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { AdminPage } from "../pages/adminHome";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery/>}>
      <Route path="/" element={<AdminPage/>}/>
      

      </Route>
    </Routes>
  );
}
