import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"input"> & {
  error:boolean
};

export function Input({ error ,  className = "", ...rest }: Props) {
  return (
    <div className="w-full h-12">
    <input
      type="text"
      {...rest}
      className={` w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${ error ? "border-red-500" : ""} ${className}  `}
     

    />
    
    </div>
    
    
  );
}
