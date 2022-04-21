import React, { useState } from 'react';
import "./index.css";

export function Dropdown ({ children, text }: any) {

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