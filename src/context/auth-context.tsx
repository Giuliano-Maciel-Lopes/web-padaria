import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

type AuthContextType = {
  session: null | ApiResponse;
  save: (data: ApiResponse) => void;
  remove: () => void;
};

const LOCAL_STORAGE_KEY = "@Refund";

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<null | ApiResponse>(null);

  function save(data: ApiResponse) {
    setSession(data);

    localStorage.setItem(
      `${LOCAL_STORAGE_KEY}:datauser`,
      JSON.stringify(data.datauser)
    );
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token);

      api.defaults.headers["Authorization"] = `Bearer ${data.token}`
  }

  function remove() {
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:datauser`);
    localStorage.removeItem(`${LOCAL_STORAGE_KEY}:token`);
    setSession(null);
    window.location.assign("/");
  }
  

  function loaduser() {
    const datauser = localStorage.getItem(`${LOCAL_STORAGE_KEY}:datauser`);
    const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);
    api.defaults.headers["Authorization"] = `Bearer ${token}`

    if (token && datauser) {
      setSession({
        token,
        datauser: JSON.parse(datauser),
      });
      console.log("Token enviado:", token);
    }
  }

  useEffect(() => {
    loaduser();
  }, []);

  return (
    <AuthContext.Provider value={{ session, save, remove }}>
      {children}
    </AuthContext.Provider>
  );
}
