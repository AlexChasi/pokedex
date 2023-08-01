export function HeightWeightSection ({ height, weight }) {
  return <div className="flex justify-center items-start gap-5">
    <div className="flex flex-col items-center">
      <span className="text-xs uppercase">Altura</span>
      <p className="text-lg">{height}</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-xs uppercase">Peso</span>
      <p className="text-lg">{weight}</p>
    </div>

  </div>
}
