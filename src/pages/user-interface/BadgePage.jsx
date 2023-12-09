// BadgesPage.js
import React from 'react';
import Badge from '../../components/atoms/Badges';

export const BadgesPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">UI elements /</span> Badges
            </h4>

            <div className="row">
                {/* Basic Badges */}
                <div className="col-lg">
                    <div className="card mb-4">
                        <h5 className="card-header">Basic Badges</h5>
                        <div className="card-body">
                            <div className="text-light small fw-medium">Default</div>
                            <div className="demo-inline-spacing">
                                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                    <Badge key={index} type={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</Badge>
                                ))}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="card-body">
                            <div className="text-light small fw-medium">Pills</div>
                            <div className="demo-inline-spacing">
                                {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                    <Badge key={index} type={type} rounded>{type.charAt(0).toUpperCase() + type.slice(1)}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Label Badges */}
                <div className="col-lg">
                    <div className="card mb-4">
                        <h5 className="card-header">Label Badges</h5>
                        <div className="card-body">
                            <div className="text-light small fw-medium">Label Default</div>
                            <div className="demo-inline-spacing">
                                {['label-primary', 'label-secondary', 'label-success', 'label-danger', 'label-warning', 'label-info', 'label-dark'].map((type, index) => (
                                    <Badge key={index} type={type}>{type.charAt(6).toUpperCase() + type.slice(7)}</Badge>
                                ))}
                            </div>
                        </div>
                        <hr className="m-0" />
                        <div className="card-body">
                            <div className="text-light small fw-medium">Label Pills</div>
                            <div className="demo-inline-spacing">
                                {['label-primary', 'label-secondary', 'label-success', 'label-danger', 'label-warning', 'label-info', 'label-dark'].map((type, index) => (
                                    <Badge key={index} type={type} rounded>{type.charAt(6).toUpperCase() + type.slice(7)}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Button with Badges */}
                <div className="col-lg">
                    <div className="card mb-4">
                        <h5 className="card-header">Button with Badges</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <small className="text-light fw-medium">Default</small>
                                    <div className="demo-inline-spacing">
                                        <button aria-label='Click me' type="button" className="btn btn-primary">
                                            Text
                                            <Badge type="white" label="4" textType='primary' />
                                        </button>
                                        <button aria-label='Click me' type="button" className="btn btn-primary">
                                            Text
                                            <Badge type="secondary" rounded label="4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <small className="text-light fw-medium">Outline</small>
                                    <div className="demo-inline-spacing">
                                        <button aria-label='Click me' type="button" className="btn btn-outline-primary">
                                            Text
                                            <Badge label="4" />
                                        </button>
                                        <button aria-label='Click me' type="button" className="btn btn-outline-secondary">
                                            Text
                                            <Badge type="secondary" rounded label="4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Badge Circle */}
                <div className="col-12">
                    <div className="card mb-4">
                        <h5 className="card-header">Badge Circle & Square Style</h5>
                        <div className="card-body">
                            <div className="row gy-3">
                                <div className="col-xl-6">
                                    <h6>Basic</h6>
                                    <div className="text-light small fw-medium mb-2">Default</div>
                                    <div className="demo-inline-spacing">
                                        <p>{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                            <Badge key={index} type={`${type}`} rounded>{index}</Badge>
                                        ))}</p>

                                        <p>
                                            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                                <Badge key={index} type={`${type}`} >{index}</Badge>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <h6>Label</h6>
                                    <div className="text-light small fw-medium mb-2">Default</div>
                                    <div className="demo-inline-spacing">
                                        <p>{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                            <Badge key={index} type={`label-${type}`} rounded>{index}</Badge>
                                        ))}</p>
                                        <p>{['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((type, index) => (
                                            <Badge key={index} type={`label-${type}`} >{index}</Badge>
                                        ))}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
