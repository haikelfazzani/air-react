import React from 'react';
import Button from '../lib/button/index'

import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';

export default function ButtonDoc () {

  const code = `<Button 
  className="btn" type="button" onClick={()=> {
    alert('ok' )
  }}>Click here
</Button>`;

  return (<div className="doc">
    <h1>Button</h1>
    <p>The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>

    <h3>Import</h3>
    <pre><code class="language-js">import &#123; Button &#125; from "air-react</code></pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code}
      bindings={{Button}}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}