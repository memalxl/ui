import React from 'react';
import './input.css';

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  defaultValue = '', 
  onChange, 
  disabled, 
  label, 
  danger 
}) => {
  return (
    <div className={`input-wrapper ${danger ? 'danger' : ''}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        className={`input-field ${danger ? 'danger' : ''}`}
      />
    </div>
  );
};

export default Input;
