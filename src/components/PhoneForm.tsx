import React, { useEffect, useState } from 'react'
import IMask from 'imask'

import '../styles/style.css'

import { usePhoneContext } from '../context/PhoneContext'

interface PhoneFormInterface {
    isValid: boolean
    setValid: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PhoneForm(props: PhoneFormInterface) {
    const phoneContext = usePhoneContext()
    const formatPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        const mask = IMask.createMask({
            mask: '+7 (000)000-00-00',
        })
        mask.resolve(value)
        phoneContext.setPhone(mask.value)
    }
    return (
        <div className="data-entry">
            <span className="label-enter phone">Телефон для входа</span>

            <input
                className={
                    props.isValid ? 'phone-input' : 'phone-input invalid'
                }
                type="tel"
                maxLength={17}
                value={phoneContext.phone}
                onChange={(e) => formatPhone(e)}
                onClick={() => props.setValid(true)}
            />
        </div>
    )
}
