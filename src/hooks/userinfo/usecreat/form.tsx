import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type CreateUserInfoInput,
  createUserInfoSchema,
} from "../../../schema/userInfo/create";

export function useUserInfoCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserInfoInput>({
    resolver: zodResolver(createUserInfoSchema),
    defaultValues: {
      city: "",
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
}
