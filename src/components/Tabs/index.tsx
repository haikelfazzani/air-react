import React, { ReactChild, ReactChildren, useState } from 'react';
import './index.css';

interface IProps {
  children: any
}

export function Tabs ({children}: IProps) {

  const [index, setIndex] = useState(0);

  const onTab = (tabIndex:number) => {
    setIndex(tabIndex)
  }

  return (<div className="tabs">
    <ul>
      {children.map((child:any, i:number) => <li className={index === i ? "active" : ""}
        key={i} onClick={() => onTab(i)}>{child.props.label}</li>)}
    </ul>

    <div>
      {children[index].props.children}
    </div>
  </div>)
}
