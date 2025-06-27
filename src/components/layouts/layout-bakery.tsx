import { Header } from "../layoutbakery/header/header";
import { Fotter } from "../layoutbakery/fotter/fotter";
import { AsideMenu } from "../layoutbakery/asideMenu/asidemenu";
import { AsideLoguin } from "../layoutbakery/auth/asideloguin";
import { useToggle } from "../../hooks/useToggle";
import { AsideRegister } from "../layoutbakery/auth/aside.register";
import { Outlet } from "react-router";






export function LayoutBakery() {
  const menu = useToggle()
  const loguin = useToggle()
  const register = useToggle()
    
    
  return (
 <div className="min-h-screen flex flex-col bg-beige"> 
  <div className="w-full flex grow justify-center ">         
    <div className="max-w-[100rem] w-full flex flex-col flex-1"> 
      
    <Header onAsideMenu={menu.open} onAsideLoguin={loguin.open} />
    <div className="h-[9.5rem] md:h-20" />

   {menu.isOpen && < AsideMenu oncloseMenu={menu.closed} />}

   {loguin.isOpen && <AsideLoguin  oncloseAuth={loguin.closed} onRegister={()=>{register.open() , loguin.closed()}} />}
   {register.isOpen && <AsideRegister oncloseAuth={register.closed} onLoguin={()=> {register.closed() , loguin.open()}}/>}

    <div className="flex-grow ">
      <Outlet/>
    </div>
   
    
  </div>
  
</div>
 <Fotter/>
 </div>
  )

}