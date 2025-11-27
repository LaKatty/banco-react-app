import { Routes, Route } from "react-router-dom";
import Pag from './components/Pag.tsx'
import '../src/styles/index.css'
import Productos from "../src/pages/PagNosotros.tsx";
import Nosotros from "../src/pages/PagProduct.tsx";
import Contact from "./components/Pag.tsx";


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
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    </>
  )
}

export default App
