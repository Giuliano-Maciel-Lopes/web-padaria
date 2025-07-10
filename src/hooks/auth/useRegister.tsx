import React from "react";
import { useState } from "react";
import { createUserSchema } from "../../schema/user/create";
import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import type { RegisterErrors } from "../../types/erros/auth";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState<RegisterErrors>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
  setError({ confirmPassword: "As senhas não batem" });
  return;
}

    setIsloading(true);
    setError(null);

    const { error: err } = await errorHandler(async () => {
      const data = createUserSchema.parse({ name, email, password });

      await api.post("/users", data);
      alert("Cadastro realizado com sucesso!");
    });
    if (err) {
      setError(err);
    }
    setIsloading(false);
  }

  return {
    error,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    onSubmit,
    isloading,
  };
}
