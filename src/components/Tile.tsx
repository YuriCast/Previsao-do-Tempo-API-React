import Feels from './Icons/Feels'
import Humidity from './Icons/Humidity'
import Pop from './Icons/Pop'
import Pressure from './Icons/Pressure'
import Visibility from './Icons/Visibility'
import Wind from './Icons/Wind'

type Props = {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop'
  title: string
  info: string | JSX.Element
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
}
const Tile = ({ 
    icon, 
    title, 
    info, 
} : Props): JSX.Element => {
    const Icon = icons[icon]

    return (
        <article className='w-[140px] h-[100px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-2 mb-5 flex flex-col items-center justify-center'>
            <div className='flex items-center text-sm font-bold'>
            <Icon /> <h4 className='ml-1'>{title}</h4>
            </div>
            <h3 className='mt-2 text-lg text-center'>{info}</h3>
        </article>
    )
}

export default Tile