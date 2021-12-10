import React from 'react'
import { Link } from 'react-router-dom'
import getProductos from '../helpers/getProductos'

const Navbar = () => {
    return (
        <div>
            <input type="search" />

            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/registrarse">
                <button>Registrarse</button>
            </Link>
            <Link to="/IniciarSesion">
                <button>Iniciar Sesión</button>
            </Link>

            <button onClick={getProductos}>buscar</button>
        </div>
    )
}

export default Navbar
