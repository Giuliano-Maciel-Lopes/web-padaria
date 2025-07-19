// src/context/asideauth-context.tsx
import { createContext, } from "react";
import { useToggle } from "../hooks/useToggle";

type AsideAuthContextType = {
  login: ReturnType<typeof useToggle>;
  register: ReturnType<typeof useToggle>;

};

export const AsideAuthContext = createContext<AsideAuthContextType | null>(null);

export function AsideAuthProvider({ children }: { children: React.ReactNode }) {
  const login = useToggle();
  const register = useToggle();
  

  return (
    <AsideAuthContext.Provider value={{ login, register, }}>
      {children}
    </AsideAuthContext.Provider>
  );
}
