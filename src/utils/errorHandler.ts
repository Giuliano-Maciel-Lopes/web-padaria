import { ZodError } from "zod";
import { AxiosError } from "axios";

type AsyncFn<T> = () => Promise<T>;

export async function errorHandler<T>(fn: AsyncFn<T>): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    if (error instanceof ZodError) {
      alert(error.issues[0].message);
      console.log(error)
    } else if (error instanceof AxiosError) {
      alert(error.response?.data?.message || "Erro na requisição");
        console.log(error)
    } else {
      alert("Erro desconhecido");
        console.log(error)
    }
    return undefined;
  }
}
