import { Products } from './components/Products'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { products as initialProducts } from '../src/mocks/products.json'
import { IS_DEVELOPMENT } from '../config.js'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
