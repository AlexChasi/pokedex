import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSinglePokemonActions } from '../hooks/useSinglePokemonActions'
import { parseTypes } from '../lib/parseTypes'
import { HeightWeightSection } from '../components/singlePokemon/height-weight-section'
import { Types } from '../components/singlePokemon/types'
import { Spinner } from '../components/common/spinner'
import { Subtitle } from '../components/singlePokemon/subtitle'
import { Stats } from '../components/singlePokemon/stats'

function SinglePokemonRender ({ loading, error, pokemon }) {
  if (error) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <span className='mt-6 text-center text-red-600'>{error}</span>
      </div>
    )
  }
  if (loading) {
    return (
    <div className='h-full w-full flex justify-center items-center'>
      <Spinner className='mx-auto mt-6' />
    </div>
    )
  }
  return <>
     <section className='p-2 pb-12 w-full flex flex-col shadow-lg gap-y-4 items-center'>
      <div id='imageContainer' className={`${parseTypes({ types: pokemon.types })} h-[175px] relative w-full`}>
        <div id='imageAnimation' className='absolute w-full -top-1/2 flex justify-center animate-appear'>
          <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          height={240}
          width={240}
          className=''
          />
         </div>
      </div>
      <div className='flex flex-col items-center gap-y-4 w-full px-16'>
        <p className='text-2xl'>#{pokemon.order}</p>
        <Subtitle text={pokemon.name} />
        <HeightWeightSection height={pokemon.height} weight={pokemon.weight} />
        <Types types={pokemon.types} abilities={pokemon.abilities} />
        <Stats stats={pokemon.stats} />
      </div>

    </section>

    <section className='p-12 flex flex-wrap gap-2 shadow-lg'>
      {
        pokemon.moves.map(el => <span key={el.move.url} className='py-1 px-3 bg-gray-100 rounded-xl'>{el.move.name}</span>)
      }
    </section>
  </>
}

export function SinglePokemon () {
  const { pokemon, loading, error } = useSelector(s => s.singlePokemon)
  const { setPokemon, setError } = useSinglePokemonActions()

  const { id } = useParams()

  useEffect(() => {
    if (pokemon) return

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(setPokemon)
      .catch(() => setError('Hubo un error intentando recuperar el pokemon :('))
  }, [pokemon])

  if (!pokemon) return

  return <main className='max-w-4xl w-full mx-auto flex-1 flex flex-col gap-y-6 py-20 items-center'>

    <SinglePokemonRender loading={loading} error={error} pokemon={pokemon} />

  </main>
}
