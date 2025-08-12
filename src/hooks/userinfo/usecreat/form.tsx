import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type CreateUserInfoInput,
  createUserInfoSchema,
} from "../../../schema/userInfo/create";
import type { UserInfo } from "../../../types/api/orders/indexOrder";

export function useUserInfoCreateForm(UserInfo?: UserInfo) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserInfoInput>({
    resolver: zodResolver(createUserInfoSchema),
    defaultValues: {
      city: UserInfo?.city ?? "",
      houseNumber: UserInfo?.houseNumber ?? "",
      neighborhood: UserInfo?.neighborhood ?? "",
      phone: UserInfo?.phone ?? "",
      street: UserInfo?.street ?? "",
    },
  });

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
}
