import React from 'react';

export default function Button (props) {
  return (<button
    {...props}
    onClick={props.onClick}>
    {props.children}
  </button>)
}
