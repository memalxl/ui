import React from 'react';
import './index.css';

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="button">
    {children}
  </button>
);

export default Button;
