import { Fildinput } from "../index/inputfildset";
import { Select } from "../index/select";
import { Button } from "../index/button";
import { File } from "./filecat";
import { categorie } from "../../utils/categorias";
import type { Product } from "../../types/api/producsts";
import type { UseProductHook } from "../../types/api/createEdit";
import type { UploadFileError } from "../../types/erros/uploads";

type Props = {
  onAside: () => void;
  edit: UseProductHook
  file: File | null;
  onSetFile: (file: File | null) => void;
  product: Product | null;
  isCreate: boolean
  fileError: UploadFileError | null; // novo prop para erro do arquivo
};

export function Edit({ fileError, isCreate ,  product, file, onSetFile, edit, onAside }: Props) {
  const {
    error,
    name,
    description,
    category,
    price,
    imageUrl,
    isVitrine,
    setImageUrl,
    setName,
    setCategory,
    setDescription,
    setPrice,
    setIsVitrine,
  } = edit;
  
  return (
    <div className="flex flex-col gap-6">
      <form className="border-2 rounded-3xl border-gray-400 flex flex-col py-4 px-4 gap-4 ">
        <div className="flex justify-end items-center ">
          <p>Adicionar a vitrine?</p>
          <Fildinput
          err={error?.isVitrine}
            type="checkbox"
            checked={isVitrine}
            onChange={(e) => setIsVitrine(e.target.checked)}
            className="w-20"
          
          />
        </div>
        <Fildinput
        err={error?.name}
          legend="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={isCreate ? "Digite o nome do produto" : product?.name}
        />
        <Fildinput
        err={error?.description}
          legend="descriçao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={isCreate ? "Digite a descrição" : product?.description}
        />
        <div className="flex gap-4">
          
          <Select
            err={error?.category}
            legend="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categorie.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Select>
          <Fildinput
         err={error?.price}
            legend="valor"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
               placeholder={isCreate ? "Digite o valor" : product?.price?.toString()}
          />
        </div>
        <Fildinput
          className="hidden"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <File
        errors={[
      fileError?.file,
      fileError?.category,
      fileError?.general,  
        ].filter(Boolean)
      .join(" | ")}
          category={category}
          onSetCategory={setCategory}
          file={file}
          onSetFile={onSetFile}
        />

        <Button type="button" onClick={onAside}>
         {isCreate ? "CRIAR PRODUTO" : "ALTERAR"}
        </Button>
      </form>
    </div>
  );
}
