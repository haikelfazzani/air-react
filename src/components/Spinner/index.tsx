import React from 'react'

export function Spinner ({ size }: any) {
  return <div className={"spinner rotate " + (size || 'sm')}></div>;
}