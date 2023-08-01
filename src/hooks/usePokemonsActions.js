import { useDispatch } from 'react-redux'
import { setAllPokemons, setError, setPage, setPokemons, setSearch } from '../store/pokemons/slice'

export function usePokemonsActions () {
  const dispatch = useDispatch()

  const changeError = (error) => {
    dispatch(setError({ error }))
  }
  const changePokemons = (pokemons, total) => {
    dispatch(setPokemons({ pokemons, total }))
  }
  const changePage = (page) => {
    dispatch(setPage({ page }))
  }
  const changeSearch = (search) => {
    dispatch(setSearch({ search }))
  }
  const changeAllPokemons = allPokemons => {
    dispatch(setAllPokemons({ allPokemons }))
  }

  return { changeError, changePage, changePokemons, changeSearch, changeAllPokemons }
}
