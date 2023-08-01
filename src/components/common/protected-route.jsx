import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function ProtectedRoute ({ children }) {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null) {
      navigate('/', { replace: true })
    }
  }, [user])

  return children
}
