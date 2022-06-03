import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './login.css'

const contant = {
    email: "",
    password: ""
}
const credentials = {
    email: "sweta.sagar@gmail.com",
    password: "123456"
}

function Login() {

    const [store, setStore] = useState(contant)
    const [check] = useState(credentials)
    console.log(store);

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        setStore({
            ...store,
            [name]: value
        })
    }

    const handleLogin = () => {
        checkCredential()
    }

    const checkCredential = () => {
        if (check.email === store.email && check.password === store.password)
            window.alert("login successfully...")
        else
            window.alert("failed...")

        setStore(contant)
    }
    return (
        <div className='login'>
            <div className='heading'>
                <Typography variant="h2">login</Typography>
            </div>
            <div className='inputBox1'>
                <TextField variant='outlined' label="E-mail" color="secondary"
                    name="email"
                    value={store.email}
                    onChange={handleChange}
                />
            </div>
            <div className='inputBox2'>
                <TextField variant='outlined' label="Password" color="secondary"
                    name="password"
                    value={store.password}
                    onChange={handleChange}
                />

            </div>
            <div className='btn'>
                <Button variant="outlined" onClick={handleLogin}>login</Button>

            </div>
        </div>
    )
}

export default Login
