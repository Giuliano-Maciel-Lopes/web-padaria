import type { ComponentProps } from "react";
import { classMerge } from "../../utils/merge";
import { StepCart } from "../layoutcart/stepcart";

type Props = ComponentProps<"button"> & {
  children?: React.ReactNode;
  isloading?: boolean;
  variant?: "base" | "icon" | "add" | "square" | "buy" | "stepcart";
  colorVariant?: "primary" | "secund" | "bg" | "products" | "cart";
};

const variants = {
  Size: {
    base: "h-12",
    icon: "h-10 w-10",
    add: "h-50",
    square: "w-12",
    buy: "w-80 h-12 ",
    stepcart: "h-15 md:w-[21.875rem]",
  },

  color: {
    primary: "bg-button",
    secund: "bg-button2",
    bg: "bg-button3",
    products: "bg-footer2",
    cart: "bg-header",
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
      disabled={isloading}
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
