import { style } from '@mui/system'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

export const DivContenedor = styled.div`
    width: 50vw;

    margin: 150px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const ContainerProducto = styled.div`
    width: 80%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background-color: #af69cd;
    padding: 10px;
    color: #f0ffff;
    margin-bottom: 30px;
`
export const GridContainer = styled.div`
    width: 75%;
    display: grid;
    grid-template-areas: 'title title title' 'precio total total' 'boton1 cantidad boton2';
    /* grid-auto-flow: column; */
    border-radius: 10px;
`

export const DivContenedorImg = styled(Link)`
    width: 30%;
    height: 160px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});
    background-size: cover;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const StyledH3 = styled.h3`
    font-size: 1.7em;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 10px;
    text-align: center;
    grid-area: title;
`

export const StyledNo = styled(StyledH3)`
    position: absolute;
    width: 100vw;
    height: 300px;
    left: 50%;
    margin-left: -50vw;
    top: 50%;
    margin-top: -150px;
`
export const Cantidad = styled.h3`
    font-size: 1em;
    font-weight: 500;
    font-style: oblique;
    text-align: center;
    margin-bottom: 20px;
    grid-area: ${props => props.area};
`
export const StyledButtons = styled(IconButton)`
    /* width: 50px; */
    grid-area: ${props => props.area};
`
export const SyledImg = styled.img`
    width: 40px;
    margin: 0 auto;
`

export const NumProductos = styled.h2`
    font-size: 2.1em;
    font-weight: 900;
    text-align: center;
    margin: auto 0;
    grid-area: cantidad;
`

export const Precio = styled.h3`
    width: 100%;
    margin: 50px 0;
    font-size: 1.5em;
    font-weight: 700;
    font-style: italic;
    text-align: right;
    margin-right: 10px;
    color: #f44336;
`
