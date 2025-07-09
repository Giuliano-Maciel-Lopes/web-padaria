import type { ComponentProps } from "react";
import { classMerge } from "../../utils/merge";


type Props = ComponentProps<"button"> & {
  children?: React.ReactNode;
  isloading?: boolean;
  variant?: "base" | "icon" | "add"|"square" |"buy";
  colorVariant?: "primary" | "secund" | "bg" |"products"
  ;
};

const variants = {
  Size: {
    base: "h-12",
    icon: "h-10 w-10",
    add: "h-50",
    square:"w-12",
    buy: "w-80 h-12 "
  },

  color: {
    primary: "bg-button",
    secund: "bg-button2",
    bg: "bg-button3",
    products:"bg-footer2"
  },
};

export function Button({
  className = "",
  colorVariant = "primary",
  variant = "base",
  isloading,
  disabled,
  children,
  ...rest

}: Props) {
  return (
    <button
      {...rest}
      disabled={isloading }
      className={classMerge([
        `flex items-center w-full rounded-md
        justify-center bg-button bg-amber-200  hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`,
        variants.Size[variant],
        variants.color[colorVariant],
      ])}
    >
      {children}
    </button>
  );
}
