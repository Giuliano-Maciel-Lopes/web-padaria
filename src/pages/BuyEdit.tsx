import { Button } from "../components/index/button";
import img from "../assets/rosquinhas - Copia.png"
import { useAuth } from "../hooks/useAuth";
import { Buy } from "../components/buyedit/buy";
import { Edit } from "../components/buyedit/edit";




export function BuyEditPage() {
  const {session}= useAuth()
  const isHome = session?.datauser.role === "STOCK"
  return (
    <div className="flex ">
      <div className="flex flex-col w-full min-h-screen md:w-1/2 md:justify-center md:items-center">
        <div className="border-2 h-auto items-center justify-center "   >
       <img src={img} alt="" className="object-contain h-full" />
       </div>
       <div>
        {
          isHome? <Edit/> : <Buy/>
        }

       </div>
      </div>

    </div>
    

       
  );
}
