// src/components/globals/GlobalAuthModals.tsx
import { useAuthModal } from "../../hooks/context/asideauth";
import { AsideLoguin } from "./auth/asideloguin";
import { AsideRegister } from "./auth/aside.register";
import { AsideUserInfo } from "./auth/aside.userinfo";



export function GlobalAuthModals() {
 
  const { login, register, userInfo} = useAuthModal();


  return (
    <>
      {login.isOpen && (
        <AsideLoguin
          onclosed={login.closed}
          oncloseAuth={login.closed}
          onRegister={() => {
            register.open();
            login.closed();
          }}
        />
      )}

      {register.isOpen && (
        <AsideRegister
          oncloseAuth={register.closed}
          onLoguin={() => {
            register.closed();
            login.open();
          }}
        />
      )}
      {userInfo.isOpen && (
        <AsideUserInfo
        onClosed={userInfo.closed}
        onbutton2={userInfo.closed}
        
          
        />

      )}

     
    </>
  );
}
