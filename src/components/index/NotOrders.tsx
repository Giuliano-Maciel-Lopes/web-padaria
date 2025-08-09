import type React from "react";

type props ={
    msg:string
    children?:React.ReactNode
}

export function NotOrders({  children , msg}:props) {
  return (
     <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 gap-6">
        <p className="text-center text-gray-500 text-3xl md:text-5xl font-semibold">
         {msg}
        </p>
        {children}
        </div>
  );
}