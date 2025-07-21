import { Fildinput } from "../index/inputfildset";
import { Select } from "../index/select";
import { Button } from "../index/button";
import { File } from "./filecat";
import { categorie } from "../../utils/categorias";
import type { Product } from "../../types/api/products/producsts";
import type { UploadFileError } from "../../types/erros/uploads";
import { useCreateProduct } from "../../hooks/products/useCreateProduct";

type Props = {
  onAside: () => void;
  edit: ReturnType<typeof useCreateProduct>;
  file: File | null;
  onSetFile: (file: File | null) => void;
  product: Product | null;
  isCreate: boolean;
  fileError: UploadFileError | null;
 oncategory: (value: string) => void;
 erroUpload:string 
};

export function Edit({
 erroUpload,
  isCreate,
  product,
  file,
  onSetFile,
  edit,
  onAside,
  oncategory,
}: Props) {
  const { errors, register, successMessage, watch } = edit;
  

  return (
    <div className="flex flex-col gap-6">
      <form className="border-2 rounded-3xl border-gray-400 flex flex-col py-4 px-4 gap-4 ">
        <div className="flex justify-end items-center ">
          <p>Adicionar a vitrine?</p>
          <Fildinput
            err={errors?.isVitrine?.message}
            type="checkbox"
            {...register("isVitrine")}
            className="w-20"
          />
        </div>
        <Fildinput
          err={errors?.name?.message}
          legend="name"
          {...register("name")}
          placeholder={isCreate ? "Digite o nome do produto" : product?.name}
        />
        <Fildinput
          err={errors?.description?.message}
          legend="descriçao"
          {...register("description")}
          placeholder={isCreate ? "Digite a descrição" : product?.description}
        />
        <div className="flex gap-4">
          <Select
            err={errors?.category?.message}
            legend="categoria"
            {...register("category")}
            onChange={(e) => oncategory(e.target.value)}
          >
            {categorie.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Select>
          
          <Fildinput
            err={errors?.price?.message}
            legend="valor"
            {...register("price", { valueAsNumber: true })}
            placeholder={
              isCreate ? "Digite o valor" : product?.price?.toString()
            }
          
          />
        </div>
        <Fildinput className="hidden"  />
        <File
          errors={erroUpload}
           
        
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
