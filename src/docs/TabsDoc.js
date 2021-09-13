import React from 'react';
import { Tabs } from '../lib/tabs/index'

import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'

export default function SwitchDoc () {
  const code = `function App() {
    
  const [status, seStatus] = React.useState(false);

  return <>
    <Tabs>
      <div label="a">a content</div>
      <div label="b">b content</div>
      <div label="c">c content</div>
    </Tabs>
  </>
}

render(<App />)`;

  return (<div className="doc">
    <h1>Tabs</h1>

    <h3>Import</h3>
    <pre>import &#123; Tabs, Tab &#125; from "air-react</pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code} bindings={{ Tabs }}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}