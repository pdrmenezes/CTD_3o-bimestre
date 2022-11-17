import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './pages/404'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './pages/Home/Footer'
import Header from './pages/Home/Header'
import Projects from './pages/Projects'

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          {/* Primeira tela que será mostrada é a primeira rota da lista de rotas. Pra criar uma tela no domínio base, basta usar "/" como path */}
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}