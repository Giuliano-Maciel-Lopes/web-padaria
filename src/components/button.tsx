import type { ComponentProps } from "react";
import { classMerge } from "../utils/merge";

type Props = ComponentProps<"button"> & {
    children?: React.ReactNode;
    isloading?:boolean
    variant?: "base"|"icon" 
    colorVariant?:"primary"| "secund"
}

const variants =  {
    Size:{
    base: "h-12",
    icon: "h-10 w-10"},

    color:{
      primary: "bg-button",
      secund:   "bg-button2"

    }

}


export function Button({ colorVariant="primary" ,variant="base",  isloading, children ,  ...rest}: Props) {
  return (
    <button {...rest} className=
  
    
    {classMerge([`flex items-center w-full rounded-md
        justify-center bg-button bg-amber-200  hover:cursor-pointer `, variants.Size[variant] , variants.color[colorVariant]

    ])} 
    >
        {children}

    </button>
  );
}
