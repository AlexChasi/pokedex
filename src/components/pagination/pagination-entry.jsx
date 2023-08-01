import { useSelector } from 'react-redux'
import { usePokemonsActions } from '../../hooks/usePokemonsActions'

export function PaginationEntry ({ index }) {
  const { page } = useSelector(s => s.pokemons)
  const { changePage } = usePokemonsActions()

  const handleClick = () => {
    if (page === index) return
    changePage(index)
  }

  return (
    <button
      onClick={handleClick}
      data-selected={page === index}
      className="py-3 px-5 data-[selected=true]:bg-red-600 data-[selected=true]:text-white data-[selected=false]:hover:bg-orange-500
      data-[selected=false]:hover:text-white transition-colors"
    >
      <span>{index + 1}</span>
    </button>
  )
}
