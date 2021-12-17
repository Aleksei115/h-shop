var axios = require('axios')

export const postSignUp = (nombre, apellido, fechaNacimiento, genero, email, password) => {
    const r = nombre == 'aleksei' ? 'ADMIN' : 'CUSTOMER'

    let data = {
        first_name: nombre,
        last_name: apellido,
        birth_date: fechaNacimiento,
        gender: genero,
        email: email,
        password: password,
        role: r,
    }
    console.log(data)
    // const dataJ = JSON.stringify(data)

    var config = {
        method: 'post',
        url: `${encodeURI('https://ecomerce-master.herokuapp.com/api/v1/signup')}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    }

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response))
            return JSON.stringify(response)
        })
        .catch(function (error) {
            console.log(error)
            return null
        })
}
