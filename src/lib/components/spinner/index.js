import React from 'react'

export default function Spinner ({ size }) {
  return <div className={"spinner rotate " + (size || 'sm')}></div>;
}