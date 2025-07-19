import { useState, type FormEvent } from "react";
import { createSessionSchema } from "../../schema/session/create";
import { api } from "../../services/api";
import { useAuth } from "../context/useAuth";
import { errorHandler } from "../../utils/errorHandler";
import type { LoginErrors } from "../../types/erros/auth";

export function useLogin(onSuccess?: () => void) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState<LoginErrors>(null);

  const auth = useAuth();
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsloading(true);

    const { error: err } = await errorHandler(async () => {
      const data = createSessionSchema.parse({ email, password });
      const response = await api.post("/sessions", data);
      auth.save(response.data);
      console.log(response.data);
      console.log("tudo certo");
      onSuccess?.();
    });
    if (err) {
      setError(err);
    }
    setIsloading(false);
  }

  return {
    error,
    email,
    setEmail,
    password,
    setPassword,
    onSubmit,
    isloading,
    setIsloading,
  };
}
