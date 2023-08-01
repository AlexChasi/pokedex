import { StatBar } from './stat-bar'
import { Subtitle } from './subtitle'

export function Stats ({ stats }) {
  return <div className="w-full">
    <Subtitle text='Stats' center={false} />
    <div className='flex flex-col gap-y-4 mt-8'>
      {
        ['hp', 'attack', 'defense', 'speed'].map(statName => {
          const stat = stats.find(el => el.stat.name === statName)
          return (
            <StatBar name={stat.stat.name} key={stat.stat.name} amount={stat.base_stat} />
          )
        })
      }
    </div>

  </div>
}
