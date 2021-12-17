import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, StyledForm, StyledLabel, StyledControl, StyledGroup, TituloPagina, StyledDatePicker } from './styles'
import NavbarUser from '../nav/Navbar'

const NameSchema = yup.object().shape({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
})

const RegistrarUsuario = () => {
    const [alert, setAlert] = useState('')
    const [err, setErr] = useState(false)
    const [date, setDate] = useState(new Date())
    const [genero, setGenero] = useState('')

    let r = undefined
    // const formatDate = date => {
    //     let formatted_date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    //     return formatted_date
    // }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(NameSchema),
    })

    const handleSignUp = ({ first_name, last_name, email, password }) => {
        const r = first_name == 'aleksei' ? 'ADMIN' : 'CUSTOMER'
        const data = JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            role: r,
        })
        console.log(data)
        const config = {
            method: 'post',
            url: 'https://ecomerce-master.herokuapp.com/api/v1/signup',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        }

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data))
                setAlert('Te has registrado con exito')
            })
            .catch(function (error) {
                console.log(error.response.data.message)
                setAlert(error.response.data.message)
            })
    }
    return (
        <>
            <NavbarUser />
            <TituloPagina>Registrarse</TituloPagina>
            <StyledForm className="signup" onSubmit={handleSubmit(handleSignUp)}>
                <StyledGroup className="mb-3" controlId="formAlert">
                    <Alert key="warning-alert-1" variant="danger">
                        {alert}
                    </Alert>
                </StyledGroup>
                <StyledGroup className="mb-3" controlId="formNombre">
                    <StyledLabel>Nombre</StyledLabel>
                    <StyledControl type="text" placeholder="Introduce tu nombre" {...register('first_name')} />
                </StyledGroup>
                <StyledGroup className="mb-3" controlId="formBasicApellido">
                    <StyledLabel>Apellido</StyledLabel>
                    <StyledControl type="text" placeholder="Introduce tu apellido" {...register('last_name')} />
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

                {/* <StyledGroup className="mb-3" controlId="formFecha">
                    <StyledLabel>Fecha nacimiento</StyledLabel>
                    <StyledDatePicker
                        selected={date}
                        onChange={date => {
                            setDate(date)
                        }}
                        {...register('birth_day')}
                    />
                    <Form.Text className="text-muted">La fecha esta en formato Mes/dia/año</Form.Text>
                </StyledGroup>
                <StyledGroup className="mb-3" controlId="formGenero">
                    <StyledLabel>Genero</StyledLabel>
                    <div key={`inline-${'radio'}`} className="mb-3">
                        <Form.Select className="me-sm-2" id="inlineFormCustomSelect" {...register('gender')}>
                            <option value="0">Choose...</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </Form.Select>
                    </div>
                </StyledGroup> */}

                <Button type="submit">Sign Up</Button>
            </StyledForm>
        </>
    )
}

export default RegistrarUsuario
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useUser } from '../../hooks/useUser'
// import Form from 'react-bootstrap/Form'
// import Alert from 'react-bootstrap/Alert'
// import { postSignUp } from '../../helpers/postSignUp'

// const RegistrarUsuario = () => {
//     let navigate = useNavigate()
//     const { isLoading, hasError, isLogged, signUp } = useUser()
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [nombre, setNombre] = useState('')
//     const [apellido, setApellido] = useState('')
//     const [fechaNacimiento, setFechaNacimiento] = useState()
// const [date, setDate] = useState(new Date())
// const [genero, setGenero] = useState('')
// const [err, setErr] = useState(false)
// let r = undefined
// const formatDate = date => {
//     let formatted_date = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
//     return formatted_date
// }

//     useEffect(() => {
//         setTimeout(() => {
//             setErr(false)
//         }, 3000)
//     }, [err])

//     const handleSubmit = e => {
//         e.preventDefault()

//         let aux = new Date(date)
//         setFechaNacimiento(formatDate(aux))
//         r = postSignUp(nombre, apellido, fechaNacimiento, genero, email, password)
//         if (r == null) setErr(true)
//         else navigate('/')
//     }

//     return (
//         <>

//                 <Button>Submit</Button>
//             </StyledForm>
//         </>
//     )
// }

// export default RegistrarUsuario
