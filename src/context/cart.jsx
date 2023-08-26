import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer.js'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
