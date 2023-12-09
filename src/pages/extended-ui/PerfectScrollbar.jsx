import React from 'react'
import usePerfectScrollbar from '../../hooks/usePerfectScrollbar';

export const PerfectScrollbarPage = () => {
    usePerfectScrollbar('vertical-example');
    usePerfectScrollbar('horizontal-example');
    usePerfectScrollbar('both-scrollbars-example');
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Extended UI /</span> Perfect Scrollbar</h4>

            <div className="row">
                {/* <!-- Vertical Scrollbar --> */}
                <div className="col-md-6 col-sm-12">
                    <div className="card overflow-hidden mb-4" style={{height: "300px"}}>
                        <h5 className="card-header">Vertical Scrollbar</h5>
                        <div className="card-body" id="vertical-example">
                            <p>
                                Sweet roll I love I love. Tiramisu I love soufflé cake tart sweet roll cotton candy cookie.
                                Macaroon biscuit dessert. Bonbon cake soufflé jelly gummi bears lemon drops. Chocolate bar I
                                love macaroon danish candy pudding. Jelly carrot cake I love tart cake bear claw macaroon candy
                                candy canes. Muffin gingerbread sweet jujubes croissant sweet roll. Topping muffin carrot cake
                                sweet. Toffee chocolate muffin I love croissant. Donut carrot cake ice cream ice cream. Wafer I
                                love pie danish marshmallow cheesecake oat cake pie I love. Icing pie chocolate marzipan jelly
                                ice cream cake.
                            </p>
                            <p>
                                Marzipan oat cake caramels chocolate. Lemon drops cheesecake jelly beans sweet icing pudding
                                croissant. Donut candy canes carrot cake soufflé. Croissant candy wafer pie I love oat cake
                                lemon drops caramels jujubes. I love macaroon halvah liquorice cake. Danish sweet roll pudding
                                cookie sweet roll I love. Jelly cake I love bear claw jujubes dragée gingerbread. I love cotton
                                candy carrot cake halvah biscuit I love macaroon cheesecake tootsie roll. Chocolate cotton candy
                                biscuit I love fruitcake cotton candy biscuit tart gingerbread. Powder oat cake I love.
                                Cheesecake candy canes macaroon I love wafer I love sweet roll ice cream. Toffee cookie macaroon
                                lemon drops tart candy canes. Gummies gummies pie tiramisu I love bear claw cheesecake.
                            </p>
                            <p>
                                Marzipan oat cake caramels chocolate. Lemon drops cheesecake jelly beans sweet icing pudding
                                croissant. Donut candy canes carrot cake soufflé. Croissant candy wafer pie I love oat cake
                                lemon drops caramels jujubes. I love macaroon halvah liquorice cake. Danish sweet roll pudding
                                cookie sweet roll I love. Jelly cake I love bear claw jujubes dragée gingerbread. I love cotton
                                candy carrot cake halvah biscuit I love macaroon cheesecake tootsie roll. Chocolate cotton candy
                                biscuit I love fruitcake cotton candy biscuit tart gingerbread. Powder oat cake I love.
                                Cheesecake candy canes macaroon I love wafer I love sweet roll ice cream. Toffee cookie macaroon
                                lemon drops tart candy canes. Gummies gummies pie tiramisu I love bear claw cheesecake.
                            </p>
                            <p>
                                Sweet roll I love I love. Tiramisu I love soufflé cake tart sweet roll cotton candy cookie.
                                Macaroon biscuit dessert. Bonbon cake soufflé jelly gummi bears lemon drops. Chocolate bar I
                                love macaroon danish candy pudding. Jelly carrot cake I love tart cake bear claw macaroon candy
                                candy canes. Muffin gingerbread sweet jujubes croissant sweet roll. Topping muffin carrot cake
                                sweet. Toffee chocolate muffin I love croissant. Donut carrot cake ice cream ice cream. Wafer I
                                love pie danish marshmallow cheesecake oat cake pie I love. Icing pie chocolate marzipan jelly
                                ice cream cake.
                            </p>
                            <p>
                                Sweet roll I love I love. Tiramisu I love soufflé cake tart sweet roll cotton candy cookie.
                                Macaroon biscuit dessert. Bonbon cake soufflé jelly gummi bears lemon drops. Chocolate bar I
                                love macaroon danish candy pudding. Jelly carrot cake I love tart cake bear claw macaroon candy
                                candy canes. Muffin gingerbread sweet jujubes croissant sweet roll. Topping muffin carrot cake
                                sweet. Toffee chocolate muffin I love croissant. Donut carrot cake ice cream ice cream. Wafer I
                                love pie danish marshmallow cheesecake oat cake pie I love. Icing pie chocolate marzipan jelly
                                ice cream cake.
                            </p>
                            <p>
                                Sweet roll I love I love. Tiramisu I love soufflé cake tart sweet roll cotton candy cookie.
                                Macaroon biscuit dessert. Bonbon cake soufflé jelly gummi bears lemon drops. Chocolate bar I
                                love macaroon danish candy pudding. Jelly carrot cake I love tart cake bear claw macaroon candy
                                candy canes. Muffin gingerbread sweet jujubes croissant sweet roll. Topping muffin carrot cake
                                sweet. Toffee chocolate muffin I love croissant. Donut carrot cake ice cream ice cream. Wafer I
                                love pie danish marshmallow cheesecake oat cake pie I love. Icing pie chocolate marzipan jelly
                                ice cream cake.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!--/ Vertical Scrollbar --> */}

                {/* <!-- Horizontal Scrollbar --> */}
                <div className="col-md-6 col-sm-12">
                    <div className="card overflow-hidden mb-4" style={{height: "300px"}}>
                        <h5 className="card-header">Horizontal Scrollbar</h5>
                        <div className="card-body" id="horizontal-example">
                            <img src="../assets/img/backgrounds/18.jpg" alt="scrollbar-image" />
                        </div>
                    </div>
                </div>
                {/* <!--/ Horizontal Scrollbar --> */}

                {/* <!-- Vertical & Horizontal Scrollbars --> */}
                <div className="col-12">
                    <div className="card overflow-hidden" style={{height: "500px"}}>
                        <h5 className="card-header">Vertical & Horizontal Scrollbars</h5>
                        <div className="card-body" id="both-scrollbars-example">
                            <img src="../assets/img/backgrounds/18.jpg" alt="scrollbar-image" />
                        </div>
                    </div>
                </div>
                {/* <!--/ Vertical & Horizontal Scrollbars --> */}
            </div>
        </div>
    )
}
