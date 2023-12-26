import React, { useEffect, useState } from 'react'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import { FormContextProvider } from './context/PhoneContext'
import LoginPhone from './pages/LoginPhone'
import LoginCode from './pages/LoginCode'

const router = createHashRouter([
    {
        path: '/',
        element: <LoginPhone />,
    },
    { path: '/auth', element: <LoginCode /> },
])
function App() {
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const resizeChangeHandler = () => {
        const height = window.visualViewport?.height || 0
        const value = height - 4 * 16
        document
            .querySelector<HTMLElement>(':root')
            ?.style.setProperty('--bottom-position', value.toString() + 'px')

        setViewportHeight(height)
    }

    useEffect(() => {
        if (window.visualViewport) {
            window.visualViewport.addEventListener(
                'resize',
                resizeChangeHandler
            )
        }
        return () => {
            window.visualViewport?.removeEventListener(
                'resize',
                resizeChangeHandler
            )
        }
    }, [])
    return (
        <FormContextProvider>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </FormContextProvider>
    )
}

export default App
