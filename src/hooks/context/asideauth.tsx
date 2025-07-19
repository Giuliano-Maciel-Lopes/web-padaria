// src/hooks/useAuthModal.ts
import { useContext } from "react";
import { AsideAuthContext } from "../../context/asideauth-context";


export function useAuthModal() {
  const context = useContext(AsideAuthContext);
  if (!context) {
  throw new Error("erro no context useauthmodal");
}


  return context;
}
