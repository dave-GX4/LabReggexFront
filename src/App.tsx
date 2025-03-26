import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./pages/Auth"
import CharacterSelection from "./pages/Selection"
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth/>}/>
        <Route path="/Seleccion-personaje" element={<CharacterSelection/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
