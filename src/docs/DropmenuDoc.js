import React from 'react';
import DropMenu from '../lib/components/drop-menu/index'
import '../lib/components/shared.css'

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
    <p>The DropMenu component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.</p>

    <h3>Import</h3>
    <pre>import &#123; DropMenu &#125; from "air-react</pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code} bindings={{DropMenu}}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}