import React from 'react';
import Switch from '../lib/components/switch/index'

import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'

export default function SwitchDoc () {
  const code = `function App() {
    
  const [status, seStatus] = React.useState(false);

  return <>
    <Switch 
      text="Change theme"
      name="theme"    
      onChange={(e) => seStatus(e.target.checked) } 
      checked={status} 
    />
    {document.body.style.background = status ? '#f1f1f1':''}
  </>
}

render(<App />)`;

  return (<div className="doc">
    <h1>Switch</h1>
    <p>The Switch component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.</p>

    <h3>Import</h3>
    <pre>import &#123; Switch &#125; from "air-react</pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code} bindings={{Switch}}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}