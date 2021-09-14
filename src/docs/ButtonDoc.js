import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import { Button } from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

export default function ButtonDoc () {

  const code = `<Button 
  className="btn" type="button" onClick={()=> {
    alert('ok' )
  }}>Click here
</Button>`;

  return (<div className="doc">
    <h1>Button</h1>
    <p>The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>

    <h3># Import</h3>
    <LiveProvider code={`import { Button } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ Button }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}