import React from 'react';
import './index.css';

export function Button(props: any) {
  return <button {...props}>{props.children}</button>;
}