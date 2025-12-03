import AtualizarPerfil from "./pages/perfil/AtualizarPerfil"
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categoria/formcategoria/FormCategoria"
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias"
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto"
import FormProduto from "./components/produto/formproduto/FormProduto"
import ListaProdutos from "./components/produto/listaprodutos/ListaProdutos"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Perfil from "./pages/perfil/Perfil"
import { ToastContainer } from "react-toastify"
import Home from "./pages/Home"
<<<<<<< HEAD

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          {/* <Navbar /> */}
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastrarproduto" element={<FormProduto />} />
              <Route path="/editarproduto/:id" element={<FormProduto />} />
              <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/atualizarusuario" element={<AtualizarPerfil />} />
            </Routes>
          </div>
          {/* <Footer/> */}
        </BrowserRouter>
      </AuthProvider>
=======
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
>>>>>>> 4482eb5aea1d5cee6bf20505ae9cbaf559af162f
    </>
  )
}

export default App
