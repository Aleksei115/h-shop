import React, { useEffect, useState } from 'react'
import { useUser } from '../../hooks/useUser'
import NavbarUser from '../nav/Navbar'
import {
    DivContenedor,
    DivContenedorImg,
    ContenedorInfo,
    StyledH3,
    StyledH5,
    StyledDescription,
    Precio,
    Button,
} from './styles'

export const VistaUsuario = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])
    const [loading, setLoading] = useState(true)
    const [usuarioLog, setUsuarioLog] = useState(null)
    const { jwt, emailUser } = useUser()
    useEffect(() => {
        let axios = require('axios')
        var data = JSON.stringify({})

        var config = {
            method: 'get',
            url: 'https://ecomerce-master.herokuapp.com/api/v1/user',
            headers: {
                Authorization:
                    'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmE4ZmIwNmM5ZDc0MDAxN2JjYTg0ZCIsInJvbGUiOiJDVVNUT01FUiIsImV4cCI6MTYzOTcwMjg0NCwiaWF0IjoxNjM5NjE2NDQ0fQ.2YvBh3VxNQpjNwM35z4ox7zTkFFGHP1j-4qsNN_yR9s',
                JWT: `${jwt}`,
            },
            data: data,
        }

        axios(config)
            .then(function (response) {
                let aux = response.data.find(user => user.email == emailUser)
                setUsuarioLog(aux)
            })
            .catch(function (error) {
                setUsuarioLog(null)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ? (
                <p>Cargando</p>
            ) : (
                <>
                    <NavbarUser />
                    <DivContenedor>
                        {/* <DivContenedorImg
                            url={
                                usuarioLog.image
                                    ? usuarioLog.image
                                    : 'https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200008/91087328-icono-de-perfil-de-avatar-predeterminado-para-mujer-marcador-de-posici%C3%B3n-de-foto-gris-vector-de-ilus.jpg?ver=6'
                            }
                        ></DivContenedorImg> */}
                        <ContenedorInfo>
                            <StyledH3>
                                {usuarioLog.first_name} {usuarioLog.last_name}
                            </StyledH3>
                            <StyledH5>Email : {usuarioLog.email}</StyledH5>
                            <StyledH5>Role : {usuarioLog.role}</StyledH5>
                        </ContenedorInfo>
                    </DivContenedor>
                </>
            )}
        </>
    )
}
