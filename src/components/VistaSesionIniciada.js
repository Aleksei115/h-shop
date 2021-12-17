import React from 'react'
import basket from '../img/basket-shopping-solid.svg'
import userIcon from '../img/user-astronaut-solid.svg'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { useUser } from '../hooks/useUser'
import { Link } from 'react-router-dom'

const Div = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const StyledA = styled(Link)`
    z-index: 4;
`

export const VistaSesionIniciada = () => {
    const { cantidadProductos } = useUser()
    return (
        <Div>
            <IconButton aria-label="cart">
                <Badge badgeContent={cantidadProductos} color="secondary">
                    <StyledA to={'/carrito'}>
                        <img src={basket} width={'40px'} />
                    </StyledA>
                </Badge>
            </IconButton>
            <IconButton aria-label="user">
                <StyledA to={'/usuario'}>
                    <img src={userIcon} width={'40px'} />
                </StyledA>
            </IconButton>
        </Div>
    )
}
