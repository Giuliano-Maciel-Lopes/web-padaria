
export type Product = {
  id:string
  name: string;
  description?: string;
  category: string;
  price: number;
  imageUrl?: string ;
  isVitrine: boolean;
   createdAt?: string;  // ou Date
  updatedAt?: string;  // ou Date
};

