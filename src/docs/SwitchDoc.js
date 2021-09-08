import React from 'react';
import ReactMarkdown from 'react-markdown'
import Switch from '../lib/switch/index'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'live-reacto'

export default function SwitchDoc () {
  const code = `function App() {
    
  const [status, seStatus] = React.useState(false);

  return <>
    <Switch 
      className="color-orange" onToggle={() => seStatus(!status) } 
      status={status} 
    />
    {document.body.style.background = status ? 'red':''}
  </>
}

render(<App />)`;

  return (<div className="doc">
    <h1>Switch</h1>
    <ReactMarkdown children={`The Switch component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.`} />

    <h3>Import</h3>
    <pre>import &#123; Switch &#125; from "air-react</pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code}
      externals={[ // add an external component or library (styledComponent, etc..)
        { name: 'Switch', lib: Switch }
      ]}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
      <LiveError />
    </LiveProvider>
  </div>);
}