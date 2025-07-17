import React, { createContext, useEffect, useState } from "react";
import type { CartItem } from "../types/context/cart";

type CartContextType = {
  items: CartItem[];
  save: (data: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  updateQuantity: (id: string, quantity: number) => void;
};

const LOCAL_STORAGE_KEY = "@Refund:cart";

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]); 

  function save(data: CartItem) {
    const itemExists = items.find((item) => item.id === data.id);

    const updatedItems = itemExists
      ? items.map((item) =>
          item.id === data.id
            ? { ...item, quantity: item.quantity + data.quantity }
            : item
        )
      : [...items, data];

    setItems(updatedItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  }

  function remove(id: string) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
  }
  function updateQuantity(id: string, quantity: number) {
  const updatedItems = items.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );

  setItems(updatedItems);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
}

  function clear() {
    setItems([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  }

  function loadCart() {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <CartContext.Provider value={{ items, save, remove, clear , updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}


