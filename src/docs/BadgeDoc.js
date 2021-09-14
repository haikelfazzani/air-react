import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import { Badge } from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

export default function BadgeDoc () {

  const code = `<Badge className="badge bg-red white sm" text="Hello world" />`;

  return (<div className="doc">
    <h1>Badge</h1>
    <p>The Badge is very useful as a way to attach information to a block or other component.</p>

    <h3># Import</h3>
    <LiveProvider code={`import { Badge } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ Badge }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}