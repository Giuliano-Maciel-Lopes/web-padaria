import { Route, Routes } from "react-router-dom";
import { BakeryPage } from "../pages/bakery";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { CategoryProductsPage } from "../pages/categoryproductscategory";
import { BuyEditPage } from "../pages/BuyEdit";
import { ProductLayoutPage } from "../components/layouts/product-layout";
import { CartbuyPage } from "../pages/cart/cart-buy";
import { LayoutCartpage } from "../components/layouts/layout-cart";
import { CartIdentificationPage } from "../pages/cart/cart-identification";
import { CartpaymentPage } from "../pages/cart/cartpayment";
import { SearchProductPage } from "../pages/Searchchproducts";
import { Notfound } from "../pages/notfound";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery />}>
        <Route index element={<BakeryPage />} />
        <Route path="category/:name?" element={<CategoryProductsPage />} />
        <Route path="search/:search?" element={<SearchProductPage />} />

        <Route path="products" element={<ProductLayoutPage />}>
          <Route path=":id" element={<BuyEditPage />} />
        </Route>
      </Route>

      <Route path="/cart" element={<LayoutCartpage />}>
        <Route index element={<CartbuyPage />} />
        <Route path="identification" element={<CartIdentificationPage />} />
        <Route path="payment" element={<CartpaymentPage />} />
      </Route>
       <Route path="*" element={< Notfound/>}/>
    </Routes>
  );
}
