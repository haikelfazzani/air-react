import React from 'react';
import ReactMarkdown from 'react-markdown'

import Navbar from '../lib/navbar/index'

export default function NavbarDoc () {

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
    <Navbar />
  </>);
}