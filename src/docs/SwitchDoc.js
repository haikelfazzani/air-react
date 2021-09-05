import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Switch from '../lib/switch/index'

export default function SwitchDoc () {

  const [status, seStatus] = useState(false);
  const code = `const [status, seStatus] = useState(false);

<Switch 
  className="color-orange"
  onToggle={() => { 
    seStatus(!status)
  }} 
  status={status} 
/>`;

  return (<>
    <Switch onToggle={() => { seStatus(!status)}} status={status} />
    <SyntaxHighlighter language="jsx" style={darcula}>{code}</SyntaxHighlighter>
  </>);
}