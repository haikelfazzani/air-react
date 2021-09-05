import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Portal ({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>, document.getElementById('modal')
  );
}

export default function Modal ({ children, show, setShow }) {
  return (<>
    {show && <Portal>
      <button className="btn btn-close-modal" onClick={() => { setShow(!show) }}>x</button>
      <div className="modal-content scale">{children}</div>
    </Portal>}
  </>);
}