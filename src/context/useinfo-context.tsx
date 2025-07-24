import React, { createContext, useState, useEffect, useContext } from "react";
import { useUserInfoIndex } from "../hooks/userinfo/useindex";
import { useAuth } from "../hooks/context/useAuth";



type UserInfoContextType = {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
  
};

export const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
 
  const { onviewUserInfo } = useUserInfoIndex();
  const { session } = useAuth();
  const userId = session?.datauser.id;
  const role = session?.datauser.role
 useEffect(() => {
  // curiosidade: caso eu chamar o  if (!userId) return onviwe reclama de tipagem 


  async function fetchUserInfo() {
    if (!userId || role!=="CUSTOMER") return
 
    const data = await onviewUserInfo(userId);
    if (data) {
      setUserInfo({
        id:data.id,
        street: data.street,
        houseNumber: data.houseNumber,
        neighborhood: data.neighborhood,
        city: data.city,
        phone: data.phone,
      });
    }
  
  }
  fetchUserInfo();
}, [userId, onviewUserInfo]);


  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo,  }}>
      {children}
    </UserInfoContext.Provider>
  );
}

