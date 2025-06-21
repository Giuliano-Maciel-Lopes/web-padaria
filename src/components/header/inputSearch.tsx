
import type { ComponentProps , ReactNode} from "react";

type Props = ComponentProps<"input"> & {
  children?: ReactNode;}


export function InputSearch({  ...rest }: Props) {
  return (
    <div className="relative flex gap-4">
      <input
        type="text"
        {...rest}
        className="  border p-2  border-gray-400 rounded-md  focus:outline-none"
      />
    </div>
  );
}