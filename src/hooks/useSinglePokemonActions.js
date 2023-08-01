import { useDispatch } from 'react-redux'
import { changeError, changePokemon } from '../store/singlePokemon/slice'

export function useSinglePokemonActions () {
  const dispatch = useDispatch()

  const setPokemon = pokemon => {
    dispatch(changePokemon({ pokemon }))
  }
  const setError = error => {
    dispatch(changeError({ error }))
  }

  return { setPokemon, setError }
}
