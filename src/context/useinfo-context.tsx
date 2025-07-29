import React, { createContext, useState, useEffect, useContext } from "react";
import { useUserInfoIndex } from "../hooks/userinfo/useindex";
import { useAuth } from "../hooks/context/useAuth";



type UserInfoContextType = {
  userInfo: UserInfo | undefined;
  isLoading:boolean

  
};

export const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
 const userId = session?.datauser.id;
  const role = session?.datauser.role
  if (!userId || role!=="CUSTOMER") return null
 
  const { isLoading , data:userInfo } = useUserInfoIndex({userId});
  
  return (
    <UserInfoContext.Provider value={{ userInfo , isLoading }}>
      {children}
    </UserInfoContext.Provider>
  );
}

