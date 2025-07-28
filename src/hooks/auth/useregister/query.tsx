import { useMutation } from "@tanstack/react-query";
import { api } from "../../../services/api";
import type { CreateUserInput } from "../../../schema/user/create";
import { toast } from "react-toastify";
import type { ApiresponseUser } from "../../../types/api/user/create";
import { AxiosError } from "axios";
import { useState } from "react";


async function fetchData(data: CreateUserInput) {
  const res = await api.post<ApiresponseUser>("/users", data);
  return res.data;
}

export function useRegister() {
     const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mutation = useMutation({
    mutationFn: fetchData,
    onSuccess(data) {
      toast.success(`Seja bem-vindo às Terras Mineiras, ${data.name}`);
    },
    onError(error) {
        let message = "Erro desconhecido";

      if (error instanceof AxiosError) {
        message = error.response?.data?.message ?? error.message;
      } else if (error instanceof Error) {
        message = "ops!! algo deu errado";
      }

      setErrorMessage(message);
    },
  });

  return { ...mutation , errorMessage };
}
