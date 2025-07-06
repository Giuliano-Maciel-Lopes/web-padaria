
import type { ComponentProps , ReactNode} from "react";

type Props = ComponentProps<"input"> 

export function Input({ className="",  ...rest }: Props) {
  return (
   
      <input
        type="text"
        {...rest}
        className={` w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${className}`}
       
      />
  );
}