import React, { useState } from 'react';

export default function Modal ({ children }) {

  const [show, setShow] = useState(false);

  return (<div className="modal" style={{ display: show ? 'flex' : 'none' }}>

    <button className="btn btn-close-modal" onClick={() => { setShow(!show) }}>x</button>

    <div className="modal-content">
      {children}
    </div>

  </div>);
}