import React, { createContext } from "react";
import { useUserInfoIndex } from "../hooks/userinfo/useindex";
import { useAuth } from "../hooks/context/useAuth";

type UserInfoContextType = {
  userInfo: UserInfo | undefined;
  isLoading: boolean;
};

export const UserInfoContext = createContext<UserInfoContextType | undefined>(
  undefined
);

export function UserInfoProvider({ children }: { children: React.ReactNode }) {
  const { session } = useAuth();
  const userId = session?.datauser.id;
  const role = session?.datauser.role;

  const shouldFetch = !!userId && role === "CUSTOMER";

  const { isLoading, data: userInfo } = useUserInfoIndex(
    shouldFetch ? { userId } : undefined
  );

  return (
    <UserInfoContext.Provider
      value={{
        userInfo: shouldFetch ? userInfo : undefined,
        isLoading: shouldFetch ? isLoading : false,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
}
