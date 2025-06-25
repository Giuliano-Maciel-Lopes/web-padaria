import { Header } from "../header/header";
import { Fotter } from "../fotter/fotter";
import { AsideMenu } from "../asideMenu/asidemenu";
import { AsideLoguin } from "../auth/asideloguin";
import { useToggle } from "../../hooks/useToggle";
import { AsideRegister } from "../auth/aside.register";
import { Outlet } from "react-router";






export function LayoutBakery() {
  const menu = useToggle()
  const loguin = useToggle()
  const register = useToggle()
    
    
  return (
   <div>
    
<div className="min-h-screen flex  justify-center bg-beige">
  <div className="max-w-[100rem] w-full ">
    <Header onAsideMenu={menu.open} onAsideLoguin={loguin.open} />
   {menu.isOpen && < AsideMenu oncloseMenu={menu.closed} />}

   {loguin.isOpen && <AsideLoguin  oncloseAuth={loguin.closed} onRegister={()=>{register.open() , loguin.closed()}} />}
   {register.isOpen && <AsideRegister oncloseAuth={register.closed} onLoguin={()=> {register.closed() , loguin.open()}}/>}

    <div className="bg-green-700 h-[1200px]">
      <Outlet/>
    </div>
   
    
  </div>
  
</div>
 <Fotter/>
 </div>
  )

}