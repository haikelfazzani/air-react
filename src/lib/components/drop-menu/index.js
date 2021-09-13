import React, { useState } from 'react';

import "./index.css";

export default function DropMenu ({ children, text }) {

  const [active, setActive] = useState(false);

  const onToggle = () => {
    setActive(!active);
  }

  return (<div className="drop-menu">

    <button className="btn" onClick={onToggle}>{text}</button>

    <ul className="drop-menu-items"
      style={{ display: active ? 'block' : 'none' }}>
      {children}
    </ul>
  </div>);
}