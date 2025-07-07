import React from "react";
import { useState } from "react";
import { createUserSchema } from "../../schema/user/create";
import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("as senhas nao batem ");
    }

    setIsloading(true);

    await errorHandler(async () => {
      const data = createUserSchema.parse({ name, email, password });

      await api.post("/users", data);
      alert("Cadastro realizado com sucesso!");
    });

    setIsloading(false);
  }

  return {
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
