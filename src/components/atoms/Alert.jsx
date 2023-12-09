// Alert.js
import React from 'react';

const Alert = ({ type, dismissible, children }) => {
  const alertClass = `alert alert-${type} ${dismissible ? ' alert-dismissible' : ''}`;

  return (
    <div className={alertClass} role="alert">
      {children}
      {dismissible && (
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      )}
    </div>
  );
};

export default Alert;
