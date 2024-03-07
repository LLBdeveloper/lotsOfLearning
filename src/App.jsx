import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />      
            <Route path='/courses' element={<Courses/>} />    
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App