import { Fieldset } from "./fildset";

type Props = React.ComponentProps<"select"> & {
  legend?: string;
  err?: string;
};

export function Select({ err, legend, children, ...rest }: Props) {
  return (
    <Fieldset legend={legend}>
      <select
        {...rest}
        className="w-full text-amber-950 h-12 rounded-lg border border-amber-200 p-2 outline-none input-glow"
        value={""}
      >
        <option value="" disabled hidden>
          selecione
        </option>
        {children}
      </select>

      {err && <span className="text-red-500 text-sm mt-1 block">{err}</span>}
    </Fieldset>
  );
}
