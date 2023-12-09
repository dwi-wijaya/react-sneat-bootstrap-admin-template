import React from 'react'

export const TooltipPopoverPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Tooltips & popovers</h4>

            {/* <!-- Tooltips --> */}
            <div className="card mb-4">
                <h5 className="card-header">Tooltips</h5>
                <div className="card-body">
                    <div className="text-light small fw-medium">Directions</div>
                    <div className="row demo-vertical-spacing">
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-offset="0,4"
                                data-bs-placement="right"
                                data-bs-html="true"
                                title="<i className='bx bx-trending-up bx-xs' ></i> <span>Tooltip on right</span>">
                                Right
                            </button>
                        </div>
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-offset="0,4"
                                data-bs-placement="top"
                                data-bs-html="true"
                                title="<i className='bx bx-bell bx-xs' ></i> <span>Tooltip on top</span>">
                                Top
                            </button>
                        </div>
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-offset="0,4"
                                data-bs-placement="bottom"
                                data-bs-html="true"
                                title="<i className='bx bx-heart bx-xs' ></i> <span>Tooltip on bottom</span>">
                                Bottom
                            </button>
                        </div>
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="tooltip"
                                data-bs-offset="0,4"
                                data-bs-placement="left"
                                data-bs-html="true"
                                title="<i className='bx bx-dollar bx-xs' ></i> <span>Tooltip on left</span>">
                                Left
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Tooltips --> */}

            {/* <!-- Popovers --> */}
            <div className="card">
                <h5 className="card-header">Popovers</h5>
                <div className="card-body">
                    <div className="text-light small fw-medium">Directions</div>
                    <div className="row demo-vertical-spacing">
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary text-nowrap"
                                data-bs-toggle="popover"
                                data-bs-offset="0,14"
                                data-bs-placement="right"
                                data-bs-html="true"
                                data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div className='d-flex justify-content-between'><button aria-label='Click me' type='button' className='btn btn-sm btn-outline-secondary'>Skip</button><button aria-label='Click me' type='button' className='btn btn-sm btn-primary'>Read More</button></div>"
                                title="Popover Title">
                                Popover on right
                            </button>
                        </div>
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary text-nowrap"
                                data-bs-toggle="popover"
                                data-bs-offset="0,14"
                                data-bs-placement="top"
                                data-bs-html="true"
                                data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div className='d-flex justify-content-between'><button aria-label='Click me' type='button' className='btn btn-sm btn-outline-secondary'>Skip</button><button aria-label='Click me' type='button' className='btn btn-sm btn-primary'>Read More</button></div>"
                                title="Popover Title">
                                Popover on top
                            </button>
                        </div>
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary text-nowrap"
                                data-bs-toggle="popover"
                                data-bs-offset="0,14"
                                data-bs-placement="bottom"
                                data-bs-html="true"
                                data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div className='d-flex justify-content-between'><button aria-label='Click me' type='button' className='btn btn-sm btn-outline-secondary'>Skip</button><button aria-label='Click me' type='button' className='btn btn-sm btn-primary'>Read More</button></div>"
                                title="Popover Title">
                                Popover on bottom
                            </button>
                        </div>
                        <div className="col">
                            <button aria-label='Click me'
                                type="button"
                                className="btn btn-primary text-nowrap"
                                data-bs-toggle="popover"
                                data-bs-offset="0,14"
                                data-bs-placement="left"
                                data-bs-html="true"
                                data-bs-content="<p>This is a very beautiful popover, show some love.</p> <div className='d-flex justify-content-between'><button aria-label='Click me' type='button' className='btn btn-sm btn-outline-secondary'>Skip</button><button aria-label='Click me' type='button' className='btn btn-sm btn-primary'>Read More</button></div>"
                                title="Popover Title">
                                Popover on left
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Popovers --> */}
        </>
    )
}
