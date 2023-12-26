import React, { useEffect, useState } from 'react'
import IMask from 'imask'
import '../styles/style.css'

import { usePhoneContext } from '../context/PhoneContext'

import Timer from './Timer'

interface EnterCodeInterface {
    code: string
    setCode: React.Dispatch<React.SetStateAction<string>>
    isValid: boolean
    setValid: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CodeForm(props: EnterCodeInterface) {
    const phoneContext = usePhoneContext()
    useEffect(() => {
        const codeInput = document.getElementsByClassName(
            'code-input'
        )[0] as HTMLElement
        codeInput.focus()
    }, [])
    const codeValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value

        value = value.replace(/\D/, '')
        props.setCode(value)
    }
    const phoneDigits = phoneContext.phone.match(/\d*/g)?.join('') || ''

    const mask = IMask.createMask({
        mask: '+7 000 0000000',
    })
    mask.resolve(phoneDigits)

    return (
        <div className="data-entry">
            <span className="label-enter">
                Введите код, отправленный на номер
                <br />
                {mask.value}
            </span>
            <div className="nums">
                {new Array(4).fill(0).map((value, index) => (
                    <div
                        key={index}
                        className={
                            props.isValid
                                ? 'code-input-block'
                                : 'code-input-block invalid'
                        }
                    >
                        {props.code[index]}
                    </div>
                ))}
                <input
                    className="code-input"
                    type="tel"
                    maxLength={4}
                    value={props.code}
                    onChange={(e) => codeValidation(e)}
                    onClick={() => props.setValid(true)}
                />
            </div>
            <Timer />
        </div>
    )
}
