import { Filters } from './Filters.jsx'

export function Header ({ changeFilters }) {
  return (
    <>
      <h1>Shopping cart 🛒</h1>
      <Filters onChange={changeFilters} />
    </>
  )
}
