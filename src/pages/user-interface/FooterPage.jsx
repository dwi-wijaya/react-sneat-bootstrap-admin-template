import React from 'react'

export const FooterPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Footer</h4>

            {/* <!-- Basic footer --> */}
            <section id="basic-footer">
                <h5 className="pb-1 mt-5 mb-4">Basic Footer</h5>

                <footer className="footer bg-light">
                    <div
                        className="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
                        <div>
                            <a
                                aria-label='go to themeselection'
                                href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/"
                                target="_blank"
                                rel='noreferrer'
                                className="footer-text fw-bold"
                            >Sneat</a
                            >
                            ©
                        </div>
                        <div>
                            <a aria-label='go to themeselection' href="https://themeselection.com/license/" className="footer-link me-4" target="_blank" rel='noreferrer'>License</a>
                            <a aria-label='go to help' href="#" className="footer-link me-4">Help</a>
                            <a aria-label='go to contact' href="#" className="footer-link me-4">Contact</a>
                            <a aria-label='go to terms & conditions' href="#" className="footer-link">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </footer>
            </section>
            {/* <!--/ Basic footer --> */}
            <hr className="container-m-nx my-5" />

            {/* <!-- Footer with components --> */}
            <section id="component-footer">
                <h5 className="pb-1 mb-4">Footer with Elements</h5>

                <footer className="footer bg-light">
                    <div
                        className="container-fluid d-flex flex-md-row flex-column justify-content-between align-items-md-center gap-1 container-p-x py-3">
                        <div>
                            <a
                                aria-label='go to themeselection'
                                href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/"
                                target="_blank"
                                rel='noreferrer'
                                className="footer-text fw-bold"
                            >Sneat</a
                            >
                            ©
                        </div>
                        <div>
                            <div className="form-check form-control-sm footer-link me-3">
                                <input className="form-check-input" type="checkbox" value="" id="customCheck2" checked />
                                <label className="form-check-label" htmlFor="customCheck2"> Show </label>
                            </div>
                            <div className="dropdown dropup footer-link me-3">
                                <button aria-label='Click me'
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    Currency
                                </button>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a aria-label='dropdown link currency' className="dropdown-item" href="#"><i className="bx bx-dollar"></i> USD</a>
                                    <a aria-label='dropdown link currency' className="dropdown-item" href="#"><i className="bx bx-euro"></i> Euro</a>
                                    <a aria-label='dropdown link currency' className="dropdown-item" href="#"><i className="bx bx-pound"></i> Pound</a>
                                    <div className="dropdown-divider"></div>
                                    <a aria-label='dropdown link currency' className="dropdown-item" href="#"><i className="bx bx-bitcoin"></i> Bitcoin</a>
                                </div>
                            </div>
                            <a aria-label='logout link' href="#" className="btn btn-sm btn-outline-danger"
                            ><i className="bx bx-log-out-circle me-1"></i>Logout</a
                            >
                        </div>
                    </div>
                </footer>
            </section>
            {/* <!--/ Footer with components --> */}
        </>
    )
}
