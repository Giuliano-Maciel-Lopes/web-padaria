import { Route , Routes } from "react-router";
import { BakeryPage } from "../pages/bakery";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { CategoryProductsPage } from "../pages/categoryproductscategory";
import { BuyEditPage } from "../pages/BuyEdit";






export function AppRoutes(){
    return(
    <Routes>
        <Route path="/" element={<LayoutBakery/>}>
        <Route path="/" element={<BakeryPage/>} />
         <Route path="category/:name" element={<CategoryProductsPage/>}/>
         <Route path="products/:id" element={<BuyEditPage/>}/>
        
        </Route>
    </Routes>
    )
}