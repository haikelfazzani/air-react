import React from 'react';
import {DropMenu} from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'

export default function DropmenuDoc () {
  const code = `() => {
    
  const [show, setShow] = React.useState(false);

  return <>
    <DropMenu text={<div>drop</div>}>
      <li>a</li>
      <li>b</li>
    </DropMenu>
  </>
}`;

  return (<div className="doc">
    <h1>DropMenu</h1>
    <p>dropdown menu button.</p>

    <h3># Import</h3>
    <LiveProvider code={`import { DropMenu } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ DropMenu }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}