export interface Order {
  id: string;
  userId: string;
  totalAmount: number;
  status: string;
  createdAt: string; // ou Date se quiser converter
  isHome: boolean;
}

export interface CreateOrderResponse {
  message: string;
  orders: Order;
}