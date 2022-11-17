import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Error404 from "./Pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:cep" element={<Details />} />
        <Route path="*" element={<Error404 />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
