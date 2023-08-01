import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  search: null,
  loading: true,
  error: null,
  pokemons: null,
  total: null,
  allPokemons: null
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      const { pokemons, total } = action.payload

      state.total = total
      state.pokemons = pokemons
      state.loading = false
      state.error = null
    },

    setPage: (state, action) => {
      const { page } = action.payload
      state.page = page
      state.loading = true
      state.error = null
    },

    setType: (state, action) => {
      const { type } = action.payload

      state.type = type
      state.loading = true
      state.error = null
    },

    setError: (state, action) => {
      const { error } = action.payload

      state.error = error
      state.loading = false
    },

    setSearch: (state, action) => {
      const { search } = action.payload

      state.search = search
      state.page = 0
      state.loading = true
      state.error = null
    },

    setAllPokemons: (state, action) => {
      const { allPokemons } = action.payload

      state.allPokemons = allPokemons
    }

  }
})

export const { setError, setPage, setPokemons, setSearch, setAllPokemons, setFiltered } = pokemonsSlice.actions
export default pokemonsSlice.reducer
