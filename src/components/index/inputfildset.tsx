import { Fieldset } from "./fildset";
import { Input } from "./input";

type Props = React.ComponentProps<"input"> & {
  legend?: string;
  type?: string;
  err?:string
};

export function Fildinput({
  type = "text",
  err,
  legend,
  className = "",
  ...rest
}: Props) {
     if (type === "checkbox") {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className={`w-10 h-10 ${className}`}
          {...rest}
        />
        {legend && <span>{legend}</span>}
      </label>
    );
  }
  return (
    <Fieldset legend={legend}>
      <Input
      err={err}
        type={type}
        {...rest}
        className={`w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow ${className} `}
      />
    </Fieldset>
  );
}
