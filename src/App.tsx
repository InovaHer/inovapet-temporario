import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import SaibaMais from "./components/saibamais/SaibaMais"
import DepoimentosPets from "./components/saibamais/depoimentos/DepoimentoPet"

type MenuState = 'closed' | 'open';

function App() {

  const [menuState, setMenuState] = useState<MenuState>('closed');

  const toggleMenu = (): void => {
    setMenuState(prevState => prevState === 'closed' ? 'open' : 'closed');
  };

  const closeMenu = (): void => {
    setMenuState('closed');
  };

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">

          <Navbar 
            menuState={menuState}
            onMenuToggle={toggleMenu}
            onMenuClose={closeMenu}
          />

          <div className='flex-1 w-full pt-16 bg-white'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/saibamais" element={<SaibaMais />} />
              <Route path="/depoimentos" element={<DepoimentosPets />} />
            </Routes>
          </div>

          <Footer />

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
