import { AccountWrapper } from "../../components/wrapper/AccountWrapper";

export const Connections = () => {
    return (
        <AccountWrapper title="Connection">
            <div className="row">
                <div className="col-md-6 col-12 mb-md-0 mb-4">
                    <div className="card">
                        <h5 className="card-header">Connected Accounts</h5>
                        <div className="card-body">
                            <p>
                                Display content from your connected accounts on your site
                            </p>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/google.png"
                                        alt="google"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-9 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Google</h6>
                                        <small className="text-muted">
                                            Calendar and contacts
                                        </small>
                                    </div>
                                    <div className="col-3 text-end">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input float-end"
                                                type="checkbox"
                                                role="switch"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/slack.png"
                                        alt="slack"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-9 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Slack</h6>
                                        <small className="text-muted">Communication</small>
                                    </div>
                                    <div className="col-3 text-end">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input float-end"
                                                type="checkbox"
                                                role="switch"
                                                checked
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/github.png"
                                        alt="github"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-9 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Github</h6>
                                        <small className="text-muted">
                                            Manage your Git repositories
                                        </small>
                                    </div>
                                    <div className="col-3 text-end">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input float-end"
                                                type="checkbox"
                                                role="switch"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/mailchimp.png"
                                        alt="mailchimp"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-9 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Mailchimp</h6>
                                        <small className="text-muted">
                                            Email marketing service
                                        </small>
                                    </div>
                                    <div className="col-3 text-end">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input float-end"
                                                type="checkbox"
                                                role="switch"
                                                checked
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/asana.png"
                                        alt="asana"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-9 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Asana</h6>
                                        <small className="text-muted">Communication</small>
                                    </div>
                                    <div className="col-3 text-end">
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input float-end"
                                                type="checkbox"
                                                role="switch"
                                                checked
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="card">
                        <h5 className="card-header">Social Accounts</h5>
                        <div className="card-body">
                            <p>Display content from social accounts on your site</p>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/facebook.png"
                                        alt="facebook"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Facebook</h6>
                                        <small className="text-muted">Not Connected</small>
                                    </div>
                                    <div className="col-4 col-sm-5 text-end">
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-icon btn-outline-secondary"
                                        >
                                            <i className="bx bx-link-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/twitter.png"
                                        alt="twitter"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Twitter</h6>
                                        <a
                                            href="https://twitter.com/Theme_Selection"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            @ThemeSelection
                                        </a>
                                    </div>
                                    <div className="col-4 col-sm-5 text-end">
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-icon btn-outline-danger"
                                        >
                                            <i className="bx bx-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/instagram.png"
                                        alt="instagram"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                        <h6 className="mb-0">instagram</h6>
                                        <a
                                            href="https://www.instagram.com/themeselection/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            @ThemeSelection
                                        </a>
                                    </div>
                                    <div className="col-4 col-sm-5 text-end">
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-icon btn-outline-danger"
                                        >
                                            <i className="bx bx-trash-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/dribbble.png"
                                        alt="dribbble"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Dribbble</h6>
                                        <small className="text-muted">Not Connected</small>
                                    </div>
                                    <div className="col-4 col-sm-5 text-end">
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-icon btn-outline-secondary"
                                        >
                                            <i className="bx bx-link-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img
                                        src="../assets/img/icons/brands/behance.png"
                                        alt="behance"
                                        className="me-3"
                                        height="30"
                                    />
                                </div>
                                <div className="flex-grow-1 row">
                                    <div className="col-8 col-sm-7 mb-sm-0 mb-2">
                                        <h6 className="mb-0">Behance</h6>
                                        <small className="text-muted">Not Connected</small>
                                    </div>
                                    <div className="col-4 col-sm-5 text-end">
                                        <button aria-label='Click me'
                                            type="button"
                                            className="btn btn-icon btn-outline-secondary"
                                        >
                                            <i className="bx bx-link-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AccountWrapper>
    );
};
