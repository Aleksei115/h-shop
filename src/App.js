import React from 'react'
import { Outlet } from 'react-router'
import NavbarUser from './components/nav/Navbar'
import Productos from './components/Productos'
import { VistaGeneral } from './components/VistaGeneral'
import Container from 'react-bootstrap/Container'
import { useProductos } from './hooks/useProductos'

const App = () => {
    const user = false
    const { listaP, l } = useProductos()

    return (
        <Container>
            {listaP ? (
                <>
                    <NavbarUser />
                    <VistaGeneral />
                    <Productos />
                    <Outlet />
                </>
            ) : (
                ''
            )}
        </Container>
    )
}

export default App
