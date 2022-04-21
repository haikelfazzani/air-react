import React from 'react';
import './index.css';

export function Select(props: any) {
  return <button {...props}>{props.children}</button>;
}