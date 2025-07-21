import { GlobalAuthModals } from "./components/global/globalAuth";
import { AsideAuthProvider } from "./context/asideauth-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";



import { Routes } from "./routes";

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AsideAuthProvider>
        <Routes />
        <GlobalAuthModals/>
        </AsideAuthProvider>
      </CartProvider>
    </AuthProvider>
  );
}
