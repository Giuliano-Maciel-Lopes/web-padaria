export type Product = {
  name: string;
  imageUrl: string;
  category: string;
};

export type OrderItem = {
  quantity: number;
  unitPrice: number;
  product: Product;
};

export type User = {
  name: string;
};

export type OrderStatus = "PROCESSING"|"SHIPPED"| "DELIVERED"; 

export type Order = {
  id: string;
  totalAmount: number;
  status: OrderStatus;
  items: OrderItem[];
  user: User;
};
