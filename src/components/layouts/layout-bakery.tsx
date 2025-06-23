import { useState } from "react";
import { Header } from "../header/header";
import { Outlet } from "react-router";
import { AsideMenu } from "../asideMenu/asidemenu";
import { AsideLoguin } from "../auth/asideloguin";





export function LayoutBakery() {
   const [openMenu , setOpenMenu] = useState(false)
   const [openAuth , setOpenAuth] = useState(true)
   
    function onOpenmenu(){
      setOpenMenu(true)
  
    }
    function onOpenAuth(){
      setOpenAuth(true)
  
    }
    
    
    
  return (
   
<div className="min-h-screen flex  justify-center bg-beige">
  <div className="max-w-[100rem] w-full ">
    <Header onAsideMenu={()=> setOpenMenu(true)} onAsideLoguin={()=> setOpenAuth(true)} />
   {openMenu && < AsideMenu onclose={()=>setOpenMenu(false)} />}
   {openAuth && <AsideLoguin/>}
   
    
  </div>
</div>
  )

}