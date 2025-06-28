import { BrowserRouter } from "react-router";
import { AppRoutes } from "./app-routes";
import { ProductscategoryRoute } from "./productscategory-routes";



export function Routes(){
    return(
        <BrowserRouter>
        <ProductscategoryRoute/>
        </BrowserRouter>
    )
}