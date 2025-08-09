import type React from "react"

type props={
  title:string
  subTitle?:string
  children?:React.ReactNode
}

export function Painel({children , title,subTitle}:props) {
  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl text-center flex flex-col items-center justify-center">
  <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 tracking-wide">
    {title}
  </h1>
  <p className="text-gray-600 mt-4 text-lg">
    {subTitle}
  </p>
  <div className="mt-6 w-full flex flex-col items-center justify-center">
    {children}
  </div>
</div>


  )
} 