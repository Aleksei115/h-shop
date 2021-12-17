import React from 'react'

const ContextProductos = React.createContext()

export function ProductosContextProvider({ children }) {
    const [listaProductos, setListaProductos] = React.useState({ data: [], loading: true })
    return (
        <ContextProductos.Provider value={{ listaProductos, setListaProductos }}>{children}</ContextProductos.Provider>
    )
}

export default ContextProductos
