import React from 'react';
import { Tabs } from '../lib/components/tabs/index'

import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'

export default function SwitchDoc () {
  const code = `<Tabs>
  <div label={<div>a</div>}>a content</div>
  <div label={<div>b</div>}>b content</div>
  <div label={<div>c</div>}>c content</div>
</Tabs>`;

  return (<div className="doc">
    <h1>Tabs</h1>

    <h3>Import</h3>
    <pre>import &#123; Tabs &#125; from "air-react</pre>

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