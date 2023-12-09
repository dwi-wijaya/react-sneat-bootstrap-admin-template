// Accordion.js
import React from 'react';

const AccordionItem = ({ id, title, content, isActive, onToggle }) => (
  <div className={`card accordion-item ${isActive ? 'active' : ''}`}>
    <h2 className="accordion-header" id={`heading${id}`}>
      <button 
        type="button"
        className="accordion-button"
        data-bs-toggle="collapse"
        aria-label='Click me'
        data-bs-target={`#accordion${id}`}
        aria-expanded={isActive ? 'true' : 'false'}
        aria-controls={`accordion${id}`}
        onClick={() => onToggle(id)}
      >
        {title}
      </button>
    </h2>
    <div
      id={`accordion${id}`}
      className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
    >
      <div className="accordion-body">{content}</div>
    </div>
  </div>
);

export default AccordionItem;
