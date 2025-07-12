import { CartContext } from "../../context/cart-context"
import { useContext } from "react"

export function useCartContext() {
  const context =  useContext(CartContext)
  return context
}