import React from 'react'


export const CollapsePage = () => {
    return (

        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Collapse</h4>

            {/* <!-- Collapse --> */}
            <h5>Collapse</h5>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <h5 className="card-header">Basic</h5>
                        <div className="card-body">
                            <p className="card-text">
                                Toggle the visibility of content across your project with a few classes and our JavaScript
                                plugins.
                            </p>
                            <p className="demo-inline-spacing">
                                <a
                                    className="btn btn-primary me-1"
                                    data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample">
                                    Link with href
                                </a>
                                <button aria-label='Click me'
                                    className="btn btn-primary me-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample"
                                    aria-expanded="false"
                                    aria-controls="collapseExample">
                                    Button with data-bs-target
                                </button>
                            </p>
                            <div className="collapse" id="collapseExample">
                                <div className="d-grid d-sm-flex p-3 border">
                                    <img
                                        src="../assets/img/elements/1.jpg"
                                        alt="collapse-image"
                                        aria-label='collapse image'
                                        height="125"
                                        className="me-4 mb-sm-0 mb-2" />
                                    <span>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <h5 className="card-header">Multiple targets</h5>
                        <div className="card-body">
                            <p className="card-text">Show and hide multiple elements by referencing them with a selector.</p>

                            <p className="demo-inline-spacing">
                                <a
                                    className="btn btn-primary me-1"
                                    data-bs-toggle="collapse"
                                    href="#multiCollapseExample1"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="multiCollapseExample1"
                                >Toggle first element</a
                                >
                                <button aria-label='Click me'
                                    className="btn btn-primary me-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#multiCollapseExample2"
                                    aria-expanded="false"
                                    aria-controls="multiCollapseExample2">
                                    Toggle second element
                                </button>
                                <button aria-label='Click me'
                                    className="btn btn-primary me-1"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target=".multi-collapse"
                                    aria-expanded="false"
                                    aria-controls="multiCollapseExample1 multiCollapseExample2">
                                    Toggle both elements
                                </button>
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-6 mb-2 mb-md-0">
                                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                                        <div className="d-grid d-sm-flex p-3 border">
                                            <img
                                                src="../assets/img/elements/2.jpg"
                                                alt="collapse-image"
                                                aria-label='collapse image'
                                                height="125"
                                                className="me-4 mb-sm-0 mb-2" />
                                            <span>
                                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
                                                necessary, making this the first true generator on the Internet. It uses a dictionary of
                                                over 200 Latin words, combined with a handful of model sentence structures, to generate
                                                Lorem Ipsum which looks reasonable.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                                        <div className="d-grid d-sm-flex p-3 border">
                                            <img
                                                src="../assets/img/elements/3.jpg"
                                                alt="collapse-image"
                                                height="125"
                                                aria-label='collapse image'
                                                className="me-4 mb-sm-0 mb-2" />
                                            <span>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                                suffered alteration in some form, by injected humour, or randomised words which don't
                                                look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
