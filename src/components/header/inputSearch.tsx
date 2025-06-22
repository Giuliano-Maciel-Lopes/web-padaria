
import type { ComponentProps , ReactNode} from "react";

type Props = ComponentProps<"input"> & {
  children?: ReactNode;}


export function Input({ children, ...rest }: Props) {
  return (
   
      <input
        type="text"
        {...rest}
        className="w-full h-full border p-2 border-gray-400 rounded-md flex-1  focus:outline-none"
      />
  );
}