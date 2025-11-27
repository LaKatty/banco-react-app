import { Routes, Route } from "react-router-dom";
import Pag from './components/Pag.tsx'
import '../src/styles/index.css'
import Productos from "./pages/PagProduct.tsx";
import Calendario from "./pages/PagCalendario.tsx";
import Contact from "./components/Pag.tsx";

import Register from "./pages/Registro.tsx";
import Login from "./pages/InicioSesion.tsx";

import Menu from './components/Navbar.tsx'

function App() {

  return (
    <>
    <Menu />
    <Routes>
      {/**vista principal */}
      <Route path="/" element={<Pag />} />
      {/**Vista productos */}
      <Route path="/producto" element={<Productos />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

    </Routes>
    </>
  )
}

export default App
