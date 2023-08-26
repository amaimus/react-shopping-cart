import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { CartItem } from './CartItem.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.js'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product =>
              <CartItem
                key={product.id}
                product={product}
                addToCart={() => addToCart(product)}
              />
            )
          }

        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}
