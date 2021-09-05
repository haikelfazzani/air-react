import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Button ({ children, onClick, className, type = "button" }) {
  return (<button
    className={className}
    type={type}
    onClick={onClick}>
    {children}
  </button>)
}

Button.propTypes = {
  children: PropTypes.element | PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string
}
