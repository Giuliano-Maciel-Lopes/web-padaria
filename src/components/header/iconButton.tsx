import type { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  children?: React.ReactNode;
  animation?: boolean;
};

export function IconButton({ animation=true, children, className="", ...rest }: Props) {
  return (
    <button
      {...rest}
      type="button"
      className={`hover:opacity-60 hover:cursor-pointer  transition-transform duration-500 ease-in-out ${
        animation ? "hover:rotate-90": "hover:rotate-0"
      } ${className}`}
    >
      {children}
    </button>
  );
}
