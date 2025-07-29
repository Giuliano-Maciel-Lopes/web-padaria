import { useQuery } from "@tanstack/react-query";
import {
  parasChemaUserInfo,
  type ParamsSchemaUserInfoInput,
} from "../../schema/userInfo";
import { api } from "../../services/api";

import { useAuth } from "../context/useAuth";

async function fetchData(params: ParamsSchemaUserInfoInput) {
  parasChemaUserInfo.parse(params);
  const response = await api.get<UserInfo>(`/user_infos/${params.userId}`);
  return response.data;
}

export function useUserInfoIndex(userId: ParamsSchemaUserInfoInput) {
  const query = useQuery({
    queryFn: () => fetchData(userId),
    queryKey: ["user_infos", userId],
    enabled: !!userId,
  });

  return { ...query };
}
