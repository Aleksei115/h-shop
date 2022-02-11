import Context from '../context/ContextUser'
import { useCallback, useContext, useEffect, useState } from 'react'
import { postLogin } from '../helpers/postLogin'
import { postSignUp } from '../helpers/postSignUp'

export function useUser() {
    const {
        jwt,
        setJWT,
        carritoCompras,
        setCarritoCompras,
        cantidadProductos,
        setCantidadProductos,
        role,
        setRole,
        emailUser,
        setEmailUser,
    } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false })

    const login = useCallback(
        ({ email, password }) => {
            setState({ loading: true, error: false })
            postLogin(email, password)
                .then(response => {
                    JSON.stringify(window.localStorage.setItem('jwt', response.token))
                    JSON.stringify(window.localStorage.setItem('role', response.role))
                    JSON.stringify(window.localStorage.setItem('email', email))
                    setState({ loading: false, error: false })
                    setJWT(response.token)
                    setRole(response.token)
                })
                .catch(err => {
                    window.localStorage.removeItem('jwt')
                    window.localStorage.removeItem('role')
                    window.localStorage.removeItem('email')
                    setState({ loading: false, error: true })
                })
        },
        [setJWT]
    )
    const signUp = (nombre, apellido, fechaNacimiento, genero, email, password) => {
        const response = postSignUp(nombre, apellido, fechaNacimiento, genero, email, password)
        return response
    }

    const agregarAlCarro = useCallback(
        (id, cantidad, precio, img, title) => {
            let isThere = false
            let aux = {
                id: id,
                title: title,
                img: img,
                cantidad: cantidad,
                precio: precio,
                total: precio,
            }

            if (carritoCompras.length == 0) setCarritoCompras([aux])
            else {
                carritoCompras.forEach(element => {
                    if (element.id === id) {
                        element.cantidad += 1
                        element.total = element.cantidad * element.precio
                        isThere = true
                    }
                })
                if (!isThere) {
                    setCarritoCompras(items => {
                        return [aux, ...items]
                    })
                }
            }

            window.localStorage.setItem(
                'carritoCompras',
                carritoCompras.length == 0 ? JSON.stringify([aux]) : JSON.stringify(carritoCompras)
            )
        },
        [carritoCompras]
    )

    const cambiarItem = useCallback(
        (id, cantidad, precio, img, title) => {
            let aux = null
            let found = null
            let isPossible = cantidad > 1 ? true : false
            let tempCarrito = []
            if (carritoCompras.length > 0) {
                aux = {
                    id: id,
                    title: title,
                    img: img,
                    cantidad: cantidad,
                    precio: precio,
                    total: cantidad * precio,
                }
                for (let i = 0; i < carritoCompras.length; i++) {
                    if (carritoCompras[i].id == id) found = i
                }
                console.log(`Carro `)
                console.log([...carritoCompras])
                tempCarrito = [...carritoCompras]
                if (cantidad == 0) tempCarrito.splice(found, 1)
                else tempCarrito[found] = aux

                setCarritoCompras(tempCarrito)
            }
            setCantidadProductos(cantidadProductos - 1)
            window.localStorage.setItem('cantidadProductos', cantidadProductos - 1)
            window.localStorage.setItem('carritoCompras', carritoCompras.length == 0 ? [] : JSON.stringify(tempCarrito))
        },
        [carritoCompras]
    )

    const agregarCantidad = useCallback(() => {
        setCantidadProductos(cantidadProductos + 1)
        window.localStorage.setItem('cantidadProductos', cantidadProductos + 1)
    }, [cantidadProductos])

    const logout = useCallback(() => {
        window.localStorage.removeItem('jwt')
        window.localStorage.removeItem('role')
        window.localStorage.removeItem('cantidadProductos')
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('carritoCompras')
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt) && jwt != null,
        isLoading: state.loading,
        hasError: state.error,
        carritoCompras: carritoCompras,
        cantidadProductos: cantidadProductos,
        setCarritoCompras,
        setCantidadProductos,
        role,
        emailUser,
        setEmailUser,
        setRole,
        signUp,
        cambiarItem,
        agregarCantidad,
        agregarAlCarro,
        login,
        logout,
    }
}
