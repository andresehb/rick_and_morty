import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;

export default function Login({ login }) {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    function validate(inputs) {
        const errors = {};
        if (!inputs.email) {
            errors.email = 'Enter an email address'
        } else if (!inputs.password) {
            errors.password = 'Enter a password'
        } else if (!regexEmail.test(inputs.email)) {
            errors.email = 'Enter a valid email address'
        } else if (!regexPassword.test(inputs.password)) {
            errors.password = 'Enter a valid password'
        }
        return errors;
    }

    function handleChange(event) {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
        setErrors(
            validate({
                ...inputs,
                [event.target.name]: event.target.value
            })
        )
    }

    function handleSubmit(event) {
        event.prevent.default()
        const aux = Object.keys(errors)

        if (aux.length === 0) {
            setInputs({
                email: '',
                password: ''
            })
            setErrors({
                email: '',
                password: ''
            })
            login(inputs)
        }
        return alert('Check your password and/or email')
    }

    return (
        <div className="login-wrapper">
            <div className="form-cont">
            <form onSubmit={handleSubmit}>
                <input className="login-input" name="email" value={inputs.email} onChange={handleChange} placeholder="Email"></input>
                <p className="err">{errors.email}</p>
                <input className="login-input" name="password" value={inputs.password} onChange={handleChange} placeholder="Password"></input>
                <p className="err">{errors.password}</p>
                {
                    Object.keys(errors).length === 0 ? (
                        <Link to='/home'>
                            <button className="login-button" type="submit">Log in</button>
                        </Link>
                    )
                    : null
                }
            </form>
            </div>
        </div>
    )
}