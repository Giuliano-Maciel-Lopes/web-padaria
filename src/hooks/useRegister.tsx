import React from "react";
import { useState } from "react";
import { createUserSchema } from "../schema/user/create";
import { ZodError } from "zod";
import { api } from "../services/api";
import { AxiosError } from "axios";

export function useRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[isloading , setIsloading]=useState(false)
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("as senhas nao batem ");
    }

    try {
      setIsloading(true)
      

      const data = createUserSchema.parse({ name, email, password });

      await api.post("/users", data);
      alert("Cadastro realizado com sucesso!");

    } catch (error) {
      if (error instanceof ZodError) {
        return alert(error.issues[0].message);}

        if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }
      return alert("nao foi possivel terminar seu cadastro");
    }finally{
      setIsloading(false)
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
    isloading
  };
}
