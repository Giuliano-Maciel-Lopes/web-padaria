import type React from "react";


type Props = {
  colorClass?: string;
  img: string;
  mensagem: string;
  children?: React.ReactNode;
  classname?: string
  
};

export function InfoValue({
  children,
  mensagem,
  img,
  colorClass = "bg-blue-500",
  classname
}: Props) {
  return (
    <div className="bg-white w-full h-40 rounded-2xl flex overflow-hidden shadow-md pr-5">
      <div
        className={`flex items-center justify-center w-1/3 h-full ${colorClass}`}
      >
        <img src={img} alt="Ícone" className="w-10 h-10" />
      </div>

      <div className="w-2/3 p-4 flex flex-col  gap-2  ">
        <p className="text-gray-800 font-semibold text-center">
          {mensagem.toUpperCase()}
        </p>
        {children}
      </div>
    </div>
  );
}
