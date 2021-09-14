import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import { Spinner } from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

export default function ButtonDoc () {

  const code = `<Spinner size="sm" />`;

  return (<div className="doc">
    <h1>Spinner</h1>
    <p>Spinners provide a visual cue that an action is either processing, awaiting a course of change or a result.</p>

    <h3># Import</h3>
    <LiveProvider code={`import { Spinner } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ Spinner }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}