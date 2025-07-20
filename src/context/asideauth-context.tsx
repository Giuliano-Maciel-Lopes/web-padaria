// src/context/asideauth-context.tsx
import { createContext, } from "react";
import { useToggle } from "../hooks/useToggle";

type AsideAuthContextType = {
  login: ReturnType<typeof useToggle>;
  register: ReturnType<typeof useToggle>;
  userInfo: ReturnType<typeof useToggle>;

};

export const AsideAuthContext = createContext<AsideAuthContextType | null>(null);

export function AsideAuthProvider({ children }: { children: React.ReactNode }) {
  const login = useToggle();
  const register = useToggle();
  const userInfo = useToggle();
  

  return (
    <AsideAuthContext.Provider value={{ login, register, userInfo}}>
      {children}
    </AsideAuthContext.Provider>
  );
}
