import React from 'react';
import './index.css';

export default function Switch ({ onToggle, className, status = true }) {
  return (
    <div className={"sc-container " + className}>
      <div className="sc-switch"></div>
      <div onClick={onToggle} className={"sc-checked " + (status ? '' : 'sc-unchecked')}></div>
    </div>
  );
}