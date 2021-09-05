import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown'

import Button from '../lib/button/index'

export default function ButtonDoc () {

  const code = `<Button 
  className="btn"
  type="button" 
  onClick={()=> {
    alert('ok' )
  }}
/>Click here</Button>`;

const markdown = `# Button
The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

## Import
import { Button } from "air-react"
`;

  return (<>
    <ReactMarkdown children={markdown} />
    <Button className="btn" onClick={() => { alert('ok') }}>Click here</Button>
    
    <SyntaxHighlighter language="jsx" style={darcula}>{code}</SyntaxHighlighter>
  </>);
}