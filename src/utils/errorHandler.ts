import { ZodError } from "zod";
import { AxiosError } from "axios";

type AsyncFn<T> = () => Promise<T>;

export async function errorHandler<T>(fn: AsyncFn<T>): Promise<T | undefined> {
  try {
    return await fn();
  } catch (error) {
    if (error instanceof ZodError) {
       console.log(error)
      alert(error.issues[0].message);
      
    } else if (error instanceof AxiosError) {
       console.log(error)
      alert(error.response?.data?.message || "Erro na requisição");
       
    } else {
       console.log(error)
      alert("Erro desconhecido");
        
    }
    return undefined;
  }
}
