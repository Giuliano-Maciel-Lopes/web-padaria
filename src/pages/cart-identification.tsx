import { License } from "../components/cart identification/license";
import { useAuth } from "../hooks/auth/useAuth";


export function CartIdentificationPage() {
  const {session} = useAuth()
  const auth = session?.token;
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-1/3 flex">
        <h1 className="hidden md:block ">Produto</h1>

      </div>

      <div className="w-1/3">
       <h1 className="hidden md:block">informaçoes</h1>
      <License name={"teste"} email={"teste"} addressRegistered="sim ou nao "/>
      </div>

      <div className="w-1/3">
      <h1 className="hidden md:block">resumo</h1>

        
      </div>
    
    </div>
  );
}