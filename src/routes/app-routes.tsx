import { Route , Routes } from "react-router";
import { BakeryPage } from "../pages/bakery";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { CategoryProductsPage } from "../pages/productscategory";






export function AppRoutes(){
    return(
    <Routes>
        <Route path="/" element={<LayoutBakery/>}>
        <Route path="/" element={<BakeryPage/>} />
         <Route path="/:category" element={<CategoryProductsPage/>}/>
        
        </Route>
    </Routes>
    )
}