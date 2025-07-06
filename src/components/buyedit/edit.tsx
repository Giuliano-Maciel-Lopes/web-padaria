import { Fildinput } from "../index/inputfildset";
import { Select } from "../index/select";
import { Button } from "../index/button";
import { useEdit } from "../../hooks/useEdit";
import { File } from "./filecat";

type Props = {
  onAside: () => void;
  edit: ReturnType<typeof useEdit>; 
   file: File | null;
  onSetFile: (file: File | null) => void;
};

export function Edit({file ,onSetFile ,  edit , onAside }: Props) {
  const {
    name,
    description,
    category,
    price,
    imageUrl,
    setImageUrl,  
    setName,
    setCategory,
    setDescription,
    setPrice,
  } = edit;

  return (
    <div className="flex flex-col gap-6">
      <form className="border-2 rounded-3xl border-gray-400 flex flex-col py-4 px-4 gap-4 ">
        <Fildinput
          legend="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Fildinput
          legend="descriçao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex gap-4">
          <Fildinput
            legend="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Fildinput
            legend="valor"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <Fildinput
          className="hidden"
           value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}

        />
        <File category={category} onSetCategory={setCategory} file={file} onSetFile={onSetFile}/>

        <Button type="button" onClick={onAside}>
          ALTERAR
        </Button>
      </form>
    </div>
  );
}
