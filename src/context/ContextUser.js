import React, { useState, createContext } from 'react'

const Context = createContext({})

export function UserContextProvider({ children }) {
    const [jwt, setJWT] = useState(window.localStorage.getItem('jwt') ? window.localStorage.getItem('jwt') : null)
    const [role, setRole] = useState(window.localStorage.getItem('role') ? window.localStorage.getItem('role') : false)
    const [emailUser, setEmailUser] = useState(
        window.localStorage.getItem('email') ? window.localStorage.getItem('email') : false
    )
    const [carritoCompras, setCarritoCompras] = useState(
        window.localStorage.getItem('carritoCompras') ? JSON.parse(window.localStorage.getItem('carritoCompras')) : []
    )
    const [cantidadProductos, setCantidadProductos] = useState(
        window.localStorage.getItem('cantidadProductos')
            ? parseInt(window.localStorage.getItem('cantidadProductos'))
            : 0
    )
    return (
        <Context.Provider
            value={{
                jwt,
                carritoCompras,
                cantidadProductos,
                role,
                emailUser,
                setEmailUser,
                setRole,
                setCantidadProductos,
                setCarritoCompras,
                setJWT,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context
