import { Button } from "../index/button";

type BoxSessionsProps = {
  img: string;
  title: string;
  description: string;
  onclick:()=> void
};

export function BoxSessions({ onclick ,  img, title, description }: BoxSessionsProps) {
  return (
    
      <Button
      onClick={onclick}
        className="bg-gray-100 p-4 rounded-2xl shadow-md w-full cursor-pointer transition-transform duration-300 hover:scale-105"
        variant="boxsession"
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={img}
            alt={title}
            className="w-24 h-24 object-contain mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </Button>
   
  );
}
