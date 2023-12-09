import React from 'react'

export const VerticalFormPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Forms/</span> Vertical Layouts</h4>

            {/* <!-- Basic Layout --> */}
            <div className="row">
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Basic Layout</h5>
                            <small className="text-muted float-end">Default label</small>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-fullname">Full Name</label>
                                    <input type="text" className="form-control" id="basic-default-fullname" placeholder="John Doe" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-company">Company</label>
                                    <input type="text" className="form-control" id="basic-default-company" placeholder="ACME Inc." />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-email">Email</label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="text"
                                            id="basic-default-email"
                                            className="form-control"
                                            placeholder="john.doe"
                                            aria-label="john.doe"
                                            aria-describedby="basic-default-email2" />
                                        <span className="input-group-text" id="basic-default-email2">@example.com</span>
                                    </div>
                                    <div className="form-text">You can use letters, numbers & periods</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-phone">Phone No</label>
                                    <input
                                        type="text"
                                        id="basic-default-phone"
                                        className="form-control phone-mask"
                                        placeholder="658 799 8941" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-message">Message</label>
                                    <textarea
                                        id="basic-default-message"
                                        className="form-control"
                                        placeholder="Hi, Do you have a moment to talk Joe?"></textarea>
                                </div>
                                <button aria-label='Click me' type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Basic with Icons</h5>
                            <small className="text-muted float-end">Merged input group</small>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-icon-default-fullname">Full Name</label>
                                    <div className="input-group input-group-merge">
                                        <span id="basic-icon-default-fullname2" className="input-group-text"
                                        ><i className="bx bx-user"></i
                                        ></span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="basic-icon-default-fullname"
                                            placeholder="John Doe"
                                            aria-label="John Doe"
                                            aria-describedby="basic-icon-default-fullname2" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-icon-default-company">Company</label>
                                    <div className="input-group input-group-merge">
                                        <span id="basic-icon-default-company2" className="input-group-text"
                                        ><i className="bx bx-buildings"></i
                                        ></span>
                                        <input
                                            type="text"
                                            id="basic-icon-default-company"
                                            className="form-control"
                                            placeholder="ACME Inc."
                                            aria-label="ACME Inc."
                                            aria-describedby="basic-icon-default-company2" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-icon-default-email">Email</label>
                                    <div className="input-group input-group-merge">
                                        <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                        <input
                                            type="text"
                                            id="basic-icon-default-email"
                                            className="form-control"
                                            placeholder="john.doe"
                                            aria-label="john.doe"
                                            aria-describedby="basic-icon-default-email2" />
                                        <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                                    </div>
                                    <div className="form-text">You can use letters, numbers & periods</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-icon-default-phone">Phone No</label>
                                    <div className="input-group input-group-merge">
                                        <span id="basic-icon-default-phone2" className="input-group-text"
                                        ><i className="bx bx-phone"></i
                                        ></span>
                                        <input
                                            type="text"
                                            id="basic-icon-default-phone"
                                            className="form-control phone-mask"
                                            placeholder="658 799 8941"
                                            aria-label="658 799 8941"
                                            aria-describedby="basic-icon-default-phone2" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-icon-default-message">Message</label>
                                    <div className="input-group input-group-merge">
                                        <span id="basic-icon-default-message2" className="input-group-text"
                                        ><i className="bx bx-comment"></i
                                        ></span>
                                        <textarea
                                            id="basic-icon-default-message"
                                            className="form-control"
                                            placeholder="Hi, Do you have a moment to talk Joe?"
                                            aria-label="Hi, Do you have a moment to talk Joe?"
                                            aria-describedby="basic-icon-default-message2"></textarea>
                                    </div>
                                </div>
                                <button aria-label='Click me' type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
