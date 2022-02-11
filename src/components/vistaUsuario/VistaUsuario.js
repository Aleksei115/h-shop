import React, { useEffect, useState } from 'react'
import { useUser } from '../../hooks/useUser'
import NavbarUser from '../nav/Navbar'
import { Link } from 'react-router-dom'

import { DivContenedor, StyledH3, Button } from './styles'

export const VistaUsuario = () => {
    const objeto = useUser()

    return (
        <>
            <NavbarUser />
            <DivContenedor>
                <StyledH3>Lo sentimos, esta función no está disponible por el momento :(</StyledH3>
                <Link to="/">
                    <Button color={'white'} bold={'bold'} login={'false'} onClick={objeto.logout}>
                        Cerrar Sesión
                    </Button>
                </Link>
            </DivContenedor>
        </>
    )
}
