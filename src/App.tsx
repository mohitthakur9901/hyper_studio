
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import AppBar from './components/AppBar'

import Home from './Pages/Home'
import About from './Pages/About'

function App() {

  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
