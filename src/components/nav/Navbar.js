import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import { InputBox, StyledDir, StyledNavLink, Button, StyledUl, StyledLi, StyledContainer } from './styles'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import { VistaSesionIniciada } from '../VistaSesionIniciada'
import { useProductos } from '../../hooks/useProductos'

const NavbarUser = () => {
    const { listaP, l } = useProductos()
    const arregloProductos = l.data.map(item => {
        return {
            label: item.product_name,
            id: item._id,
        }
    })
    const [value, setValue] = useState()
    const [itemBuscado, setItemBuscado] = useState('')
    const { isLogged, jwt, logout } = useUser()

    return (
        <StyledDir>
            <StyledContainer>
                <InputBox
                    id="combo-box-demo"
                    options={arregloProductos}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                    }}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    onInputChange={(event, newInputValue) => {
                        setItemBuscado(newInputValue)
                    }}
                    renderInput={params => <TextField {...params} label="Producto" />}
                />
                <StyledNavLink to={value != undefined ? `/${value.id}` : '/'}>Buscar</StyledNavLink>
            </StyledContainer>
            <StyledContainer>
                <Link to="/">
                    <Button color={'white'} bold={'bold'} login={'true'}>
                        Home
                    </Button>
                </Link>

                {isLogged ? (
                    <VistaSesionIniciada />
                ) : (
                    <>
                        <Link to="/registrarse">
                            <Button color={'#0ac1a8'}>Registrarse</Button>
                        </Link>

                        <Link to="/IniciarSesion">
                            <Button color={'white'} bold={'bold'} login={'true'}>
                                Iniciar Sesión
                            </Button>
                        </Link>
                    </>
                )}
            </StyledContainer>
        </StyledDir>
    )
}

export default NavbarUser
