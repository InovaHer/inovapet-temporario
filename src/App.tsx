import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "./pages/cadastro/Cadastro"

import { AuthProvider } from "./contexts/AuthContext"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Perfil from "./pages/perfil/Perfil"
import AtualizarPerfil from "./pages/perfil/AtualizarPerfil"
import FormLogin from "./components/login/formlogin/FormLogin"
import Navbar from "./components/navibar/Navbar";



function App() {
  
  

  return (
    <>    
     <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
          
          <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<FormLogin />} />
						
						<Route path="/cadastro" element={<Cadastro />} />
						
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
          </Routes>
          </div>
        {/* <Footer/> */}
      </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
