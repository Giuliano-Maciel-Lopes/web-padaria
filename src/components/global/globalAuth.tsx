// src/components/globals/GlobalAuthModals.tsx
import { useAuthModal } from "../../hooks/context/asideauth";
import { AsideLoguin } from "./auth/asideloguin";
import { AsideRegister } from "./auth/aside.register";


export function GlobalAuthModals() {
  const { login, register,} = useAuthModal();


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

     
    </>
  );
}
