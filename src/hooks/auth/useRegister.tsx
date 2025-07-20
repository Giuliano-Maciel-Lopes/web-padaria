import React, { useState } from "react";
import {
  createUserSchema,
  type CreateUserInput,
} from "../../schema/user/create";
import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function useRegister() {
  const {
    register,
    setError,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
  });
  const [isLoading, setIsloading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setIsloading(true);

    const { error, data: dataRes } = await errorHandler(async () => {
      const res = await api.post("/users", data);
      reset();
      return res.data;
    });
    if (error) {
      setError("root", { message: error.general });
    } else if (dataRes) {
      setSuccessMessage(dataRes);
    }

    setIsloading(false);
  });

  return {
    register,
    onSubmit,
    errors,
    successMessage,
    isLoading,
  };
}
