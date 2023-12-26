import React, { useState } from 'react'

import Header from '../components/Header'
import LoginButton from '../components/LoginButton'
import CodeForm from '../components/CodeForm'

export default function LoginCode() {
    const [code, setCode] = useState('')
    const [isCodeValid, setIsCodeValid] = useState(true)
    const codeValid = () => {
        if (code.length === 4) {
            setIsCodeValid(true)
        } else {
            setIsCodeValid(false)
        }
        console.log('work')
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
