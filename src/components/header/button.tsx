import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
    
}


export function Button({ type , children , ...rest}: Props) {
  return (
    <button {...rest} className="flex items-center w-10 justify-center bg-button h-full hover:cursor-pointer" type={type}>
        {children}

    </button>
  );
}