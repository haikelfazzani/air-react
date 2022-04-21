import React from 'react';
import './index.css';

export function Skeleton(props: any) {
  return <button {...props}>{props.children}</button>;
}

export function SkeletonBar(props: any) {
  return <div {...props} className={'bar ' + props.className}></div>;
}

export function SkeletonCircle(props: any) {
  return <div {...props} className='circle rounded'></div>;
}

export function SkeletonSquare(props: any) {
  return <div {...props} className={'square ' + props.className}></div>;
}

export function SkeletonImage(props: any) {
  return <div className={'image ' + props.className}>
    <span></span>
  </div>;
}