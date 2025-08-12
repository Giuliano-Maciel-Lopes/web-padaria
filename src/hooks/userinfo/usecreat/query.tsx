import { api } from "../../../services/api";
import { type CreateUserInfoInput } from "../../../schema/userInfo/create";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastSuccessCutomer } from "../../../styles/animations/toast/toastsucess";

type FetchData = {
  data: CreateUserInfoInput;
  isUpdate: boolean;
};

async function fetchData({ data, isUpdate }: FetchData) {
  if (isUpdate) {
    const res = await api.patch(`/user_infos/update`, data);
    return res.data;
  } else {
    const res = await api.post("/user_infos", data);
    return res.data;
  }
}

export function useUserInfoCreate(userId: string|undefined ) {
  const QueryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess(data) {
      QueryClient.invalidateQueries({ queryKey: ["user_infos", userId] });
      toastSuccessCutomer(data);
    },
  });
}
