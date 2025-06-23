import { Outlet } from "react-router";
import {Logo} from "../logo"
import { IconButton } from "../header/iconButton";
import x from "../../assets/x.svg"
import type React from "react";
type Props = {
  children?: React.ReactNode
  
}



export function LayoutAuth({children}:Props) {
  return (
    <div className=" h-screen w-full flex items-center justify-center sticky my-20 z-50"> 
    <main className=" relative rounded-3xl flex flex-col items-center pt-4 md:w-[600px] md:h-[600px] w-[300px] h-[500px] bg-login md">
      
      <IconButton animation className=" absolute top-4 right-4">
        <img src={x} alt="icone x" />
      </IconButton>
      <Logo/>
     
{children}
      
      

      
      
      
    </main>
    </div>
  );
}