import React from 'react'
var axios = require('axios')

export const postLogin = async (email, password) => {
    var data = JSON.stringify({
        email: email,
        password: password,
    })
    var config = {
        method: 'post',
        url: 'https://ecomerce-master.herokuapp.com/api/v1/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    }
    try {
        const response = await axios(config)
        const dataUser = response.data
        return dataUser
    } catch (error) {
        return { token: null, role: null }
    }
}
