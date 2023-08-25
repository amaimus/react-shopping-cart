import './Footer.css'

export function Footer ({ filters }) {
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      { JSON.stringify(filters)}
    </footer>
  )
}
