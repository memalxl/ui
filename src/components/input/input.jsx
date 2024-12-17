import React from 'react';
import './input.css';

const Input = ({ value, onChange, placeholder }) => (
  <input 
    type="text" 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className="input"
  />
);

export default Input;
