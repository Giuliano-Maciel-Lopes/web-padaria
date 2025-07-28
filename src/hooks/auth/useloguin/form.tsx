import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createSessionSchema,
  type CreateSessionInput,
} from "../../../schema/session/create";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
}
