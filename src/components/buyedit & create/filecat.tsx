import { useFile } from "../../hooks/uploads/usefile";
import { Fildinput } from "../index/inputfildset";


type Props = { 
   file: File | null;
   onSetFile: (file: File | null) => void;
  category: string;
  onSetCategory: (value: string) => void;
  errors?: string
}

export function File({ errors ,  category , onSetCategory ,file , onSetFile}:Props) {
  



  return (
   <div>
      <Fildinput
      err={errors}
        type="file"
        legend="imagem"
        className="h-50 border-2 border-gray-400"
        onChange={(e) => {
        onSetFile(e.target.files?.[0] || null)
        }}
    
      />
       <Fildinput
       
       className="hidden"
        value={category}
        onChange={(e) => onSetCategory(e.target.value)}
      />
    

    </div>
 
  );
}
