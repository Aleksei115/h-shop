import { useEffect, useState } from 'react'
import getUsuario from '../helpers/getUsuario'

export const useGetUsuario = () => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        getUsuario(category).then(response => {
            setState({ data: response, loading: false })
        })
    }, [category])

    return state //{ data , loading}
}
