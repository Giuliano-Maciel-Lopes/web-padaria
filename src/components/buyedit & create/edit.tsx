import { Fildinput } from "../index/inputfildset";
import { Select } from "../index/select";
import { Button } from "../index/button";
import { categorie } from "../../utils/categorias";

import type { Product } from "../../types/api/products/producsts";
import {
  useCreateProductForm,
  type UseCreateProductFormReturn,
} from "../../hooks/products/useCreateEdit/form";

type Props = {
  onAside: () => void;
  editCreat: UseCreateProductFormReturn;
  product: Product | null;
  isCreate: boolean;
  fileError: string | undefined;
  setFileChange: (file: File | null) => void; 
};

export function Edit({
  isCreate,
  product,
  editCreat,
  onAside,
  setFileChange,
  fileError,
}: Props) {
  const { errors, register, watch } = editCreat;

  const isVitrineValue = watch("isVitrine");

  console.log("isVitrine:", isVitrineValue);
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
            
          >
            {categorie.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Select>

          <Fildinput
            err={errors?.price?.message}
            legend="valor"
            {...register("price" , {valueAsNumber:true})}
            placeholder={
              isCreate ? "Digite o valor" : product?.price?.toString()
            }
          />
        </div>

        <Fildinput
          err={fileError}
          type="file"
          legend="imagem"
          className="h-50 border-2 border-gray-400"
          onChange={(e) => {
            const file = e.target.files?.[0] ?? null;
            setFileChange(file);
          }}
        />

        <Button type="button" onClick={onAside}>
          {isCreate ? "CRIAR PRODUTO" : "ALTERAR"}
        </Button>
      </form>
    </div>
  );
}
