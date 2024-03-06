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
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />    
            <Route path='/About' element={<About/>} />          
            <Route path='/Courses' element={<Courses/>} />          
            <Route path='/Contact' element={<Contact/>} />          
          </Routes>
        </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App