import React, { useState, useEffect } from 'react'
import {
    ContainerProducto,
    SyledImg,
    DivContenedorImg,
    StyledH3,
    GridContainer,
    Cantidad,
    StyledButtons,
    NumProductos,
} from './styles'
import minusIcon from '../../img/minus-solid.svg'
import plusIcon from '../../img/plus-solid.svg'
import { useUser } from '../../hooks/useUser'

export const ProductoCarro = ({ item, precioTotal, handlePrecioTotal }) => {
    const { cambiarItem, cantidadProductos } = useUser()
    const [cantidadInicial, setCantidadInicial] = useState(item.cantidad)
    const [totalP, setTotalP] = useState(item.total)
    const [state, setState] = useState(true)
    const handleMinus = () => {
        cambiarItem(item.id, cantidadInicial - 1, item.precio, item.img, item.title)
        setCantidadInicial(cantidadInicial - 1)
    }
    useEffect(() => {
        handlePrecioTotal(ant => ant - item.precio)
        if (cantidadInicial === 0) setState(false)
        setTotalP(cantidadInicial * item.precio)
    }, [handleMinus])

    return (
        <>
            {state ? (
                <ContainerProducto>
                    <DivContenedorImg url={item.img} to={`/${item.id}`} />
                    <GridContainer>
                        <StyledH3>{item.title}</StyledH3>
                        <Cantidad area={'precio'}>{item.precio}MXN</Cantidad>
                        <Cantidad area={'total'}>Total : {totalP} MXN</Cantidad>
                        <StyledButtons area={'boton1'} onClick={handleMinus}>
                            <SyledImg src={minusIcon} />
                        </StyledButtons>
                        <NumProductos>{cantidadInicial}</NumProductos>
                        <StyledButtons area={'boton2'}>
                            <SyledImg src={plusIcon} />
                        </StyledButtons>
                    </GridContainer>
                </ContainerProducto>
            ) : (
                ''
            )}
        </>
    )
}
