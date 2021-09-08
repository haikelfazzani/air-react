import React, { useState } from 'react';
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
  </>);
}