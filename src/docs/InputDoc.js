import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import Input from '../lib/components/input/index'
import '../lib/components/shared.css'

export default function ButtonDoc () {

  const code = `() => {
  const [ state, setState ] = React.useState('0');

  return <>
    <Input 
      className="w-100" 
      type="number" 
      name="num" 
      onChange={(e)=> { setState(e.target.value); }} 
      value={state} 
    />
    <p>{state}</p>
  </>
}`;

  return (<div className="doc">
    <h1>Input</h1>
    <p>The Input is a component that is used to get user input in a text field.</p>

    <h3>Import</h3>
    <pre><code className="language-js">import &#123; Input &#125; from "air-react</code></pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code}
      bindings={{Input}}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}