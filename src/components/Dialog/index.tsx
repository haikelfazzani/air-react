import React, { ReactChild, ReactChildren, useEffect, useRef } from 'react';
import './index.css';

interface IProps {
  children?: ReactChild | ReactChildren,
  options?: any,
  setIsOpen?: any,
  isOpen?: boolean,
  onConfirm?: ()=> void,
  onCancel?: ()=> void
}

export function Dialog({ children, options, isOpen, setIsOpen, onConfirm, onCancel }: IProps) {
  const boxRef = useRef<any>();

  const onClickAway = (e: any) => {
    if (boxRef.current && !boxRef.current.contains(e.target)) {
      console.log('clicked outside ', isOpen);
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', onClickAway);
    document.addEventListener('touchstart', onClickAway);
    return () => {
      document.removeEventListener('mousedown', onClickAway);
      document.addEventListener('touchstart', onClickAway);
    }
  }, [])

  return (<div className="Dialog" style={{
    display: isOpen ? 'flex' : 'none'
  }}>

    <div className="Dialog-content scale" ref={boxRef}>
      {children}
      <div className="Dialog-actions">
        <button onClick={onCancel}>{options.cancel}</button>
        <button onClick={onConfirm}>{options.confirm}</button>
      </div>
    </div>

  </div>);
}