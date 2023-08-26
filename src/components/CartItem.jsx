export function CartItem ({ product, addToCart }) {
  const { thumbnail, title, price, quantity } = product
  return (
    <>
      <li>
        <img src={thumbnail} alt={title} />
      </li>
      <div>
        <strong>{title}</strong> - {price}€
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>{/* onClick={() => addToCart(product)} */}
    </>
  )
}
