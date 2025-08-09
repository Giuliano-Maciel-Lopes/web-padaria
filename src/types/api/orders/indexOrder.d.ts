export type Product = {
  name: string;
  imageUrl: string;
  category: string;
};

export type OrderItem = {
  quantity: number;
  unitPrice: number;
  product: Product;
  id: string;
};

export type UserInfo = {
  city: string;
  phone: string;
  houseNumber: string;
  neighborhood: string;
  street: string;
};

export type User = {
  name: string;
  userInfo?: UserInfo; // pode ser undefined se não tiver cadastro
};
export type DeliveryPerson = {
  name: string;
} | null;

export type OrderStatus =
  | "PROCESSING"
  | "ITENS_PROCESSING"
  | "SHIPPED"
  | "ORDER_FINISH"
  | "DELIVERED";

export type Order = {
  id: string;
  totalAmount: number;
  status: OrderStatus;
  items: OrderItem[];
  user: User;
  deliveryPerson: DeliveryPerson;
};
