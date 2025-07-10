// TRANSFORMEI TUDO EM STRING 
export type FieldErrorsString<T extends string = string> = {
  [key in T]?: string;
} | null;

// loguin
export type LoginErrors = FieldErrorsString<"email" | "password" | "general">;

//REGISTER
export type RegisterErrors = FieldErrorsString<
  "name" | "email" | "password" | "confirmPassword" | "general"
>;
