import React, { useState, useEffect } from 'react'
import { useUser } from '../../hooks/useUser'
import NavbarUser from '../nav/Navbar'
import { ProductoCarro } from './ProductoCarro'
import { DivContenedor, StyledNo, Precio } from './styles'

export const VistaCarrito = () => {
    const { cantidadProductos } = useUser()
    const [precioTotal, setPrecioTotal] = useState()
    const newCarrito = window.localStorage.getItem('carritoCompras')
        ? JSON.parse(window.localStorage.getItem('carritoCompras'))
        : []

    let total = 0
    newCarrito.forEach(element => {
        total += element.total
    })
    useEffect(() => {
        total = 0
        newCarrito.forEach(element => {
            total += element.total
        })
        setPrecioTotal(total)
    }, [newCarrito])

    return (
        <>
            <NavbarUser />
            <DivContenedor>
                {newCarrito.length == 0 ? (
                    <StyledNo>{'Su carrito esta vacío :('}</StyledNo>
                ) : (
                    newCarrito.map(item => (
                        <ProductoCarro
                            key={item.id}
                            item={item}
                            arreglo={newCarrito}
                            precioTotal={precioTotal}
                            handlePrecioTotal={setPrecioTotal}
                        />
                    ))
                )}
                <Precio>Total {precioTotal} MXN</Precio>
            </DivContenedor>
        </>
    )
}
