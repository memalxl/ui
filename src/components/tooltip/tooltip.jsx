import React, { useState } from 'react';
import './tooltip.css';

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <span 
      className="tooltip-wrapper" 
      onMouseEnter={() => setShow(true)} 
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <span className="tooltip">{text}</span>}
    </span>
  );
};

export default Tooltip;
