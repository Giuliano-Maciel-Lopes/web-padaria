import type { Dispatch, SetStateAction } from "react";
import { ProductCreateEditError } from "../erros/product/createedit";
import { UploadFileError } from "../erros/uploads";


export interface UseProductHook {
  isLoading: boolean;
  setisLoading: Dispatch<SetStateAction<boolean>>;

  error: ProductCreateEditError | null;
  //setError: Dispatch<SetStateAction<ProductCreateEditError | null>>;

  name: string;
  setName: Dispatch<SetStateAction<string>>;

  description: string;
  setDescription: Dispatch<SetStateAction<string>>;

  category: string;
  setCategory: Dispatch<SetStateAction<string>>;

  price: string | number;
  setPrice: Dispatch<SetStateAction<string | number>>;

  imageUrl: string | null;
  setImageUrl: Dispatch<SetStateAction<string | null>>;

  isVitrine: boolean;
  setIsVitrine: Dispatch<SetStateAction<boolean>>;

  onCreateEdit: (imagePath?: string) => Promise<ProductCreateEditError | null>

  


}
