import type { ComponentProps } from "react";
import search from "../../../assets/lupa.png";
import { Button } from "../../index/button";
import { Input } from "../../index/input";
import { useProductsearch } from "../../../hooks/products/useserach";

type Props = ComponentProps<"form"> 


export function Formsearch({...rest}:Props) {
  const {onSearch , name , setname}= useProductsearch()
  return (
    <form onSubmit={onSearch} {...rest} className="flex  w-full items-center justify-center">
      <div className=" flex items-center border rounded-md overflow-hidden w-full h-10 ">
        <Input placeholder="Buscar" onChange={(e)=> setname(e.target.value)} value={name} />
        <Button  variant={"icon"} type={"submit"}>
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
