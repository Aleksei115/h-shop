import { useEffect, useState } from 'react'
import getProductos from '../helpers/getProductos'

export const useFetchProductos = () => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getProductos().then(response => {
            setState({ data: response, loading: false })
        })
    }, [])

    return state
}
