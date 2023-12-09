import React from 'react'

export const TabsPillPage = () => {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">UI elements /</span> Tabs & Pills</h4>

            <h5 className="py-3 my-4">Tabs</h5>

            <div className="row">
                <div className="col-xl-6">
                    <h6 className="text-muted">Basic</h6>
                    <div className="nav-align-top mb-4">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link active"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-top-home"
                                    aria-controls="navs-top-home"
                                    aria-selected="true">
                                    Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-top-profile"
                                    aria-controls="navs-top-profile"
                                    aria-selected="false">
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-top-messages"
                                    aria-controls="navs-top-messages"
                                    aria-selected="false">
                                    Messages
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="navs-top-home" role="tabpanel">
                                <p>
                                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                                    powder. Bear claw candy topping.
                                </p>
                                <p className="mb-0">
                                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                                    jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                                    jujubes sweet.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-top-profile" role="tabpanel">
                                <p>
                                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                                    cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                                    cheesecake fruitcake.
                                </p>
                                <p className="mb-0">
                                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                                    cotton candy liquorice caramels.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-top-messages" role="tabpanel">
                                <p>
                                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                                    cupcake gummi bears cake chocolate.
                                </p>
                                <p className="mb-0">
                                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                                    roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                                    jelly-o tart brownie jelly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <h6 className="text-muted">Filled Tabs</h6>
                    <div className="nav-align-top mb-4">
                        <ul className="nav nav-tabs nav-fill" role="tablist">
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link active"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-justified-home"
                                    aria-controls="navs-justified-home"
                                    aria-selected="true">
                                    <i className="tf-icons bx bx-home me-1"></i><span className="d-none d-sm-block"> Home</span>
                                    <span className="badge rounded-pill badge-center h-px-20 w-px-20 bg-label-danger ms-1">3</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-justified-profile"
                                    aria-controls="navs-justified-profile"
                                    aria-selected="false">
                                    <i className="tf-icons bx bx-user me-1"></i><span className="d-none d-sm-block"> Profile</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-justified-messages"
                                    aria-controls="navs-justified-messages"
                                    aria-selected="false">
                                    <i className="tf-icons bx bx-message-square me-1"></i
                                    ><span className="d-none d-sm-block"> Messages</span>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="navs-justified-home" role="tabpanel">
                                <p>
                                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                                    powder. Bear claw candy topping.
                                </p>
                                <p className="mb-0">
                                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                                    jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                                    jujubes sweet.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-justified-profile" role="tabpanel">
                                <p>
                                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                                    cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                                    cheesecake fruitcake.
                                </p>
                                <p className="mb-0">
                                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                                    cotton candy liquorice caramels.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-justified-messages" role="tabpanel">
                                <p>
                                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                                    cupcake gummi bears cake chocolate.
                                </p>
                                <p className="mb-0">
                                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                                    roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                                    jelly-o tart brownie jelly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Tabs --> */}

            <hr className="container-m-nx mt-5" />

            {/* <!-- Pills --> */}
            <h5 className="py-3 my-4">Pills</h5>

            <div className="row">
                <div className="col-xl-6">
                    <h6 className="text-muted">Basic</h6>
                    <div className="nav-align-top mb-4">
                        <ul className="nav nav-pills mb-3" role="tablist">
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link active"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-home"
                                    aria-controls="navs-pills-top-home"
                                    aria-selected="true">
                                    Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-profile"
                                    aria-controls="navs-pills-top-profile"
                                    aria-selected="false">
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-messages"
                                    aria-controls="navs-pills-top-messages"
                                    aria-selected="false">
                                    Messages
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                                <p>
                                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                                    powder. Bear claw candy topping.
                                </p>
                                <p className="mb-0">
                                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                                    jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                                    jujubes sweet.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                                <p>
                                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                                    cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                                    cheesecake fruitcake.
                                </p>
                                <p className="mb-0">
                                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                                    cotton candy liquorice caramels.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-pills-top-messages" role="tabpanel">
                                <p>
                                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                                    cupcake gummi bears cake chocolate.
                                </p>
                                <p className="mb-0">
                                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                                    roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                                    jelly-o tart brownie jelly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <h6 className="text-muted">Filled Pills</h6>
                    <div className="nav-align-top mb-4">
                        <ul className="nav nav-pills mb-3 nav-fill" role="tablist">
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link active"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-justified-home"
                                    aria-controls="navs-pills-justified-home"
                                    aria-selected="true">
                                    <i className="tf-icons bx bx-home me-1"></i><span className="d-none d-sm-block"> Home</span
                                    ><span className="badge rounded-pill badge-center h-px-20 w-px-20 bg-danger ms-1">3</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-justified-profile"
                                    aria-controls="navs-pills-justified-profile"
                                    aria-selected="false">
                                    <i className="tf-icons bx bx-user me-1"></i><span className="d-none d-sm-block"> Profile</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-justified-messages"
                                    aria-controls="navs-pills-justified-messages"
                                    aria-selected="false">
                                    <i className="tf-icons bx bx-message-square me-1"></i
                                    ><span className="d-none d-sm-block"> Messages</span>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">
                                <p>
                                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                                    powder. Bear claw candy topping.
                                </p>
                                <p className="mb-0">
                                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                                    jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                                    jujubes sweet.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                                <p>
                                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                                    cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                                    cheesecake fruitcake.
                                </p>
                                <p className="mb-0">
                                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                                    cotton candy liquorice caramels.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-pills-justified-messages" role="tabpanel">
                                <p>
                                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                                    cupcake gummi bears cake chocolate.
                                </p>
                                <p className="mb-0">
                                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                                    roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                                    jelly-o tart brownie jelly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Pills --> */}
        </>
    )
}
