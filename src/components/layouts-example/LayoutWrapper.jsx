import React from 'react';

 const LayoutWrapper = ({ img, alt, title, explanation }) => (
  <div className="layout-demo-wrapper">
    <div className="layout-demo-placeholder">
      <img
        src={img}
        className="img-fluid"
        alt={alt}
      />
    </div>
    <div className="layout-demo-info">
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: explanation }}/>
    </div>
  </div>
);

export default LayoutWrapper