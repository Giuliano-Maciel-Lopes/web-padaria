import React from "react";
import { useState } from "react";
import { createUserSchema } from "../schema/user/create";
import { ZodError } from "zod";
import { api } from "../services/api";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("as senhas nao batem ");
    }

    try {
      

      const data = createUserSchema.parse({ name, email, password });

      await api.post("/users", data);
      alert("Cadastro realizado com sucesso!");

    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }
      return alert("nao foi possivel terminar seu cadastro");
    }
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
  };
}
