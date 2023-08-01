export async function getPokemonsDetails ({ pokemons }) {
  const promises = pokemons.map(async pokemon => {
    return fetch(pokemon.url)
      .then(res => res.json())
  })
  const parsedPokemons = await Promise.all(promises)
  return parsedPokemons
}
