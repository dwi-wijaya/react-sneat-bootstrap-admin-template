import React from 'react'

export const ModalPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Modals</h4>

            {/* <!-- Bootstrap modals --> */}
            <div className="card mb-4">
                <h5 className="card-header">Bootstrap modals</h5>
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Default Modal --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">Default</small>
                            <div className="mt-3">
                                {/* <!-- Button trigger modal --> */}
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#basicModal">
                                    Launch modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="basicModal" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel1">Modal title</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <label htmlFor="nameBasic" className="form-label">Name</label>
                                                        <input type="text" id="nameBasic" className="form-control" placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="col mb-0">
                                                        <label htmlFor="emailBasic" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            id="emailBasic"
                                                            className="form-control"
                                                            placeholder="xxxx@xxx.xx" />
                                                    </div>
                                                    <div className="col mb-0">
                                                        <label htmlFor="dobBasic" className="form-label">DOB</label>
                                                        <input type="date" id="dobBasic" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Vertically Centered Modal --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">Vertically centered</small>
                            <div className="mt-3">
                                {/* <!-- Button trigger modal --> */}
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalCenter">
                                    Launch modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="modalCenter" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="modalCenterTitle">Modal title</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <label htmlFor="nameWithTitle" className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            id="nameWithTitle"
                                                            className="form-control"
                                                            placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="col mb-0">
                                                        <label htmlFor="emailWithTitle" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            id="emailWithTitle"
                                                            className="form-control"
                                                            placeholder="xxxx@xxx.xx" />
                                                    </div>
                                                    <div className="col mb-0">
                                                        <label htmlFor="dobWithTitle" className="form-label">DOB</label>
                                                        <input type="date" id="dobWithTitle" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Slide from Top Modal --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">Slide from Top</small>
                            <div className="mt-3">
                                {/* <!-- Button trigger modal --> */}
                                <button aria-label='Click me' type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTop">
                                    Launch modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal modal-top fade" id="modalTop" tabIndex="-1">
                                    <div className="modal-dialog">
                                        <form className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="modalTopTitle">Modal title</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <label htmlFor="nameSlideTop" className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            id="nameSlideTop"
                                                            className="form-control"
                                                            placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="col mb-0">
                                                        <label htmlFor="emailSlideTop" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            id="emailSlideTop"
                                                            className="form-control"
                                                            placeholder="xxxx@xxx.xx" />
                                                    </div>
                                                    <div className="col mb-0">
                                                        <label htmlFor="dobSlideTop" className="form-label">DOB</label>
                                                        <input type="date" id="dobSlideTop" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button aria-label='Click me' type="button" className="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Modal with YouTube Video --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">YouTube Video</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#youTubeModal"
                                    >
                                    Launch modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="youTubeModal" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <iframe height="350" src="https://www.youtube.com/embed/EngW7tLk6R8"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Toggle Between Modals --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">Toggle Between Modals</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalToggle">
                                    Launch modal
                                </button>

                                {/* <!-- Modal 1--> */}
                                <div
                                    className="modal fade"
                                    id="modalToggle"
                                    aria-labelledby="modalToggleLabel"
                                    tabIndex="-1"
                                    style={{display: "none"}}
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="modalToggleLabel">Modal 1</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">Show a second modal and hide this one with the button below.</div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me'
                                                    className="btn btn-primary"
                                                    data-bs-target="#modalToggle2"
                                                    data-bs-toggle="modal"
                                                    data-bs-dismiss="modal">
                                                    Open second modal
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Modal 2--> */}
                                <div
                                    className="modal fade"
                                    id="modalToggle2"
                                    aria-hidden="true"
                                    aria-labelledby="modalToggleLabel2"
                                    tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="modalToggleLabel2">Modal 2</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">Hide this modal and show the first with the button below.</div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me'
                                                    className="btn btn-primary"
                                                    data-bs-target="#modalToggle"
                                                    data-bs-toggle="modal"
                                                    data-bs-dismiss="modal">
                                                    Back to first
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Fullscreen Modal --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">Fullscreen</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#fullscreenModal">
                                    Launch modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="fullscreenModal" tabIndex="-1" aria-hidden="true">
                                    <div className="modal-dialog modal-fullscreen" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="modalFullTitle">Modal title</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                                    at eros.
                                                </p>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                </p>
                                                <p>
                                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                    auctor fringilla.
                                                </p>
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                                    at eros.
                                                </p>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                </p>
                                                <p>
                                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                    auctor fringilla.
                                                </p>
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                                    at eros.
                                                </p>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                </p>
                                                <p>
                                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                    auctor fringilla.
                                                </p>
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                                    at eros.
                                                </p>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                </p>
                                                <p>
                                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                    auctor fringilla.
                                                </p>
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                                    at eros.
                                                </p>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                </p>
                                                <p>
                                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                    auctor fringilla.
                                                </p>
                                                <p>
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                                                    facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                                                    at eros.
                                                </p>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                    lacus vel augue laoreet rutrum faucibus dolor auctor.
                                                </p>
                                                <p>
                                                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                    scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                    auctor fringilla.
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Modal Sizes --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium">Sizes</small>
                            {/* <!-- Small Modal --> */}
                            <div className="modal fade" id="smallModal" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-sm" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col mb-3">
                                                    <label htmlFor="nameSmall" className="form-label">Name</label>
                                                    <input type="text" id="nameSmall" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col mb-0">
                                                    <label className="form-label" htmlFor="emailSmall">Email</label>
                                                    <input type="email" className="form-control" id="emailSmall" placeholder="xxxx@xxx.xx" />
                                                </div>
                                                <div className="col mb-0">
                                                    <label htmlFor="dobSmall" className="form-label">DOB</label>
                                                    <input id="dobSmall" type="date" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Large Modal --> */}
                            <div className="modal fade" id="largeModal" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel3">Modal title</h5>
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col mb-3">
                                                    <label htmlFor="nameLarge" className="form-label">Name</label>
                                                    <input type="text" id="nameLarge" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col mb-0">
                                                    <label htmlFor="emailLarge" className="form-label">Email</label>
                                                    <input type="email" id="emailLarge" className="form-control" placeholder="xxxx@xxx.xx" />
                                                </div>
                                                <div className="col mb-0">
                                                    <label htmlFor="dobLarge" className="form-label">DOB</label>
                                                    <input type="date" id="dobLarge" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Extra Large Modal --> */}
                            <div className="modal fade" id="exLargeModal" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-xl" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel4">Modal title</h5>
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col mb-3">
                                                    <label htmlFor="nameExLarge" className="form-label">Name</label>
                                                    <input type="text" id="nameExLarge" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                            <div className="row g-2">
                                                <div className="col mb-0">
                                                    <label htmlFor="emailExLarge" className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        id="emailExLarge"
                                                        className="form-control"
                                                        placeholder="xxxx@xxx.xx" />
                                                </div>
                                                <div className="col mb-0">
                                                    <label htmlFor="dobExLarge" className="form-label">DOB</label>
                                                    <input type="date" id="dobExLarge" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="demo-inline-spacing">
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#smallModal">
                                    Small
                                </button>

                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#largeModal">
                                    Large
                                </button>

                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exLargeModal">
                                    Extra Large
                                </button>
                            </div>
                        </div>

                        {/* <!-- Modal Scroll long content --> */}
                        <div className="col-lg-4 col-md-3">
                            <small className="text-light fw-medium">Scrolling long content</small>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="modalLong" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="modalLongTitle">Modal title</h5>
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="modalScrollable" tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="modalScrollableTitle">Modal title</h5>
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                            <p>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </p>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                                lacus vel augue laoreet rutrum faucibus dolor auctor.
                                            </p>
                                            <p>
                                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                                scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                                auctor fringilla.
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                            <button aria-label='Click me' type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="demo-inline-spacing">
                                {/* <!-- Button trigger modal --> */}
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalLong">
                                    Option 1
                                </button>

                                {/* <!-- Button ModalScrollable --> */}
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalScrollable">
                                    Option 2
                                </button>
                            </div>
                        </div>

                        {/* <!-- Modal Backdrop --> */}
                        <div className="col-lg-4 col-md-3">
                            <small className="text-light fw-medium">Backdrop</small>
                            <div className="mt-3">
                                {/* <!-- Button trigger modal --> */}
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#backDropModal">
                                    Launch modal
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="backDropModal" data-bs-backdrop="static" tabIndex="-1">
                                    <div className="modal-dialog">
                                        <form className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="backDropModalTitle">Modal title</h5>
                                                <button aria-label='Click me'
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <label htmlFor="nameBackdrop" className="form-label">Name</label>
                                                        <input
                                                            type="text"
                                                            id="nameBackdrop"
                                                            className="form-control"
                                                            placeholder="Enter Name" />
                                                    </div>
                                                </div>
                                                <div className="row g-2">
                                                    <div className="col mb-0">
                                                        <label htmlFor="emailBackdrop" className="form-label">Email</label>
                                                        <input
                                                            type="email"
                                                            id="emailBackdrop"
                                                            className="form-control"
                                                            placeholder="xxxx@xxx.xx" />
                                                    </div>
                                                    <div className="col mb-0">
                                                        <label htmlFor="dobBackdrop" className="form-label">DOB</label>
                                                        <input type="date" id="dobBackdrop" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                                                    Close
                                                </button>
                                                <button aria-label='Click me' type="button" className="btn btn-primary">Save</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Bootstrap modals --> */}
        </>
    )
}
