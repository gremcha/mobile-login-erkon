import React, { useState } from 'react'

import { usePhoneContext } from '../context/PhoneContext'

import Logo from '../components/Logo'
import PhoneForm from '../components/PhoneForm'
import LoginButton from '../components/LoginButton'
import { useNavigate } from 'react-router-dom'

export default function LoginPhone() {
    const phoneContext = usePhoneContext()
    const [isPhoneValid, setIsPhoneValid] = useState(true)
    const navigate = useNavigate()
    const phoneValid = () => {
        if (phoneContext.phone.length === 17) {
            setIsPhoneValid(true)
            sessionStorage.setItem('phone', phoneContext.phone)
            navigate('/auth')
        } else {
            setIsPhoneValid(false)
        }
    }

    return (
        <div className="login-page">
            <div className="content">
                <Logo />
                <PhoneForm isValid={isPhoneValid} setValid={setIsPhoneValid} />
            </div>
            <LoginButton onClick={phoneValid} />
        </div>
    )
}
