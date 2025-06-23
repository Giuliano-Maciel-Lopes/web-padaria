import type { ComponentProps } from "react";
import { classMerge } from "../utils/merge";

type Props = ComponentProps<"button"> & {
    children?: React.ReactNode;
    isloading?:boolean
    variant?: "base"|"icon"
}

const variants =  {
  Button:{
    base: "h-12",
    icon: "h-10 w-10"

  }

}


export function Button({variant="base",  isloading, children ,  ...rest}: Props) {
  return (
    <button {...rest} className=
  
    
    {classMerge([`flex items-center w-full rounded-md
        justify-center bg-button  hover:cursor-pointer `, variants.Button[variant]

    ])} 
    >
        {children}

    </button>
  );
}
