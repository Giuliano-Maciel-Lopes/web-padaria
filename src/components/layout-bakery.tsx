import { Header } from "./header";
import { Outlet } from "react-router";


export function LayoutBakery() {
  return (
   
<div className="min-h-screen flex  justify-center bg-beige">
  <div className="max-w-[100rem] w-full p-8 bg-beige">
    <Header />
    
  </div>
</div>
  )

}