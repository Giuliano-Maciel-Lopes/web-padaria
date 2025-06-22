import type { ComponentProps } from "react";
import menu from "../../assets/menu.svg";

type Props = ComponentProps<"button"> & {
    children?: React.ReactNode
    isOpen?: boolean
}

export function IconButton({  children, isOpen, ...rest  }: Props) {
  return (
    
        <button {...rest} type="button" className="hover:opacity-60 hover:cursor-pointer">
                {children }
        </button>
        
      
    
  );
}