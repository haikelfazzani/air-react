import React from 'react';
import './index.css';

export function Checkbox(props: any) {
  return <button {...props}>{props.children}</button>;
}