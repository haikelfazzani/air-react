import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import { Input } from '../lib/components/index'

import 'prismjs/themes/prism-coy.css'

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

    <h3># Import</h3>
    <LiveProvider code={`import { Input } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ Input }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}