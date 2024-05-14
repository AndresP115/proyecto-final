import './App.css'

//Importamos los componentes para CLIENTES
import CompMostrarClientes from './Componentes/CompMostrarClientes'
import CompCrearClientes from './Componentes/CompCrearCliente'
import CompEditarClientes from './Componentes/CompEditarClientes'

//Importamos los componentes para PRODUCTOS
import CompMostrarProducto from './Componentes/CompMostrarProducto'
import CompCrearProductos from './Componentes/CompCrearProducto'
import CompEditarProducto from './Componentes/CompEditarProducto'

//Importamos el footer
import CompFooter from './Componentes/Footer'

//Importamos el Login
import CompLogin from './Componentes/Login'

//Importamos el registro
import CompRegistro from './Componentes/CompRegistro'

//Importamos router (Las rutas)
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className='App'>
      <header className='container'>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Login" > Login </a> 
    <button
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className="navbar-toggler"
      data-bs-target="#navbarNav"
      data-bs-toggle="collapse"
      type="button"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="/"> Home </a> </li>
        <li className="nav-item"><a className="nav-link" href="/clientes" > Clientes </a> </li>
        <li className="nav-item"><a className="nav-link" href="/productos" > Productos </a> </li>
        <li className="nav-item"> <a aria-disabled="true" className="nav-link disabled" > Provedores </a> </li>
      </ul>
    </div>
  </div>
</nav>

      </header>
      <BrowserRouter>
      <Routes>
      <Route path="/Login/" element={<CompLogin/>}/>
      <Route path="/registro/" element={<CompRegistro/>}/>
        
      <Route path="/clientes/" element={<CompMostrarClientes/>}/>
      <Route path="/clientes/agregar/" element={<CompCrearClientes />}/>
      <Route path="/clientes/editar/:id" element={<CompEditarClientes />}/>

      {/* Rutas de productos */}
      <Route path="/productos/" element={<CompMostrarProducto/>} />
      <Route path="/productos/agregar/" element={<CompCrearProductos/>} />
      <Route path="/productos/editar/:id" element={<CompEditarProducto/>} />
      
      </Routes>
      </BrowserRouter>
      <CompFooter />

    </div>
  )
}

export default App
