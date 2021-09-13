import React, { useState } from 'react';
import './index.css';

export function Tabs (props) {

  const [index, setIndex] = useState(0);

  const onTab = tabIndex =>{
    setIndex(tabIndex)
  }

  return (<div className="tabs">
    <ul>
      {props.children.map((child, i) => <li key={i} onClick={() => onTab(i)}>{child.props.label}</li>)}
    </ul>

    <div>
      {props.children[index].props.children}
    </div>
  </div>)
}
