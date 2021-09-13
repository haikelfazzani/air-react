import React, { useState } from 'react';
import Modal from '../lib/modal/index'

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

    <h3>Import</h3>
    <pre><code className="language-js">import &#123; Modal &#125; from "air-react</code></pre>

    <h3>Usage</h3>
    <pre><code className="language-jsx">{code}</code></pre>

    <button className="btn" onClick={() => { setShow(!show) }}>click here</button>

    <Modal show={show} setShow={setShow}>
      <div>Hello</div>
    </Modal>
  </>);
}