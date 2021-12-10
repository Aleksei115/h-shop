import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import IniciarSesionUsuario from './components/IniciarSesionUsuario'
import RegistroUsuario from './components/RegistroUsuario'
import { Global } from './styles/Global'

const divRoot = document.getElementById('root')

render(
    <BrowserRouter>
        <Global />
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="registrarse" element={<RegistroUsuario />} />
            <Route path="IniciarSesion" element={<IniciarSesionUsuario />} />
        </Routes>
    </BrowserRouter>,
    divRoot
)
