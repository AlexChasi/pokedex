export const getPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10000'

  try {
    const data = await fetch(url)
    const result = await data.json()

    return result.results
  } catch (err) {
    throw new Error('Hubo un error al recuperar los pokemons :(')
  }
}
