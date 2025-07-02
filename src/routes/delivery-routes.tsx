import { Route , Routes } from "react-router";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { DeliveryHome } from "../pages/deliveryhome";


export function DeliveryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery/>}>
      <Route path="/" element={<DeliveryHome/>}/>
      

      </Route>
    </Routes>
  );
}
