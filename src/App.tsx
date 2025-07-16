import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";
import { RefreshProvider } from "./context/refresh";

import { Routes } from "./routes";

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RefreshProvider>
          <Routes />
        </RefreshProvider>
      </CartProvider>
    </AuthProvider>
  );
}
