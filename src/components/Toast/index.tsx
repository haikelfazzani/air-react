import React from 'react';
import './index.css';

export function Toast(props: any) {
  return <button {...props}>{props.children}</button>;
}