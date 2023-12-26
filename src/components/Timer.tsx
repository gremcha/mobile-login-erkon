import React, { useEffect, useState } from 'react'

function numberFormat(value: number) {
    return ('00' + value).slice(-2)
}

function getSeconds(value: number) {
    return numberFormat(Math.floor(value % 60))
}

function getMinutes(value: number) {
    return numberFormat(Math.floor(value / 60))
}

function getTime(value: number) {
    return `${getMinutes(value)}:${getSeconds(value)}`
}

export default function Timer() {
    const timerDuration = 10
    const [time, setTime] = useState(getTime(timerDuration))
    const [targetTime, setTargetTime] = useState(
        Date.now() + 1000 * timerDuration
    )
    const [isProcessRun, setProcessRun] = useState(true)
    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = Date.now()
            const delta = (targetTime - currentTime) / 1000 + 1
            if (delta < 1) {
                clearInterval(timer)
                setProcessRun(false)
            } else {
                setTime(getTime(delta))
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [isProcessRun])
    const createTimer = () => {
        if (!isProcessRun) {
            setTime(getTime(timerDuration))
            setTargetTime(Date.now() + 1000 * timerDuration)
            setProcessRun(true)
        }
    }
    return (
        <div
            className={isProcessRun ? 'timer' : 'timer is-up'}
            onClick={createTimer}
        >
            Отправить ещё раз {isProcessRun && `через: ${time}`}
        </div>
    )
}
