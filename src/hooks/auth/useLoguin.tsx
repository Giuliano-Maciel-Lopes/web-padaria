import { useState, type FormEvent } from "react";
import {
  createSessionSchema,
  type CreateSessionInput,
} from "../../schema/session/create";
import { api } from "../../services/api";
import { useAuth } from "../context/useAuth";
import { errorHandler } from "../../utils/errorHandler";
import type { LoginErrors } from "../../types/erros/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { data } from "react-router";
import { set } from "zod/v4-mini";

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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { session } = useAuth();

  const auth = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);

    const { error: err } = await errorHandler(async () => {
      const response = await api.post("/sessions", data);
      auth.save(response.data);

      onSuccess?.();
    });
    if(err){
      setError("root", {message:err.general})
    }else{
      setSuccessMessage(`UAI SO  !!  que bom ter vc aqui de volta , ${session?.datauser.name}`)

    }

    setIsloading(false);
  });

  return {
    register,
    isloading,
    onSubmit, 
    errors, 
    successMessage
  };
}
