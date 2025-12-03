import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import ListaProdutos from './components/produto/listaprodutos/ListaProdutos'
import FormProduto from './components/produto/formproduto/FormProduto'
import DeletarProduto from './components/produto/deletarproduto/DeletarProduto'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />

        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/cadastrarproduto" element={<FormProduto />} />
        <Route path="/editarproduto/:id" element={<FormProduto />} />
        <Route path="/deletarproduto/:id" element={<DeletarProduto />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
