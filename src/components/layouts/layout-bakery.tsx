import { Header } from "../header/header";
import { AsideMenu } from "../asideMenu/asidemenu";
import { AsideLoguin } from "../auth/asideloguin";
import { useToggle } from "../../hooks/useToggle";





export function LayoutBakery() {
  const menu = useToggle()
  const auth = useToggle()
    
    
  return (
   
<div className="min-h-screen flex  justify-center bg-beige">
  <div className="max-w-[100rem] w-full ">
    <Header onAsideMenu={menu.open} onAsideLoguin={auth.open} />
   {menu.isOpen && < AsideMenu oncloseMenu={menu.closed} />}
   {auth.isOpen && <AsideLoguin  oncloseAuth={auth.closed}/>}
   
    
  </div>
</div>
  )

}