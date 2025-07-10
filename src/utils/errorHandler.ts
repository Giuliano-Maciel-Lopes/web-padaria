import { ZodError } from "zod";
import { AxiosError } from "axios";

type AsyncFn<T> = () => Promise<T>;

export async function errorHandler<T>(
  fn: AsyncFn<T>
): Promise<{ data?: T; error?: Record<string, string> | { general: string } }> {
  try {
    const data = await fn();
    return { data };
  } catch (err: any) {
    if (err instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of err.issues) {
        if (issue.path[0]) {
          fieldErrors[issue.path[0]] = issue.message;
        }
      }
      return { error: fieldErrors };
    }

    if (err instanceof AxiosError) {
      return {
        error: { general: err.response?.data?.message || "Erro na requisição" },
      };
    }

    return { error: { general: "Erro desconhecido" } };
  }
}

