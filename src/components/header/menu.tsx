import type { ComponentProps } from "react";
import menu from "../../assets/menu.svg";

type Props = ComponentProps<"button"> & {
    children?: React.ReactNode
    isOpen?: boolean
}

export function Menu({  children, isOpen, ...rest  }: Props) {
  return (
    <div>
        <button {...rest} type="button">
            <img src={menu} alt="icone menu" />
        </button>
        {children }
      
    </div>
  );
}