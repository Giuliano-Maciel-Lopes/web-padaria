import type { ComponentProps } from "react";
import search from "../../../assets/lupa.png";
import { Button } from "../../index/button";
import { Input } from "../../index/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use react-router-dom

type Props = ComponentProps<"form"> & {
  placeholder?: string;
};

export function Formsearch({ placeholder, ...rest }: Props) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmed = name.trim();

    if (trimmed) {
      navigate(`/search?search=${encodeURIComponent(trimmed)}`); //encode serve para evitar problema na url
    } else {
      navigate("/");
    }
    setName("");
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
          onChange={(e) => setName(e.target.value)}
          value={name}
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
