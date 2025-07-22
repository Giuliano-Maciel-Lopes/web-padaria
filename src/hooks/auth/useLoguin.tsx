import { useState, type FormEvent } from "react";
import {
  createSessionSchema,
  type CreateSessionInput,
} from "../../schema/session/create";
import { api } from "../../services/api";
import { useAuth } from "../context/useAuth";
import { errorHandler } from "../../utils/errorHandler";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSuccessMessage } from "../sucessmensagem";


export function useLogin(onSuccess?: () => void) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CreateSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });
  const [isloading, setIsloading] = useState(false);
const {setSuccessMessage} = useSuccessMessage()


  const auth = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);

    const { error: err  , data:database} = await errorHandler(async () => {
      const response = await api.post<ApiResponse>("/sessions", data);
      auth.save(response.data);
       onSuccess?.();
      return response.data
     
    });
    if(err){
      setError("root", {message:err.general})
    }else{
      setSuccessMessage(`UAI SO  !!  que bom ter vc aqui de volta , ${database?.datauser.name}`)

    }

    setIsloading(false);
  });

  return {
    register,
    isloading,
    onSubmit, 
    errors, 
  };
}
