import { Route , Routes } from "react-router-dom";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { Deliverypage } from "../pages/delivered/deliveryhome";
import { DelivreyOrdersAcepptPage } from "../pages/delivered/delivreyOrdersAceppt";
import { DelivreyOrdersIdAcepptPage } from "../pages/delivered/delivreyOrdersIdAceppt copy";
import { Notfound } from "../pages/notfound";



export function DeliveryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery/>}>
      <Route index element={<Deliverypage/>}/>
      <Route path="/accepted" element={<DelivreyOrdersAcepptPage />}/>
      <Route path="/accepted/:id" element={<DelivreyOrdersIdAcepptPage />}/>
      

      </Route>
       <Route path="*" element={< Notfound/>}/>
    </Routes>
  );
}
