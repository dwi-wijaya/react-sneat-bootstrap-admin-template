import React from 'react'
import { Link } from 'react-router-dom'

export const Blank = ({ children }) => {
    return (
        <>
            <Link to="/">
                <h4 className="p-4">Blank Page</h4>
            </Link>
        </>
    )
}
