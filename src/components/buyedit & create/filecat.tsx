import { useFile } from "../../hooks/uploads/usefile";
import { Fildinput } from "../index/inputfildset";


type Props = { 
  file: File | null;
  onSetFile: (file: File | null) => void;
  
  errors?: string;
 
}

export function File({ errors,  onSetFile }: Props) {
  return (
    <div>
      <Fildinput
        err={errors}
        type="file"
        legend="imagem"
        className="h-50 border-2 border-gray-400"
        onChange={(e) => {
          onSetFile(e.target.files?.[0] || null);
        }}
      />
      
      {/* Se precisar desse input para category, use: */}
      <Fildinput
        className="hidden"
     
       
      />
    </div>
  );
}

 
  
