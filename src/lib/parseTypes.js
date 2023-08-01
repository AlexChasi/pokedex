export function parseTypes ({ types, plain = false }) {
  // El motivo por el cual hago esto, es que hay pokemones que tienen más de un tipo, por ejemplo normal/fairy y el api
  // las devuelve en ese orden, y se aplica el estilo del primero, pero el gradiente de fairy es mucho más estetico que el normal
  // y quiero darle prioridad a los demás

  return types.map((el, i, arr) => {
    const type = el.type.name
    if (['normal', 'dragon', 'steel'].includes(type) && i !== arr.length - 1) return ''
    return plain ? `${type}.plain` : type
  }).join(' ')
}
