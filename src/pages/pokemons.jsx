import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePokemonsActions } from '../hooks/usePokemonsActions'
import { getPokemons } from '../lib/getPokemons'
import { Spinner } from '../components/common/spinner'
import { PokemonCard } from '../components/pokemon-card/pokemon-card'
import { Form } from '../components/common/form'
import { filterPokemons } from '../lib/filterPokemons'
import { getPokemonsDetails } from '../lib/getPokemonsDetails'
import { Pagination } from '../components/pagination/pagination'

const PokemonsRender = ({ loading, error, pokemons }) => {
  if (!loading && !error && !pokemons) return null

  if (loading) {
    return <div className='flex w-full h-full justify-center items-center'>
    <Spinner />
    </div>
  }
  if (error) {
    return <div className='flex w-full h-full justify-center items-center'>
    <span className='text-red-400'>{error}</span>
    </div>
  }

  return <>
    <section className='grid grid-cols-[repeat(auto-fit,_minmax(237px,.3fr))] gap-3 place-content-center'>
      {

        pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)

      }
    </section>
    <Pagination />
  </>
}

export function Pokemons () {
  const user = useSelector(s => s.user)
  const { pokemons, page, loading, error, search, allPokemons, total } = useSelector(s => s.pokemons)

  const { changePokemons, changeError, changeSearch, changeAllPokemons } = usePokemonsActions()

  useEffect(() => {
    if (pokemons) return

    let totalPokemons

    getPokemons()
      .then(rawPokemons => {
        changeAllPokemons(rawPokemons)
        totalPokemons = rawPokemons.length

        const paginatedPokemons = rawPokemons.slice(page * 20, page * 20 + 20)
        return getPokemonsDetails({ pokemons: paginatedPokemons })
      })
      .then(pokemonsWithDetails => changePokemons(pokemonsWithDetails, totalPokemons))
      .catch(changeError)
  }, [])

  useEffect(() => {
    if (!allPokemons) return

    const pokemonsToSlice = search ? filterPokemons({ array: allPokemons, search }) : allPokemons
    const paginatedPokemons = pokemonsToSlice.slice(page * 20, page * 20 + 20)

    getPokemonsDetails({ pokemons: paginatedPokemons })
      .then(pokemonsWithDetails => changePokemons(pokemonsWithDetails, pokemonsToSlice.length))
      .catch(changeError)
  }, [page])

  const handleSearch = e => {
    e.preventDefault()
    const { name } = Object.fromEntries(new FormData(e.target))
    if (name === '' || name.replaceAll(' ', '').length === 0 || !allPokemons || name === search) return

    changeSearch(name)

    const filteredPokemons = filterPokemons({ array: allPokemons, search: name })
    const totalPokemons = filteredPokemons.length
    const paginatedPokemons = filteredPokemons.slice(0, 20) // Siempre es del 0 al 20 porque al hacer changeSearch el page se resetea a 0

    getPokemonsDetails({ pokemons: paginatedPokemons })
      .then(pokemonsWithDetails => changePokemons(pokemonsWithDetails, totalPokemons))
      .catch(changeError)
  }

  console.log(total)

  if (!user) return

  return <main className='max-w-5xl mx-auto flex flex-col flex-1 w-full py-4 px-4'>

    <p className='mt-2 mb-4'>
      <span className='text-orange-700 font-bold'>Bienvenido {user}</span>
      , Aquí podrás encontrar tu pokemón favorito.
    </p>

    <div className='flex mb-6'>
      <div className='flex flex-1'>
        <Form placeholder='Nombre del pokemon' defaultValue={search} buttonText='Buscar' handleSubmit={handleSearch} />
      </div>
    </div>

    <PokemonsRender page={page} error={error} loading={loading } pokemons={pokemons} />

  </main>
}
