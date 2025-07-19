import type { ComponentProps } from "react";

type Props = ComponentProps<"input"> & {
  err?: string;
};

export function Input({ err, className = "", type = "text", ...rest }: Props) {
  if (type === "radio") {
    return (
      <input
        type={type}
        className={`w-5 h-5 accent-amber-700 ${className}`}
        {...rest}
      />
    );
  }

  return (
    <div className="w-full">
      <input
        type={type}
        {...rest}
        className={`w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${
          err ? "border-red-500" : ""
        } ${className}`}
      />
      {err && <span className="text-red-500 text-sm mt-1 block">{err}</span>}
    </div>
  );
}
