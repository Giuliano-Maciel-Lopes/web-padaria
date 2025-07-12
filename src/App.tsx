import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";

import { Routes } from "./routes";

export function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </CartProvider>
  );
}
