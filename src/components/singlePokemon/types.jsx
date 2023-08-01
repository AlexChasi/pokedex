export function Types ({ types, abilities }) {
  return <div className="w-full flex gap-4 max-w-2xl mb-24 flex-wrap">

    <div className="flex flex-col flex-1">
      <h6 className="text-lg font-semibold text-gray-800 text-center mb-6">Tipo</h6>
      <div className="flex gap-x-2">
        {types.map(type => <div key={type.type.name} style={{ color: 'white' }} className={`capitalize flex-1 font-semibold ${type.type.name}plain text-white text-center px-5 py-1 text-sm`}>{type.type.name}</div>)}
      </div>
    </div>
    <div className="flex flex-col flex-1 gap-x-2">
      <h6 className="text-lg font-semibold text-gray-800 text-center mb-6">Habilidades</h6>
      <div className="flex gap-x-2">
        {abilities.slice(0, 2).map(el => <div key={el.ability.name} className={'capitalize flex-1 font-semibold text-black bg-gray-100 text-center px-5 py-1 text-sm'}>{el.ability.name}</div>)}
      </div>
    </div>

  </div>
}
