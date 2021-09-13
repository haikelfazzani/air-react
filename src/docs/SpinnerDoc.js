import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import Spinner from '../lib/components/spinner/index'
import '../lib/components/shared.css'

export default function ButtonDoc () {

  const code = `
  <Spinner size="sm" />
`;

  return (<div className="doc">
    <h1>Spinner</h1>
    <p>Spinners provide a visual cue that an action is either processing, awaiting a course of change or a result.</p>

    <h3>Import</h3>
    <pre><code className="language-js">import &#123; Spinner &#125; from "air-react</code></pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code}
      bindings={{Spinner}}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}