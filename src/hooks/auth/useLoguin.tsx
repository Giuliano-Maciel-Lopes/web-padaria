import { useState, type FormEvent } from "react";
import { createSessionSchema } from "../../schema/session/create";
import { api } from "../../services/api";
import { useAuth } from "./useAuth";
import { errorHandler } from "../../utils/errorHandler";

export function useLogin(onSuccess?: () => void) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);

  const auth = useAuth();
  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    setIsloading(true);

    await errorHandler(async () => {
      const data = createSessionSchema.parse({ email, password });
      const response = await api.post("/sessions", data);
      auth.save(response.data);
      console.log(response.data);
      console.log("tudo certo");
      onSuccess?.();
    });

    setIsloading(false);
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    isloading,
    setIsloading,
  };
}
