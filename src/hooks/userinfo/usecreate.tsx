import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import { createUserInfoSchema } from "../../schema/userInfo/create";
import { useState } from "react";
import { useAuth } from "../context/useAuth";
useAuth;

export function useUserInfoCreate() {
  const [userInfo, setUserInfo] = useState({
    street: "",
    houseNumber: "",
    neighborhood: "",
    city: "",
    phone: "",
  });
  const { session } = useAuth();

  function setField(field: keyof typeof userInfo, value: string) {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  }

  async function onCreateUserInfo() {
    const database = createUserInfoSchema.parse(userInfo);
    const userId = session?.datauser.id;
    const data = { userId, ...database };

      await errorHandler(async () => {
      await api.post("/user_infos", data);
    });
  }

  return { userInfo, setField, onCreateUserInfo };
}
