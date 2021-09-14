import React from 'react';
import './index.css'

export default function Badge (props) {
  return <span {...props}>{props.text}</span>
}
