import React from 'react'

export const ProgressPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Progress bars</h4>

            <div className="card mb-4">
                <h5 className="card-header">Progress bars</h5>
                <div className="card-body">
                    <div className="text-light small fw-medium">Default</div>
                    <div className="demo-vertical-spacing">
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width : '25%'}}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar w-75"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                    <div className="text-light small fw-medium">Height</div>
                    <div className="demo-vertical-spacing">
                        <div className="progress" style={{height: "6px"}}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width : '25%'}}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress" style={{height: '10px'}}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width : '75%'}}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                    <div className="text-light small fw-medium">With Label</div>
                    <div className="demo-vertical-spacing">
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width : '25%'}}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                25%
                            </div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{width : '75%'}}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                75%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Options --> */}

            {/* <!-- Backgrounds --> */}
            <div className="card mb-4">
                <h5 className="card-header">Backgrounds</h5>
                <div className="card-body">
                    <div className="demo-vertical-spacing demo-only-element">
                        <div className="progress">
                            <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{width : '20%'}}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-secondary"
                                role="progressbar"
                                style={{width : '30%'}}
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{width : '40%'}}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                style={{width : '75%'}}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                style={{width : '60%'}}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                style={{width : '50%'}}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar bg-dark"
                                role="progressbar"
                                style={{width : '85%'}}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Backgrounds --> */}

            {/* <!-- Striped --> */}
            <div className="card mb-4">
                <h5 className="card-header">Striped</h5>
                <div className="card-body">
                    <div className="demo-vertical-spacing demo-only-element">
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-primary"
                                role="progressbar"
                                style={{width : '20%'}}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-secondary"
                                role="progressbar"
                                style={{width : '30%'}}
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{width : '40%'}}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-danger"
                                role="progressbar"
                                style={{width : '75%'}}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{width : '60%'}}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-info"
                                role="progressbar"
                                style={{width : '50%'}}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped bg-dark"
                                role="progressbar"
                                style={{width : '85%'}}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Striped --> */}

            {/* <!-- Animated --> */}
            <div className="card mb-4">
                <h5 className="card-header">Animated</h5>
                <div className="card-body">
                    <div className="demo-vertical-spacing demo-only-element">
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar"
                                style={{width : '20%'}}
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-secondary"
                                role="progressbar"
                                style={{width : '30%'}}
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                role="progressbar"
                                style={{width : '40%'}}
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                role="progressbar"
                                style={{width : '75%'}}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar"
                                style={{width : '60%'}}
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                role="progressbar"
                                style={{width : '50%'}}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                                role="progressbar"
                                style={{width : '85%'}}
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Animated --> */}

            {/* <!-- Multiple bars --> */}
            <div className="card">
                <h5 className="card-header">Multiple bars</h5>
                <div className="card-body">
                    <div className="text-light small fw-medium mb-1">Default</div>
                    <div className="progress mb-3">
                        <div
                            className="progress-bar bg-primary shadow-none"
                            role="progressbar"
                           style={{width : '15%'}}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        <div
                            className="progress-bar bg-success shadow-none"
                            role="progressbar"
                            style={{width : '30%'}}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        <div
                            className="progress-bar bg-danger shadow-none"
                            role="progressbar"
                            style={{width : '20%'}}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>

                    <div className="text-light small fw-medium mb-1">Striped</div>
                    <div className="progress mb-3">
                        <div
                            className="progress-bar bg-primary progress-bar-striped shadow-none"
                            role="progressbar"
                           style={{width : '15%'}}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        <div
                            className="progress-bar bg-success progress-bar-striped shadow-none"
                            role="progressbar"
                            style={{width : '30%'}}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        <div
                            className="progress-bar bg-danger progress-bar-striped shadow-none"
                            role="progressbar"
                            style={{width : '20%'}}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>

                    <div className="text-light small fw-medium mb-1">Animated</div>
                    <div className="progress">
                        <div
                            className="progress-bar bg-primary progress-bar-striped progress-bar-animated shadow-none"
                            role="progressbar"
                           style={{width : '15%'}}
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        <div
                            className="progress-bar bg-success progress-bar-striped progress-bar-animated shadow-none"
                            role="progressbar"
                            style={{width : '30%'}}
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                        <div
                            className="progress-bar bg-danger progress-bar-striped progress-bar-animated shadow-none"
                            role="progressbar"
                            style={{width : '20%'}}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
