import { Route , Routes } from "react-router";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { AdminHome } from "../pages/adminHome";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery/>}>
      <Route path="/" element={<AdminHome/>}/>
      

      </Route>
    </Routes>
  );
}
