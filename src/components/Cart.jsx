import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()
  const { clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/30/thumbnail.jpg' alt='iphone' />
          </li>
          <div>
            <strong>iphone</strong> -1499€
          </div>
          <footer>
            <small>
              Qty: 1
            </small>
            <button>+</button>
          </footer>
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}
