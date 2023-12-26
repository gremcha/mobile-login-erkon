import React from 'react'
import '../styles/style.css'

interface LoginButtonInterface {
    onClick?: () => void
}

export default function LoginButton(props: LoginButtonInterface) {
    return (
        <button className="login-button" onClick={props.onClick}>
            Войти
        </button>
    )
}
