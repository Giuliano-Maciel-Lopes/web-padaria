import { Route, Routes } from "react-router-dom";
import { BakeryPage } from "../pages/bakery";
import { LayoutBakery } from "../components/layouts/layout-bakery";
import { CategoryProductsPage } from "../pages/categoryproductscategory";
import { BuyEditPage } from "../pages/BuyEdit";
import { ProductLayoutPage } from "../components/layouts/product-layout";
import { CartbuyPage } from "../pages/cart-buy";
import { LayoutCartpage } from "../components/layouts/layout-cart";
import { CartIdentificationPage } from "../pages/cart-identification";
import { CartpaymentPage } from "../pages/cartpayment";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutBakery />}>

        <Route index element={<BakeryPage />} />
        <Route path="category/:name?" element={<CategoryProductsPage />} />

        <Route path="products" element={<ProductLayoutPage />}>
          <Route path=":id" element={<BuyEditPage />} />
        </Route>
      </Route>

       <Route path="/cart" element={<LayoutCartpage />}>
        <Route index element={<CartbuyPage />} />
        <Route path="identification" element={<CartIdentificationPage />} />
        <Route path="payment" element={<CartpaymentPage />} />
      </Route>
    </Routes>
  );
}
