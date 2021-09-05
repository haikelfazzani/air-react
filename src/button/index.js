import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Button ({ children, onClick, clx, type = "button" }) {
  return (<button
    className={clx}
    type={type}
    onClick={onClick}>
    {children}
  </button>)
}

Button.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  clx: PropTypes.string,
  type: PropTypes.string
}
