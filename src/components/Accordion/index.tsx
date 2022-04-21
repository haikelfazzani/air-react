import React from 'react';
import './index.css';

export function Accordion(props: any) {
  return <button {...props}>{props.children}</button>;
}