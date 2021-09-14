import React, { useState } from 'react';
import { LiveProvider, LiveEditor } from 'live-reacto';
import { Modal } from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

export default function ModalDoc () {

  const [show, setShow] = useState(false);

  const code = `// create <div id="modal"></div> in public/index.html
const [show, setShow] = useState(false);

<button onClick={() => { setShow(!show) }}>click here</button>

<Modal show={show} setShow={setShow}>
  <div>Hello</div>
</Modal>`;

  return (<>
    <h1>Modal</h1>
    <p>A dialog is a window overlaid on either the primary window or another dialog window. Content behind a modal dialog is inert, meaning that users cannot interact with it.</p>

    <h3># Import</h3>
    <LiveProvider code={`import { Modal } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <button className="btn mt-3" onClick={() => { setShow(!show) }}>click here</button>

    <Modal show={show} setShow={setShow}>
      <div>Hello</div>
    </Modal>
  </>);
}