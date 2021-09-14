import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'
import { Tabs } from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

export default function SwitchDoc () {
  const code = `<Tabs>
  <div label={<div>a</div>}>a content</div>
  <div label={<div>b</div>}>b content</div>
  <div label={<div>c</div>}>c content</div>
</Tabs>`;

  return (<div className="doc">
    <h1>Tabs</h1>

    <h3># Import</h3>
    <LiveProvider code={`import { Tabs } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ Tabs }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}