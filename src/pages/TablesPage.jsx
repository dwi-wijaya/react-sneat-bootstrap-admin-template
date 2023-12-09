import React from 'react'

export const TablesPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Basic Tables</h4>

            {/* <!-- Basic Bootstrap Table --> */}
            <div className="card">
                <h5 className="card-header">Table Basic</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Basic Bootstrap Table --> */}

            <hr className="my-5" />

            {/* <!-- Bootstrap Dark Table --> */}
            <div className="card">
                <h5 className="card-header">Table Dark</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="rounded-start-bottom">
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td className="rounded-end-bottom">
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Bootstrap Dark Table --> */}

            <hr className="my-5" />

            {/* <!-- Bootstrap Table with Header - Dark --> */}
            <div className="card">
                <h5 className="card-header">Dark Table head</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Bootstrap Table with Header Dark --> */}

            <hr className="my-5" />

            {/* <!-- Bootstrap Table with Header - Light --> */}
            <div className="card">
                <h5 className="card-header">Light Table head</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead className="table-light">
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!-- Bootstrap Table with Header - Light --> */}

            <hr className="my-5" />

            {/* <!-- Bootstrap Table with Header - Footer --> */}
            <div className="card">
                <h5 className="card-header">Table Header & Footer</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot className="table-border-bottom-0">
                            <tr>
                                <th className="rounded-start-bottom">Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th className="rounded-end-bottom">Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            {/* <!-- Bootstrap Table with Header - Footer --> */}

            <hr className="my-5" />

            {/* <!-- Bootstrap Table with Caption --> */}
            <div className="card">
                <h5 className="card-header">Table Caption</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <caption className="ms-4">
                            List of Projects
                        </caption>
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!-- Bootstrap Table with Caption --> */}

            <hr className="my-5" />

            {/* <!-- Striped Rows --> */}
            <div className="card">
                <h5 className="card-header">Striped rows</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Striped Rows --> */}

            <hr className="my-5" />

            {/* <!-- Bordered Table --> */}
            <div className="card">
                <h5 className="card-header">Bordered Table</h5>
                <div className="card-body">
                    <div className="table-responsive text-nowrap">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Client</th>
                                    <th>Users</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                        <span className="fw-medium">Angular Project</span>
                                    </td>
                                    <td>Albert Cook</td>
                                    <td>
                                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Lilian Fuller">
                                                <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Sophia Wilkerson">
                                                <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Christina Parker">
                                                <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td><span className="badge bg-label-primary me-1">Active</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn p-0 dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                                >
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-trash me-1"></i> Delete</a
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="bx bxl-react bx-sm text-info me-3"></i>
                                        <span className="fw-medium">React Project</span>
                                    </td>
                                    <td>Barry Hunter</td>
                                    <td>
                                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Lilian Fuller">
                                                <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Sophia Wilkerson">
                                                <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Christina Parker">
                                                <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn p-0 dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                                >
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-trash me-1"></i> Delete</a
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                        <span className="fw-medium">VueJs Project</span>
                                    </td>
                                    <td>Trevor Baker</td>
                                    <td>
                                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Lilian Fuller">
                                                <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Sophia Wilkerson">
                                                <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Christina Parker">
                                                <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn p-0 dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                                >
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-trash me-1"></i> Delete</a
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                        <span className="fw-medium">Bootstrap Project</span>
                                    </td>
                                    <td>Jerry Milton</td>
                                    <td>
                                        <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Lilian Fuller">
                                                <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Sophia Wilkerson">
                                                <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                            <li
                                                data-bs-toggle="tooltip"
                                                data-popup="tooltip-custom"
                                                data-bs-placement="top"
                                                className="avatar avatar-xs pull-up"
                                                title="Christina Parker">
                                                <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                    <td>
                                        <div className="dropdown">
                                            <button aria-label='Click me'
                                                type="button"
                                                className="btn p-0 dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown">
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                                >
                                                <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                                ><i className="bx bx-trash me-1"></i> Delete</a
                                                >
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!--/ Bordered Table --> */}

            <hr className="my-5" />

            {/* <!-- Borderless Table --> */}
            <div className="card">
                <h5 className="card-header">Borderless Table</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Borderless Table --> */}

            <hr className="my-5" />

            {/* <!-- Hoverable Table rows --> */}
            <div className="card">
                <h5 className="card-header">Hoverable rows</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Hoverable Table rows --> */}

            <hr className="my-5" />

            {/* <!-- Small table --> */}

            <div className="card">
                <h5 className="card-header">Small Table</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Small table --> */}

            <hr className="my-5" />

            {/* <!-- Contextual Classes --> */}

            <div className="card">
                <h5 className="card-header">Contextual Classes</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Users</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr className="table-default">
                                <td>
                                    <i className="bx bxl-sketch bx-sm text-warning me-3"></i>
                                    <span className="fw-medium">Sketch Project</span>
                                </td>
                                <td>Ronnie Shane</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-active">
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-primary">
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-secondary">
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-success">
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-danger">
                                <td>
                                    <i className="bx bxl-sketch bx-sm text-warning me-3"></i>
                                    <span className="fw-medium">Sketch Project</span>
                                </td>
                                <td>Sarah Banks</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-warning">
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Custom</span>
                                </td>
                                <td>Ted Richer</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-info">
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Latest Bootstrap</span>
                                </td>
                                <td>Perry Parker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-light">
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular UI</span>
                                </td>
                                <td>Ana Bell</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="table-dark">
                                <td className="rounded-start-bottom">
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap UI</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td className="rounded-end-bottom">
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Contextual Classes --> */}

            <hr className="my-5" />

            {/* <!-- Table within card --> */}
            <h5 className="mb-4">Table without Card</h5>
            <div className="table-responsive text-nowrap">
                <table className="table card-table">
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Client</th>
                            <th>Users</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                        <tr>
                            <td>
                                <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                <span className="fw-medium">Angular Project</span>
                            </td>
                            <td>Albert Cook</td>
                            <td>
                                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Lilian Fuller">
                                        <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Sophia Wilkerson">
                                        <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Christina Parker">
                                        <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                </ul>
                            </td>
                            <td><span className="badge bg-label-primary me-1">Active</span></td>
                            <td>
                                <div className="dropdown">
                                    <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                        >
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-trash me-1"></i> Delete</a
                                        >
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                            </td>
                            <td>Barry Hunter</td>
                            <td>
                                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Lilian Fuller">
                                        <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Sophia Wilkerson">
                                        <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Christina Parker">
                                        <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                </ul>
                            </td>
                            <td><span className="badge bg-label-success me-1">Completed</span></td>
                            <td>
                                <div className="dropdown">
                                    <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                        >
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-trash me-1"></i> Delete</a
                                        >
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                <span className="fw-medium">VueJs Project</span>
                            </td>
                            <td>Trevor Baker</td>
                            <td>
                                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Lilian Fuller">
                                        <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Sophia Wilkerson">
                                        <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Christina Parker">
                                        <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                </ul>
                            </td>
                            <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                            <td>
                                <div className="dropdown">
                                    <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                        >
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-trash me-1"></i> Delete</a
                                        >
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                <span className="fw-medium">Bootstrap Project</span>
                            </td>
                            <td>Jerry Milton</td>
                            <td>
                                <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Lilian Fuller">
                                        <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Sophia Wilkerson">
                                        <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                    <li
                                        data-bs-toggle="tooltip"
                                        data-popup="tooltip-custom"
                                        data-bs-placement="top"
                                        className="avatar avatar-xs pull-up"
                                        title="Christina Parker">
                                        <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                    </li>
                                </ul>
                            </td>
                            <td><span className="badge bg-label-warning me-1">Pending</span></td>
                            <td>
                                <div className="dropdown">
                                    <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                        >
                                        <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                        ><i className="bx bx-trash me-1"></i> Delete</a
                                        >
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <!--/ Table within card --> */}

            <hr className="my-5" />

            {/* <!-- Responsive Table --> */}
            <div className="card">
                <h5 className="card-header">Responsive Table</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr className="text-nowrap">
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <th scope="row">1</th>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <!--/ Responsive Table --> */}
        </>
    )
}
