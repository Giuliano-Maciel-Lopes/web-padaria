import { useQuery } from "@tanstack/react-query";
import {
  parasChemaUserInfo,
} from "../../schema/userInfo";
import { api } from "../../services/api";

async function fetchData(userId: string) {
  parasChemaUserInfo.parse({ userId });
  const response = await api.get<UserInfo>(`/user_infos/${userId}`);
  return response.data;
}

export function useUserInfoIndex(userId: string | undefined) {
  const query = useQuery({
    queryFn: () => fetchData(userId!),
    queryKey: ["user_infos", userId],
    enabled: !!userId,
  });

  return { ...query };
}
