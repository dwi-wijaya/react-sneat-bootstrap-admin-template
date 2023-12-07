// Import necessary React modules
import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

// Define the main layout component
const Layout = () => {
  useEffect(() => {
    Main();
  },[])
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <Content />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};



// Export the main Layout component
export default Layout;
