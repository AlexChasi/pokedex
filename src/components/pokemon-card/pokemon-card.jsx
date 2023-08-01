import { Link } from 'react-router-dom'
import { useSinglePokemonActions } from '../../hooks/useSinglePokemonActions'
import { parseTypes } from '../../lib/parseTypes'

export function PokemonCard ({ pokemon }) {
  const { sprites, name, stats, types } = pokemon
  const { setPokemon } = useSinglePokemonActions()

  const handleClick = () => {
    setPokemon(pokemon)
  }

  return <Link to={`/pokedex/${name}`} onClick={handleClick}>
    <article className={`${parseTypes({ types })} rounded-md p-3 flex flex-col items-center group relative`}>
      <div className='pointer-events-none absolute top-0 left-0 w-full h-full bg-transparent
       trnasition-colors duration-300 group-hover:bg-black/50 rounded-md' />
      <div id='imageContainer' className='relative h-[120px] w-full bg-gradient-to-t from-[rgba(255,255,255,.1)] to-transparent'>
        <img
          src={sprites.other['official-artwork'].front_default}
          alt='Pokemon Image'
          height={150}
          width={150}
          className='absolute left-1/2 -translate-x-1/2 -bottom-[20%] group-hover:-bottom-0 group-hover:scale-110 duration-300 transition-[bottom,transform] '
        />
      </div>
      <div className='bg-white w-full mx-auto rounded-b-md pt-8 flex flex-col items-center'>
        <h5 className='font-semibold text-2xl capitalize -mb-[5px] text-center h-[32px] overflow-hidden'>{name}</h5>
        <p className='capitalize text-neutral-800'>{types.map((el, i, arr) => `${el.type.name}${i !== arr.length - 1 ? ' / ' : ''}`)}</p>
        <span className='text-neutral-400 text-sm'>Tipo</span>

        <div id='stats' className='border-t border-neutral-300 grid grid-cols-2 grid-rows-2 w-full px-5 py-4 place-content-center'>
          {
            ['hp', 'attack', 'defense', 'speed'].map(stat => (

              <div key={stat} className='flex flex-col gap-y- items-center'>

                <span className='text-neutral-400 text-sm uppercase leading-3'>{stat}</span>
                <p className='font-bold mb-2'>{stats.find(el => el.stat.name === stat).base_stat}</p>

              </div>

            ))
          }
        </div>

      </div>
    </article>
  </Link>
}
