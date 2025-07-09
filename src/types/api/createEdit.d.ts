import type { Dispatch, SetStateAction } from "react";

export interface UseProductHook {
  isLoading: boolean;
  setisLoading: Dispatch<SetStateAction<boolean>>;

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

  onCreateEdit: (imagePath?: string) => Promise<void>;
}
