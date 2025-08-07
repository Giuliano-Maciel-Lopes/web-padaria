import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  err?: string;
};

export function Input({ err, className = "", type = "text", ...rest }: Props) {
    const baseClass =
    type === "text"
      ? `w-full h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${
          err ? "border-red-500" : ""
        }`
      : "";

  return (
    <>
      <input
        type={type}
        className={`${baseClass} ${className}`}
        {...rest}
      />
      {err && <span className="text-red-500 text-sm mt-1 block">{err}</span>}
    </>
  );

}
