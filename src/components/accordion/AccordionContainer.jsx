// AccordionContainer.js
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const AccordionContainer = ({ title, items }) => {
  const [activeItem, setActiveItem] = useState(1);

  const handleToggle = (id) => {
    setActiveItem(id === activeItem ? null : id);
  };

  return (
    <div className="col-md mb-4 mb-md-2">
      <small className="text-light fw-medium">{title}</small>
      <div className="accordion mt-3" id="accordionExample">
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            {...item}
            isActive={item.active}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionContainer;
