import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Productos from './components/Productos'
import { VistaGeneral } from './components/VistaGeneral'

const App = () => {
    return (
        <div>
            <h1>Pagina principal</h1>
            <Navbar />
            <VistaGeneral />
            <Productos />
            <Outlet />
        </div>
    )
}

export default App
