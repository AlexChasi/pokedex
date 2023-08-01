import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  error: null,
  pokemon: null
}

export const singlePokemonSlice = createSlice({
  name: 'singlePokemon',
  initialState,
  reducers: {
    changePokemon: (state, action) => {
      const { pokemon } = action.payload
      state.pokemon = pokemon
      state.loading = false
      state.error = null
    },

    changeError: (state, action) => {
      const { error } = action.payload

      state.error = error
      state.loading = false
    }

  }
})

export const { changePokemon, changeError } = singlePokemonSlice.actions
export default singlePokemonSlice.reducer
