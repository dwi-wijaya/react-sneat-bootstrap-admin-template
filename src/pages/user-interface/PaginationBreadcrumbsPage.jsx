import React from 'react'

export const PaginationBreadcrumbsPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">UI elements /</span> Pagination and breadcrumbs
            </h4>

            <div className="card mb-4">
                <h5 className="card-header">Pagination</h5>
                {/* <!-- Basic Pagination --> */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                            <small className="text-light fw-medium">Basic</small>
                            <div className="demo-inline-spacing">
                                {/* <!-- Basic Pagination --> */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item first">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevron-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevron-right"></i
                                            ></a>
                                        </li>
                                        <li className="page-item last">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* <!--/ Basic Pagination --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Pagination Sizes --> */}
            <div className="card mb-4">
                <h5 className="card-header">Sizes & Alignments</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <small className="text-light fw-medium">Sizes</small>
                            <div className="demo-inline-spacing">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination pagination-sm">
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination pagination-lg">
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <small className="text-light fw-medium">Alignments</small>
                            <div className="demo-inline-spacing">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-end">
                                        <li className="page-item prev">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-left"></i
                                            ></a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item active">
                                            <a aria-label="pagination link" className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a aria-label="pagination link" className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item next">
                                            <a aria-label="pagination link" className="page-link" href="#"
                                            ><i className="tf-icon bx bx-chevrons-right"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ Pagination Sizes --> */}

            {/* <!-- Breadcrumb --> */}
            <div className="card">
                <h5 className="card-header">Breadcrumbs</h5>
                <div className="card-body">
                    {/* <!-- Basic Breadcrumb --> */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a aria-label="pagination link" href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a aria-label="pagination link" href="#">Library</a>
                            </li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </nav>
                    {/* <!-- Basic Breadcrumb --> */}
                    {/* <!-- Custom style1 Breadcrumb --> */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-style1">
                            <li className="breadcrumb-item">
                                <a aria-label="pagination link" href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a aria-label="pagination link" href="#">Library</a>
                            </li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </nav>
                    {/* <!--/ Custom style1 Breadcrumb --> */}
                    {/* <!-- Custom style2 Breadcrumb --> */}
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb breadcrumb-style2 mb-0">
                            <li className="breadcrumb-item">
                                <a aria-label="pagination link" href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a aria-label="pagination link" href="#">Library</a>
                            </li>
                            <li className="breadcrumb-item active">Data</li>
                        </ol>
                    </nav>
                    {/* <!--/ Custom style2 Breadcrumb --> */}
                </div>
            </div>
            {/* <!--/ Breadcrumb --> */}
        </>
    )
}
