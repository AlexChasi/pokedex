import { useDispatch } from 'react-redux'
import { setUser, removeUser } from '../store/user/slice'

export function useUserActions () {
  const dispatch = useDispatch()

  const login = (user) => {
    dispatch(setUser(user))
  }
  const logout = () => {
    dispatch(removeUser())
  }

  return { login, logout }
}
