import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Modal from '../lib/modal/index'

export default function ModalDoc () {

  const [show, setShow] = useState(false);

  const code = `const [show, setShow] = useState(false);

<button onClick={() => { setShow(!show) }}>click here</button>

<Modal show={show} setShow={setShow}>
  <div>Hello</div>
</Modal>`;

  return (<>

    <button className="btn" onClick={() => { setShow(!show) }}>click here</button>

    <Modal show={show} setShow={setShow}>
      <div>Hello</div>
    </Modal>

    <SyntaxHighlighter language="jsx" style={darcula}>{code}</SyntaxHighlighter>
  </>);
}