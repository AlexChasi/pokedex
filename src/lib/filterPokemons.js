export function filterPokemons ({ array, search }) {
  console.log(array, search)
  return array.filter(pok => pok.name.toLowerCase().includes(search.toLowerCase()))
}
