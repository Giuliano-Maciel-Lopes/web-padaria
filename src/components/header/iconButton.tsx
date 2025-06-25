import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  children?: React.ReactNode;
  animation?: boolean;
};

export function IconButton({ animation=false, children, className="", ...rest }: Props) {
  return (
    <button
      {...rest}
      type="button"
      className={`hover:opacity-60 hover:cursor-pointer   ${
        animation ? "hover:rotate-90 transition-transform duration-500 ease-in-out": ""  
      } ${className}`}
    >
      {children}
    </button>
  );
}
