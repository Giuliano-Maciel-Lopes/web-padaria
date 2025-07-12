import { Route , Routes } from "react-router-dom";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { Deliverypage } from "../pages/deliveryhome";


export function DeliveryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery/>}>
      <Route path="/" element={<Deliverypage/>}/>
      

      </Route>
    </Routes>
  );
}
