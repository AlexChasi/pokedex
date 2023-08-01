import { useSelector } from 'react-redux'
import { PaginationEntry } from './pagination-entry'

export function Pagination () {
  const { total, page } = useSelector(s => s.pokemons)

  const totalArray = Array.from({ length: Math.ceil(total / 20) }, (_, index) => index)
  const arrayToMap = totalArray.slice(page === 0 ? page : page - 1, page + 6)

  return <div className='flex flex-wrap mx-auto mt-4 gap-x-1'>
    {
      arrayToMap.map(el => <PaginationEntry key={el} index={el} />)
    }

  </div>
}
