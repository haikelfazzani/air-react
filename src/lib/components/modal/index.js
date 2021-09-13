import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Portal ({ children }) {
  return ReactDOM.createPortal(
    <div className="modal d-flex justify-between align-center">{children}</div>, document.getElementById('modal')
  );
}

export default function Modal ({ children, show, setShow }) {
  return (<>
    {show && <Portal>
      <button className="btn btn-close-modal lg" onClick={() => { setShow(!show) }}>x</button>
      <div className="modal-content box scale">{children}</div>
    </Portal>}
  </>);
}