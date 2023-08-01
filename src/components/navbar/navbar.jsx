import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useUserActions } from '../../hooks/useUserActions'

export function Navbar () {
  const user = useSelector(s => s.user)

  const { logout } = useUserActions()

  return <nav className="flex px-6 bg-red-600 h-28 w-full relative after:bg-black after:absolute after:w-full after:h-1/3 after:left-0
  after:bottom-0">
    <Link to={user ? '/pokedex' : '/'} className='my-auto'>
      <img src='/logo.png' width={250} height={65} alt='logo' className="object-contain relative z-20" />
    </Link>

    <div id='button' className="h-16   w-16  flex justify-center items-center bg-white border-[9px] border-black rounded-full absolute right-6 bottom-0 translate-y-[22%] z-10">
      <button onClick={logout} className={`bg-neutral-800 border-[8px] border-black ${user ? 'hover:bg-red-600 cursor-pointer' : ''} transition-colors h-8 w-8 rounded-full`} />
    </div>
  </nav>
}
