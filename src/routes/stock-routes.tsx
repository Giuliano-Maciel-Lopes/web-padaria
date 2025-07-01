import { Route , Routes } from "react-router";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { StockHome } from "../pages/stockHome";



export function StockRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<LayoutBakery/>}>
      <Route path={"/"} element={<StockHome/>}/>
      

      </Route>
    </Routes>
  );
}
