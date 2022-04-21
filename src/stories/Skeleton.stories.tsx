import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton, SkeletonBar, SkeletonCircle, SkeletonImage, SkeletonSquare } from '../components/Skeleton/index';

export default { title: 'Skeleton', component: Skeleton } as ComponentMeta<typeof Skeleton>;

export const Circle: ComponentStory<typeof Skeleton> = () => {
  return <div className='w-100 d-flex'>
    <SkeletonCircle />
    <div className='w-100 ml-1'>
      <SkeletonBar />
      <SkeletonBar className='mt-1' />
      <SkeletonBar className='mt-1' />
      <SkeletonBar className='mt-1' />
    </div>
  </div>
}

export const Square: ComponentStory<typeof Skeleton> = () => {
  return <div className='w-100 d-flex'>
    <SkeletonSquare />
    <div className='w-100 ml-1'>
      <SkeletonBar />
      <SkeletonBar className='mt-1' />
      <SkeletonBar className='mt-1' />
      <SkeletonBar className='mt-1' />
    </div>
  </div>
}

export const Image: ComponentStory<typeof Skeleton> = () => {
  return <div className='w-100'>
    <SkeletonImage className="mb-1" />
    <SkeletonBar style={{ width: "80%" }} />
    <SkeletonBar className='mt-1' />
    <SkeletonBar className='mt-1' />
    <SkeletonBar className='mt-1' />
  </div>
}
