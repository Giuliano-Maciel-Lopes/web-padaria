import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app-routes";
import { AdminRoutes } from "./admin-routes";
import { StockRoutes } from "./stock-routes";
import { DeliveryRoutes } from "./delivery-routes";
import { useAuth } from "../hooks/context/useAuth";




export function Routes(){
    const {session }=useAuth()
    if(!session?.token)return

   let RenderRoutes;
   console.log("Usuário logado:", session?.datauser.role)

  switch (session?.datauser.role) {
    
    case "ADMIN":
      RenderRoutes = <AdminRoutes />;
      break;
    case "STOCK":
      RenderRoutes = <StockRoutes />;
      break;
    case "DELIVERY_PERSON":
      RenderRoutes = <DeliveryRoutes />;
      break;
    case "CUSTOMER":
    default:
      RenderRoutes = <AppRoutes />;
      break;
  }

  return (
    <BrowserRouter>
      {RenderRoutes}
    </BrowserRouter>
  );
}