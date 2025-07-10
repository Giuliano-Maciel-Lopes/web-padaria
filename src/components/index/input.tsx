import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"input"> & {
  err?:string
};

export function Input({ err ,  className = "", ...rest }: Props) {
  return (
    <div className="w-full ">
    <input
      type="text"
      {...rest}
      className={` w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${ err ? "border-red-500" : ""} ${className}  `}
     

    />
    {err && (
        <span className="text-red-500 text-sm mt-1 block">{err}</span>
      )}
    
    </div>
    
    
  );
}
