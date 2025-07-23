import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GlobalAuthModals } from "./components/global/globalAuth";
import { AsideAuthProvider } from "./context/asideauth-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";
import { UserInfoProvider } from "./context/useinfo-context";

import { Routes } from "./routes";
import { query } from "./services/reactquery";

export function App() {
  return (
    <QueryClientProvider client={query}>
      <AuthProvider>
        <UserInfoProvider>
          <CartProvider>
            <AsideAuthProvider>
              <Routes />
              <GlobalAuthModals />
            </AsideAuthProvider>
          </CartProvider>
        </UserInfoProvider>
      </AuthProvider>

      
      {import.meta.env.MODE === "development" && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
