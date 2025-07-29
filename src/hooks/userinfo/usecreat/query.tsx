import { api } from "../../../services/api";
import {type CreateUserInfoInput , createUserInfoSchema } from "../../../schema/userInfo/create";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toastSuccessCutomer } from "../../../styles/animations/toast/toastsucess";

async function fetchData(data:CreateUserInfoInput){
     const res = await api.post("/user_infos", data);
    
          return res.data;
}

export function useUserInfoCreate() {
    const QueryClient = useQueryClient()
    return useMutation({
        mutationFn:fetchData,
        onSuccess(data){
                QueryClient.invalidateQueries({queryKey:["user_infos"]})
                toastSuccessCutomer(data)
        }
        
    })

    

}