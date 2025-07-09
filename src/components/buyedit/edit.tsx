import { Fildinput } from "../index/inputfildset";
import { Select } from "../index/select";
import { Button } from "../index/button";
import { useEdit } from "../../hooks/products/useEdit";
import { File } from "./filecat";
import { categorie } from "../../utils/categorias";
import type { Product } from "../../types/api/producsts";

type Props = {
  onAside: () => void;
  edit: ReturnType<typeof useEdit>;
  file: File | null;
  onSetFile: (file: File | null) => void;
  product: Product | null;
};

export function Edit({ product, file, onSetFile, edit, onAside }: Props) {
  const {
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
            type="checkbox"
            checked={isVitrine}
            onChange={(e) => setIsVitrine(e.target.checked)}
            className="w-20"
          
          />
        </div>
        <Fildinput
          legend="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={product?.name}
        />
        <Fildinput
          legend="descriçao"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={product?.description}
        />
        <div className="flex gap-4">
          <Select
            legend="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categorie.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </Select>
          <Fildinput
            legend="valor"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={product?.price.toString()}
          />
        </div>
        <Fildinput
          className="hidden"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <File
          category={category}
          onSetCategory={setCategory}
          file={file}
          onSetFile={onSetFile}
        />

        <Button type="button" onClick={onAside}>
          ALTERAR
        </Button>
      </form>
    </div>
  );
}
