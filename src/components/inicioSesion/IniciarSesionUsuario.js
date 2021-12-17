import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import { Button, StyledForm, StyledLabel, StyledControl, StyledGroup, TituloPagina } from './styles'
import Form from 'react-bootstrap/Form'
import NavbarUser from '../nav/Navbar'
import Alert from 'react-bootstrap/Alert'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'

const NameSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
})

const IniciarSesionUsuario = () => {
    const [alert, setAlert] = useState('')
    let navigate = useNavigate()
    const { isLoading, hasError, isLogged, login } = useUser()

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(NameSchema),
    })

    const handleSignUp = ({ email, password }) => {
        const s = login({ email, password })
        // if (s.error == true) setAlert('Hubo un error')
    }
    return (
        <>
            <NavbarUser />
            <TituloPagina>Iniciar Sesión</TituloPagina>
            <StyledForm className="signup" onSubmit={handleSubmit(handleSignUp)}>
                <StyledGroup className="mb-3" controlId="formAlert">
                    <Alert key="warning-alert-1" variant="danger">
                        {alert}
                    </Alert>
                </StyledGroup>
                <StyledGroup className="mb-3" controlId="formBasicEmail">
                    <StyledLabel>Email</StyledLabel>
                    <StyledControl type="email" placeholder="Introduce tu correo" {...register('email')} />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </StyledGroup>
                <StyledGroup className="mb-3" controlId="formBasicPassword">
                    <StyledLabel>Password</StyledLabel>
                    <StyledControl type="password" placeholder="Introduce tu contraseña" {...register('password')} />
                </StyledGroup>
                <Button type="submit">Iniciar Sesion</Button>
            </StyledForm>
        </>
    )
}

export default IniciarSesionUsuario

// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

// const handleSubmit = e => {
//     e.preventDefault()
//     login({ email, password })
// }
// return (
//     <>
//         <NavbarUser />
//         <TituloPagina>Iniciar Sesión</TituloPagina>
//         <StyledForm onSubmit={handleSubmit}>
//             <StyledGroup className="mb-3" controlId="formBasicEmail">
//                 <StyledLabel>Email address</StyledLabel>
//                 <StyledControl
//                     type="email"
//                     placeholder="Enter email"
//                     onChange={e => {
//                         setEmail(e.target.value)
//                     }}
//                     value={email}
//                 />
//                 <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
//             </StyledGroup>
//             <StyledGroup className="mb-3" controlId="formBasicPassword">
//                 <StyledLabel>Password</StyledLabel>
//                 <StyledControl
//                     type="password"
//                     placeholder="Password"
//                     onChange={e => {
//                         setPassword(e.target.value)
//                     }}
//                     value={password}
//                 />
//             </StyledGroup>

//             <Button>Submit</Button>
//         </StyledForm>
//     </>
// )
