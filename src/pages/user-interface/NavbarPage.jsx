import React from 'react'

export const NavbarPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Navbar</h4>

            {/* <!-- Basic --> */}
            <h5 className="pb-1 mt-5 mb-4">Example</h5>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container-fluid">
                    <a aria-label="navbar link" className="navbar-brand" href="#">Navbar</a>
                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a aria-label="navbar dropdown link" className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a aria-label="navbar dropdown link" className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-label="navbar dropdown link"
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a aria-label="navbar dropdown link" className="dropdown-item" href="#">Action</a></li>
                                    <li><a aria-label="navbar dropdown link" className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a aria-label="navbar dropdown link" className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a aria-label="navbar dropdown link" className="nav-link disabled" href="#" tabIndex="-1">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button aria-label='Click me' className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* <!--/ Basic --> */}

            {/* <!-- Supported content --> */}
            <h5 className="pb-1 mb-4">Supported content</h5>
            <div className="mb-5">
                <h6 className="mt-2 mb-3 text-muted">Text</h6>
                <nav className="navbar navbar-example navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a aria-label="navbar link" className="navbar-brand" href="#">Navbar</a>
                        <button 
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-ex-2"
                            aria-controls="navbar-ex-2"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar-ex-2">
                            <div className="navbar-nav me-auto">
                                <a aria-label="navbar link" className="nav-item nav-link active" href="#">Home</a>
                                <a aria-label="navbar link" className="nav-item nav-link" href="#">About</a>
                                <a aria-label="navbar link" className="nav-item nav-link" href="#">Contact</a>
                            </div>

                            <span className="navbar-text">Marshmallow brownie lemon drops cheesecake.</span>
                        </div>
                    </div>
                </nav>

                <h6 className="mt-4 mb-3 text-muted">Input Group</h6>
                <nav className="navbar navbar-example navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a aria-label="navbar link" className="navbar-brand" href="#">Navbar</a>
                        <button aria-label='Click me'
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-ex-4">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-ex-4">
                            <div className="navbar-nav me-auto">
                                <a aria-label="navbar link" className="nav-item nav-link active" href="#">Home</a>
                                <a aria-label="navbar link" className="nav-item nav-link" href="#">About</a>
                                <a aria-label="navbar link" className="nav-item nav-link" href="#">Contact</a>
                            </div>

                            <form className="d-flex">
                                <div className="input-group">
                                    <span className="input-group-text"><i className="tf-icons bx bx-search"></i></span>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>

                <h6 className="mt-4 mb-3 text-muted">Button</h6>
                <nav className="navbar navbar-example navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a aria-label="navbar link" className="navbar-brand" href="#">Navbar</a>
                        <button aria-label='Click me'
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbar-ex-3">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-ex-3">
                            <div className="navbar-nav me-auto">
                                <a aria-label="navbar link" className="nav-item nav-link active" href="#">Home</a>
                                <a aria-label="navbar link" className="nav-item nav-link" href="#">About</a>
                                <a aria-label="navbar link" className="nav-item nav-link" href="#">Contact</a>
                            </div>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button">Buy Now</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!--/ Supported content --> */}
        </>
    )
}
