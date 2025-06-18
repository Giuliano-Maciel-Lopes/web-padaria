import { Route , Routes } from "react-router";
import { Bakery } from "../pages/bakery";
import { LayoutBakery } from "../components/layout-bakery";


export function AppRoutes(){
    return(
    <Routes>
        <Route path="/" element={<LayoutBakery/>}>
        <Route path="/" element={<Bakery/>} />
        </Route>
    </Routes>
    )
}