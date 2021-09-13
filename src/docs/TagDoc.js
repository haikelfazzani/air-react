import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto';
import Tag from '../lib/components/tag/index'
import '../lib/components/shared.css'
import '../lib/components/util.css'

export default function ButtonDoc () {

  const code = `<Tag className="tag bg-red white sm" text="Hello world" />`;

  return (<div className="doc">
    <h1>Tag</h1>
    <p>The Tag is very useful as a way to attach information to a block or other component.</p>

    <h3>Import</h3>
    <pre><code className="language-js">import &#123; Tag &#125; from "air-react</code></pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code} bindings={{Tag}}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}