import React from "react";
import PropTypes from "prop-types";
import "./tooltip.css";

function Tooltip({ text, position, children }) { 
  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip-text tooltip-${position}`}>
        {text}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
