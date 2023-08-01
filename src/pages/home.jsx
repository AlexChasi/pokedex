import { useNavigate } from 'react-router-dom'
import { useUserActions } from '../hooks/useUserActions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Form } from '../components/common/form'

export function Home () {
  const navigate = useNavigate()
  const { login } = useUserActions()
  const user = useSelector(state => state.user)

  const handleSubmit = e => {
    e.preventDefault()
    const { name } = Object.fromEntries(new FormData(e.target))

    login(name)
  }

  useEffect(() => {
    if (!user) return
    navigate('/pokedex', { replace: true })
  }, [user])

  return <main className="flex flex-col justify-center items-center flex-1 max-w-4xl w-full mx-auto p-4">
    <img src='/logo.png' alt='logo' className="mb-6" height={63} width={350} />
    <h1 className="text-4xl text-red-500 font-bold">¡Hola entrenador!</h1>
    <p className="text-lg">Para poder comenzar, dame tu nombre</p>
    <Form handleSubmit={handleSubmit} />
  </main>
}
