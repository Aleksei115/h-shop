import ContextProductos from '../context/ContextProductos'
import { useCallback, useContext, useEffect, useState } from 'react'
import getProductos from '../helpers/getProductos'

export function useProductos() {
    const { listaProductos, setListaProductos } = useContext(ContextProductos)

    useEffect(() => {
        getProductos().then(response => {
            setListaProductos({ data: response, loading: false })
        })
    }, [setListaProductos])

    return { listaP: Boolean(listaProductos), l: listaProductos }
}
