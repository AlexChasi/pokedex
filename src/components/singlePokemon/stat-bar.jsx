export function StatBar ({ name, amount }) {
  const getWidth = () => {
    if (amount >= 150) return '100%'
    return `${(amount / 150) * 100}%`
  }

  return <div className="flex flex-col">
    <div className="flex justify-between text-sm">
      <p className="uppercase">{name}:</p>
      <span>{amount}/150</span>
    </div>
    <div id='bar' className="h-8 w-full bg-gray-300">
      <div id='progress' style={{ width: getWidth(amount) }} className="bg-gradient-to-r from-yellow-500 to-orange-600 h-full" />
    </div>
  </div>
}
