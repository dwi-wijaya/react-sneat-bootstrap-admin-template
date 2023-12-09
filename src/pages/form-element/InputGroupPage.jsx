import React from 'react'

export const InputGroupPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Forms /</span> Input groups</h4>

            <div className="row">
                {/* <!-- Basic --> */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Basic</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon11">@</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon11" />
                            </div>

                            <div className="form-password-toggle">
                                <label className="form-label" for="basic-default-password12">Password</label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="basic-default-password12"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="basic-default-password2" />
                                    <span id="basic-default-password2" className="input-group-text cursor-pointer"
                                    ><i className="bx bx-hide"></i
                                    ></span>
                                </div>
                            </div>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon13" />
                                <span className="input-group-text" id="basic-addon13">@example.com</span>
                            </div>

                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon14">https://example.com/users/</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="URL"
                                    id="basic-url1"
                                    aria-describedby="basic-addon14" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    aria-label="Amount (to the nearest dollar)" />
                                <span className="input-group-text">.00</span>
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">With textarea</span>
                                <textarea className="form-control" aria-label="With textarea" placeholder="Comment"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Merged --> */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Merged</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <div className="input-group input-group-merge">
                                <span className="input-group-text" id="basic-addon-search31"><i className="bx bx-search"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search..."
                                    aria-label="Search..."
                                    aria-describedby="basic-addon-search31" />
                            </div>

                            <div className="form-password-toggle">
                                <label className="form-label" for="basic-default-password32">Password</label>
                                <div className="input-group input-group-merge">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="basic-default-password32"
                                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                        aria-describedby="basic-default-password" />
                                    <span className="input-group-text cursor-pointer" id="basic-default-password"
                                    ><i className="bx bx-hide"></i
                                    ></span>
                                </div>
                            </div>

                            <div className="input-group input-group-merge">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon33" />
                                <span className="input-group-text" id="basic-addon33">@example.com</span>
                            </div>

                            <div className="input-group input-group-merge">
                                <span className="input-group-text" id="basic-addon34">https://example.com/users/</span>
                                <input type="text" className="form-control" id="basic-url3" aria-describedby="basic-addon34" />
                            </div>

                            <div className="input-group input-group-merge">
                                <span className="input-group-text">$</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="100"
                                    aria-label="Amount (to the nearest dollar)" />
                                <span className="input-group-text">.00</span>
                            </div>

                            <div className="input-group input-group-merge">
                                <span className="input-group-text">With textarea</span>
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Sizing --> */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Sizing</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <div className="input-group input-group-lg">
                                <span className="input-group-text">@</span>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">@</span>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>

                            <div className="input-group input-group-sm">
                                <span className="input-group-text">@</span>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Checkbox and radio addons --> */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Checkbox and radio addons</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <div className="input-group">
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="checkbox"
                                        value=""
                                        aria-label="Checkbox for following text input" />
                                </div>
                                <input type="text" className="form-control" aria-label="Text input with checkbox" />
                            </div>

                            <div className="input-group">
                                <div className="input-group-text">
                                    <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        value=""
                                        aria-label="Radio button for following text input" />
                                </div>
                                <input type="text" className="form-control" aria-label="Text input with radio button" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* <!-- Multiple inputs & addon --> */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Multiple inputs & addon</h5>

                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <small className="text-light fw-medium d-block">Multiple inputs</small>
                            <div className="input-group">
                                <span className="input-group-text">First and last name</span>
                                <input type="text" aria-label="First name" className="form-control" />
                                <input type="text" aria-label="Last name" className="form-control" />
                            </div>

                            <small className="text-light fw-medium d-block pt-3">Multiple addons</small>
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <span className="input-group-text">0.00</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Dollar amount (with dot and two decimal places)" />
                            </div>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-label="Dollar amount (with dot and two decimal places)" />
                                <span className="input-group-text">$</span>
                                <span className="input-group-text">0.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Speech To Text --> */}
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Speech To Text</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <small className="text-light fw-medium d-block">Input Group</small>

                            <div className="input-group input-group-merge speech-to-text">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Say it"
                                    aria-describedby="text-to-speech-addon" />
                                <span className="input-group-text" id="text-to-speech-addon">
                                    <i className="bx bx-microphone cursor-pointer text-to-speech-toggle"></i>
                                </span>
                            </div>

                            <small className="text-light fw-medium d-block pt-3">Textarea</small>

                            <div className="input-group input-group-merge speech-to-text">
                                <textarea className="form-control" placeholder="Say it" rows="2"></textarea>
                                <span className="input-group-text">
                                    <i className="bx bx-microphone cursor-pointer text-to-speech-toggle"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Button with dropdowns & addons --> */}
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <h5 className="card-header">Button with dropdowns & addons</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <small className="text-light fw-medium d-block">Button addons</small>
                            <div className="input-group">
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1" />
                            </div>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="button-addon2" />
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
                            </div>

                            <div className="input-group">
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button">Button</button>
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button">Button</button>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    aria-label="Example text with two button addons" />
                            </div>

                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username with two button addons" />
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button">Button</button>
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button">Button</button>
                            </div>

                            <small className="text-light fw-medium d-block pt-3">Button with dropdowns</small>
                            <div className="input-group">
                                <button aria-label='Click me'
                                    className="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a aria-label="dropdown item action" className="dropdown-item" href="#">Action</a></li>
                                    <li><a aria-label="dropdown item another action" className="dropdown-item" href="#">Action action</a></li>
                                    <li><a aria-label="dropdown item something else here" className="dropdown-item" href="#">Action else here</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                            </div>

                            <div className="input-group">
                                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                                <button aria-label='Click me'
                                    className="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a aria-label="dropdown item action" className="dropdown-item" href="#">Action</a></li>
                                    <li><a aria-label="dropdown item another action" className="dropdown-item" href="#">Action action</a></li>
                                    <li><a aria-label="dropdown item something else here" className="dropdown-item" href="#">Action else here</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>

                            <div className="input-group">
                                <button aria-label='Click me'
                                    className="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a aria-label="dropdown item action" className="dropdown-item" href="#">Action before</a></li>
                                    <li><a aria-label="dropdown item another action" className="dropdown-item" href="#">Action action before</a></li>
                                    <li><a aria-label="dropdown item something else here" className="dropdown-item" href="#">Action else here</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                                <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
                                <button aria-label='Click me'
                                    className="btn btn-outline-primary dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a aria-label="dropdown item action" className="dropdown-item" href="#">Action</a></li>
                                    <li><a aria-label="dropdown item another action" className="dropdown-item" href="#">Action action</a></li>
                                    <li><a aria-label="dropdown item something else here" className="dropdown-item" href="#">Action else here</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    {/* <!-- Segmented buttons --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <h5 className="card-header">Segmented buttons</h5>
                                <div className="card-body demo-vertical-spacing demo-only-element">
                                    <div className="input-group">
                                        <button aria-label='Click me' type="button" className="btn btn-outline-primary">Action</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a aria-label="dropdown item action" className="dropdown-item" href="#">Action</a></li>
                                            <li><a aria-label="dropdown item another action" className="dropdown-item" href="#">Action action</a></li>
                                            <li><a aria-label="dropdown item something else here" className="dropdown-item" href="#">Action else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-label="Text input with segmented dropdown button" />
                                    </div>

                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            aria-label="Text input with segmented dropdown button" />
                                        <button aria-label='Click me' type="button" className="btn btn-outline-primary">Action</button>
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a aria-label="dropdown item action" className="dropdown-item" href="#">Action</a></li>
                                            <li><a aria-label="dropdown item another action" className="dropdown-item" href="#">Action action</a></li>
                                            <li><a aria-label="dropdown item something else here" className="dropdown-item" href="#">Action else here</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Custom select --> */}
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <h5 className="card-header">Custom select</h5>
                                <div className="card-body demo-vertical-spacing demo-only-element">
                                    <div className="input-group">
                                        <label className="input-group-text" for="inputGroupSelect01">Options</label>
                                        <select className="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <select className="form-select" id="inputGroupSelect02">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label className="input-group-text" for="inputGroupSelect02">Options</label>
                                    </div>

                                    <div className="input-group">
                                        <button aria-label='Click me' className="btn btn-outline-primary" type="button">Button</button>
                                        <select
                                            className="form-select"
                                            id="inputGroupSelect03"
                                            aria-label="Example select with button addon">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <select
                                            className="form-select"
                                            id="inputGroupSelect04"
                                            aria-label="Example select with button addon">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <button aria-label='Click me' className="btn btn-outline-primary" type="button">Button</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Custom file input --> */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <h5 className="card-header">Custom file input</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                            <div className="input-group">
                                <label className="input-group-text" for="inputGroupFile01">Upload</label>
                                <input type="file" className="form-control" id="inputGroupFile01" />
                            </div>

                            <div className="input-group">
                                <input type="file" className="form-control" id="inputGroupFile02" />
                                <label className="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>

                            <div className="input-group">
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">Button</button>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile03"
                                    aria-describedby="inputGroupFileAddon03"
                                    aria-label="Upload" />
                            </div>

                            <div className="input-group">
                                <input
                                    type="file"
                                    className="form-control"
                                    id="inputGroupFile04"
                                    aria-describedby="inputGroupFileAddon04"
                                    aria-label="Upload" />
                                <button aria-label='Click me' className="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Button</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
