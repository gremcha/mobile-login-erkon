import React from 'react'

import '../styles/style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    src={process.env.PUBLIC_URL + '/left_arrow_black_20.svg'}
                />
            </Link>
            <span>Вход по коду</span>
            <img
                src={process.env.PUBLIC_URL + '/left_arrow_black_20.svg'}
                className="hide-arrow"
            />
        </div>
    )
}
