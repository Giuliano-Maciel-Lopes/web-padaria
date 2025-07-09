import { useFile } from "../../hooks/uploads/usefile";
import { Fildinput } from "../index/inputfildset";


type Props = { 
   file: File | null;
   onSetFile: (file: File | null) => void;
  category: string;
  onSetCategory: (value: string) => void;
}

export function File({ category , onSetCategory ,file , onSetFile}:Props) {
  



  return (
   <div>
      <Fildinput
        type="file"
        legend="imagem"
        className="h-50 border-2 border-gray-400"
        onChange={(e) => {
        onSetFile(e.target.files?.[0] || null)
        }}
    
      />
       <Fildinput
       className="hidden"
        legend="categoria"
        value={category}
        onChange={(e) => onSetCategory(e.target.value)}
      />
    

    </div>
 
  );
}
