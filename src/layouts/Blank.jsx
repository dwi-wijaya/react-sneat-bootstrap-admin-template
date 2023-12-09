import React from 'react'
import { Link } from 'react-router-dom'

export const Blank = ({ children }) => {
    return (
        <>
            <Link aria-label='Go to Home Page' to="/">
                {children}
            </Link>
        </>
    )
}
