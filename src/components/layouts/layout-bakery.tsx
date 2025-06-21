import { useState } from "react";
import { Header } from "../header/header";
import { Outlet } from "react-router";
import { Aside } from "../aside/aside";



export function LayoutBakery() {
   const [open , setopen] = useState(false)
    function onOpen(){
      setopen(true)
  
    }
  return (
   
<div className="min-h-screen flex  justify-center bg-beige">
  <div className="max-w-[100rem] w-full ">
    <Header onAside={onOpen} />
   {open && <Aside/>}
   
    
  </div>
</div>
  )

}