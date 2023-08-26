import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart, addToCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - {product.price}€
            </div>
            <div>
              <button onClick={() => addToCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
