import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export const AccountWrapper = ({ title,children }) => {
    const navData = [{ link: '/account/settings', name: 'Account' }, { link: '/account/notifications', name: 'Notifications' }, { link: '/account/connections', name: 'Connections' }];
    const renderMenuItem = (item, index) => {
        const location = useLocation();
        const isActive = location.pathname === item.link;
        return (
            <li key={index} className="nav-item">
                <Link className={`nav-link ${isActive ? 'active' : ''}`} to={item.link}><i className="bx bx-user me-1"></i>{item.name}</Link>
            </li>
        )
    };
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Account Settings /</span> {title}</h4>

            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-pills flex-column flex-md-row mb-3">
                        {navData.map(renderMenuItem)}
                    </ul>
                        {children}
                </div>
            </div>
        </>
    )
}
