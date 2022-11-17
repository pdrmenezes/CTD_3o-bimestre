import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'
import Home from './pages/Home'
import Error404 from './pages/404'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}