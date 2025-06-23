import type { ComponentProps } from "react";
import search from "../../assets/lupa.png";
import { Button } from "./button";
import { Input } from "./input";
type Props = ComponentProps<"form"> 


export function Formsearch({...rest}:Props) {
  return (
    <form {...rest} className="flex  w-full items-center justify-center">
      <div className=" flex items-center border rounded-md overflow-hidden w-full h-10 ">
        <Input placeholder="Buscar" />
        <Button className="h-full " type={"submit"}>
          <img
            src={search}
            alt="icone de pesquisa "
              className="w-5  redond h-full object-contain "
          />
        </Button>
      </div>
    </form>
  );
}
