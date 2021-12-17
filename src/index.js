import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import IniciarSesionUsuario from './components/inicioSesion/IniciarSesionUsuario'
import { VistaProducto } from './components/vistaProducto/VistaProducto'
import { Global } from './styles/Global'
import { UserContextProvider } from './context/ContextUser'
import { ProductosContextProvider } from './context/ContextProductos'
import { VistaCarrito } from './components/vistaCarrito/VistaCarrito'
import RegistrarUsuario from './components/registrarUsuario/RegistrarUsuario'
import { VistaUsuario } from './components/vistaUsuario/VistaUsuario'

const divRoot = document.getElementById('root')

render(
    <BrowserRouter>
        <Global />
        <UserContextProvider>
            <ProductosContextProvider>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/:productoId" element={<VistaProducto />} />
                    <Route path="/carrito" element={<VistaCarrito />} />
                    <Route path="/usuario" element={<VistaUsuario />} />
                    <Route path="registrarse" element={<RegistrarUsuario />} />
                    <Route path="IniciarSesion" element={<IniciarSesionUsuario />} />
                </Routes>
            </ProductosContextProvider>
        </UserContextProvider>
    </BrowserRouter>,
    divRoot
)
