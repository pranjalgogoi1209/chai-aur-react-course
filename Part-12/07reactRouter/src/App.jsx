import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'
import Inside from './components/About/Inside'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/github" element={<Github/>}/>
        <Route path="/about/inside/:id" element={<Inside/>}/>
      </Routes>

      <Footer/>
    </>
  </BrowserRouter>
  )
}

export default App
