import { errorHandler } from "../../utils/errorHandler";
import { api } from "../../services/api";
import {
  createUserInfoSchema,
  type CreateUserInfoInput,
} from "../../schema/userInfo/create";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSuccessMessage } from "../sucessmensagem";

export function useUserInfoCreate() {
  const { setSuccessMessage } = useSuccessMessage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<CreateUserInfoInput>({
    resolver: zodResolver(createUserInfoSchema),
    defaultValues: {
      city: "",
      // coloquei so esse aqui para aparecer o selicione do select da cidades que fazem entregas no vale do aço
    },
  });

  const onCreateUserInfo = handleSubmit(async (data) => {
    const { error, data: database } = await errorHandler(async () => {
      const res = await api.post("/user_infos", data);

      return res.data;
    });

    if (error) {
      setError("root", {
        message: error.general || "Erro ao criar informaçao do usuário",
      });
    } else {
      setSuccessMessage(database);
      reset();
    }
  });

  return {
    register,

    errors,
    onCreateUserInfo,
  };
}
