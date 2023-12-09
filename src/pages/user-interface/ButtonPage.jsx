// ButtonPage.js
import React from 'react';
import Button from '../../components/atoms/Buttons';

export const ButtonPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">UI elements /</span> Buttons
            </h4>

            <div className="row">
                {/* Basic Buttons */}
                <div className="col-12">
                    <div className="card mb-4">
                        <h5 className="card-header">Basic Buttons</h5>
                        <div className="card-body">
                            <div className="text-light small fw-medium">Default</div>
                            <div className="demo-inline-spacing">
                                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                    <Button key={index} type={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
                                ))}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="card-body">
                            <div className="text-light small fw-medium">Pills</div>
                            <div className="demo-inline-spacing">
                                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                    <Button key={index} type={type} rounded>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Label Buttons */}
                <div className="col-12">
                    <div className="card mb-4">
                        <h5 className="card-header">Outline Buttons</h5>
                        <div className="card-body">
                            <div className="text-light small fw-medium">Label Default</div>
                            <div className="demo-inline-spacing">
                                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                    <Button key={index} outline type={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
                                ))}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="card-body">
                            <div className="text-light small fw-medium">Label Pills</div>
                            <div className="demo-inline-spacing">
                                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                    <Button key={index} type={type} rounded outline>{type.charAt(0).toUpperCase() + type.slice(1)}</Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card mb-4">
                    <h5 className="card-header">Buttons with Icons</h5>
                    <div className="card-body">
                        <div className="row gy-3">
                            <div className="col-md-6 col-lg-4">
                                <small className="text-light fw-medium">Basic</small>
                                <div className="demo-inline-spacing">
                                    <Button type="Button" className="btn btn-primary">
                                        <span className="tf-icons bx bx-pie-chart-alt me-1"></span>Primary
                                    </Button>
                                    <Button type="Button" className="btn btn-secondary">
                                        <span className="tf-icons bx bx-bell me-1"></span>Secondary
                                    </Button>
                                </div>
                                <div className="demo-inline-spacing">
                                    <Button type="Button" className="btn rounded-pill btn-primary">
                                        <span className="tf-icons bx bx-pie-chart-alt me-1"></span>Primary
                                    </Button>
                                    <Button type="Button" className="btn rounded-pill btn-secondary">
                                        <span className="tf-icons bx bx-bell"></span>&nbsp; Secondary
                                    </Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <small className="text-light fw-medium">Outline</small>
                                <div className="demo-inline-spacing">
                                    <Button type="Button" className="btn btn-outline-primary">
                                        <span className="tf-icons bx bx-pie-chart-alt me-1"></span>Primary
                                    </Button>
                                    <Button type="Button" className="btn btn-outline-secondary">
                                        <span className="tf-icons bx bx-bell me-1"></span>Secondary
                                    </Button>
                                </div>
                                <div className="demo-inline-spacing">
                                    <Button type="Button" className="btn rounded-pill btn-outline-primary">
                                        <span className="tf-icons bx bx-pie-chart-alt me-1"></span>Primary
                                    </Button>
                                    <Button type="Button" className="btn rounded-pill btn-outline-secondary">
                                        <span className="tf-icons bx bx-bell me-1"></span>Secondary
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="m-0" />
                    <div className="card-body">
                        <div className="row gy-3">
                            <div className="col-md-6 col-lg-4">
                                <small className="text-light fw-medium">Basic</small>
                                <div className="demo-inline-spacing">
                                    <Button type='primary'>
                                        <span className="tf-icons bx bx-pie-chart-alt"></span>
                                    </Button>
                                    <Button type='secondary'>
                                        <span className="tf-icons bx bx-bell"></span>
                                    </Button>
                                    <Button type='primary'>
                                        <span className="tf-icons bx bx-pie-chart-alt"></span>
                                    </Button>
                                    <Button type='secondary'>
                                        <span className="tf-icons bx bx-bell"></span>
                                    </Button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <small className="text-light fw-medium">Outline</small>
                                <div className="demo-inline-spacing">
                                    <Button type='primary' outline >
                                        <span className="tf-icons bx bx-pie-chart-alt"></span>
                                    </Button>
                                    <Button type='secondary' outline>
                                        <span className="tf-icons bx bx-bell"></span>
                                    </Button>
                                    <Button type='primary' outline >
                                        <span className="tf-icons bx bx-pie-chart-alt"></span>
                                    </Button>
                                    <Button type='primary' outline >
                                        <span className="tf-icons bx bx-bell"></span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Button Circle */}
                <div className="col-12">
                    <div className="card mb-4">
                        <h5 className="card-header">Button Circle & Square Style</h5>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-xl-6">
                                    <h6>Basic</h6>
                                    <div className="text-light small fw-medium mb-2">Default</div>
                                    <div className="demo-inline-spacing">
                                        <p>{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                            <Button key={index} type={`${type}`} rounded>{index}</Button>
                                        ))}</p>

                                        <p>
                                            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                                <Button key={index} type={`${type}`} >{index}</Button>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <h6>Label</h6>
                                    <div className="text-light small fw-medium mb-2">Default</div>
                                    <div className="demo-inline-spacing">
                                        <p>{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                            <Button key={index} type={`${type}`} rounded>{index}</Button>
                                        ))}</p>
                                        <p>{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                            <Button key={index} type={`${type}`} >{index}</Button>
                                        ))}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card mb-4">
                    <h5 className="card-header">Button Options</h5>
                    <div className="card-body">
                        <small className="text-light fw-medium">Sizes</small>
                        <div className="demo-inline-spacing">
                            <Button type="primary" size='xl'>Button xl</Button>
                            <Button type="primary" size='lg'>Button lg</Button>
                            <Button type="primary" >Button</Button>
                            <Button type="primary" size='sm'>Button sm</Button>
                            <Button type="primary" size='xs'>Button xs</Button>
                        </div>
                    </div>
                    <hr className="m-0" />
                    <div className="card-body">
                        <small className="text-light fw-medium">Buttons State</small>
                        <div className="demo-inline-spacing">
                            <Button type="primary" state="" >Normal</Button>
                            <Button type="primary" state="active" >Active</Button>
                            <Button type="primary" state="disabled" >Disabled</Button>
                        </div>
                    </div>
                    <hr className="m-0" />
                    <div className="card-body">
                        <small className="text-light fw-medium">Block level Buttons</small>
                        <div className="row mt-3">
                            <div className="d-grid gap-2 col-lg-6 mx-auto">
                                <Button type='primary' size='lg'>Button</Button>
                                <Button type='secondary' size='lg'>Button</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

