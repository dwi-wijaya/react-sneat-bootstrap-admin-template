import Alert from "../../components/atoms/Alert";

export const AlertPage = () => {
    const alertsType = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'dark'];

    return (
        <>
            <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">UI elements /</span> Accordion
            </h4>
            <h5 className="mt-4">Alerts</h5>
            <div className="row mb-4">
                <div className="col-md mb-4 mb-md-0">
                    <div className="card">
                        <h5 className="card-header">Basic Alerts</h5>
                        <div className="card-body">
                            {alertsType.map((alert) => (
                                <Alert key={alert} type={alert}>
                                    This is a {alert} alert — check it out!
                                </Alert>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md mb-4 mb-md-0">
                    <div className="card">
                        <h5 className="card-header">Dismissable Alerts</h5>
                        <div className="card-body">
                            {alertsType.map((alert) => (
                                <Alert key={alert} type={alert} dismissible>
                                    This is a {alert} alert — check it out!
                                </Alert>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </ >
    );
};
