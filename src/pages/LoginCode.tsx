import React, { useState } from 'react'

import Header from '../components/Header'
import LoginButton from '../components/LoginButton'
import CodeForm from '../components/CodeForm'
import { useNavigate } from 'react-router-dom'

export default function LoginCode() {
    const [code, setCode] = useState('')
    const [isCodeValid, setIsCodeValid] = useState(true)
    const navigate = useNavigate()
    const codeValid = () => {
        if (code.length === 4) {
            setIsCodeValid(true)
            navigate('/page')
        } else {
            setIsCodeValid(false)
        }
    }
    return (
        <div className="login-page">
            <div className="content">
                <Header />
                <CodeForm
                    code={code}
                    setCode={setCode}
                    isValid={isCodeValid}
                    setValid={setIsCodeValid}
                />
            </div>
            <LoginButton onClick={codeValid} />
        </div>
    )
}
