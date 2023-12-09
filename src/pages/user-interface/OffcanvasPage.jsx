import React from 'react'

export const OffcanvasPage = () => {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Offcanvas</h4>

            <div className="card mb-4">
                <h5 className="card-header">Placements</h5>
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Default Offcanvas --> */}
                        <div className="col-lg-3 col-md-6">
                            <small className="text-light fw-medium mb-3">Start (Default)</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasStart"
                                    aria-controls="offcanvasStart">
                                    Toggle Start
                                </button>
                                <div
                                    className="offcanvas offcanvas-start"
                                    tabIndex="-1"
                                    id="offcanvasStart"
                                    aria-labelledby="offcanvasStartLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasStartLabel" className="offcanvas-title">Offcanvas Start</h5>
                                        <button
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                                        <p className="text-center">
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-secondary d-grid w-100"
                                            data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- End Offcanvas --> */}
                        <div className="col-lg-3 col-md-6">
                            <small className="text-light fw-medium mb-3">End</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasEnd"
                                    aria-controls="offcanvasEnd">
                                    Toggle End
                                </button>
                                <div
                                    className="offcanvas offcanvas-end"
                                    tabIndex="-1"
                                    id="offcanvasEnd"
                                    aria-labelledby="offcanvasEndLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasEndLabel" className="offcanvas-title">Offcanvas End</h5>
                                        <button 
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                                        <p className="text-center">
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-secondary d-grid w-100"
                                            data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Top Offcanvas --> */}
                        <div className="col-lg-3 col-md-6">
                            <small className="text-light fw-medium mb-3">Top</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasTop"
                                    aria-controls="offcanvasTop">
                                    Toggle Top
                                </button>
                                <div
                                    className="offcanvas offcanvas-top"
                                    tabIndex="-1"
                                    id="offcanvasTop"
                                    aria-labelledby="offcanvasTopLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasTopLabel" className="offcanvas-title">Offcanvas Top</h5>
                                        <button 
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary me-2">Continue</button>
                                        <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Bottom Offcanvas --> */}
                        <div className="col-lg-3 col-md-6">
                            <small className="text-light fw-medium mb-3">Bottom</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBottom"
                                    aria-controls="offcanvasBottom">
                                    Toggle Bottom
                                </button>
                                <div
                                    className="offcanvas offcanvas-bottom"
                                    tabIndex="-1"
                                    id="offcanvasBottom"
                                    aria-labelledby="offcanvasBottomLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasBottomLabel" className="offcanvas-title">Offcanvas Bottom</h5>
                                        <button 
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary me-2">Continue</button>
                                        <button aria-label='Click me' type="button" className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <h5 className="card-header">Backdrop</h5>
                <div className="card-body">
                    <div className="row gy-3">
                        {/* <!-- Enable Body Scrolling Offcanvas --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium mb-3">Enable Body Scrolling</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasScroll"
                                    aria-controls="offcanvasScroll">
                                    Enable Body Scrolling
                                </button>
                                <div
                                    className="offcanvas offcanvas-end"
                                    data-bs-scroll="true"
                                    data-bs-backdrop="false"
                                    tabIndex="-1"
                                    id="offcanvasScroll"
                                    aria-labelledby="offcanvasScrollLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasScrollLabel" className="offcanvas-title">Offcanvas Scroll</h5>
                                        <button 
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                                        <p className="text-center">
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-secondary d-grid w-100"
                                            data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Enable backdrop (default) Offcanvas --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium mb-3">Enable backdrop (default)</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBackdrop"
                                    aria-controls="offcanvasBackdrop">
                                    Enable backdrop
                                </button>
                                <div
                                    className="offcanvas offcanvas-end"
                                    tabIndex="-1"
                                    id="offcanvasBackdrop"
                                    aria-labelledby="offcanvasBackdropLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasBackdropLabel" className="offcanvas-title">Enable backdrop</h5>
                                        <button 
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                                        <p className="text-center">
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-secondary d-grid w-100"
                                            data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Enable Scrolling & Backdrop Offcanvas --> */}
                        <div className="col-lg-4 col-md-6">
                            <small className="text-light fw-medium mb-3">Enable Scrolling & Backdrop</small>
                            <div className="mt-3">
                                <button aria-label='Click me'
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBoth"
                                    aria-controls="offcanvasBoth">
                                    Enable both scrolling & backdrop
                                </button>
                                <div
                                    className="offcanvas offcanvas-end"
                                    data-bs-scroll="true"
                                    tabIndex="-1"
                                    id="offcanvasBoth"
                                    aria-labelledby="offcanvasBothLabel">
                                    <div className="offcanvas-header">
                                        <h5 id="offcanvasBothLabel" className="offcanvas-title">Enable both scrolling & backdrop</h5>
                                        <button 
                                            type="button"
                                            className="btn-close text-reset"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                                        <p className="text-center">
                                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                                            graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                                            century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                                            for use in a type specimen book.
                                        </p>
                                        <button aria-label='Click me' type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-secondary d-grid w-100"
                                            data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
