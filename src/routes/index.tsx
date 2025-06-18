import { BrowserRouter } from "react-router";
import { AppRoutes } from "./app-routes";



export function Routes(){
    return(
        <BrowserRouter>
        <AppRoutes/>
        </BrowserRouter>
    )
}