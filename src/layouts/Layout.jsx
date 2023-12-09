import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    Main();
  },[])
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page ">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
            {children}
            </div>
            <Footer />
          </div>
        </div>
      <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  );
};

export default Layout;
