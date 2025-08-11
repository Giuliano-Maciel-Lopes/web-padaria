import { Navigate, useNavigate } from "react-router";
import { Li } from "./li";
import React, { type ReactNode } from "react";
type Props ={
children?:ReactNode
}


export function Nav({children}:Props) {
    const navigate = useNavigate()
  return (
    <nav>
      <ul className="flex flex-col gap-4 justify-center ">
        <Li onclick={()=>navigate("/info")}>SOBRE NÓS</Li>
        <Li onclick={()=>navigate("/userinfo")} >ADICIONAR ENDREÇO PARA ENTREGA</Li>
        <Li href="https://www.instagram.com/giulianomaciel/">CONTATO </Li>
      </ul>
      {children}
    </nav>
  );
}
