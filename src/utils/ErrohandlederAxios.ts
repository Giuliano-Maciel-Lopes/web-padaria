// utils/getApiErrorMessage.ts
import { AxiosError } from "axios";

export function erroHandlerAxios(error: unknown): string {
  if (error instanceof AxiosError) {
    const data = error.response?.data;

    if (typeof data === "string") return data;

    if (data && typeof data === "object" && "message" in data) {
      return (data as { message: string }).message;
    }
  }

  return "Erro inesperado ao comunicar com a API.";
}
