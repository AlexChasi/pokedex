import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/slice'
import pokemonsReducer from './pokemons/slice'
import singlePokemonReducer from './singlePokemon/slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    pokemons: pokemonsReducer,
    singlePokemon: singlePokemonReducer
  }
})
