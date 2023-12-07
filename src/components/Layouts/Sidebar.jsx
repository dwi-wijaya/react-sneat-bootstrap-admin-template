import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const menuData = [
    {
        header: 'Components',
        items: [
            { text: 'Dashboard', icon: 'bx bx-home', link: '/' },
            { text: 'Cards', icon: 'bx bx-collection', link: '/cards' },
            {
                text: 'User interface',
                icon: 'bx bx-box',
                link: '/ui',
                submenu: [
                    { text: 'Tooltips & Popovers', link: '/tooltip' },
                    { text: 'Typography', link: '/typography' },
                ],
            },
            {
                text: 'Extended UI',
                icon: 'bx bx-copy',
                link: '/extended-ui',
                submenu: [
                    { text: 'Perfect Scrollbar', link: '/tables' },
                    { text: 'Text Divider', link: '/divider' },
                ],
            },
            { text: 'Boxicons', icon: 'bx bx-table', link: '/a' },
        ],
    },
];

const Sidebar = () => {

    const renderMenuItem = (item) => {
      const location = useLocation();
      const isActive = location.pathname === item.link;
      const hasSubmenu = item.submenu && item.submenu.length > 0;
      let isSubmenuActive = hasSubmenu && item.submenu.some(subitem => location.pathname === subitem.link);
      if(isSubmenuActive){
        console.log(item.text);
      }
      return (
        <li key={item.text} className={`menu-item ${isActive || isSubmenuActive ? 'active' : ''} ${hasSubmenu && isSubmenuActive ? 'open' : ''}`}>
          <NavLink to={item.link} className={`menu-link ${item.submenu ? 'menu-toggle' : ''}`}>
            <i className={`menu-icon tf-icons ${item.icon}`}></i>
            <div>{item.text}</div>
          </NavLink>
          {item.submenu && (
            <ul className="menu-sub">{item.submenu.map(renderMenuItem)}</ul>
          )}
        </li>
      );
    };
    
      

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    <span className="app-brand-logo demo">
                        <img src="/assets/img/sneat.svg" alt="" />
                    </span>
                    <span className="app-brand-text demo menu-text fw-bold ms-2">Sneat</span>
                </a>

                <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                {menuData.map((section) => (
                    <React.Fragment key={section.header}>
                        <li className="menu-header small text-uppercase">
                            <span className="menu-header-text">{section.header}</span>
                        </li>
                        {section.items.map(renderMenuItem)}
                    </React.Fragment>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
