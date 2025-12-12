import { Routes, Route } from 'react-router'

import Landing from './pages/Landing'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App