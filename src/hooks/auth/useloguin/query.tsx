import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { api } from "../../../services/api";
import { useAuth } from "../../context/useAuth";
import type { CreateSessionInput } from "../../../schema/session/create";
import { toast } from "react-toastify";
import { useState } from "react";
import { data } from "react-router";
import { AxiosError } from "axios";


async function fetchdata(data: CreateSessionInput) {
  const response = await api.post<ApiResponse>("/sessions", data);
  return response.data;
}

export function useLoguin() {
  const QueryClient = useQueryClient();
  const { save } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: fetchdata,
    onSuccess(data) {
      save(data);
      toast.success(
        `Uai! seja bem vindo de volta , ${data.datauser.name.toUpperCase()}`
      );
    },
    onError(error) {
      let message = "Erro desconhecido";

      if (error instanceof AxiosError) {
        message = error.response?.data?.message ?? error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      setErrorMessage(message);
    },

  });
  return {
    ...mutation,
    errorMessage,
  };
}
