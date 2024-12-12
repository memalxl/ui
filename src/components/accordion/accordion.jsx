import React, { useState } from "react";
import PropTypes from "prop-types";
import "./accordion.css";

function Accordion({ title, defaultOpen, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className="accordion-toggle">{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  defaultOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Accordion.defaultProps = {
  defaultOpen: false,
};

export default Accordion;
