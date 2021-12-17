import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContenedorProducto = styled.div`
    width: 230px;
    height: 320px;
    margin: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    background-color: rgba(128, 214, 113, 0.1);
`

const TituloProducto = styled.h2`
    display: block;
    height: 40px;
    font-size: 1.1em;
    text-align: center;
    font-weight: 500;
    margin-top: 20px;
    letter-spacing: 1.3px;
    font-style: italic;
    &:hover {
        cursor: pointer;
    }
`

const ContenedorImg = styled(ContenedorProducto)`
    width: 100%;
    height: 130px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url(${props => props.url});
    background-size: cover;
    margin: 0 auto;
    box-shadow: none;
`

const Categoria = styled.p`
    margin-top: 20px;
    font-size: 0.7em;
    font-weight: 500;
    font-style: oblique;
    text-align: left;
    margin-left: 10px;
`

const Precio = styled.h3`
    margin-top: 50px;
    font-size: 1em;
    font-weight: 700;
    font-style: italic;
    text-align: right;
    margin-right: 10px;
    color: #f44336;
`

const LinkedNonStyle = styled(Link)`
    color: black;
    text-decoration: none;
`

export const Producto = ({ item }) => {
    return (
        <ContenedorProducto>
            <Link to={`/${item._id}`}>
                <ContenedorImg url={item.image}></ContenedorImg>
            </Link>
            <LinkedNonStyle to={`/${item._id}`}>
                <TituloProducto>{item.product_name}</TituloProducto>
            </LinkedNonStyle>
            <Categoria>Categoria : {item.category}</Categoria>
            <Precio>{item.price} MXN</Precio>
        </ContenedorProducto>
    )
}
