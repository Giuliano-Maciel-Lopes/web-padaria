  type ProductFormInputs = {
  name?: string;
  description?: string;
  category?: string;
  price?:number;
  imageUrl?: string;
  isVitrine?: boolean;
  file?: File | null; 
  stock?:number
  isActive?: boolean
};