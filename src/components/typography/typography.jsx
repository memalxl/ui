import React from 'react';
import './typography.css';

const Typography = ({ variant = 'p', children, ...props }) => {
  const Tag = variant;
  return <Tag {...props}>{children}</Tag>;
};

export default Typography;
