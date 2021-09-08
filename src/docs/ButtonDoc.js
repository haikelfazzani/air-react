import React from 'react';
import Button from '../lib/button/index'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'live-reacto'


export default function ButtonDoc () {

  const code = `function App() {
  return <Button 
    className="btn" type="button" onClick={()=> {
      alert('ok' )
    }}>Click here
  </Button>
}

render(<App />)`;

  return (<div className="doc">
    <h1>Button</h1>
    <p>The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>

    <h3>Import</h3>
    <pre>import &#123; Button &#125; from "air-react</pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code}
      externals={[ // add an external component or library (styledComponent, etc..)
        { name: 'Button', lib: Button }
      ]}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
      <LiveError />
    </LiveProvider>
  </div>);
}