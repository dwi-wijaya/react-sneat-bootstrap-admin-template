import React from 'react'
import { Link } from 'react-router-dom'
import './page-misc.css'
export const ErrorPage = () => {
    return (
        <>
            <div className="misc-wrapper">
                <h2 className="mb-2 mx-2">Page Not Found :(</h2>
                <p className="mb-4 mx-2">Oops! 😖 The requested URL was not found on this server.</p>
                <Link aria-label='Go to Home Page' to="/" className="btn btn-primary">Back to home</Link>
                <div className="mt-3">
                    <img
                        src="../assets/img/illustrations/page-misc-error-light.png"
                        alt="page-misc-error-light"
                        aria-label="page misc error light"
                        width="500"
                        className="img-fluid"
                        data-app-dark-img="illustrations/page-misc-error-dark.png"
                        data-app-light-img="illustrations/page-misc-error-light.png" />
                </div>
            </div>
        </>
    )
}
