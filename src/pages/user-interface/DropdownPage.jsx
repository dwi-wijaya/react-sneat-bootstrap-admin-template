import React from 'react'

export const DropdownPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Dropdowns</h4>

            <div className="card mb-4" id="btn-dropdown-demo">
                <h5 className="card-header">Dropdowns</h5>

                {/* <!-- Basic Dropdowns --> */}
                <div className="card-body">
                    <small className="text-light fw-medium">Basic</small>
                    <div className="demo-inline-spacing">
                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Primary
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item disabled" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Secondary
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-success dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Success
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-danger dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Danger
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-warning dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Warning
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-info dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Info
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--/ Basic Dropdowns --> */}

                <hr className="m-0" />

                {/* <!-- Outline Dropdowns --> */}
                <div className="card-body">
                    <small className="text-light fw-medium">Outline</small>
                    <div className="demo-inline-spacing">
                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-outline-primary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Primary
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-outline-secondary dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Secondary
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-outline-success dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Success
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-outline-danger dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Danger
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-outline-warning dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Warning
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-outline-info dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Info
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--/ Basic Dropdowns --> */}
                <hr className="m-0" />
                {/* <!-- Split Dropdowns --> */}
                <div className="card-body">
                    <small className="text-light fw-medium">Split</small>
                    <div className="demo-inline-spacing">
                        <div className="btn-group">
                            <button aria-label='Click me' type="button" className="btn btn-primary">Primary</button>
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me' type="button" className="btn btn-secondary">Secondary</button>
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me' type="button" className="btn btn-success">Success</button>
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-success dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me' type="button" className="btn btn-danger">Danger</button>
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me' type="button" className="btn btn-warning">Warning</button>
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me' type="button" className="btn btn-info">Info</button>
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--/ Split Dropdowns --> */}

                <hr className="m-0" />

                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Hidden Arrow Dropdowns --> */}
                        <div className="col-lg-3 col-sm-6 col-12">
                            <small className="text-light fw-medium">Hidden arrow</small>
                            <div className="demo-inline-spacing">
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Hidden arrow
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Hidden Arrow Dropdowns --> */}
                        {/* <!-- Dropdown with icon --> */}
                        <div className="col-lg-3 col-sm-6 col-12">
                            <small className="text-light fw-medium">With Icon</small>
                            <div className="demo-inline-spacing">
                                <div className="btn-group" id="dropdown-icon-demo">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bx bx-menu me-1"></i> With Icon
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a aria-label="dropdown action link" href="#" className="dropdown-item d-flex align-items-center"
                                            ><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Action</a
                                            >
                                        </li>
                                        <li>
                                            <a aria-label="dropdown action link" href="#" className="dropdown-item d-flex align-items-center"
                                            ><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Another action</a
                                            >
                                        </li>
                                        <li>
                                            <a aria-label="dropdown action link" href="#" className="dropdown-item d-flex align-items-center"
                                            ><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Something else here</a
                                            >
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a aria-label="dropdown action link" href="#" className="dropdown-item d-flex align-items-center"
                                            ><i className="bx bx-chevron-right scaleX-n1-rtl"></i>Separated link</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Dropdown with icon --> */}
                        {/* <!-- Icon Dropdown --> */}
                        <div className="col-lg-3 col-sm-6 col-12">
                            <small className="text-light fw-medium">Icon Dropdown</small>
                            <div className="demo-inline-spacing">
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary btn-icon rounded-pill dropdown-toggle hide-arrow"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Icon Dropdown --> */}
                    </div>
                </div>
            </div>

            {/* <!--Dropdown Variations-- > */}
            <div className="card" id="dropdown-variation-demo">
                <h5 className="card-header">Dropdown Variations</h5>

                {/* <!-- Dropdown Menu Alignment --> */}
                <div className="card-body">
                    <small className="text-light fw-medium">Menu Alignment</small>
                    <div className="demo-inline-spacing">
                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary dropdown-toggle overflow-hidden d-sm-inline-flex d-block text-truncate"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                End-aligned dropdown menu
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Action</button></li>
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Another action</button></li>
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary dropdown-toggle overflow-hidden d-sm-inline-flex d-block text-truncate"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Start-aligned but end-aligned when lg screen
                            </button>
                            <ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end">
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Action</button></li>
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Another action</button></li>
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                        <div className="btn-group">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary dropdown-toggle overflow-hidden d-sm-inline-flex d-block text-truncate"
                                data-bs-toggle="dropdown"
                                data-bs-display="static"
                                aria-haspopup="true"
                                aria-expanded="false">
                                End-aligned but start-aligned when lg screen
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Action</button></li>
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Another action</button></li>
                                <li><button aria-label='Click me' className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--/ Dropdown Menu Alignment --> */}

                <hr className="m-0" />
                {/* <!-- Dropdown Sizes --> */}

                <div className="card-body">
                    <small className="text-light fw-medium">Sizes</small>
                    <div className="demo-inline-spacing">
                        <div className="btn-group">
                            <button aria-label='Click me'
                                className="btn btn-primary btn-xl dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Extra large button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                className="btn btn-primary btn-lg dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Large button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                className="btn btn-primary btn-sm dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Small button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        <div className="btn-group">
                            <button aria-label='Click me'
                                className="btn btn-primary btn-xs dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Extra small button
                            </button>
                            <ul className="dropdown-menu">
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--/ Dropdown Sizes --> */}

                <hr className="m-0" />
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Dropdown Directions --> */}
                        <div className="col-xl-6">
                            <small className="text-light fw-medium">Directions</small>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="demo-inline-spacing">
                                        <div className="btn-group">
                                            <button aria-label='Click me'
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Dropdown
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="demo-inline-spacing">
                                        <div className="btn-group dropup">
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                Dropup
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="demo-inline-spacing">
                                        <div className="btn-group dropend">
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false">
                                                Dropend
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="demo-inline-spacing">
                                        <div className="btn-group dropstart">
                                            <button aria-label='Click me'
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Dropstart
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Dropdown Directions --> */}
                        {/* <!-- Dropdown menu content --> */}
                        <div className="col-xl-6">
                            <small className="text-light fw-medium">Menu Content</small>
                            <div className="demo-inline-spacing">
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Dropdown Header
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <h6 className="dropdown-header text-uppercase">Dropdown header</h6>
                                        </li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Divider
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Text
                                    </button>
                                    <div className="dropdown-menu">
                                        <div className="px-3 py-2 text-muted">
                                            <p>Some example text that's free-flowing within the dropdown menu.</p>
                                            <p className="mb-0">And this is more example text.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        Forms
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end w-px-300">
                                        <form className="p-4" onSubmit={(e) => e.preventDefault()}>
                                            <div className="mb-3">
                                                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleDropdownFormEmail1"
                                                    placeholder="email@example.com" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleDropdownFormPassword1"
                                                    placeholder="Password" />
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                                    <label className="form-check-label" htmlFor="dropdownCheck"> Remember me </label>
                                                </div>
                                            </div>
                                            <button aria-label='Click me' type="button" className="btn btn-primary">Sign in</button>
                                        </form>
                                        <div className="dropdown-divider"></div>
                                        <a aria-label="dropdown action link" className="dropdown-item" href="#">New around here? Sign up</a>
                                        <a aria-label="dropdown action link" className="dropdown-item" href="#">Forgot password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Dropdown menu content --> */}
                    </div>
                </div>

                <hr className="m-0" />
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Dropdown options --> */}
                        <div className="col-xl-6">
                            <small className="text-light fw-medium"
                            >Options : Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the
                                location of the dropdown.</small
                            >
                            <div className="demo-inline-spacing">
                                <div className="btn-group me-1">
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        id="dropdownMenuOffset"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-bs-offset="10,20">
                                        Offset
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me' type="button" className="btn btn-primary">Reference</button>
                                    <button aria-label='Click me'
                                        type="button"
                                        className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                        id="dropdownMenuReference"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-bs-reference="parent">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Another action</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Something else here</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Dropdown options --> */}
                        {/* <!-- Auto close behavior --> */}
                        <div className="col-xl-6">
                            <small className="text-light fw-medium">Auto close behavior</small>
                            <div className="demo-inline-spacing">
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="defaultDropdown"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="true"
                                        aria-expanded="false">
                                        Default
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuClickableOutside"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="inside"
                                        aria-expanded="false">
                                        Clickable outside
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableOutside">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuClickableInside"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false">
                                        Clickable inside
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                                <div className="btn-group">
                                    <button aria-label='Click me'
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuClickable"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="false"
                                        aria-expanded="false">
                                        Manual close
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickable">
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                        <li><a aria-label="dropdown action link" className="dropdown-item" href="#">Menu item</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Auto close behavior --> */}
                    </div>
                </div>
            </div>
            {/* <!--/ Dropdown Variations --> */}
        </ >
    )
}
