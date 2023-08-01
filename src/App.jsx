import { Navbar } from './components/navbar/navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { ProtectedRoute } from './components/common/protected-route'
import { Home } from './pages/home'
import { Pokemons } from './pages/pokemons'
import { SinglePokemon } from './pages/singlePokemon'

function App () {
  return (
    <div id='App' className='flex flex-col flex-1'>
      <Router>
        <Navbar />
        <Routes>

          <Route path='/' element={
              <Home />
            } />

          <Route path='/pokedex' element={
            <ProtectedRoute>
              <Pokemons />
            </ProtectedRoute>
            }
          />
          <Route path='/pokedex/:id' element={
            <ProtectedRoute>
              <SinglePokemon />
            </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
