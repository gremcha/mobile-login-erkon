import React, { Dispatch, useContext, useState } from 'react'

interface PhoneContextInterface {
    phone: string
    setPhone: React.Dispatch<React.SetStateAction<string>>
}

const PhoneContext = React.createContext({} as PhoneContextInterface)

export function FormContextProvider(props: {
    children: JSX.Element | JSX.Element[]
}) {
    const [phone, setPhone] = useState(sessionStorage.getItem('phone') || '+7 ')

    return (
        <PhoneContext.Provider value={{ phone: phone, setPhone: setPhone }}>
            {props.children}
        </PhoneContext.Provider>
    )
}

export const usePhoneContext = () => useContext(PhoneContext)
