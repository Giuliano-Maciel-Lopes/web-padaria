import axios from "axios";
import { ZodError } from "zod";

type AsyncFn<T> = () => Promise<T>;

export async function errorHandler<T>(
  fn: AsyncFn<T>
): Promise<{ data?: T; error?: { general: string } }> {
  try {
    const data = await fn();
    return { data };
  } catch (err: any) {
    const isDev = import.meta.env.MODE === "development";

    if (isDev && err instanceof ZodError) {
      console.error("Erro de validação Zod capturado em errorHandler:", err);
      return { error: { general: "Erro de validação (ver console para detalhes)" } };
    }

    if (axios.isAxiosError(err)) {
      return {
        error: {
          general: err.response?.data?.message || "Erro na requisição",
        },
      };
    }

    // Erro genérico
    return {
      error: {
        general: isDev ? err.message || "Erro desconhecido" : "Erro desconhecido",
      },
    };
  }
}

