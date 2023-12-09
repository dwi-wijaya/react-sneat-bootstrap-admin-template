import React, { useEffect } from 'react'

export const ToastPage = () => {
    useEffect(() => {
        Toast();
      },[])
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Toasts</h4>

            {/* <!-- Toast with Placements --> */}
            <div
                className="bs-toast toast toast-placement-ex m-2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                data-bs-delay="2000">
                <div className="toast-header">
                    <i className="bx bx-bell me-2"></i>
                    <div className="me-auto fw-medium">Bootstrap</div>
                    <small>11 mins ago</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
            </div>
            {/* <!-- Toast with Placements --> */}

            {/* <!-- Bootstrap Toasts with Placement --> */}
            <div className="card mb-4">
                <h5 className="card-header">Bootstrap Toasts Example With Placement</h5>
                <div className="card-body">
                    <div className="row gx-3 gy-2 align-items-center">
                        <div className="col-md-3">
                            <label className="form-label" htmlFor="selectTypeOpt">
                                Type
                            </label>
                            <select id="selectTypeOpt" className="form-select color-dropdown" defaultValue="bg-primary">
                                <option value="bg-primary">Primary</option>
                                <option value="bg-secondary">Secondary</option>
                                <option value="bg-success">Success</option>
                                <option value="bg-danger">Danger</option>
                                <option value="bg-warning">Warning</option>
                                <option value="bg-info">Info</option>
                                <option value="bg-dark">Dark</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label" htmlFor="selectPlacement">
                                Placement
                            </label>
                            <select className="form-select placement-dropdown" id="selectPlacement" defaultValue="top-0 start-0">
                                <option value="top-0 start-0">Top left</option>
                                <option value="top-0 start-50 translate-middle-x">Top center</option>
                                <option value="top-0 end-0">Top right</option>
                                <option value="top-50 start-0 translate-middle-y">Middle left</option>
                                <option value="top-50 start-50 translate-middle">Middle center</option>
                                <option value="top-50 end-0 translate-middle-y">Middle right</option>
                                <option value="bottom-0 start-0">Bottom left</option>
                                <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                <option value="bottom-0 end-0">Bottom right</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label" htmlFor="showToastPlacement">
                                &nbsp;
                            </label>
                            <button id="showToastPlacement" className="btn btn-primary d-block">
                                Show Toast
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--/ Bootstrap Toasts with Placement --> */}

            {/* <!-- Bootstrap Toasts Styles --> */}
            <div className="card mb-4">
                <h5 className="card-header">Bootstrap Toasts Styles</h5>
                <div className="row g-0">
                    <div className="col-md-6 p-4">
                        <div className="text-light small fw-medium mb-3">Default</div>
                        <div className="toast-container position-relative">
                            <div className="bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-primary"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-secondary"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-success"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-danger"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-warning"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-info"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-dark"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ui-bg-overlay-container p-4">
                        <div className="ui-bg-overlay bg-dark rounded-end-bottom"></div>
                        <div className="text-white small fw-medium mb-3">Translucent</div>

                        <div className="toast-container position-relative">
                            <div className="bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-primary"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-secondary"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-success"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-danger"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-warning"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-info"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>

                            <div
                                className="bs-toast toast fade show bg-dark"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true">
                                <div className="toast-header">
                                    <i className="bx bx-bell me-2"></i>
                                    <div className="me-auto fw-medium">Bootstrap</div>
                                    <small>11 mins ago</small>
                                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                </div>
                                <div className="toast-body">
                                    Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Bootstrap Toasts Styles --> */}
        </>
    )
}
