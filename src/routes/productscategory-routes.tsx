import { Route , Routes } from "react-router";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { CategoryProductsPage } from "../pages/productscategory";




export function ProductscategoryRoute() {
  return (
    
        <Routes>
            <Route path="/" element={<LayoutBakery/>}>
            <Route path="/:category" element={<CategoryProductsPage/>}/>

            </Route>
        </Routes>
      
    
  );
}