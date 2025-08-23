import type { ComponentProps } from "react";
import search from "../../../assets/lupa.png";
import { Button } from "../../index/button";
import { Input } from "../../index/input";
// Use react-router-dom

type Props = ComponentProps<"form"> & {
  placeholder?: string;
  value: string;
 onSearchChange: (value: string) => void;
  onSearch: (value: string) => void;
};

export function Formsearch({
  placeholder,
 onSearchChange,
  onSearch,
  value,
  ...rest
}: Props) {

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = value.trim();
     if (!trimmed) return;
    onSearch(trimmed);
  }

  return (
    <form
      onSubmit={onSubmit}
      {...rest}
      className="flex w-full items-center justify-center"
    >
      <div className="flex items-center border rounded-md overflow-hidden w-full h-10">
        <Input
          placeholder={placeholder}
          onChange={(e) => onSearchChange(e.target.value)}
          value={value}
        />
        <Button variant={"icon"} type={"submit"}>
          <img
            src={search}
            alt="icone de pesquisa"
            className="w-5 rounded h-full object-contain"
          />
        </Button>
      </div>
    </form>
  );
}
